'use strict';

angular.module('tbApp')
  .controller('BusinessSchedulesCtrl', function ($scope, $log, Auth, Business) {
    $scope.schedules = {};
  	$scope.form = {};
  	$scope.user = {};
    $scope.modif=false;
  	$scope.add=false;
  	$scope.hover = '';
  	$scope.selection = '';

    function getSchedulesAndStaff(data){
      Business.getSchedules(
        data.businessId,
        function (data){
          $scope.schedules = data.horaires;
        },
        function (error){
          $scope.error = error;
        });

      Business.getStaffs(
        data.businessId,
        function (data){
          $scope.staffs = data.staffs;
        },
        function (error){
          $scope.error = error;
        });

    }

    // Initial call
    Auth.getCurrentUser(function (data){
    	$scope.user = data;
      return data;
    }).then(getSchedulesAndStaff);

  // Determine selection
   $scope.index = function(index){

   	var ids = [];
   	for (var i = $scope.schedules[index].staffs.length - 1; i >= 0; i--) {
   		ids.push($scope.schedules[index].staffs[i]._id);
   	}

   	$scope.selection = ids;
   	$log.debug($scope.selection);
    return $scope.selection;
   };


  // toggle selection for a given staffs by id
  $scope.toggleSelection = function toggleSelection(id) {

    var idx = $scope.selection.indexOf(id);

    // is currently selected
    if (idx > -1) {
      $scope.selection.splice(idx, 1);
    }

    // is newly selected
    else {
      $scope.selection.push(id);
    }

    $log.debug($scope.selection);

  };

  // Créer un tableau avec les heures possibles du formulaire de modification
  function createHourString (){
    var strMn = [
      '00', '15', '30', '45'
    ];
    var strHr = [
      '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11',
      '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'
    ];
    var str=[];

    for (var i = strHr.length; i > 0; i--) {
      for (var j = strMn.length; j > 0; j--) {
        str.push(String(strHr[strHr.length - i] + ':' + strMn[strMn.length - j]));
      }
    }

    return str;
  }

  $scope.options = createHourString();

  // Add a schedule
  $scope.addSchedule = function(data){
    $log.debug(data);
/*      Business.addSchedule(
      $scope.user.businessId,
      data,
      function(data){
        $scope.schedules = data.horaire;
      },
      function(error){
        $scope.error = error;
      }
    );*/
  };

  // Delete a schedule
  $scope.deleteSchedule = function(scheduleId){
    Business.deleteSchedule(
      $scope.user.businessId,
      scheduleId,
      function(data){
        $scope.schedules = data.horaire;
      },
      function(error){
        $scope.error = error;
      }
    );
  };

  $scope.updateSchedule = function(schedule){
    $log.debug(schedule);
  };

});
