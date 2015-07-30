'use strict';

angular.module('tbApp')
  .controller('MainCtrl', function ($scope, $http, $log, $state, $cookies, Urls, Auth, Business) {

    // initialiser $scopes
    $scope.businesses = [];
    $scope.isLoggedIn = Auth.isLoggedIn;
    //$scope.currentUser = Auth.getCurrentUser;



    /*
    * Appel à l'initialisation du controller
    * Si le cookie 'page-id' existe, cela signifie que l'app facebook a été appelée coté serveur
    * On redirige l'utilisateur sur la page de l'app
    */
    function init (){
      if ($cookies.get('page-id')) {
        $state.go('fb.step1');
      } else{

        $http.get('/api/businesses').success(function(businesses){
          $scope.businesses = businesses;
        });

        Auth.getCurrentUser(function (data){
          return data;
        }).then(getFavorite);

      }
    }

    // Initialisation du controller
    init();

    // Charge le salon favori
    function getFavorite(user){
      $scope.currentUser = user;

      if ($scope.currentUser.preferences.favorite !== undefined) {
        $log.debug($scope.currentUser.preferences.favorite);
        Business.showBusiness(
          $scope.currentUser.preferences.favorite,
          function (res){
            $scope.favoriteBusiness = res;
          },
          function (error){
            $scope.error = error;
          });
      }
      
    }

    // Selection par defaut sur l'animation de click sur un salon
    $scope.selectedIndex = -1;
  
    // Change la selection de l'animation de click
    $scope.itemClicked = function ($index) {
      //$log.debug($index);
      $scope.selectedIndex = $index;
    };

    $scope.fav = function(businessId){
      $http.put(
        Urls.api + 'users/' + $scope.currentUser._id + '/prefFavorite',
        {businessId: businessId},
        function (data){
          return data;
        },
        function (error){
          return error;
        });
    };


  });
