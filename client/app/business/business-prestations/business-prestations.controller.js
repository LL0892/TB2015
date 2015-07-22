'use strict';

angular.module('tbApp')
  .controller('BusinessPrestationsCtrl', function ($scope, $log, Auth, Business) {

    // object du formulaire d'ajout de prestation
    $scope.prestation = {};
    // object du formulaire d'édition de prestation
    $scope.formPrestation = {};
    // prestations existantes
  	$scope.prestations = {};
    // utilisateur actuel
  	$scope.user = {};

    // état du fomulaire d'ajout de prix
  	$scope.addPriceForm = false;
    // état du formulaire d'édition de prix
    $scope.editPriceForm = false;
    // état du formulaire d'ajout de prestation
    $scope.addPrestationForm = false;
    // état du formulaire d'édition de prestation
    $scope.editPrestationForm = false;

    // initialisation de lal liste des durées
    $scope.durations = [
        {'label': 5},
        {'label': 10},
        {'label': 15},
        {'label': 20},
        {'label': 25},
        {'label': 30},
        {'label': 35},
        {'label': 40},
        {'label': 45},
        {'label': 50},
        {'label': 55},
        {'label': 60},
        {'label': 65},
        {'label': 70},
        {'label': 75},
        {'label': 80},
        {'label': 85},
        {'label': 90},
        {'label': 95},
        {'label': 100},
        {'label': 105},
        {'label': 110},
        {'label': 115},
        {'label': 120},
    ];


    /***********************
     * Appel initial
     ***********************/

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



    /***********************
     * Manipulation des prestations
     ***********************/

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
        $scope.addPrestationForm = false;
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
            function(error){
                $scope.message = error;
            }
        );
    };

    $scope.editPrestationCopy = function(prestation, index){
        angular.copy(prestation, $scope.formPrestation);

        for (var i = $scope.durations.length - 1; i >= 0; i--) {
            if ($scope.durations[i].label === $scope.formPrestation.duration) {
                $scope.initialDuration = $scope.durations[i];
            }
        };
    };


    $scope.updatePrestation = function(prestation, duration, index){
        $log.debug(prestation);

        var update = {
            name: prestation.name,
            description: prestation.description,
            duration: duration.label
        };

        Business.updatePrestation(
            $scope.user.businessId,
            prestation._id,
            update,
            function(data){
                $scope.prestations[index] = data.prestation;
            },
            function(error){
                $log.debug(error);
            }
        )
    };

    // Annuler l'action d'ajout de prestation
    $scope.cancelAddForm = function (){
        $scope.addPrestationForm = false;
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

    	Business.createPrice($scope.user.businessId, prestationId, data,
    		function(data){
    			$scope.message = data.message;
                
                var prestationId = data.prestation._id;
                for (var i = $scope.prestations.length - 1; i >= 0; i--) {
                    if ($scope.prestations[i]._id === prestationId) {
                        $scope.prestations[i] = data.prestation;
                    }
                };
                $scope.form = {};
    			$scope.addPriceForm = true;
    		},
    		function(data){
    			$scope.message = data;
    		});
    };

    $scope.deletePrice = function(prestationId, priceId, indexParent, index){

        Business.deletePrice(
            $scope.user.businessId,
            prestationId,
            priceId,
            function(data){
                $scope.message = data.message;
                $scope.prestations[indexParent].prices.splice(index, 1);
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
