'use strict';

angular.module('tbApp')
.controller('FbCtrl', function($scope, Urls, $http) {
	$scope.fb = function(){
		$http.post('http://localhost:9000/fb/rendezvous',{
			signed_request: 'jlSaXCwJSCjSSP2PEZGh3q3Rt81AlteBxFEn1CngnH4.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImV4cGlyZXMiOjE0MzcxMzQ0MDAsImlzc3VlZF9hdCI6MTQzNzEyOTg3Niwib2F1dGhfdG9rZW4iOiJDQUFVWkE2U1hhcmVNQkFMdEFGcW0zbXNLYzdaQTU4WkJtbE5WaFU2TUY1dHJnUWR4OTdyMFJsWkJaQTh2OUtaQ1pBZTR1dHpqdDVSMFlNNnVDYUthdDRhWkNpNFhuejlsTHdEM0s0MW5EUEZCZzlDbHBlZ2wyWUF3a2RKMGRudGFTenptWGl3M0FSVVRqT0FNZDBaQWJIdVpCQlBBQlVKQ0FhNmhHZlRFUGNQckt0bEZyWDNrR3hzTklob2FqRTRaQTA1anR5RXpiTTV1bmJNdXVXQkNnWkJoNm1PdFlzelFnZmVmWWc0WkQiLCJwYWdlIjp7ImlkIjoiMTIwNTE1NDg4NjE3NzMxMCIsImFkbWluIjp0cnVlfSwidXNlciI6eyJjb3VudHJ5IjoiY2giLCJsb2NhbGUiOiJmcl9GUiIsImFnZSI6eyJtaW4iOjIxfX0sInVzZXJfaWQiOiIxMDIwNzMyMDY1MTA0MDQ0MCJ9'
		}).success(function(){

		}).error(function(){

		});
	}
});
