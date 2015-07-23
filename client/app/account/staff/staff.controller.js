'use strict';

var App = angular.module('tbApp');
  App.controller('StaffCtrl', function ($scope, $state, $log, Staff) {
  	$scope.staff={};

  	$scope.register = function(form){
  		$log.debug($scope.staff);

  		if (form.$valid) {
  			Staff.createStaff({
  				name: $scope.staff.name,
  				email: $scope.staff.email,
  				mobile: $scope.staff.mobile,
  				phone: $scope.staff.phone
  			}), 
  			function (data) {
              $scope.message = data.message;
            	// Staff created, redirect to home
            	$state.go('main');
          	},
        function (err) {
          err = err.data;

          //Update validity of form fields that match the mongoose errors
/*          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });*/
  			};
  		}
  	};

  });