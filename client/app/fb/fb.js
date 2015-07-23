'use strict';

angular.module('tbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('fb', {
        url: '/pagetab',
        templateUrl: 'app/fb/fb.html',
        controller: 'FbCtrl'
      })
      .state('fb.login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html'
      })
      .state('fb.signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html'
      })
      .state('fb.step1', {
        url: '/step1',
        templateUrl: 'app/rendezvous/rendezvous-step2.html'
      })      
      .state('fb.step2', {
        url: '/step2',
        templateUrl: 'app/rendezvous/rendezvous-step3.html'
      })
       .state('fb.step3', {
        url: '/step3',
        templateUrl: 'app/rendezvous/rendezvous-step4.html'
      });
  });