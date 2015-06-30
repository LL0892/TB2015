'use strict';

angular.module('tbApp')
  .controller('BusinessCtrl', function ($scope, $http, Auth, Business) {

    Auth.getCurrentUser(function (data){
      return data;
    }).then(getMyBusiness);

    function getMyBusiness(data){
      Business.getBusiness(
        data.businessId,
        function (data, status, headers, config){
          $scope.business = data;
        },
        function (error){
          $scope.error = error;
        });
    };

  });
