'use strict';

angular.module('tbApp')
  .controller('NavbarSecondryCtrl', function ($scope, Auth, Business) {

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


    // Change the business status
    $scope.changeStatus = function(){
      Business.changeStatus(
        $scope.business._id,
        function (data, status, headers, config){
          $scope.business = data.business;
        },
        function (error, status){
          $scope.error = error;
        });
    };



  });