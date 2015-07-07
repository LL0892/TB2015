'use strict';

angular.module('tbApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      },
      createManager:{
        method: 'POST',
        params: {
          id: 'manager'
        }
      }
	  });
  });

  /*.factory('User', function ($http) {
    return {
      createUser : function(data, callback, errorCallback){
        $http({
          method: 'POST',
          url: 'api/users',
          data: data
        }).success(function (data){
          callback(data);
        }).error(function (data){
          errorCallback(data);
        });
      },
      getMe : function(callback, errorCallback){
        $http({
          method: 'GET',
          url: 'api/users/me'
        }).success(function (data){
          callback(data);
        }).error(function (data){
          errorCallback(data);
        });
      },
      changePassword: function(id, data, callback, errorCallback){
        $http({
          method: 'PUT',
          url: 'api/users/' + id + '/password',
          data: data
        }).success(function (data){
          callback(data);
        }).error(function (data){
          errorCallback(data);
        });
      }
    };
  });*/