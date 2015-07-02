'use strict';

angular.module('tbApp')
  .controller('BusinessNewPrestationCtrl', function ($scope, Business, Auth) {
   	$scope.prestation = {},
   	$scope.errors = {}

   	Auth.getCurrentUser(function(data){
   		var user = data;

	    $scope.submit = function(form) {
	      $scope.submitted = true;
	      console.log(form);
	      if(form.$valid) {
	        Business.createPrestation(
	       	user.businessId,
	        {
	          name: $scope.prestation.name,
	          shortDescription: $scope.prestation.shortDescription,
	          description: $scope.prestation.description,
	          duration: $scope.prestation.duration
	        })
	        .then( function() {
	          $scope.prestation = {};
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
	    };

   	});
  });
