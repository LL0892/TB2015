'use strict';

angular.module('tbApp')
  .controller('MyRendezvousCtrl', function ($scope, $log, $http, $timeout, Urls) {

    $http.get(Urls.api + 'rendezvous').success(function(data){
      $log.debug(data);
      $scope.rendezvous = data;
    });

  });
