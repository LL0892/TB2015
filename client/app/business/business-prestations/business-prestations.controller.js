'use strict';

angular.module('tbApp')
  .controller('BusinessPrestationsCtrl', function ($scope, Auth, Business) {

    function getPrestations(data){
      Business.getPrestations(
        data.businessId,
        function (data){
          $scope.prestations = data.prestations;
        },
        function (error){
          $scope.error = error;
        });
    }
    
    Auth.getCurrentUser(function (data){
      return data;
    }).then(getPrestations);
    
  });
