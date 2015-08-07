'use strict';

var App = angular.module('tbApp');
  App.controller('SignupCtrl', function ($scope, $log, $state, $window, $http, Urls, Auth) {
    $scope.user = {};
    $scope.errors = {};

    $scope.localites = {};

    $http.get(Urls.api + 'geodatas').then(
      function (response){
        $scope.geodatas = response.data.geodatas;
        return $scope.geodatas;
      }, 
      function (error){
        $scope.error = error;
      });


    $scope.register = function(form) {
      $scope.submitted = true;
      $log.debug($scope.user);
      if(form.$valid) {
        $log.debug(form.$valid);

        var data = {
            firstName: $scope.user.firstName,
            lastName: $scope.user.lastName,
            email: $scope.user.email,
            password: $scope.user.password,
            dateOfBirth: $scope.user.dateOfBirth,
            gender: $scope.user.gender
        };

        if ($scope.user.loc) {
          data = {
            city: $scope.user.loc.Commune,
            zip: $scope.user.loc.NPA,
            canton: $scope.user.loc.Canton
          };
        }

        if ($scope.user.manager) {
          // Créer un compte manager
          Auth.createManager(
            data
          )
          .then( function() {
            // Account created, redirect to home
            $state.go('main');
          })
          .catch( function(err) {
            err = err.data;
            $scope.errors = {};

            //Update validity of form fields that match the mongoose errors
            angular.forEach(err.errors, function(error, field) {
              form[field].$setValidity('mongoose', false);
              $scope.errors[field] = error.message;
            });
          });

        } else{
          // Créer un compte utilisateur
          Auth.createUser(
            data
          )
          .then( function() {
            // Account created, redirect to home
            $state.go('main');
          })
          .catch( function(err) {
            err = err.data;
            $scope.errors = {};

            //Update validity of form fields that match the mongoose errors
            angular.forEach(err.errors, function(error, field) {
              form[field].$setValidity('mongoose', false);
              $scope.errors[field] = error.message;
            });
          });

        }


      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };

  /*
  * Datepicker
  */

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.maxDate = new Date();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yyyy',
    startingDay: 1
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };
});
