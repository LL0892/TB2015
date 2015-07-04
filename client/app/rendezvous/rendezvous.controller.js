'use strict';

angular.module('tbApp')
.controller('RendezvousCtrl', function($scope, $http, User, Auth) {

    $scope.formData = {};
    $scope.isStaff = Auth.isStaff;

	$http.get('/api/users').then(function(datas){
		$scope.users = datas.data;
		return $scope.users;
	});

});