'use strict';

angular.module('tbApp')
.controller('RendezvousCtrl', function($scope, $http, User, Auth) {

    $scope.formData = {};
    $scope.isStaff = Auth.isStaff;
    $scope.currentUser = Auth.getCurrentUser(function(user){
		$http.get('/api/businesses/'+user.businessId).then(function(data){
			$scope.formData.businessId = data.businessId;
			$scope.formData.businessName = data.name;
		});
    });

	$http.get('/api/users').then(function(datas){
		$scope.users = datas.data;
		return $scope.users;
	});





});