'use strict';

angular.module('tbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('businessProfile', {
      	url: '/business/:id',
      	templateUrl: 'app/business/business-show/business-show.html',
      	controller: 'BusinessProfileCtrl'
      });
  });