'use strict';

angular.module('tbApp')
  .controller('FbLoginCtrl', function ($scope, $state, Auth) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to fb app index
          $state.go('fb.step1');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };
  });
