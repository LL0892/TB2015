'use strict';

angular.module('tbApp')
.controller('RendezvousCtrl', function($scope, $timeout, $http, $state, $log, $compile, uiCalendarConfig, User, Auth, Business, localStorageService) {

    $scope.formData = {};
    $scope.isStaff = Auth.isStaff;
    $scope.prestations = {};
    $scope.is = false;
    $scope.selectedIndex = -1;
    $scope.eventSources = [];
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
    $scope.currentUser = Auth.getCurrentUser(function(user){
		$http.get('/api/businesses/'+user.businessId).then(function(data){
			$scope.formData.businessId = data.data._id;
			$scope.formData.businessName = data.data.name;
			$scope.formData.city = data.data.city;
			$scope.formData.canton = data.data.canton;
			$scope.formData.street = data.data.street;
			$scope.formData.zip = data.data.zip;
			$scope.formData.staffs = data.data.schedules;
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

	// inclu le bon prix à formData et refresh la page pour afficher ce prix.
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

	// quand on clique sur le staff
	$scope.selected = function (index, staff) {
	  $scope.selectedIndex = index;

	  var business = $scope.formData.business

	}

  	// Submit page 3
	$scope.getConfirm = function(form){

		console.log(form);
		$state.go('rendezvous.step4');

	}







    /* Change View */
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
    
    $scope.changeTo = 'Hungarian';
    /* event source that pulls from google.com */
    $scope.eventSource = {
            url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
            className: 'gcal-event',           // an option!
            currentTimezone: 'America/Chicago' // an option!
    };
    /* event source that contains custom events on the scope */
    $scope.events = [
      {title: 'All Day Event',start: new Date(y, m, 1)},
      {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
      {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
      {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
      {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
      {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
    ];
    /* event source that calls a function on every view switch */
    $scope.eventsF = function (start, end, timezone, callback) {
      var s = new Date(start).getTime() / 1000;
      var e = new Date(end).getTime() / 1000;
      var m = new Date(start).getMonth();
      var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
      callback(events);
    };

    $scope.calEventsExt = {
       color: '#f00',
       textColor: 'yellow',
       events: [ 
          {type:'party',title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
          {type:'party',title: 'Lunch 2',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
          {type:'party',title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
        ]
    };
    /* alert on eventClick */
    $scope.alertOnEventClick = function( date, jsEvent, view){
        $scope.alertMessage = (date.title + ' was clicked ');
    };
    /* alert on Drop */
     $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
       $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
    };
    /* alert on Resize */
    $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
       $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
    };
    /* add and removes an event source of choice */
    $scope.addRemoveEventSource = function(sources,source) {
      var canAdd = 0;
      angular.forEach(sources,function(value, key){
        if(sources[key] === source){
          sources.splice(key,1);
          canAdd = 1;
        }
      });
      if(canAdd === 0){
        sources.push(source);
      }
    };
    /* add custom event*/
    $scope.addEvent = function() {
      $scope.events.push({
        title: 'Open Sesame',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        className: ['openSesame']
      });
    };
    /* remove event */
    $scope.remove = function(index) {
      $scope.events.splice(index,1);
    };
    /* Change View */
    $scope.changeView = function(view,calendar) {
      uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
    };
    /* Change View */
    $scope.renderCalender = function(calendar) {
      if(uiCalendarConfig.calendars[calendar]){
        uiCalendarConfig.calendars[calendar].fullCalendar('render');
      }
    };
     /* Render Tooltip */
    $scope.eventRender = function( event, element, view ) { 
        element.attr({'tooltip': event.title,
                     'tooltip-append-to-body': true});
        $compile(element)($scope);
    };
    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'title',
          center: '',
          right: 'today prev,next'
        },
        eventClick: $scope.alertOnEventClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventRender: $scope.eventRender
      }
    };

    $scope.changeLang = function() {
      if($scope.changeTo === 'Hungarian'){
        $scope.uiConfig.calendar.dayNames = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
        $scope.uiConfig.calendar.dayNamesShort = ["Vas", "Hét", "Kedd", "Sze", "Csüt", "Pén", "Szo"];
        $scope.changeTo= 'English';
      } else {
        $scope.uiConfig.calendar.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        $scope.uiConfig.calendar.dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        $scope.changeTo = 'Hungarian';
      }
    };
    /* event sources array*/
    $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
    $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];













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