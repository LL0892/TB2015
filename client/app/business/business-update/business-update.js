'use strict';

angular.module('tbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('business-update', {
        url: '/business/update',
        templateUrl: 'app/business/business-update/business-update.html',
        controller: 'BusinessUpdateCtrl'
      });
  });