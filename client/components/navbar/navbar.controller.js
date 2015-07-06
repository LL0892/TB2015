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
    $scope.isManager = Auth.isManager;
    $scope.isBusinessCreated = Auth.isBusinessCreated;
    $scope.isStaffCreated = Auth.isStaffCreated;
    $scope.getCurrentUser = Auth.getCurrentUser;



    $scope.canCreateBusiness = function(){
      if ($scope.isManager === true && $scope.isBusinessCreated === false) {
        return true;
      } else{
        return false;
      }
    };

    $scope.canCreateStaff = function(){
      if ($scope.isStaff === true && $scope.isStaffCreated === false) {
        return true;
      } else {
        return false;
      }
    }


    $scope.logout = function() {
      Auth.logout();
      $location.path('/');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });