'use strict';

angular.module('tbApp')
  .controller('MainCtrl', function ($scope, $http, ezfb, $q, $log) {
    $scope.busiesses = [];

    $http.get('/api/businesses').success(function(businesses){
      $scope.businesses = businesses;
    });

  
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
     })
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
