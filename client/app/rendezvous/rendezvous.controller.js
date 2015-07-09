'use strict';

angular.module('tbApp')
.controller('RendezvousCtrl', function($scope, $timeout, $http, $state, $log, $compile, Auth, User, Business, Staff, localStorageService, uiCalendarConfig) {

    $scope.formData = {};
    $scope.isStaff = Auth.isStaff;
    $scope.prestations = {};
    $scope.is = false;
    $scope.selectedIndex = -1;
    $scope.eventSources = [];
    $scope.events = [];
    $scope.schedules = [];
    $scope.minDate = Date.now();

    // Si l'utilisateur reload la page
    if (!getItem('rendezvous')) {
    	$state.go('rendezvous.step1');
    } 
    else {
    	// si l'étape 1 n'est pas finie
    	if (!getItem('step1')) {
    		$state.go('rendezvous.step1');
    	} 
    	else {
    		$scope.prestations = getItem('step1');
    		$scope.formData = getItem('rendezvous');
    		$scope.$apply;

    		// si l'étape 2 n'est pas finie
    		if (!getItem('step2')) {
    			$state.go('rendezvous.step2');
    		} else {
    			$scope.staffs = getItem('step2');
    			$scope.formData = getItem('rendezvous');
    			$scope.$apply;
    		}
    	}
    }


	/*if ($scope.formData = {}) {
    	$state.go('rendezvous.step1');
    };*/

    // Actions local storage
    function setItem(key, val) {
   		return localStorageService.set(key, val);
  	}

  	function getItem(key) {
  		return localStorageService.get(key);
  	}

	function clearItems() {
		return localStorageService.clearAll();
	}

    // Stocker les infos du salon
    Auth.getCurrentUser(function(user){
  		$http.get('/api/businesses/'+user.businessId).then(function(data){
  			$scope.formData.businessId = data.data._id;
  			$scope.formData.businessName = data.data.name;
  			$scope.formData.city = data.data.city;
  			$scope.formData.canton = data.data.canton;
  			$scope.formData.street = data.data.street;
  			$scope.formData.zip = data.data.zip;
  			$scope.formData.staffs = data.data.schedules;
        $scope.schedules = data.data.schedules;
  			return $scope.formData;
  		});
    });

    // Obtenir la liste des utilisateurs
	$http.get('/api/users').then(function(datas){
		$scope.users = datas.data;
		return $scope.users;
	});









	// Submit page 1
	$scope.getPrestations = function(form){
		//$log.debug(form);

		// If user is chosen
		if (form.user !== undefined) {
			Business.getPrestations(
				form.businessId,
				function(data){
					$scope.prestations = data.prestations;
					setItem('step1', $scope.prestations);
					return $scope.prestations;
				},
				function(error){

				});
			// sauvegarde le formulaire dans le local storage
			setItem('rendezvous', form);

			$state.go('rendezvous.step2');
		}
		// Send error message
		else {
			$scope.errorUser = true;
		}
	};











	// inclu le bon prix à formData et render la variable pour afficher ce prix.
	$scope.getPrice = function(prestation, user){

		$scope.formData.prestation = prestation;
		
		var tab = prestation.prices;
		for (var i = tab.length - 1; i >= 0; i--) {
			if (user.age < tab[i].ageHighLimit && user.age > tab[i].ageLowLimit) {
				if (user.gender === tab[i].gender || tab[i].gender === 'mixte') {
					$log.debug('le juste prix');
					$scope.formData.prestation.prices = tab[i];
					$scope.$apply;
				}else{
					$log.debug('nope2');
				}
			}else{
				$log.debug('nope1');
			}
		};
		$log.debug($scope.formData);
		return $scope.formData;
	}

	// Submit page 2
	$scope.getCalendar = function(form){

		if (form.prestation !== undefined) {

			// sauvegarde le formulaire dans le local storage
			setItem('rendezvous', form);

			Business.getStaffs($scope.formData.businessId,
				function(datas){
					$scope.staffs = datas.staffs;
					setItem('step2', $scope.staffs);
					return $scope.staffs;
				},
				function(error){

				})
			
			$state.go('rendezvous.step3');

		}else{
			$scope.errorPrestation = true;
		}

	}










	// quand on clique sur le staff, change la classe et charge ses rendez-vous
	$scope.selected = function (index, staff) {
	  $scope.selectedIndex = index;
    $scope.selectedStaff = staff._id;

	  //var business = $scope.formData.business
    
    Staff.getRendezvous(
      staff._id,
      function(data){
        var data = data;

        var rendezvous = [];
        var startHour = '';
        var endHour = '';
        for (var i = data.length - 1; i >= 0; i--) {
          startHour = data[i].startHour;
          startHour = moment(startHour).format('YYYY[-]MM[-]DD[T]HH[:]mm[:]ss');
          endHour = data[i].endHour;
          endHour = moment(endHour).format('YYYY[-]MM[-]DD[T]HH[:]mm[:]ss');

          rendezvous = {
            id:    'blocked',
            start: startHour,
            end: endHour,
            overlap: false,
            rendering: 'background',
            color: 'red'
          } 
          
          $scope.events.push(rendezvous);
        };
        console.log($scope.events);
      },
      function(error){

      });
	}

  	// Submit page 3
	$scope.getConfirm = function(form){

		console.log(form);
		$state.go('rendezvous.step4');

	}

  // Change View
  $scope.renderCalender = function (calendar) {
      if (uiCalendarConfig.calendars[calendar]) {
          console.log('.', uiCalendarConfig.calendars[calendar]);
          uiCalendarConfig.calendars[calendar].fullCalendar('render');
      }
  };

  $timeout(function () {
      $scope.renderCalender('calendar');
  }, 1000);


  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  var h = date.getHours() + ":00:00";

  $scope.myRendevous = [
    {
      title : 'Votre rendez-vous',
      start : '2015-07-09T16:30:00',
      end    : '2015-07-09T17:30:00',
      color: 'green'
    }
  ];


  /* config object */
  $scope.uiConfig = {
    calendar:{
      height: 550,
      editable: true,
      lang: 'fr',
      header:{
        left: 'agendaWeek,agendaDay',
        center: 'title',
        right: 'today prev,next'
      },
      defaultView: 'agendaWeek',
      timezone: 'local',
      timeFormat: 'h:mm',
      allDaySlot: false,
      scrollTime : h,
      eventStartEditable: true,
      eventDurationEditable: false,
      eventRender: $scope.eventRender,
      eventOverlap : function(){

      }
    }
  };

  /* event sources array*/
  $scope.eventSources = [$scope.events, $scope.myRendevous];




	// Submit page 4
	$scope.bookRendezvous = function(form){
		$log.debug(form);
		// save le rendezvous
		localStorageService.remove('step1', 'step2', 'rendezvous');
		$state.go('main');
	}

	$scope.cancelRendezvous = function(){
		localStorageService.remove('step1', 'step2', 'rendezvous');
		$state.go('main');
	}

});