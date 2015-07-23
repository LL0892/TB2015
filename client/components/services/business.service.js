'use strict';

angular.module('tbApp')
	.service('Business', ['$http', 'Urls', function ($http, Urls){
		return {
			// business functions
			getBusinesses : function(callback, errorCallback){
				$http({
					method: 'GET',
					url: Urls.api + 'businesses/'
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			createBusiness : function(data, callback, errorCallback){
				$http({
					method: 'POST',
					url: Urls.api + 'businesses/',
					data: data
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			showBusiness : function(businessId, callback, errorCallback){
				$http({
					method: 'GET',
					url: Urls.api + 'businesses/' + businessId
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			updateBusiness: function(businessId, data, callback, errorCallback){
				$http({
					method: 'PUT',
					url: Urls.api + 'businesses/' + businessId,
					data: data
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			addPageId: function(businessId, data, callback, errorCallback){
				$http({
					method: 'PUT',
					url: Urls.api + 'businesses/' + businessId + '/pageId',
					data: data
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			searchByPageId: function(pageId, callback, errorCallback){
				$http({
					method: 'POST',
					url: Urls.api + 'businesses/searchByPageId',
					data: pageId
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},

			// schedules functions
			getSchedules: function(businessId, callback, errorCallback){
				$http({
					method: 'GET',
					url: Urls.api + 'businesses/' + businessId + '/schedules'
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			addSchedules: function(businessId, data, callback, errorCallback){
				$http({
					method: 'POST',
					url: Urls.api + 'businesses/' + businessId + '/schedules',
					data : data
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			showSchedules: function(businessId, scheduleId, callback, errorCallback){
				$http({
					method: 'GET',
					url: Urls.api + 'businesses/' + businessId + '/schedules/' + scheduleId
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			updateSchedule: function(businessId, scheduleId, data, callback, errorCallback){
				$http({
					method: 'PUT',
					url: Urls.api + 'businesses/' + businessId + '/schedules/' + scheduleId,
					data: data
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			deleteSchedule: function(businessId, scheduleId, callback, errorCallback){
				$http({
					method: 'DELETE',
					url: Urls.api + 'businesses/' + businessId + '/schedules/' + scheduleId
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},

			// Staff functions
			getStaffs: function(businessId, callback, errorCallback){
				$http({
					method: 'GET',
					url: Urls.api + 'businesses/' + businessId + '/staffs'
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			showStaff: function(businessId, staffId, callback, errorCallback){
				$http({
					method: 'GET',
					url: Urls.api + 'businesses/' + businessId + '/staffs/' + staffId
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},

			// Prestations functions
			getPrestations: function(businessId, callback, errorCallback){
				$http({
					method: 'GET',
					url: Urls.api + 'businesses/' + businessId + '/prestations'
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			createPrestation: function(businessId, data , callback, errorCallback){
				$http({
					method: 'POST',
					url: Urls.api + 'businesses/' + businessId + '/prestations',
					data: data
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			showPrestation: function(businessId, prestationId, callback, errorCallback){
				$http({
					method: 'GET',
					url: Urls.api + 'businesses/' + businessId + '/prestations/' + prestationId, 
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			updatePrestation: function(businessId, prestationId, data, callback, errorCallback){
				$http({
					method: 'PUT',
					url: Urls.api + 'businesses/' + businessId + '/prestations/' + prestationId, 
					data: data
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			deletePrestation: function(businessId, prestationId, callback, errorCallback){
				$http({
					method: 'DELETE',
					url: Urls.api + 'businesses/' + businessId + '/prestations/' + prestationId
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			// Price prestation status
			createPrice: function(businessId, prestationId, data, callback, errorCallback){
				$http({
					method: 'POST',
					url: Urls.api + 'businesses/' + businessId + '/prestations/' + prestationId + '/prices', 
					data: data
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			showPrice: function(businessId, prestationId, priceId, callback, errorCallback){
				$http({
					method: 'GET',
					url: Urls.api + 'businesses/' + businessId + '/prestations/' + prestationId + '/prices/' + priceId  
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			updatePrice: function(businessId, prestationId, priceId, data, callback, errorCallback){
				$http({
					method: 'PUT',
					url: Urls.api + 'businesses/' + businessId + '/prestations/' + prestationId + '/prices/' + priceId, 
					data: data 
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			deletePrice: function(businessId, prestationId, priceId, callback, errorCallback){
				$http({
					method: 'DELETE',
					url: Urls.api + 'businesses/' + businessId + '/prestations/' + prestationId + '/prices/' + priceId 
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			// Rendezvous functions
			getRendezvous: function(businessId, callback, errorCallback){
				$http({
					method: 'GET',
					url: Urls.api + 'businesses/' + businessId + '/rendezvous'
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			searchRendezvous: function(businessId, data, callback, errorCallback){
				$http({
					method: 'POST',
					url: Urls.api + 'businesses/' + businessId + '/rendezvous/search',
					data: data
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			createRendezvous: function(businessId, data, callback, errorCallback){
				$http({
					method: 'POST',
					url: Urls.api + 'businesses/' + businessId + '/rendezvous',
					data: data
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			showRendezvous: function(businessId, rendezvousId, callback, errorCallback){
				$http({
					method: 'GET',
					url: Urls.api + 'businesses/' + businessId + '/rendezvous/' + rendezvousId
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			// Notification functions
			getNotifications: function(businessId, callback, errorCallback){
				$http({
					method: 'GET',
					url: Urls.api + 'businesses/' + businessId + '/notifications'
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			createNotification: function(businessId, data, callback, errorCallback){
				$http({
					method: 'POST',
					url: Urls.api + 'businesses/' + businessId + '/notifications',
					data: data
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			},
			deleteNotification: function(businessId, notifId, callback, errorCallback){
				$http({
					method: 'DELETE',
					url: Urls.api + 'businesses/' + businessId + '/notifications/' + notifId
				}).success(function (data){
					callback(data);
				}).error(function (data){
					errorCallback(data);
				});
			}
		};
	}]);