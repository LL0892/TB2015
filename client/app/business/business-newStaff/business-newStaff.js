'use strict';

angular.module('tbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('business-newStaff', {
        url: '/business/newStaff',
        templateUrl: 'app/business/business-newStaff/business-newStaff.html',
        controller: 'BusinessNewStaffCtrl'
      });
  });