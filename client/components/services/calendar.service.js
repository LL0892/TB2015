'use strict';

angular.module('tbApp')
  .factory('CalendarService', function(uiCalendarConfig, localStorageService, $log){

    /******************
    * Private functions
    *******************/


     /* 
     * Rend une date lisible de fullcalendar
     * @param : date -> une date
     */
    function parseDate(date){
      var parsedDate = moment(date).format('YYYY[-]MM[-]DD[T]HH[:]mm[:]ss');
      return parsedDate;
    }

    function parseScheduleHours(string){
      var hour = String(string);
      hour = hour.substring(0, 2);
      if (hour.charAt(0) === '0') {
        hour = hour.substring(1);
      }
      hour = Number(hour);
      //$log.debug(hour);
      return hour;
    }

    /*****************
    * Public functions
    ******************/
    return {
      initCalendar: function(){

      },

     /* 
     * Créé des évènements aux rendez-vous déjà prit
     * @param : scope -> une liste d'évènements existant
     *          array -> un tableau de rendez-vous déjà prit
     * @return: scopeEvents -> une liste d'évènement déjà prit
     */
      createRendezvousTakenEvents: function(scope, array){
        var scopeEvents = scope;
        scopeEvents.splice(0, scopeEvents.length);
        var data = array;

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
          scopeEvents.push(rendezvous);
        }
        return scopeEvents;
      },

     /* 
     * Genère les evènements de background pour les heures d'ouvertures
     * @param : schedules -> les horaires d'un salon
     *          scopeEvents -> le scope qui va afficher les events dans le calendrier
     *          firstDayDate -> une date qui correspond à la première date de la semaine
     * @return: scopeBusinessHours -> une liste d'évènements qui bloque les plage hors-horaire
     */
      createBusinessHoursEvents: function(scopeEvents, schedules, firstDayDate){
        //$log.info(firstDayDate);
        var scopeBusinessHours = scopeEvents;
        var scopeSchedules = schedules;

        scopeBusinessHours.splice(0, scopeBusinessHours.length);
        var day = firstDayDate;
        var businessHour = {};
        var startHour = '';
        var endHour = '';

        for (var i = 0; i <= scopeSchedules.length - 1; i++) {

          // On créer uniquement l'évènement les jours d'ouverture
          if (scopeSchedules[i].workingDay === true) {

            // Première boucle, on créé l'event directement
            if (i === 0) {
              // de minuit à l'ouverture
              var hoursToStart = 0;
              var hourToFinish = parseScheduleHours(scopeSchedules[i].startHour);
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
              scopeBusinessHours.push(businessHour);

              // de la fermeture au jour suivant (ouverture)
              var dayAfter = moment(day).add(1, 'days')._d;
              hoursToStart = parseScheduleHours(scopeSchedules[i].endHour);
              hourToFinish = parseScheduleHours(scopeSchedules[i+1].startHour);
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
              scopeBusinessHours.push(businessHour);
            }

            // Boucles suivantes, on créé l'event après avoir ajouté un jour
            else {
              day = moment(day).add(1, 'days')._d;

              // de la fermeture au jour suivant (ouverture)
              dayAfter = moment(day).add(1, 'days')._d;
              hoursToStart = parseScheduleHours(scopeSchedules[i].endHour);
              hourToFinish = parseScheduleHours(scopeSchedules[i+1].startHour);
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
              scopeBusinessHours.push(businessHour);
            }

            if (i === (scopeSchedules.length-1)) {
              // de la fermeture à miniut
              hoursToStart = parseScheduleHours(scopeSchedules[i].endHour);
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
              scopeBusinessHours.push(businessHour);
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
            scopeBusinessHours.push(businessHour);
          }
        }
        return scopeBusinessHours;
      },

     /* 
     * Genère l'évènement correspondant à son rendez-vous
     * @param : scope -> le scope contenant son rendez-vous
     *          date -> la date d'initialisation du rendez-vous
     *          prestation -> la prestation du rendez-vous
     * @return: scopeMyRendezvous -> son rendez-vous
     */
      createMyRendezvousEvent: function(scope, date, prestation){
        var scopeMyRendezvous = scope;
        if (scopeMyRendezvous.length > 0) {
          scopeMyRendezvous.splice(0, 1);
          //$log.debug('first element removed');
        }

        var date = date;
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        var prestationDuration = prestation.duration;
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

        scopeMyRendezvous.push(rendezvousToBook);
        return scopeMyRendezvous;
      }
    };
  });