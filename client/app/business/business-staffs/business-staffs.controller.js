'use strict';

angular.module('tbApp')
  .controller('BusinessStaffsCtrl', function ($scope, $log, $http, Auth, Business, Urls) {

  	$scope.edit = false;

  	// parse un tableau de notifications
  	function parseResponse(array){
	    for (var i = array.length - 1; i >= 0; i--) {
			var date = parseDate(array[i].createdOn);
			array[i].createdOn = date;

			if (array[i].status === 'not processed') {
				array[i].status = 'non traitée';
			}

			if (array[i].status === 'refused') {
				array[i].status = 'refusée';
			}

			if (array[i].status === 'accepted') {
				array[i].status = 'acceptée';
			}
		};
  	}

  	// parse les dates dans un format lisible
  	function parseDate(date){
  		var date = date;
  		date = new Date(date);
  		date  = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
  		return date;
  	}


    function getStaffsandNotifs(res){
     	Business.getStaffs(
	        res.businessId,
	        function (data){
	          	$scope.staffs = data.staffs;

				for (var i = $scope.staffs.length - 1; i >= 0; i--) {
					$scope.staffs[i].photoStaffURL = Urls.img + $scope.staffs[i].photoStaffURL;
				}

				return $scope.staffs;
	        },
	        function (error){
	         	return $scope.error = error;
	        });

      	Business.getNotifications(
	      	res.businessId,
	      	function (data){
	      		$scope.notifs = data.notifications;

	      		// Parse notifs avec format de date lisible et status en français
	      		parseResponse($scope.notifs);
	      		return $scope.notifs;
	      	},
	      	function (error){
	    		return $scope.error = error;
	      	});

      	$scope.businessId = res.businessId;
    }
    
    // initial call
    Auth.getCurrentUser(function (data){
      return data;
    }).then(getStaffsandNotifs);


    // Obtenir la liste des utilisateurs
	$http.get('/api/users').then(function(datas){
		$scope.users = datas.data;
		return $scope.users;
	});


    $scope.deleteNotification = function(notifId, index){
    	Business.deleteNotification($scope.businessId, notifId,
    		function(data){
    			$scope.notifs.splice(index, 1);
    			return data;
    		});
    };


    $scope.createNotification = function(userId){
    	console.log(userId);
    	Business.createNotification(
    	$scope.businessId,
    	{receptorId: userId}, 
    	function(data){
    		console.log(data.notification);
    		var notif = $scope.notifs;
    		$scope.notifs.push(notif);
    		console.log($scope.notifs);
    	}, 
    	function(error){

    	});

    	$scope.$apply;
    };

  });
