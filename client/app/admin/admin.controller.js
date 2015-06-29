'use strict';

angular.module('tbApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, Business, $log) {

    Auth.getCurrentUser(function (data){
      var myBusinessId = data.staff.businessId;
      //$log.debug(myBusinessId);

      Business.getBusiness(
        myBusinessId,
        function(data){
          $scope.business = data;
        },
        function(error){
          $scope.error = error;
        }
      );

    });

  });
