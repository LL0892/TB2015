'use strict';

angular.module('tbApp')
  .controller('MainCtrl', function ($scope, $http, $log, Urls, Auth, Business) {
    $scope.businesses = [];
    //$scope.currentUser = Auth.getCurrentUser;
    $scope.isLoggedIn = Auth.isLoggedIn;

    $http.get('/api/businesses').success(function(businesses){
      $scope.businesses = businesses;
    });


    Auth.getCurrentUser(function (data){
      return data;
    }).then(getFavorite);

    function getFavorite(user){
      $scope.currentUser = user;

      Business.showBusiness(
        $scope.currentUser.preferences.favorite,
        function (res){
          $scope.favoriteBusiness = res;
        },
        function (error){
          $scope.error = error;
        });
    }


    // Selection par defaut sur l'animation de click sur un salon
    $scope.selectedIndex = -1;
  
    // Change la selection de l'animation de click
    $scope.itemClicked = function ($index) {
      //console.log($index);
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
