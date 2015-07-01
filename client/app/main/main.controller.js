'use strict';

angular.module('tbApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.busiesses = [];

    $http.get('/api/businesses').success(function(businesses){
      $scope.businesses = businesses;
    });

  });
