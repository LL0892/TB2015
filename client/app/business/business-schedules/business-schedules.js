'use strict';

angular.module('tbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('business-schedules', {
        url: '/business/schedules',
        templateUrl: 'app/business/business-schedules/business-schedules.html',
        controller: 'BusinessSchedulesCtrl'
      });
  });