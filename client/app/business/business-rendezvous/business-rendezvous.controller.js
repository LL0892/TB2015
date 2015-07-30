'use strict';

angular.module('tbApp')
  .controller('BusinessRendezvousCtrl', function ($scope, $log, Auth, Business) {

    /*********************
    * Staffs du salon
    **********************/
    
    Auth.getCurrentUser(function (data){
      return data;
    }).then(getStaffs);

    function getStaffs(user){
      $scope.currentUser = user;

      Business.getStaffs(
        user.businessId,
        function (res){
          $scope.staffs = res.staffs;
          $scope.defaultStaff = res.staffs[0];
        },
        function (error){
          $scope.error = error;
        });
    }



    /*********************
    * Semaines de l'année
    **********************/

  	$scope.now = new Date();
    $scope.weeks = [];
    var currentWeek = moment($scope.now).isoWeek();
  	var weekInYear = moment().isoWeeksInYear();
    var array = [];

    // générer un tableau de date de debut/fin de semaines pour 2015
  	for (var week = 0; week < weekInYear; week++) {
      if (week === 0) {
        var aWeek = {
          startDay : moment('2015-01-01').startOf('isoWeek')._d,
          endDay : moment('2015-01-01').endOf('isoWeeks')._d,
          label :'semaine '+ (week+1)
        };
        array.push(aWeek);
      } else {
        aWeek = {
          startDay : addSevenDays(array[week-1].startDay),
          endDay : addSevenDays(array[week-1].endDay),
          label : 'semaine '+ (week+1)
        };
        array.push(aWeek);
      }      
  	}

    // Appliquer le tableau de semaine dans le $scope
    $scope.weeks = array;
    $scope.defaultWeek = $scope.weeks[currentWeek-1];

    // Ajoute 7 jours à la date donnée
    function addSevenDays (date){
      var sevenDays = moment(date).add(1, 'week')._d;
      return sevenDays;
    }



    /*********************
    * Rercherche des rendez-vous
    **********************/

    // Faire la requête de recherche des rendez-vous
    $scope.search = function(week, staff){
      var request = {
        staffId: staff._id,
        startDay: week.startDay,
        endDay: week.endDay
      };

      $log.debug(request);

      Business.searchRendezvous(
        $scope.currentUser.businessId,
        request,
        function(data){
          $scope.rendezvous = data.rendezvous;
          $scope.message = data.message;
        },
        function(error){
          $scope.error = error;
        });
    };

  });
