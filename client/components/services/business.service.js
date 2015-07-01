'use strict';

angular.module('tbApp')
	.factory('Business', ['$http', function($http){
		return {
			getBusinesses : function(callback, errorCallback){
				$http({
					method: 'GET',
					url: 'api/businesses'
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			getBusiness : function(businessId, callback, errorCallback){
				$http({
					method: 'GET',
					url: 'api/businesses/' + businessId
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			changeStatus: function(businessId, callback, errorCallback){
				$http({
					method: 'PUT',
					url: 'api/businesses/' + businessId + '/status'
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			}
		};
	}]);