'use strict';

var App = angular.module('tbApp');
  App.controller('BusinessCtrl', function ($scope, $http, $state, $log, Urls, Business) {

    $scope.business = {};
    $scope.geodatas = {};

    $http.get(Urls.api + 'geodatas').then(
      function (response){
        $scope.geodatas = response.data.geodatas;
        return $scope.geodatas;
      }, 
      function (error){
        $scope.error = error;
      });

  	$scope.register = function(form){
  		$log.debug($scope.business);

  		if (form.$valid) {
  			Business.createBusiness({
  				name: $scope.business.name,
  				city: $scope.business.loc.Commune,
  				zip: $scope.business.loc.NPA,
  				canton: $scope.business.loc.Canton,
  				street: $scope.business.street,
  				email: $scope.business.email,
  				mobile: $scope.business.mobile,
  				phone: $scope.business.phone,
  				siteURL: $scope.business.siteURL,
  				facebookURL: $scope.business.facebookURL
  			}).then( function() {
            	// Business created, redirect to home
            	$state.go('main');
          	})
	        .catch( function (err) {
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