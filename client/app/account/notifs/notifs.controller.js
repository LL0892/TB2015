'use strict';

var App = angular.module('tbApp');
  App.controller('NotifsCtrl', function ($scope, $http, $log, Notification) {
  	$scope.notifications = [];

  	$http.get('/api/notifications').success(function(data){
  		$scope.notifications = data.notifications;

  		for (var i = $scope.notifications.length - 1; i >= 0; i--) {
  			$scope.notifications[i].statusParsed = parseResponse($scope.notifications[i].status);
  		};

  		$log.debug($scope.notifications);
  	});

  	// Parse response status
  	function parseResponse(status){
  		if (status === 'not processed') {
  			return status = 'non traitée';
  		}

  		if (status === 'accepted') {
  			return status = 'acceptée';
  		}

  		if (status === 'refused') {
  			return status = 'refusée';
  		}
  	}

  	$scope.accept = function (notif, index){
  		Notification.acceptNotification(
  			notif._id,
  			function(data){
  				$scope.message = data.message;
  				$scope.notifications[index].statusParsed = 'acceptée';
  				$scope.notifications[index].status = 'accepted';
  			},
  			function(error){

  			}
  		);


  		
  	};

  	$scope.refuse = function (notif, index){
  		Notification.refuseNotification(
  			notif._id,
  			function(data){
  				$scope.message = data.message;
  				$scope.notifications[index].statusParsed = 'refusée';
  				$scope.notifications[index].status = 'refused';
  				$log.debug($scope.notifications);
  			},
  			function(error){

  			}
  		);
  		
  	};
  });