'use strict';

angular.module('tbApp')
  .controller('BusinessCtrl', function ($scope, $rootScope, $http, Auth, Business) {

    Auth.getCurrentUser(function (data){
      return data;
    }).then(getMyBusiness);

    function getMyBusiness(data){
      Business.getBusiness(
        data.businessId,
        function (data, status, headers, config){
          $scope.business = data;
          //$rootScope.business = $scope.business;
        },
        function (error){
          $scope.error = error;
        }
      );
    }

  });
