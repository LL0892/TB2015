'use strict';

angular.module('tbApp')
  .controller('FbLoginCtrl', function ($scope, Auth, $state) {
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
          state.go('fb');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };
  });
