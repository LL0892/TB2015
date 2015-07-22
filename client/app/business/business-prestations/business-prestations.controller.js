'use strict';

angular.module('tbApp')
  .controller('BusinessPrestationsCtrl', function ($scope, $log, Auth, Business) {

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
        prestationToAdd,
        function (data){
            //$log.debug(data);

            // Ajoute la nouvelle entrée dans l'ui
            $scope.prestations.push(data.prestation);
        },
        function (error){
            $log.debug(error);
        });

        // Ferme le formulaire d'ajout
        $scope.addForm = false;
      }
    };

    $scope.cancelAddForm = function (){
        $scope.addForm = false;
    };

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
    };


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

/*    function updateUI (data){
    	console.log('update :'+ data);
    	var id = data._id;
    	var res = $scope.prestations._id.indexOf(id);

    	if (res !== -1) {
    		$scope.prestations[res] = data;
    	}
    	$scope.$apply();
    }*/

  });
