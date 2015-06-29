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
					var error = status + ' : ' + data;
					errorCallback(error);
				});
			}
		}
	}]);