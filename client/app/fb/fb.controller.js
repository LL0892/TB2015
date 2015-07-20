'use strict';

angular.module('tbApp')
.controller('FbCtrl', function($scope, Urls, $http) {
	$scope.fb = function(){
		$http.post('http://localhost:9000/fb/rendezvous',{
			signed_request: '0Q_T_FKTYxqKqJnFcuRHrs_uuMaQPQHyN_XplkQWr_4.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImV4cGlyZXMiOjE0Mzc0MDgwMDAsImlzc3VlZF9hdCI6MTQzNzQwMTY4MCwib2F1dGhfdG9rZW4iOiJDQUFVWkE2U1hhcmVNQkFMWU5CQXFpcjd3Z1hvWWZ5RU9MeHBKR0k1ME8yM0tkRjc0dW9pSVd2cVdmRWFVcFRzclpCbjlmaENrMmtRSWFIQVBidTdpanIybUhpakFDTFlBYTVwbXdRcWoxNEtkYU02ZE9qUmxWWXVqeEV5b3hnZzFwVHRsUUJBYmVIeXE4MnNWYmxDdjh2b0NTeFpCVVdIM09FMkduTnY5b0xFZVpDM1ZjZDl1S2l4VExGeFpDM2lxZUhnZWZpVWg5N1VFMkVaQTM5SlQzSyIsInBhZ2UiOnsiaWQiOiI4ODQ5NjA0MTgyMjUxMTciLCJhZG1pbiI6dHJ1ZX0sInVzZXIiOnsiY291bnRyeSI6ImNoIiwibG9jYWxlIjoiZnJfRlIiLCJhZ2UiOnsibWluIjoyMX19LCJ1c2VyX2lkIjoiMTAyMDczMjA2NTEwNDA0NDAifQ'
		}).success(function(){

		}).error(function(){

		});
	}
});
