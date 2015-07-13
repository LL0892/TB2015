'use strict';

angular.module('tbApp')
  .service('Staff', function ($resource, $http, Urls) {
  	return {
		createStaff : function(data, callback, errorCallback){
			$http({
				method: 'POST',
				url: Urls.api + 'staffs/',
				data: data
			}).success(function (data){
				callback = data;
				return callback;
			}).error(function (data){
				errorCallback = data;
				return errorCallback;
			});
		},
		getRendezvous : function(staffId, callback, errorCallback){
			$http({
				method: 'GET',
				url: Urls.api + 'staffs/' + staffId + '/rendezvous'
			}).success(function (data){
				callback(data);
			}).error(function (data){
				errorCallback(data);
			});
		}
  	};
});