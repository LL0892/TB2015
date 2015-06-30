'use strict';

angular.module('tbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('business-show', {
        url: '/business/show',
        templateUrl: 'app/business/business-show/business-show.html',
        controller: 'BusinessShowCtrl'
      });
  });