'use strict';

angular.module('tbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('business', {
        url: '/business',
        templateUrl: 'app/business/business.html',
        controller: 'BusinessCtrl'
      })
      .state('business-newPrestation', {
        url: '/business/newPrestation',
        templateUrl: 'app/business/business-newPrestation/business-newPrestation.html',
        controller: 'BusinessNewPrestationCtrl'
      })
      .state('business-newRendezvous', {
        url: '/business/newRendezvous',
        templateUrl: 'app/business/business-newRendezvous/business-newRendezvous.html',
        controller: 'BusinessNewRendezvousCtrl'
      })
      .state('business-newSchedule', {
        url: '/business/newSchedule',
        templateUrl: 'app/business/business-newSchedule/business-newSchedule.html',
        controller: 'BusinessNewScheduleCtrl'
      })
      .state('business-newStaff', {
        url: '/business/newStaff',
        templateUrl: 'app/business/business-newStaff/business-newStaff.html',
        controller: 'BusinessNewStaffCtrl'
      })
      .state('business-prestations', {
        url: '/business/prestations',
        templateUrl: 'app/business/business-prestations/business-prestations.html',
        controller: 'BusinessPrestationsCtrl'
      })
      .state('business-prestationsNewPrice', {
        url: '/business/prestations/NewPrice',
        templateUrl: 'app/business/business-prestations/business-prestations-newPrice.html',
        controller: 'BusinessPrestationsCtrl'
      })
      .state('business-rendezvous', {
        url: '/business/rendezvous',
        templateUrl: 'app/business/business-rendezvous/business-rendezvous.html',
        controller: 'BusinessRendezvousCtrl'
      })
      .state('business-schedules', {
        url: '/business/schedules',
        templateUrl: 'app/business/business-schedules/business-schedules.html',
        controller: 'BusinessSchedulesCtrl'
      })
      .state('business-show', {
        url: '/business/show',
        templateUrl: 'app/business/business-show/business-show.html',
        controller: 'BusinessShowCtrl'
      })
      .state('business-staffs', {
        url: '/business/staffs',
        templateUrl: 'app/business/business-staffs/business-staffs.html',
        controller: 'BusinessStaffsCtrl'
      })
      .state('business-update', {
        url: '/business/update',
        templateUrl: 'app/business/business-update/business-update.html',
        controller: 'BusinessUpdateCtrl'
      });
  });