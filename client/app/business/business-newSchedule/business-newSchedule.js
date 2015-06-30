'use strict';

angular.module('tbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('business-newSchedule', {
        url: '/business/newSchedule',
        templateUrl: 'app/business/business-newSchedule/business-newSchedule.html',
        controller: 'BusinessNewScheduleCtrl'
      });
  });