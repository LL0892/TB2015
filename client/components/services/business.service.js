'use strict';

angular.module('tbApp')
	.factory('Business', ['$http', function($http){
		return {
			getBusinesses : function(callback, errorCallback){
				$http({
					method: 'GET',
					url: 'api/businesses'
				}).success(function (data, status, headers, config){
					callback(data);
				}).error(function (data, status, headers, config){
					errorCallback(data, status);
				});
			},
			getBusiness : function(businessId, callback, errorCallback){
				$http({
					method: 'GET',
					url: 'api/businesses/' + businessId
				}).success(function (data, status, headers, config){
					callback(data, status, headers, config);
				}).error(function (data, status, headers, config){
					errorCallback(data, status);
				});
			},
			changeStatus: function(businessId, callback, errorCallback){
				$http({
					method: 'PUT',
					url: 'api/businesses/' + businessId + '/status'
				}).success(function (data, status, headers, config){
					callback(data, status, headers, config);
				}).error(function (data, status, headers, config){
					errorCallback(data, status);
				});
			}
		}
	}]);