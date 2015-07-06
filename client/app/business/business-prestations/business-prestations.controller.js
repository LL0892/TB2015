'use strict';

angular.module('tbApp')
  .controller('BusinessPrestationsCtrl', function ($scope, Auth, Business) {

  	$scope.prestations = {};
  	$scope.user = {};
  	$scope.hiddenForm = true;
    $scope.editPrice = false;

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
    

    $scope.deletePrice= function(prestationId, priceId){
    	// loop sur $scope.prestations
    	// trouver la prestation de prestationId
    	// loop sur les prix
    	// trouver le prix
    	// remove le prix

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
