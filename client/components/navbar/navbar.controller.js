'use strict';

angular.module('tbApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isStaff = Auth.isStaff;
    $scope.getCurrentUser = Auth.getCurrentUser;

    //Auth.getCurrentUser = function(user){
    //  $scope.isStaff = user.roles.indexOf('staff');
    //  console.log($scope.isStaff);
    //  $scope.isLoggedIn = user.hasOwnPreperty('roles');
    //  console.log($scope.isLoggedIn);
    //}

    $scope.logout = function() {
      Auth.logout();
      $location.path('/');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });