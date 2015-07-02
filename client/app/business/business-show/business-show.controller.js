'use strict';

angular.module('tbApp')
  .controller('BusinessShowCtrl', function ($scope, Auth, Business, Urls) {

    function getMyBusiness(data){
      Business.showBusiness(
        data.businessId,
        function (data){
          $scope.business = data;
          $scope.business.imageBusinessUrl = Urls.client + $scope.business.imageBusinessUrl;
        },
        function (error){
          $scope.error = error;
        });
    }
    
    Auth.getCurrentUser(function (data){
      return data;
    }).then(getMyBusiness);
    
  });
