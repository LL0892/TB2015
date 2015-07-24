'use strict';

angular.module('tbApp')
  .controller('BusinessProfileCtrl', function ($scope, Business, $stateParams) {

      Business.showBusiness(
        $stateParams.id,
        function (data){
          $scope.business = data;
        },
        function (error){
          $scope.error = error;
        });
    
  });
