'use strict';

angular.module('tbApp')
.controller('RendezvousCtrl', function($scope, $http, $state, $log, User, Auth, Business) {

    $scope.formData = {};
    $scope.isStaff = Auth.isStaff;
    $scope.prestations = {};
    $scope.is = false;

/*    if ($scope.formData = {}) {
    	$state.go('rendezvous.step1');
    };*/

    $scope.currentUser = Auth.getCurrentUser(function(user){
		$http.get('/api/businesses/'+user.businessId).then(function(data){
			$scope.formData.businessId = data.data._id;
			$scope.formData.businessName = data.data.name;
			$scope.formData.city = data.data.city;
			$scope.formData.canton = data.data.canton;
			$scope.formData.street = data.data.street;
			$scope.formData.zip = data.data.zip;
			return $scope.formData;
		});
    });

	$http.get('/api/users').then(function(datas){
		$scope.users = datas.data;
		return $scope.users;
	});

	// Action page 1
	$scope.getPrestations = function(form){
		
		//$log.debug(form);

		// If user is chosen
		if (form.user !== undefined) {
			Business.getPrestations(
				form.businessId,
				function(data){
					$scope.prestations = data.prestations;
					return $scope.prestations;
				},
				function(error){

				});

			$state.go('rendezvous.step2');
		}
		// Send error message
		else {
			$scope.errorUser = true;
		}
	};

	// inclu le bon prix à formData et refresh la page pour afficher ce prix.
	$scope.getPrice = function(prestation, user){

		$scope.formData.prestation = prestation;
		
		var tab = prestation.prices;
		for (var i = tab.length - 1; i >= 0; i--) {
			if (user.age < tab[i].ageHighLimit && user.age > tab[i].ageLowLimit) {
				if (user.gender === tab[i].gender || tab[i].gender === 'mixte') {
					$log.debug('le juste prix');
					$scope.formData.prestation.prices = tab[i];
					$scope.$apply;
				}else{
					$log.debug('nope2');
				}
			}else{
				$log.debug('nope1');
			}
		};
		$log.debug($scope.formData);
		return $scope.formData;
	}

	// Action page 2
	$scope.getCalendar = function(form){

		$log.debug('click');

		if (form.prestation !== undefined) {
			$state.go('rendezvous.step3');
		}else{
			$scope.errorPrestation = true;
		}

	}
});