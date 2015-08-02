'use strict';

angular.module('tbApp')
.controller('RendezvousUserCtrl', function($scope, $http, $state, $stateParams, $log, Auth, User, Business, Rendezvous, localStorageService, uiCalendarConfig, CalendarService) {

	$scope.isStaff = Auth.isStaff;
	$scope.selectedIndex = -1;
	$scope.staffWasSelected = false;

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


/*	// Actions local storage
	function setItem(key, val) {
	return localStorageService.set(key, val);
	}

	function getItem(key) {
	return localStorageService.get(key);
	}

	// Si l'utilisateur reload la page
	if (!getItem('rendezvous')) {
		$state.go('rendezvousUser.step1');
	} 
	else {
		// Si l'étape 1 n'est pas finie
		if (!getItem('step1')) {
			$state.go('rendezvousUser.step1');
		} 
		else {
			$scope.prestations = getItem('step1');
			$scope.formData = getItem('rendezvous');

			// Si l'étape 2 n'est pas finie
			if (!getItem('step2')) {
				$state.go('rendezvousUser.step2');
			} else {
				$scope.staffs = getItem('step2');
				$scope.formData = getItem('rendezvous');
			}
		}
	}*/

	/* ----------------------
	* Page étape 1 (prestation)
	* ----------------------*/

	// Stocker les infos du salon
	$http.get('/api/businesses/'+$stateParams.id).then(function(data){
	  	$scope.formData.business = data.data;
	  	$scope.schedules = data.data.schedules;
		return $scope.formData;
	}).then(function(data){
		Business.getPrestations(
			$scope.formData.business._id,
			function(data){
				$scope.prestations = data.prestations;
				for (var i = $scope.prestations.length - 1; i >= 0; i--) {
				  $scope.prestations[i].open = false;
				}
				//setItem('step1', $scope.prestations);
				return $scope.prestations;
			},
			function(error){
				$log.debug(error);
			}
		);
	});


	// Inclu le bon prix à formData et render la variable pour afficher ce prix.
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

			Business.getStaffs($scope.formData.business._id,
				function(datas){
					$scope.staffs = datas.staffs;
					//setItem('step2', $scope.staffs);
					return $scope.staffs;
				},
				function(error){
          $scope.error = error;
				});
			
			$state.go('rendezvousUser.step2');

		}else{
			$scope.errorPrestation = true;
		}

	};

	/* ----------------------
	* Page étape 2 (calendrier)
	* ----------------------*/

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
		//if (weekProgression > 0) {
		//  currentWeekFirstDay = moment().add(weekProgression, 'weeks').startOf('isoWeek')._d;
		//  currentWeekLastDay = moment().add(weekProgression, 'weeks').endOf('isoWeek')._d;
		//}

		// On recule d'une semaine
		//if (weekProgression < 0) {
		//  currentWeekFirstDay = moment().subtract(1, 'weeks').startOf('isoWeek')._d;
		//  currentWeekLastDay = moment().subtract(1, 'weeks').endOf('isoWeek')._d;
		//}

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
	  $state.go('rendezvousUser.step3');
	};

	/* ----------------------
	* Page étape 3 (confirmation)
	* ----------------------*/

	// Submit page 4
	$scope.bookRendezvous = function(form){
		$log.debug(form);

	    var data = {
	      //clientId: form.user._id,
	      businessId : form.business._id,
	      prestationId : form.prestation._id,
	      staffId : form.staff._id,
	      staffName: form.staff.name,
	      startHour : form.myRendezvous[0].start,
	      endHour : form.myRendezvous[0].end
	    };

	    Rendezvous.createRendezvous(
	      data,
	      function(res){
	        $log.debug(res);
	      },
	      function(error){
	        $log.debug(error);
	      }
	    );

		//localStorageService.remove('step1', 'step2', 'rendezvous');
		$state.go('main');
	};

	$scope.cancelRendezvous = function(){
		//localStorageService.remove('step1', 'step2', 'rendezvous');
		$state.go('main');
	};

});
