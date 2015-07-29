'use strict';

angular.module('tbApp')
.controller('FbCtrl', function($scope, $log, $http, $cookies, $state, $timeout, Auth, Urls, Business, AppStorage, CalendarService) {
	
	/*********
	* Init
	**********/

	$scope.isLoggedIn = Auth.isLoggedIn;

	// Données de formulaires
	$scope.formData = {};
	$scope.formData.user = Auth.getCurrentUser();
	$scope.prestations = {};
	$scope.schedules = {};

	// Données de calendriers
	$scope.eventSources = [];
	$scope.events = [];
	$scope.myRendezvous = [];
	$scope.businessHours = [];

	// Variables de semaine
	$scope.currentWeek = {};
	$scope.currentWeek.firstDay = '';
	$scope.currentWeek.lastDay = '';


	if ($cookies.get('page-id')) {
		AppStorage.set($cookies.get('page-id'));
		//$cookies.remove('page-id');
	}
	


	$log.debug('fb call from page id '+ AppStorage.get());

	// Créer le cookie en 'developement'
	$scope.fb = function(){
		$http.post(Urls.api + 'fb/rendezvous',{
			signed_request: '9HOX6j2CfLglBxXI2wr11zTmix3VJWx8xI7C5sM_qyo.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImV4cGlyZXMiOjE0Mzc0ODM2MDAsImlzc3VlZF9hdCI6MTQzNzQ3NzA5NSwib2F1dGhfdG9rZW4iOiJDQUFVWkE2U1hhcmVNQkFFd3FWRFpBQU1zc3hOUzlPWkFEeFkybDZPM0dTeW1uMndyUDlGa0h0WVF2dkVlMmZOajh0aXJRNDFKU1NaQnZGanJESVhLWHFzUmVHSGg1RXFaQWM2eTVuZ2t6ek5ZcDJFVXlTNW1TRTFYWkJiZFpCU0NOWkJiNmZxeWo2MzY5UkNHWkFSY1pDY3d3RnRYSGs0WDV6UFlkcUNDb3l5M1NQbVpDUDhvUTl1SlBLRkxlNEhpaWg2dzg5d3NRU0dmV0FHemNzeE9MZFNYb1d4IiwicGFnZSI6eyJpZCI6Ijg4NDk2MDQxODIyNTExNyIsImFkbWluIjp0cnVlfSwidXNlciI6eyJjb3VudHJ5IjoiY2giLCJsb2NhbGUiOiJmcl9GUiIsImFnZSI6eyJtaW4iOjIxfX0sInVzZXJfaWQiOiIxMDIwNzMyMDY1MTA0MDQ0MCJ9'
		}).success(function(){

		}).error(function(){

		});
	};



	/********************
	* Page 1 (prestation)
	*********************/

	if (AppStorage.get()) {

		var request = {
			fbPageId : AppStorage.get()
		};

		// Va chercher le salon
		Business.searchByPageId(
			request,
			function(data){
				$scope.formData.business = data;
				$scope.schedules = data.schedules;

				// Va chercher les prestations du salon
				Business.getPrestations(
					$scope.formData.business._id,
					function(data){
						$scope.prestations = data.prestations;
			        	for (var i = $scope.prestations.length - 1; i >= 0; i--) {
			        	  $scope.prestations[i].open = false;
			        	}
			        	return $scope.prestations;
					},
					function(error){
						$log.debug(error);
					}
				);
			},
			function(error){
				$log.debug(error);
			}
		); // fin Business.searchByPageId();
	}



	// Inclu le bon prix à formData et affiche ce prix.
	$scope.getPrice = function(prestation, user){
		$scope.formData.prestation = prestation;
		var tab = prestation.prices;
		for (var i = tab.length - 1; i >= 0; i--) {
			if (user.age < tab[i].ageHighLimit && user.age > tab[i].ageLowLimit) {
				if (user.gender === tab[i].gender || tab[i].gender === 'mixte') {
					$scope.formData.prestation.prices = tab[i];
					$scope.$apply;
				}
			}
		}
		$log.debug($scope.formData);
		return $scope.formData;
	};

	// Submit page 1
	$scope.getCalendar = function(form){
		if (form.prestation !== undefined) {

			// sauvegarde le formulaire dans le local storage
			//setItem('rendezvous', form);

			Business.getStaffs(
				$scope.formData.business._id,
				function(datas){
					$scope.staffs = datas.staffs;
					//setItem('step2', $scope.staffs);
					return $scope.staffs;
				},
				function(error){
          			$scope.error = error;
				});

			$state.go('fb.step2');
		}else{
			$scope.errorPrestation = true;
		}

	};



	/********************
	* Page 2 (calendar/staff)
	*********************/
	// quand on clique sur le staff, change la classe et charge ses rendez-vous
	$scope.selected = function (index, staff) {
    	$scope.staffWasSelected = true;
		$scope.selectedIndex = index;
    	$scope.selectedStaff = staff._id;

    	$scope.formData.staff = staff;

	    getFirstAndLastDayWeek(0);
	    var request = {
	      staffId: staff._id,
	      startDay: $scope.currentWeek.firstDay,
	      endDay: $scope.currentWeek.lastDay
	    };

	    Business.searchRendezvous(
	        $scope.formData.business._id,
	        request,
	      function (res){
	        //$log.debug(res);
	        var array = res.rendezvous;

	        $scope.events = CalendarService.createRendezvousTakenEvents($scope.events, array);            
	        $scope.businessHours = CalendarService.createBusinessHoursEvents($scope.businessHours, $scope.schedules, $scope.currentWeek.firstDay);
	        $scope.myRendezvous = CalendarService.createMyRendezvousEvent($scope.myRendezvous, new Date(), $scope.formData.prestation);

	        $log.debug($scope.events);
	        $log.debug($scope.businessHours);
	        $log.debug($scope.myRendezvous);
	      },

	      function(error){
	        $scope.error = error;
	      });
	};


	/* Calcul dynamique de la date de début de semaine et de fin
	 * weekProgression : un nombre indiquant si on avance ou recule dans le calendrier
	 * return $scope.currentweek -> le jour de début, et de fin, de la semaine voulue
	*/
	function getFirstAndLastDayWeek (weekProgression){
		var currentWeekFirstDay = $scope.currentWeek.firstDay;
		var currentWeekLastDay = $scope.currentWeek.lastDay;

	    // appel initial
	    if (weekProgression === 0 || weekProgression === undefined) {
	      currentWeekFirstDay = moment().startOf('isoWeek')._d;
	      currentWeekLastDay = moment().endOf('isoWeek')._d;
	    }

	    // On avance d'une semaine
	    if (weekProgression > 0) {
	      currentWeekFirstDay = moment().add(weekProgression, 'weeks').startOf('isoWeek')._d;
	      currentWeekLastDay = moment().add(weekProgression, 'weeks').endOf('isoWeek')._d;
	    }

	    // On recule d'une semaine
	    if (weekProgression < 0) {
	      currentWeekFirstDay = moment().subtract(1, 'weeks').startOf('isoWeek')._d;
	      currentWeekLastDay = moment().subtract(1, 'weeks').endOf('isoWeek')._d;
	    }

	    $scope.currentWeek.firstDay = currentWeekFirstDay;
	    $scope.currentWeek.lastDay = currentWeekLastDay;
	    return $scope.currentWeek;
	}

	// Current date variables
	//var date = new Date();
	//var d = date.getDate();
	//var m = date.getMonth();
	//var y = date.getFullYear();
	//var h = date.getHours() + ':00:00';
	var h = '7:00:00';

	/* config object */
	$scope.uiConfig = {
		calendar:{
		 height: 550,
		 editable: true,
		 lang: 'fr',
		 header:{
			left: 'title',
			center: '',
			right: 'today prev,next'
		 },
		 defaultView: 'agendaWeek',
		 firstDay: 1,
		 timezone: 'local',
		 timeFormat: 'h:mm',
		 allDaySlot: false,
		 slotDuration: '00:10:00',
		 scrollTime : h,
		 eventStartEditable: true,
		 eventDurationEditable: false,
		 eventClick: function (calEvent, jsEvent, view) {
		   $log.debug('clicked');
		 },
		 eventDrop: function (event, delta, revertFunc, jsEvent, ui, view) {
		   $scope.myRendezvous[0].start = event._start._d;
		   $scope.myRendezvous[0].end = event._end._d;
		 },
		 viewRender: function (view, element){
		  if ($scope.staffWasSelected) {
		     //$log.info(view);
		     var startDay = moment(view.start._d).subtract(2, 'hours')._d;
		     var endDay = moment(view.end._d).subtract(2, 'hours')._d;

		    var request = {
		       staffId: $scope.selectedStaff,
		       startDay: startDay,
		       endDay: endDay
		     };

		    Business.searchRendezvous(
		       $scope.formData.business._id,
		       request,
		       function (res){
		         //$log.debug(res);
		         var array = res.rendezvous;

		        $scope.events = CalendarService.createRendezvousTakenEvents($scope.events, array);            
		         $scope.businessHours = CalendarService.createBusinessHoursEvents($scope.businessHours, $scope.schedules, startDay);
		         $scope.myRendezvous = CalendarService.createMyRendezvousEvent($scope.myRendezvous, startDay, $scope.formData.prestation);

		        $log.debug($scope.events);
		         $log.debug($scope.businessHours);
		         $log.debug($scope.myRendezvous);
		       },

		      function(error){
		         $scope.error = error;
		       });

		  } else {
		     $log.debug('rien à afficher.');
		   }
		 }
		}
	};

	/* event sources array*/
	$scope.eventSources = [$scope.events, $scope.myRendezvous, $scope.businessHours];

	// Submit page 2
	$scope.getConfirm = function(rendezvous){
	  $scope.formData.myRendezvous = rendezvous;
	  //setItem('rendezvous', $scope.formData);	  
	  $log.debug($scope.formData);	  
	  $state.go('fb.step3');
	};

	/********************
	* Page 3 (confirmation)
	*********************/
	// Submit page 3
	$scope.bookRendezvous = function(form){
		$log.debug(form);

	    var data = {
	      clientId: form.user._id,
	      prestationId : form.prestation._id,
	      staffId : form.staff._id,
	      staffName: form.staff.name,
	      startHour : form.myRendezvous[0].start,
	      endHour : form.myRendezvous[0].end
	    };

	    Business.createRendezvous(
	      form.business._id,
	      data,
	      function(res){
	        $log.debug(res);
	      },
	      function(error){
	        $log.debug(error);
	      }
	    );

		$state.go('fb-rendezvous');
	};

	$scope.cancelRendezvous = function(){
		$state.go('fb-rendezvous');
	};

})



// stockage interne de l'app
.factory('AppStorage', function(){
	var pageId = '';
	var business = {};

	return{
		get : function(){
			return pageId;
		},
		set : function(id){
			pageId = id;
		},
		delete : function(){
			pageId = undefined;
		}
	};
});
