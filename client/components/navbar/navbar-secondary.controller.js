'use strict';

angular.module('tbApp')
  .controller('NavbarSecondryCtrl', function ($scope, $location, $timeout) {

    // bouton salon
    $scope.status1 = {
      isopen: false
    };
    
    // bouton prestation
    $scope.status2 = {
      isopen: false
    };

    // bouton horaires
    $scope.status3 = {
      isopen: false
    };

    // bouton staff
    $scope.status4 = {
      isopen: false
    };

    // bouton rendezvous
    $scope.status5 = {
      isopen: false
    };

    $scope.toggleDropdown = function(status) {
      //$event.preventDefault();
      //$event.stopPropagation();
      status.isopen = !status.isopen;
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

  });