'use strict';

angular.module('tbApp')
  .controller('BusinessProfileCtrl', function ($scope, Business, Urls, $stateParams) {

      Business.showBusiness(
        $stateParams.id,
        function (data){
          $scope.business = data;
          $scope.business.imageBusinessUrl = Urls.client + $scope.business.imageBusinessUrl;
        },
        function (error){
          $scope.error = error;
        });
    
  });
