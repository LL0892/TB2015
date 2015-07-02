'use strict';

var app = angular.module('tbApp');
  app.controller('NavbarSecondryCtrl', function ($scope, $modal, $log, Business) {

    $scope.isCollapsed = true;

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

    // bouton rendezvous
    $scope.status6 = {
      isopen: false
    };

    $scope.toggleDropdown = function(status) {
      //$event.preventDefault();
      //$event.stopPropagation();
      status.isopen = !status.isopen;
    };

  });