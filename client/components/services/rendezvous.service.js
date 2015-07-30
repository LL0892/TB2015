'use strict';

angular.module('tbApp')
  .service('Rendezvous', function ($http, Urls) {
  	return {
		getRendezvous : function(callback, errorCallback){
			$http({
				method: 'GET',
				url: Urls.api + 'rendezvous/'
			}).success(function (data){
				callback = data;
			}).error(function (data){
				errorCallback = data;
			});
		},
		createRendezvous: function(data, callback, errorCallback){
			$http({
				method: 'POST',
				url: Urls.api+ 'rendezvous/',
				data: data
			}).success(function (data){
				callback = data;
			}).error(function (data){
				errorCallback = data;
			});
		}
  	};
});