'use strict';

angular.module('tbApp')
  .controller('MainCtrl', function ($scope, $http, ezfb, $q, $log, Urls, Auth) {
    $scope.businesses = [];
    $scope.currentUser = Auth.getCurrentUser();

    $http.get('/api/businesses').success(function(businesses){
      $scope.businesses = businesses;

      //$log.debug(Urls.client);
      for (var i = $scope.businesses.length - 1; i >= 0; i--) {
        $scope.businesses[i].imageBusinessUrl = Urls.client + $scope.businesses[i].imageBusinessUrl;
        console.log($scope.business[i].imageBusinessUrl);
      };
    });

    // Selection par defaut sur l'animation de click sur un salon
    $scope.selectedIndex = -1;
  
    // Change la selection de l'animation de click
    $scope.itemClicked = function ($index) {
      //console.log($index);
      $scope.selectedIndex = $index;
    }


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
    }



  
  updateMe();

  updateLoginStatus()
  .then(updateApiCall);

  /**
   * Subscribe to 'auth.statusChange' event to response to login/logout
   */
  ezfb.Event.subscribe('auth.statusChange', function (statusRes) {
    $scope.loginStatus = statusRes;

    updateMe();
    updateApiCall();
  });

  $scope.login = function () {
    /**
     * Calling FB.login with required permissions specified
     * https://developers.facebook.com/docs/reference/javascript/FB.login/v2.0
     */
    //ezfb.login(null, {scope: 'email,user_likes'});

    /**
     In the case you need to use the callback
    */
     ezfb.login(function (res) {
     }, {scope: 'email,user_likes,user_location, user_birthday'})
     .then(function (res) {
       // Executes 2
     });
  };

  $scope.logout = function () {
    /**
     * Calling FB.logout
     * https://developers.facebook.com/docs/reference/javascript/FB.logout
     */
    ezfb.logout();

    /**
     * In the case you need to use the callback
     *
     * ezfb.logout(function (res) {
     *   // Executes 1
     * })
     * .then(function (res) {
     *   // Executes 2
     * })
     */
  };

  /**
   * For generating better looking JSON results
   */
  var autoToJSON = ['loginStatus', 'apiRes']; 
  angular.forEach(autoToJSON, function (varName) {
    $scope.$watch(varName, function (val) {
      $scope[varName + 'JSON'] = JSON.stringify(val, null, 2);
    }, true);
  });
  
  /**
   * Update api('/me') result
   */
  function updateMe () {
    ezfb.getLoginStatus()
    .then(function (res) {
      // res: FB.getLoginStatus response
      // https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus
      return ezfb.api('/me');
    })
    .then(function (me) {
      // me: FB.api('/me') response
      // https://developers.facebook.com/docs/javascript/reference/FB.api
      $scope.me = me;
      $log.debug($scope.me);
    });
  }
  
  /**
   * Update loginStatus result
   */
  function updateLoginStatus () {
    return ezfb.getLoginStatus()
      .then(function (res) {
        // res: FB.getLoginStatus response
        // https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus
        $scope.loginStatus = res;
      });
  }

  /**
   * Update demostration api calls result
   */
  function updateApiCall () {
    return $q.all([
        ezfb.api('/me'),
        ezfb.api('/me/likes')
      ])
      .then(function (resList) {
        // Runs after both api calls are done
        // resList[0]: FB.api('/me') response
        // resList[1]: FB.api('/me/likes') response
        $scope.apiRes = resList;
      });

  }

  });
