'use strict';

angular.module('tbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('business-prestations', {
        url: '/business/prestations',
        templateUrl: 'app/business/business-prestations/business-prestations.html',
        controller: 'BusinessPrestationsCtrl',
        authenticate: true
      })
      .state('business-prestationsNewPrice', {
        url: '/business/prestations/NewPrice',
        templateUrl: 'app/business/business-prestations/business-prestations-newPrice.html',
        controller: 'BusinessPrestationsCtrl',
        authenticate: true
      })
      .state('business-rendezvous', {
        url: '/business/rendezvous',
        templateUrl: 'app/business/business-rendezvous/business-rendezvous.html',
        controller: 'BusinessRendezvousCtrl',
        authenticate: true
      })
      .state('business-schedules', {
        url: '/business/schedules',
        templateUrl: 'app/business/business-schedules/business-schedules.html',
        controller: 'BusinessSchedulesCtrl',
        authenticate: true
      })
      .state('business-show', {
        url: '/business/show',
        templateUrl: 'app/business/business-show/business-show.html',
        controller: 'BusinessShowCtrl',
        authenticate: true
      })
      .state('business-staffs', {
        url: '/business/staffs',
        templateUrl: 'app/business/business-staffs/business-staffs.html',
        controller: 'BusinessStaffsCtrl',
        authenticate: true
      })
      .state('business-update', {
        url: '/business/update',
        templateUrl: 'app/business/business-update/business-update.html',
        controller: 'BusinessUpdateCtrl',
        authenticate: true
      });
  });