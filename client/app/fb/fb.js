'use strict';

angular.module('tbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('fb-login', {
        url: '/fb/login',
        templateUrl: 'app/fb/account/login.html',
        controller: 'FbLoginCtrl'
      })
      .state('fb-signup', {
        url: '/fb/signup',
        templateUrl: 'app/fb/account/signup.html',
        controller: 'FbSignupCtrl'
      })
      .state('fb', {
        url: '/pagetab',
        templateUrl: 'app/fb/fb.html',
        controller: 'FbCtrl'
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