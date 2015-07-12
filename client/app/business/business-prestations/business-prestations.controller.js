'use strict';

angular.module('tbApp')
  .controller('BusinessPrestationsCtrl', function ($scope, Auth, Business) {

    // nouvelle prestation
    $scope.prestation = {};
    // prestations existantes
  	$scope.prestations = {};
    // utilisateur actuel
  	$scope.user = {};
    // fomulaire d'ajout de prix
  	$scope.hiddenForm = true;
    // formulaire d'edition de prix
    $scope.editPrice = false;
    // formulaire d'ajout de prestation
    $scope.addForm = false;

    function getPrestations(data){
      Business.getPrestations(
        data.businessId,
        function (data){
          $scope.prestations = data.prestations;
        },
        function (error){
          $scope.error = error;
        });
    }
    
    Auth.getCurrentUser(function (data){
    	$scope.user = data;
      return data;
    }).then(getPrestations);
    

    $scope.addPrestation = function(form) {
      $scope.submitted = true;

      if(form.$valid) {

        var prestationToAdd = {
          name: $scope.prestation.name,
          shortDescription: $scope.prestation.shortDescription,
          description: $scope.prestation.description,
          duration: $scope.prestation.duration
        };

        Business.createPrestation(
        $scope.user.businessId,
        prestationToAdd
        )
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

    $scope.cancelAddForm = function (form){
        $scope.addForm = false
    }

    $scope.deletePrestation = function(prestation, index){
        Business.deletePrestation(
            $scope.user.businessId,
            prestation._id,
            function(data){
                $scope.prestations.splice(index, 1);
                $scope.message = data.message;
            },
            function(data){
                $scope.message = data;
            }
        );
    }


    $scope.deletePrice= function(prestationId, priceId){
    	// loop sur $scope.prestations
    	// trouver la prestation de prestationId
    	// loop sur les prix
    	// trouver le prix
    	// remove le prix de l'ui

    	Business.deletePrice(
    		$scope.user.businessId,
    		prestationId,
    		priceId,
    		function(data){
    			$scope.message = data.message;
    			//var data = data.prestation;
    			//$scope.updateUI(data);
    		},
    		function(data){
    			$scope.message = data;
    		}
    	);
    };

    $scope.addPrice = function(prestationId, data){
		$scope.hiddenForm = true;
    	Business.createPrice($scope.user.businessId, prestationId, data,
    		function(data){
    			$scope.message = data.message;
    			//var data = data.prestation;
    			//$scope.updateUI(data);
    			$scope.hiddenForm = true;
    		},
    		function(data){
    			$scope.message = data;
    		});
    };

    function updateUI (data){
    	console.log('update :'+ data);
    	var id = data._id;
    	var res = $scope.prestations._id.indexOf(id);

    	if (res !== -1) {
    		$scope.prestations[res] = data;
    	}
    	$scope.$apply();
    };

  });
