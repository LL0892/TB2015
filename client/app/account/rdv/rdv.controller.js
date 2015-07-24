'use strict';

angular.module('tbApp')
  .controller('MyRendezvousCtrl', function ($scope, $log, $http, $timeout, Urls, Auth, Rendezvous) {

    $http.get(Urls.api + 'rendezvous').success(function(data){
      $scope.rendezvous = data;

      for (var i = $scope.rendezvous.length - 1; i >= 0; i--) {
        $scope.rendezvous[i].startHour = parseDate($scope.rendezvous[i].startHour);
        $scope.rendezvous[i].endHour = parseDate($scope.rendezvous[i].endHour);
      };
    });

    // parse les dates dans un format lisible
    function parseDate(date){
      var dateParsed = new Date(date);
      dateParsed  = dateParsed.getDate()+'/'+(dateParsed.getMonth()+1)+'/'+dateParsed.getFullYear()+' @ '+dateParsed.getHours()+'h'+(dateParsed.getMinutes()<10?'0':'')+dateParsed.getMinutes();
      return dateParsed;
    }

  });
