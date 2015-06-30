'use strict';

angular.module('tbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('business-prestations', {
        url: '/business/prestations',
        templateUrl: 'app/business/business-prestations/business-prestations.html',
        controller: 'BusinessPrestationsCtrl'
      });
  });