'use strict';

angular.module('tbApp')
  .controller('BusinessSchedulesCtrl', function ($scope, $log, Auth, Business) {
    $scope.schedules = {};
  	$scope.form = {};
  	$scope.user = {};
    $scope.edit = {};

    // Etats de formulaires
    $scope.modif=false;
  	$scope.add=false;
  	//$scope.selection = '';

    function getSchedulesAndStaff(data){
      Business.getSchedules(
        data.businessId,
        function (data){
          $scope.schedules = data.horaires;
        },
        function (error){
          $log.debug = error;
        });

      Business.getStaffs(
        data.businessId,
        function (data){
          $scope.staffs = data.staffs;
        },
        function (error){
          $log.debug = error;
        });

    }

    // Initial call
    Auth.getCurrentUser(function (data){
    	$scope.user = data;
      return data;
    }).then(getSchedulesAndStaff);

  // Determine selection
/*   $scope.index = function(index){

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

  };*/

  // Créer un tableau avec les heures possibles du formulaire de modification
  function createHourString (){
    var strMn = [
      '00', '15', '30', '45'
    ];
    var strHr = [
      '06', '07', '08', '09', '10', '11',
      '12', '13', '14', '15', '16', '17', '18', '19'
    ];
    var str=[];

    for (var i = strHr.length; i > 0; i--) {
      for (var j = strMn.length; j > 0; j--) {
        str.push(String(strHr[strHr.length - i] + ':' + strMn[strMn.length - j]));
      }
    }

    return str;
  }

  // Initialisation des options de liste déroulantes
  $scope.options = createHourString();
  $scope.optionsDay = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
  $scope.optionsWorkingDay = [{'value': true, 'label': 'Oui'}, {'value': false, 'label': 'non'}];

  // Ajout d'une tranche horaire
  $scope.addSchedule = function(data){
    var formIsValid = true;

    if (data.description === undefined) {
      formIsValid = false;
    }

    if (data.startHour === '' && data.workingDay !== false) {
      formIsValid = false;
    }

    if (data.endHour === '' && data.workingDay !== false) {
      formIsValid = false;
    }

    if(data.dayName === ''){
      formIsValid = false;
    }

    if (data.workingDay === '') {
      formIsValid = false;
    }

    var indexStart = giveIndex(data.startHour);
    var indexEnd = giveIndex(data.endHour);
    $log.debug(data.startHour < data.endHour);
    if (indexStart >= indexEnd  && data.workingDay !== false) {
      formIsValid = false;
    }

    if (formIsValid) {
      Business.addSchedule(
        $scope.user.businessId,
        data,
        function(data){
          $log.debug(data);
          $scope.schedules = data.horaires;

          // Réinitilise l'état et le contenu du formulaire
          $scope.form = null;
          $scope.add = false;
          formIsValid = null;
        },
        function(error){
          $log.debug = error;
        }
      );
    }else{
      $scope.invalidForm = 'Formulaire invalide.';
    }

  };

  // Retourne la position d'une string dans un tableau
  function giveIndex(string){
    var index = 0;
    for (var i = $scope.options.length - 1; i >= 0; i--) {
      if ($scope.options[i] === string) {
        index = i;
      }
    }
    return index;
  }

  // Supprimer une tranche horaire
  $scope.deleteSchedule = function(scheduleId){

    // Suppression de l'interface
    for (var i = $scope.schedules.length - 1; i >= 0; i--) {
      if ($scope.schedules[i]._id === scheduleId) {
        $scope.schedules.splice(i, 1);
      }
    }
    
    // Suppression de la base de données
    Business.deleteSchedule(
      $scope.user.businessId,
      scheduleId,
      function(data){
        // rien à faire ici
      },
      function(error){
        $log.debug = error;
      }
    );
  };

  // Copie le contenu de la tranche horaire dans un scope pour l'édition
  $scope.editSchedule = function(schedule){
      angular.copy(schedule, $scope.edit);
      //$log.debug($scope.edit);
  };

  // Mettre à jour la tranche horaire
  $scope.updateSchedule = function(schedule, index){

    // Données à envoyer
    var data = {
      'dayName': schedule.dayName,
      'description': schedule.description,
      'startHour': schedule.startHour,
      'endHour': schedule.endHour,
      'workingDay': schedule.workingDay
    };

    // Ajout à la base de données et ui
    Business.updateSchedule(
      $scope.user.businessId,
      schedule._id,
      data,
      function(data){
        //$log.debug(data);
        $scope.schedules[index] = data.horaire;
      },
      function(error){
        $log.debug(error);
      }
    );
  };

});
