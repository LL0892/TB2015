'use strict';

angular.module('tbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('business-newPrestation', {
        url: '/business/newPrestation',
        templateUrl: 'app/business/business-newPrestation/business-newPrestation.html',
        controller: 'BusinessNewPrestationCtrl'
      });
  });