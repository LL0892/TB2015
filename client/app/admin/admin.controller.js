'use strict';

angular.module('tbApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, Business, $log) {

/*    Auth.getCurrentUser(function (data){
      var myBusinessId = data.staff.businessId;
      //$log.debug(myBusinessId);

      Business.getBusiness(
        myBusinessId,
        function (data, status, headers, config){
          $scope.business = data;
        },
        function (data){
          $scope.error = data;
        }
      );

    });*/



    Auth.getCurrentUser(function (data){
      return data;
    }).then(getMyBusiness);

    function getMyBusiness(data){
      Business.getBusiness(
        data.staff.businessId,
        function (data, status, headers, config){
          $scope.business = data;
        },
        function (error){
          $scope.error = error;
        }
      );
    }





  });
