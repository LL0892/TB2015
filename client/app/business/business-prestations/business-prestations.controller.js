'use strict';

angular.module('tbApp')
  .controller('BusinessPrestationsCtrl', function ($scope, Auth, Business) {

  	$scope.prestations = {};
  	$scope.user = {};


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
    

    $scope.cancel= function(prestationId, priceId){
    	//console.log(prestationId);
    	//console.log(priceId);
    	Business.deletePrice(
    		$scope.user.businessId,
    		prestationId,
    		priceId,
    		function(data){
    			$scope.message = data.message;
    			var data = data.prestation;
    			// remove le prix de l'ui
    			this.updateUI(data);
    		},
    		function(data){
    			$scope.message = data;
    		}
    	);
    }

    this.updateUI = function(data){
    	var id = data._id;
    	var res = $scope.prestations._id.indexOf(id);

    	if (!res === -1) {
    		$scope.prestations[res] = data;
    	}
    	$scope.$apply();
    }

  });
