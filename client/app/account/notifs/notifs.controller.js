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
  			return status = 'accepté';
  		}

  		if (status === 'refused') {
  			return statut = 'refusé';
  		}
  	}

  	$scope.accept = function (notif){
  		Notification.acceptNotification(
  			notif._id,
  			function(data){
  				
  			},
  			function(error){

  			}
  		);
  	};

  	$scope.refuse = function (notif){
  		Notification.refuseNotification(
  			notif._id,
  			function(data){

  			},
  			function(error){

  			}
  		);
  	};
  });