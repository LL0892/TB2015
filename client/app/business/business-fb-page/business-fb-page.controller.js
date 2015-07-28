'use strict';

angular.module('tbApp')
  .controller('BusinessFbPageCtrl', function ($scope, ezfb, $q, $log, Auth, Business) {
    $scope.business = {};
    $scope.message = {};
    $scope.error = {};
    $scope.isConnected = false;

    function getMyBusiness(data){
      Business.showBusiness(
        data.businessId,
        function (data){
          $scope.business = data;
        },
        function (error){
          $scope.error = error;
        });
    }
    
    Auth.getCurrentUser(function (data){
      return data;
    }).then(getMyBusiness);


    /**
     * Subscribe to 'auth.statusChange' event to response to login/logout
     */
    ezfb.Event.subscribe('auth.statusChange', function (statusRes) {
      $scope.loginStatus = statusRes;

      updateMe();
      updateApiCall();
    });

    $scope.login = function () {
       ezfb.login(function () {
       }, {scope: 'email,user_likes,manage_pages,publish_pages'})
       .then(function (res) {
        
        //$log.debug(res);

        if (res.status !== 'connected') {
          $log.debug('pas connecté');
          $scope.isConnected = false;
        } else {
          $log.debug('connecté');
          $scope.isConnected = true;
        }

       });
    };

    $scope.logout = function () {

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
     * Send to the server the page id for further requests
     */
    $scope.sendPageId = function(pageId){
      var data = {
        fbPageId: pageId
      };

      Business.addPageId($scope.business._id,
        data,
        function(data){
          $scope.business = data.business;
          $scope.message = data.message;
        },
        function(error){
          $scope.error = error;
        });
    };

    /**
     * Add the page tab app to my business page
     * https://developers.facebook.com/docs/appsonfacebook/pagetabs
     */
    $scope.addApp = function(){
      ezfb.ui({
        method: 'pagetab',
        redirect_uri: 'https://directhaircut.ch/fb/rendezvous'
      }, 
      function(res){
        $log.debug(res);
      });
    };

    /**
     * Publish a link to my business page for mobile users
     */
    $scope.publishLink = function(pageId){
      var data = {
        message: 'test message',
        link: 'https://directhaircut.ch/'+$scope.business._id
      };

      ezfb.api('/' + pageId + '/feed',
        'POST',
        data,
        function(res){
          $log.debug(res);
        });
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
      .then(function () {
        return ezfb.api('/me');
      })
      .then(function (me) {
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
            //$log.debug(res);

            if (res.status !== 'connected') {
              $log.debug('pas connecté');
              $scope.isConnected = false;
            } else {
              $log.debug('connecté');
              $scope.isConnected = true;
            }

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
          $scope.apiRes = resList;
        });

    }

      
    updateMe();

    updateLoginStatus()
    .then(updateApiCall);
  });
