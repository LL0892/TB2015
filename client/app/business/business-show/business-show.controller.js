'use strict';

angular.module('tbApp')
  .controller('BusinessShowCtrl', function ($scope, Auth, Business, Urls) {
    
    Auth.getCurrentUser(function (data){
      return data;
    }).then(getMyBusiness);

    function getMyBusiness(data){
      Business.getBusiness(
        data.businessId,
        function (data, status, headers, config){
          $scope.business = data;
          $scope.business.imageBusinessUrl = Urls.client + $scope.business.imageBusinessUrl;
        },
        function (error){
          $scope.error = error;
        });
    };


  });
