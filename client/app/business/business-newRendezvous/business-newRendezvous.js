'use strict';

angular.module('tbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('business-newRendezvous', {
        url: '/business/newRendezvous',
        templateUrl: 'app/business/business-newRendezvous/business-newRendezvous.html',
        controller: 'BusinessNewRendezvousCtrl'
      });
  });