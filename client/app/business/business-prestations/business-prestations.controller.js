'use strict';

angular.module('tbApp')
  .controller('BusinessPrestationsCtrl', function ($scope, $log, Auth, Business) {

    // nouvelle prestation
    $scope.prestation = {};
    // prestations existantes
  	$scope.prestations = {};
    // utilisateur actuel
  	$scope.user = {};
    // état du fomulaire d'ajout de prix
  	$scope.hiddenForm = true;
    // état du formulaire d'edition de prix
    $scope.editPrice = false;
    // état du formulaire d'ajout de prestation
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

    // Annuler l'action d'ajout de prestation
    $scope.cancelAddForm = function (){
        $scope.addForm = false;
    };



    /***********************
     * Manipulation des prix
     ***********************/

    // Copie le contenu du prix dans un scope pour l'édition
    $scope.editPriceCopy = function(price){
        angular.copy(price, $scope.form);
        //$log.debug(price);
        //$log.debug($scope.form);
    };

    $scope.addPrice = function(prestationId, data){
		$scope.hiddenForm = true;
    	Business.createPrice($scope.user.businessId, prestationId, data,
    		function(data){
    			$scope.message = data.message;
    			//var data = data.prestation;
    			$scope.hiddenForm = true;
    		},
    		function(data){
    			$scope.message = data;
    		});
    };

    $scope.deletePrice = function(prestationId, priceId){
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
            },
            function(data){
                $scope.message = data;
            }
        );
    };

    $scope.updatePrice = function(prestationId, priceId, form){
        var data = form;
        //$log.debug(prestationId);
        //$log.debug(priceId);
        //$log.debug(form);

        Business.updatePrice(
            $scope.user.businessId, 
            prestationId, 
            priceId, 
            data, 
            function(data){
                // change la prestation modifiée dans l'ui
                for (var i = $scope.prestations.length - 1; i >= 0; i--) {
                    if ($scope.prestations[i]._id === data.prestation._id) {
                        $scope.prestations[i] = data.prestation;
                    }
                };
                
                $log.debug($scope.prestations);
            },
            function(error){
                $log.debug(error);
            }
         );
    };

  });
