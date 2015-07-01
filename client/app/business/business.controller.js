'use strict';

angular.module('tbApp')
  .controller('BusinessCtrl', function ($scope, $http, Auth, Business) {

    function getMyBusiness(data){
      Business.getBusiness(
        data.businessId,
        function (data){
          $scope.business = data;
        },
        function (error){
          $scope.error = error;
        });
    }

    Auth.getCurrentUser(function (data){
      return data;
    }).then(getMyBusiness);
    
  });
