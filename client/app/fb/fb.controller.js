'use strict';

angular.module('tbApp')
.controller('FbCtrl', function($scope, $log, $http, $cookies, $state, $timeout, Auth, Urls, Business, AppStorage) {
	
	/*********
	* Init
	**********/

	// Données de formulaires
	$scope.formData = {};
	$scope.prestations = {};
	$scope.schedules = {};

	$scope.isLoggedIn = Auth.isLoggedIn;
	$scope.formData.user = Auth.getCurrentUser();

	$timeout($log.debug($scope.isLoggedIn()), 50);

	$log.debug($scope.isLoggedIn());

	if ($cookies.get('page-id')) {
		AppStorage.set($cookies.get('page-id'));
		//$cookies.remove('page-id');
	}
	


	$log.debug('fb call from page id '+ AppStorage.get());

	$scope.fb = function(){
		$http.post(Urls.api + 'fb/rendezvous',{
			signed_request: '9HOX6j2CfLglBxXI2wr11zTmix3VJWx8xI7C5sM_qyo.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImV4cGlyZXMiOjE0Mzc0ODM2MDAsImlzc3VlZF9hdCI6MTQzNzQ3NzA5NSwib2F1dGhfdG9rZW4iOiJDQUFVWkE2U1hhcmVNQkFFd3FWRFpBQU1zc3hOUzlPWkFEeFkybDZPM0dTeW1uMndyUDlGa0h0WVF2dkVlMmZOajh0aXJRNDFKU1NaQnZGanJESVhLWHFzUmVHSGg1RXFaQWM2eTVuZ2t6ek5ZcDJFVXlTNW1TRTFYWkJiZFpCU0NOWkJiNmZxeWo2MzY5UkNHWkFSY1pDY3d3RnRYSGs0WDV6UFlkcUNDb3l5M1NQbVpDUDhvUTl1SlBLRkxlNEhpaWg2dzg5d3NRU0dmV0FHemNzeE9MZFNYb1d4IiwicGFnZSI6eyJpZCI6Ijg4NDk2MDQxODIyNTExNyIsImFkbWluIjp0cnVlfSwidXNlciI6eyJjb3VudHJ5IjoiY2giLCJsb2NhbGUiOiJmcl9GUiIsImFnZSI6eyJtaW4iOjIxfX0sInVzZXJfaWQiOiIxMDIwNzMyMDY1MTA0MDQ0MCJ9'
		}).success(function(){

		}).error(function(){

		});
	};



	/********************
	* Page 1 (prestation)
	*********************/



	if (AppStorage.get()) {

		var request = {
			fbPageId : AppStorage.get()
		}

		// Va chercher le salon
		Business.searchByPageId(
			request,
			function(data){
				$scope.formData.business = data;
				$scope.schedules = data.schedules;

				$scope.business = data;
				//$log.debug($scope.formData);



				// Va chercher les prestations du salon
				Business.getPrestations(
					$scope.formData.business._id,
					function(data){
						$scope.prestations = data.prestations;
			        	for (var i = $scope.prestations.length - 1; i >= 0; i--) {
			        	  $scope.prestations[i].open = false;
			        	}

			        	//$log.debug($scope.prestations);
			        	return $scope.prestations;
					},
					function(error){
						$log.debug(error);
					}
				);



			},
			function(error){
				$log.debug(error);
			}
		); // fin Business.searchByPageId();
	}



	// Inclu le bon prix à formData et render la variable pour afficher ce prix.
	$scope.getPrice = function(prestation, user){

		$scope.formData.prestation = prestation;
		
		var tab = prestation.prices;
		for (var i = tab.length - 1; i >= 0; i--) {
			if (user.age < tab[i].ageHighLimit && user.age > tab[i].ageLowLimit) {
				if (user.gender === tab[i].gender || tab[i].gender === 'mixte') {
					$scope.formData.prestation.prices = tab[i];
					$scope.$apply;
				}
			}
		}
		$log.debug($scope.formData);
		return $scope.formData;
	};

	$scope.getCalendar = function(form){
		if (form.prestation !== undefined) {
			$state.go('fb.step2');
		}else{
			$scope.errorPrestation = true;
		}

	};


	/********************
	* Page 2 (calendar/staff)
	*********************/



	/********************
	* Page 3 (confirmation)
	*********************/


})

.factory('AppStorage', function(){
	var pageId = '';
	var business = {};

	return{
		get : function(){
			return pageId;
		},
		set : function(id){
			pageId = id;
		},
		delete : function(){
			pageId = undefined;
		}
	}
});
