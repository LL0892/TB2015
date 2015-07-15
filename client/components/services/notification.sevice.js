'use strict';

angular.module('tbApp')
  .service('Notification', function ($resource, $http, Urls) {
  	return {
		getNotificiations : function(callback, errorCallback){
			$http({
				method: 'GET',
				url: Urls.api + 'notifications/'
			}).success(function (data){
				callback = data;
			}).error(function (data){
				errorCallback = data;
			});
		},
		acceptNotification : function(notifId, callback, errorCallback){
			$http({
				method: 'PUT',
				url: Urls.api + 'notifications/' + notifId + '/accepted'
			}).success(function (data){
				callback(data);
			}).error(function (data){
				errorCallback(data);
			});
		},
		refuseNotification : function(notifId, callback, errorCallback){
			$http({
				method: 'PUT',
				url: Urls.api + 'notifications/' + notifId + '/refused'
			}).success(function (data){
				callback(data);
			}).error(function (data){
				errorCallback(data);
			});
		},
		deleteNotification : function(notifId, callback, errorCallback){
			$http({
				method: 'DELETE',
				url: Urls.api + 'notifications/' + notifId
			}).success(function (data){
				callback(data);
			}).error(function (data){
				errorCallback(data);
			});
		}
  	};
});