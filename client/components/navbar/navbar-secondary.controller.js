'use strict';

var app = angular.module('tbApp');
  app.controller('NavbarSecondryCtrl', function ($scope, $modal, $log, Auth, Business) {

    // bouton salon
    $scope.status1 = {
      isopen: false
    };
    
    // bouton prestation
    $scope.status2 = {
      isopen: false
    };

    // bouton horaires
    $scope.status3 = {
      isopen: false
    };

    // bouton staff
    $scope.status4 = {
      isopen: false
    };

    // bouton rendezvous
    $scope.status5 = {
      isopen: false
    };

    $scope.toggleDropdown = function(status) {
      //$event.preventDefault();
      //$event.stopPropagation();
      status.isopen = !status.isopen;
    };


    // get business data function
    function getBusiness(data){
      Business.getBusiness(
        data.businessId,
        function (data, status, headers, config){
          $scope.business = data;
        },
        function (error, status){
          $scope.error = error;
        });
    };

    // Get current user data then get business data
    Auth.getCurrentUser(function (data){
      return data;
    }).then(getBusiness);

    // Modal for status change
    $scope.open = function (size) {
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        resolve: {
          biz: function () {
            return $scope.business;
          }
        }
      });

      modalInstance.result.then(function (res) {
        $scope.business = res;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

  });


app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, Business, biz) {
  $scope.business = biz;

  $scope.ok = function () {

  Business.changeStatus(
    $scope.business._id,
    function (data, status, headers, config){
      var res = data.business;
      $modalInstance.close(res);
    },
    function (error, status){
      $scope.error = error;
      $modalInstance.dismiss($scope.error);
    });

    
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});