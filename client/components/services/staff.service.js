'use strict';

angular.module('tbApp')
  .factory('Staff', function ($resource, $http, Urls) {
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
		}
  	}
});