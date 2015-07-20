'use strict';

angular.module('tbApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ngAnimate',
  'ezfb',
  'LocalStorageModule',
  'ui.calendar'
])
  .constant('Urls', {
    client: '/assets/images/',
    api: 'http://localhost:9000/api/',
    img: 'http://localhost:9000/server/img/'
  })

  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })

  // Facebook plugin config
  .config(function (ezfbProvider) {
    ezfbProvider.setInitParams({
      appId: '1435864036716003',
      version: 'v2.3'
    }); 
    ezfbProvider.setLocale('fr_CH'); 
  })

  // Local storage config
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('tb2015')
      .setStorageType('localStorage')
      .setNotify(true, true);
  })


  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      //Auth.isLoggedInAsync(function(loggedIn) {
      Auth.isLoggedIn(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });