'use strict';

angular.module('tbApp')
.controller('RendezvousCtrl', function($scope, $timeout, $http, $state, $log, $compile, Auth, User, Business, Staff, localStorageService, uiCalendarConfig) {

  $scope.isStaff = Auth.isStaff;
  $scope.is = false;
  $scope.selectedIndex = -1;
  $scope.minDate = Date.now();

  // Données de formulaires
  $scope.formData = {};
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

  // Actions local storage
  function setItem(key, val) {
    return localStorageService.set(key, val);
  }

  function getItem(key) {
    return localStorageService.get(key);
  }



/* if ($state.is('rendezvous.step1')) {
    // clear local storage
  };*/

  // Si l'utilisateur reload la page
  if (!getItem('rendezvous')) {
  	$state.go('rendezvous.step1');
  } 
  else {
  	// Si l'étape 1 n'est pas finie
  	if (!getItem('step1')) {
  		$state.go('rendezvous.step1');
  	} 
  	else {
  		$scope.prestations = getItem('step1');
  		$scope.formData = getItem('rendezvous');
  		//$scope.$apply;

  		// Si l'étape 2 n'est pas finie
  		if (!getItem('step2')) {
  			$state.go('rendezvous.step2');
  		} else {
  			$scope.staffs = getItem('step2');
  			$scope.formData = getItem('rendezvous');
  			//$scope.$apply;
  		}
  	}
  }


/*if ($scope.formData = {}) {
  	$state.go('rendezvous.step1');
  };*/


  // Stocker les infos du salon
  Auth.getCurrentUser(function(user){
		$http.get('/api/businesses/'+user.businessId).then(function(data){
			$scope.formData.businessId = data.data._id;
			$scope.formData.businessName = data.data.name;
			$scope.formData.city = data.data.city;
			$scope.formData.canton = data.data.canton;
			$scope.formData.street = data.data.street;
			$scope.formData.zip = data.data.zip;
			//$scope.formData.staffs = data.data.schedules;
      $scope.schedules = data.data.schedules;
			return $scope.formData;
		});
  });

  // Obtenir la liste des utilisateurs
	$http.get('/api/users').then(function(datas){
		$scope.users = datas.data;
		return $scope.users;
	});



/* ----------------------
* Page étape 1 (client)
* ----------------------*/

	// Submit page 1
	$scope.getPrestations = function(form){
		//$log.debug(form);

		// If user is chosen
		if (form.user !== undefined) {
			Business.getPrestations(
				form.businessId,
				function(data){
					$scope.prestations = data.prestations;
          for (var i = $scope.prestations.length - 1; i >= 0; i--) {
            $scope.prestations[i].open = false;
          };

					setItem('step1', $scope.prestations);
					return $scope.prestations;
				},
				function(error){
          $scope.error = error;
				});
			// Sauvegarde le formulaire dans le local storage
			setItem('rendezvous', form);

			$state.go('rendezvous.step2');
		}
		// Send error message
		else {
			$scope.errorUser = true;
		}
	};



/* ----------------------
* Page étape 2 (prestation)
* ----------------------*/

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
          $scope.error = error;
				});
			
			$state.go('rendezvous.step3');

		}else{
			$scope.errorPrestation = true;
		}

	};



/* ----------------------
* Page étape 3 (calendrier)
* ----------------------*/

	// quand on clique sur le staff, change la classe et charge ses rendez-vous
	$scope.selected = function (index, staff) {
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
        $scope.formData.businessId,
        request,
      function (res){
        $log.debug(res);
        var data = res;

        var rendezvous = [];
        var startHour = '';
        var endHour = '';
        for (var i = data.length - 1; i >= 0; i--) {
          // Converstion pour des dates compatibles avec le calendrier
          startHour = data[i].startHour;
          startHour = parseDate(startHour);
          endHour = data[i].endHour;
          endHour = parseDate(endHour);

          // Création de l'event background
          rendezvous = {
            id:    'blocked',
            start: startHour,
            end: endHour,
            overlap: false,
            rendering: 'background',
            color: 'red'
          }; 
          $scope.events.push(rendezvous);
        }

        //$log.debug($scope.events);
        
        createBusinessHoursCustomEvents($scope.currentWeek.firstDay);
        generateMyRendezvous(new Date());

        $log.debug($scope.myRendezvous);
      },

      function(error){
        $scope.error = error;
      });
	};





  // Reformate la date pour rendre compatible par FullCalendar
  function parseDate (date){
    var parsedDate = moment(date).format('YYYY[-]MM[-]DD[T]HH[:]mm[:]ss');
    return parsedDate;
  }

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

    //$log.debug(currentWeekFirstDay._d);
    //$log.debug(currentWeekLastDay._d);
    $scope.currentWeek.firstDay = currentWeekFirstDay;
    $scope.currentWeek.lastDay = currentWeekLastDay;
    return $scope.currentWeek;
  }

  // Genère les evènements de background pour les heures d'ouvertures
  // firstDayDate : une date qui correspond à la première date de la semaine
  function createBusinessHoursCustomEvents (firstDayDate){
    var day = firstDayDate;
    var businessHour = {};
    var startHour = '';
    var endHour = '';

    for (var i = 0; i <= $scope.schedules.length - 1; i++) {

      // On créer uniquement l'évènement les jours d'ouverture
      if ($scope.schedules[i].workingDay === true) {

        // Première boucle, on créé l'event directement
        if (i === 0) {
          // de minuit à l'ouverture
          var hoursToStart = 0;
          var hourToFinish = parseScheduleHours($scope.schedules[i].startHour);
          startHour = day;
          endHour = moment(day).add(hourToFinish, 'hours')._d;
          startHour = parseDate(startHour);
          endHour = parseDate(endHour);

          businessHour = {
            id:    'closed',
            start: startHour,
            end: endHour,
            overlap: false,
            rendering: 'background',
            color: 'grey'
          };
          $scope.businessHours.push(businessHour);

          // de la fermeture au jour suivant (ouverture)
          var dayAfter = moment(day).add(1, 'days')._d;
          hoursToStart = parseScheduleHours($scope.schedules[i].endHour);
          hourToFinish = parseScheduleHours($scope.schedules[i+1].startHour);
          startHour = moment(day).add(hoursToStart, 'hours')._d;
          endHour = moment(dayAfter).add(hourToFinish, 'hours')._d;
          startHour = parseDate(startHour);
          endHour = parseDate(endHour);

          businessHour = {
            id:    'closed',
            start: startHour,
            end: endHour,
            overlap: false,
            rendering: 'background',
            color: 'grey'
          };
          $scope.businessHours.push(businessHour);
        }

        // Boucles suivantes, on créé l'event après avoir ajouté un jour
        else {
          day = moment(day).add(1, 'days')._d;

          // de la fermeture au jour suivant (ouverture)
          dayAfter = moment(day).add(1, 'days')._d;
          hoursToStart = parseScheduleHours($scope.schedules[i].endHour);
          hourToFinish = parseScheduleHours($scope.schedules[i+1].startHour);
          startHour = moment(day).add(hoursToStart, 'hours')._d;
          endHour = moment(dayAfter).add(hourToFinish, 'hours')._d;
          startHour = parseDate(startHour);
          endHour = parseDate(endHour);

          businessHour = {
            id:    'closed',
            start: startHour,
            end: endHour,
            overlap: false,
            rendering: 'background',
            color: 'grey'
          };
          $scope.businessHours.push(businessHour);
        }

        if (i === ($scope.schedules.length-1)) {
          // de la fermeture à miniut
          hoursToStart = parseScheduleHours($scope.schedules[i].endHour);
          hourToFinish = 0;
          startHour = moment(day).add(hourToFinish, 'hours')._d;
          endHour = moment(day).endOf('day')._d;
          startHour = parseDate(startHour);
          endHour = parseDate(endHour);

          businessHour = {
            id:    'closed',
            start: startHour,
            end: endHour,
            overlap: false,
            rendering: 'background',
            color: 'grey'
          };
          $scope.businessHours.push(businessHour);
        }

      } 
      // les jours fermé, créer des events full-day
      else {
        day = moment(day).add(1, 'days')._d;

        startHour = day;
        endHour = moment(day).endOf('day')._d;
        startHour = parseDate(startHour);
        endHour = parseDate(endHour);

        businessHour = {
          id:    'closed',
          start: startHour,
          end: endHour,
          overlap: false,
          rendering: 'background',
          color: 'grey'
        };
        $scope.businessHours.push(businessHour);
      }
    }

  }

  function parseScheduleHours (string){
    var hour = String(string);
    hour = hour.substring(0, 2);
    if (hour.charAt(0) === '0') {
      hour = hour.substring(1);
    }
    hour = Number(hour);
    //$log.debug(hour);
    return hour;
  }

  // Current date variables
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();
  //var h = date.getHours() + ':00:00';
  var h = '7:00:00';

  // Generate an event with the prestation duration and the default hour
  function generateMyRendezvous(date){

    if ($scope.myRendezvous.length > 0) {
      $scope.myRendezvous.splice(0, 1);
      $log.debug('first element removed');
    }

    var date = date;
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var prestationDuration = getItem('rendezvous').prestation.duration;
    var defaultHour = 8;
    var finalHour = 8;
    var finalMinutes = '';
  
    for (var i = prestationDuration; i >= 0; i -= 60) {
      if (i >= 60) {
        finalHour++;
      }
      if (i < 60) {
        finalMinutes = i;
      }
    }

  // my rendez-vous
    var rendezvousToBook = {
        id: 'myRdv',
        title : 'Votre rendez-vous',
        start : new Date(y, m, d, defaultHour, 0),
        end    : new Date(y, m, d, finalHour, finalMinutes),
        color: 'green'
      };

    $scope.myRendezvous.push(rendezvousToBook);
  }


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
        $scope.myRendezvous[0].start = event._start._d
        $scope.myRendezvous[0].end = event._end._d
      },
      viewRender: function (view, element){

        var startDay = view.start._d;
        var endDay = view.end._d;

        var request = {
          staffId: $scope.selectedStaff,
          startDay: startDay,
          endDay: endDay
        };

        Business.searchRendezvous(
          $scope.formData.businessId,
          request,
          function (res){
            $log.debug(res);
            var data = res;

            var rendezvous = [];
            var startHour = '';
            var endHour = '';
            for (var i = data.length - 1; i >= 0; i--) {
              // Converstion pour des dates compatibles avec le calendrier
              startHour = data[i].startHour;
              startHour = parseDate(startHour);
              endHour = data[i].endHour;
              endHour = parseDate(endHour);

              // Création de l'event background
              rendezvous = {
                id:    'blocked',
                start: startHour,
                end: endHour,
                overlap: false,
                rendering: 'background',
                color: 'red'
              }; 
              $scope.events.push(rendezvous);
            }

            //$log.debug($scope.events);
            
            createBusinessHoursCustomEvents(startDay);
            generateMyRendezvous(startDay);

            $log.debug($scope.myRendezvous);
            //$log.debug($scope.events);
            //$log.debug($scope.businessHours);
          },

          function(error){
            $scope.error = error;
          });
      }

    }
  };


  // Change View
  $scope.renderCalender = function (calendar) {
      if (uiCalendarConfig.calendars[calendar]) {
          $log.debug('.', uiCalendarConfig.calendars[calendar]);
          uiCalendarConfig.calendars[calendar].fullCalendar('render');
      }
  };

  $timeout(function () {
      $scope.renderCalender('calendar');
  }, 1000);


  /* event sources array*/
  $scope.eventSources = [$scope.events, $scope.myRendezvous, $scope.businessHours];

  // Submit page 3
  $scope.getConfirm = function(form, rendezvous){
    form.myRendezvous = rendezvous;
    $scope.formData = form;
    setItem('rendezvous', form);

    $log.debug(form);
    $state.go('rendezvous.step4');
  };

/* ----------------------
* Page étape 4 (confirmation)
* ----------------------*/

	// Submit page 4
	$scope.bookRendezvous = function(form){
		$log.debug(form);
		// save le rendezvous
		localStorageService.remove('step1', 'step2', 'rendezvous');
		$state.go('main');
	};

	$scope.cancelRendezvous = function(){
		localStorageService.remove('step1', 'step2', 'rendezvous');
		$state.go('main');
	};

});