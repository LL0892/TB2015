'use strict';

var app = angular.module('tbApp');
  app.controller('NavbarCtrl', function ($scope, $location, Auth) {

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isStaff = Auth.isStaff;
    $scope.isBusinessCreated = Auth.isBusinessCreated;
    $scope.isStaffCreated = Auth.isStaffCreated;
    $scope.getCurrentUser = Auth.getCurrentUser();

    /*
    * Navbar site
    */
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.logout = function() {
      Auth.logout();
      $location.path('/');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    /*
    * Navbar app
    */
  });