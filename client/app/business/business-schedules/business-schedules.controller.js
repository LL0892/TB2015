'use strict';

angular.module('tbApp')
  .controller('BusinessSchedulesCtrl', function ($scope, Auth, Business) {
    $scope.schedules = {};
  	$scope.form = {};
  	$scope.user = {};
    $scope.modif=false;
  	$scope.add=false;
  	$scope.hover = '';
  	$scope.selection = '';


  	var staff = {'name': 'Test staff', '_id': '5591b95eaa39a54415a53bfb'};
  	var staff2 = {'name': 'Admin Staff', '_id': '558d5010a91e997c16c3c457'};

    function getSchedulesAndStaff(data){
      Business.getSchedules(
        data.businessId,
        function (data){
          $scope.schedules = data.horaires;
          for (var i = $scope.schedules.length - 1; i >= 0; i--) {
          	//$scope.schedules[i].staffs.push(staff);
          	//$scope.schedules[i].staffs.push(staff2);
          };
          //console.log($scope.schedules);
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
   	};

   	$scope.selection = ids;
   	console.log($scope.selection);
    return $scope.selection;
   }


  // toggle selection for a given staffs by id
  $scope.toggleSelection = function toggleSelection(id, parentIndex, index) {

    var idx = $scope.selection.indexOf(id);

    // is currently selected
    if (idx > -1) {
      $scope.selection.splice(idx, 1);
    }

    // is newly selected
    else {
      $scope.selection.push(id);
    }

    console.log($scope.selection);

  };

  $scope.options = createHourString();

  // Créer un tableau avec les heures possibles du formulaire de modification
  function createHourString (){
    var mn = 0;
    var hr = 0;
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
        str.push(String(strHr[strHr.length - i] + ":" + strMn[strMn.length - j]));
      };
    };

    return str;
  };

  // Add a schedule
  $scope.addSchedule = function(data){
    console.log(data);
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
    console.log(schedule);
  }

});
