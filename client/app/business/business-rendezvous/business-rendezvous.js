'use strict';

angular.module('tbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('business-rendezvous', {
        url: '/business/rendezvous',
        templateUrl: 'app/business/business-rendezvous/business-rendezvous.html',
        controller: 'BusinessRendezvousCtrl'
      });
  });