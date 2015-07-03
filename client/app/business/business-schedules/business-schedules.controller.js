'use strict';

angular.module('tbApp')
  .controller('BusinessSchedulesCtrl', function ($scope, Auth, Business) {
  	$scope.schedules = {};
  	$scope.user = {};
  	$scope.modif=false;
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
          	$scope.schedules[i].staffs.push(staff);
          	$scope.schedules[i].staffs.push(staff2);
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

    
    Auth.getCurrentUser(function (data){
    	$scope.user = data;
      return data;
    }).then(getSchedulesAndStaff);


 $scope.index = function(index){

 	var ids = [];
 	for (var i = $scope.schedules[index].staffs.length - 1; i >= 0; i--) {
 		ids.push($scope.schedules[index].staffs[i]._id)
 	};

 	$scope.selection = ids;
 	//console.log($scope.selection);
 }


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

    //console.log($scope.selection);

  };

  $scope.options = createHourString();

  // Créer un tableau avec les heures possibles du formulaire de modification
  function createHourString (){
	  var minutes = 0;
	  var heures = 0;
	  var string = [];
	  do{
	  	do{

	  		string.push(String(heures+':'+minutes));

	  		minutes += 5;
	  	}while(minutes < 60);
	  	minutes = 0;
	  	heures += 1;
	  }while(heures < 24);
	  //console.log(string);
	  return string;
  };











  });
