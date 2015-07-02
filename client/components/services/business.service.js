'use strict';

angular.module('tbApp')
	.factory('Business', ['$http', 'Urls', function ($http, Urls){
		return {
			getBusinesses : function(callback, errorCallback){
				$http({
					method: 'GET',
					url: Urls.api + 'businesses/'
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			showBusiness : function(businessId, callback, errorCallback){
				$http({
					method: 'GET',
					url: Urls.api + 'businesses/' + businessId
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			updateBusiness: function(businessId, callback, errorCallback){
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