'use strict';

angular.module('tbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('business-staffs', {
        url: '/business/staffs',
        templateUrl: 'app/business/business-staffs/business-staffs.html',
        controller: 'BusinessStaffsCtrl'
      });
  });