'use strict';

angular.module('tbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      })
      .state('notifs', {
        url: '/notifs',
        templateUrl: 'app/account/notifs/notifs.html',
        controller: 'NotifsCtrl',
        authenticate: true
      })
      .state('createBusiness', {
        url: '/createBusiness',
        templateUrl: 'app/account/business/business.html',
        controller: 'BusinessCtrl',
        authenticate: true
      })
      .state('createStaff', {
        url: '/createStaff',
        templateUrl: 'app/account/staff/staff.html',
        controller: 'StaffCtrl',
        authenticate: true
      });
  });