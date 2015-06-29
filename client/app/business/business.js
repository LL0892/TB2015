'use strict';

angular.module('tbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('business', {
        url: 'businesses',
        templateUrl: 'app/business/business.html',
        controller: 'BusinessCtrl'
      });
  });