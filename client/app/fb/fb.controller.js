'use strict';

angular.module('tbApp')
.controller('FbCtrl', function($scope, $log, $http, $cookies, Urls) {
	$scope.fb = function(){
		$http.post(Urls.api + 'fb/rendezvous',{
			signed_request: '9HOX6j2CfLglBxXI2wr11zTmix3VJWx8xI7C5sM_qyo.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImV4cGlyZXMiOjE0Mzc0ODM2MDAsImlzc3VlZF9hdCI6MTQzNzQ3NzA5NSwib2F1dGhfdG9rZW4iOiJDQUFVWkE2U1hhcmVNQkFFd3FWRFpBQU1zc3hOUzlPWkFEeFkybDZPM0dTeW1uMndyUDlGa0h0WVF2dkVlMmZOajh0aXJRNDFKU1NaQnZGanJESVhLWHFzUmVHSGg1RXFaQWM2eTVuZ2t6ek5ZcDJFVXlTNW1TRTFYWkJiZFpCU0NOWkJiNmZxeWo2MzY5UkNHWkFSY1pDY3d3RnRYSGs0WDV6UFlkcUNDb3l5M1NQbVpDUDhvUTl1SlBLRkxlNEhpaWg2dzg5d3NRU0dmV0FHemNzeE9MZFNYb1d4IiwicGFnZSI6eyJpZCI6Ijg4NDk2MDQxODIyNTExNyIsImFkbWluIjp0cnVlfSwidXNlciI6eyJjb3VudHJ5IjoiY2giLCJsb2NhbGUiOiJmcl9GUiIsImFnZSI6eyJtaW4iOjIxfX0sInVzZXJfaWQiOiIxMDIwNzMyMDY1MTA0MDQ0MCJ9'
		}).success(function(){

		}).error(function(){

		});
	};

	$scope.pageId = $cookies.get('page-id');
	$cookies.remove('page-id');

	$log.debug('fb call from page id '+ $scope.pageId);
});
