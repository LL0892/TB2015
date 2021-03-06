'use strict';

angular.module('tbApp')
  .factory('Auth', function Auth($http, User, $cookieStore, $q) {
    /**
     * Return a callback or noop function
     *
     * @param  {Function|*} cb - a 'potential' function
     * @return {Function}
     */
    var safeCb = function(cb) {
      return (angular.isFunction(cb)) ? cb : angular.noop;
    },

    currentUser = {};

    if ($cookieStore.get('token')) {
      currentUser = User.get();
    }
    
    return {

      /**
       * Authenticate user and save token
       *
       * @param  {Object}   user     - login info
       * @param  {Function} callback - optional, function(error)
       * @return {Promise}
       */
      login: function(user, callback) {
        return $http.post('/auth/local', {
          email: user.email,
          password: user.password
        })
        .then(function(res) {
          $cookieStore.put('token', res.data.token);
          currentUser = User.get();
          safeCb(callback)();
          return res.data;
        }, function(err) {
          this.logout();
          safeCb(callback)(err.data);
          return $q.reject(err.data);
        }.bind(this));
      },

      /**
       * Delete access token and user info
       */
      logout: function() {
        $cookieStore.remove('token');
        currentUser = {};
      },

      /**
       * Create a new user
       *
       * @param  {Object}   user     - user info
       * @param  {Function} callback - optional, function(error, user)
       * @return {Promise}
       */
      createUser: function(user, callback) {
        return User.save(user,
          function(data) {
            $cookieStore.put('token', data.token);
            currentUser = User.get();
            return safeCb(callback)(null, user);
          },
          function(err) {
            this.logout();
            return safeCb(callback)(err);
          }.bind(this)).$promise;
      },

      /**
       * Create a new user manager
       *
       * @param  {Object}   user     - user info
       * @param  {Function} callback - optional, function(error, user)
       * @return {Promise}
       */
      createManager: function(user, callback) {
        return User.createManager(user,
          function(data) {
            $cookieStore.put('token', data.token);
            currentUser = User.get();
            return safeCb(callback)(null, user);
          },
          function(err) {
            this.logout();
            return safeCb(callback)(err);
          }.bind(this)).$promise;
      },

      /**
       * Change password
       *
       * @param  {String}   oldPassword
       * @param  {String}   newPassword
       * @param  {Function} callback    - optional, function(error, user)
       * @return {Promise}
       */
      changePassword: function(oldPassword, newPassword, callback) {
        return User.changePassword({ id: currentUser._id }, {
          oldPassword: oldPassword,
          newPassword: newPassword
        }, function(user) {
          return safeCb(callback)(null, user);
        }, function(err) {
          return safeCb(callback)(err);
        }).$promise;
      },

      /**
       * Gets all available info on a user
       *   (synchronous|asynchronous)
       *
       * @param  {Function|*} callback - optional, funciton(user)
       * @return {Object|Promise}
       */
      getCurrentUser: function(callback) {
        if (arguments.length === 0) {
          return currentUser;
        }

        var value = (currentUser.hasOwnProperty('$promise')) ? currentUser.$promise : currentUser;
        return $q.when(value)
          .then(function(user) {
            safeCb(callback)(user);
            return user;
          }, function() {
            safeCb(callback)({});
            return {};
          });
      },

      /**
       * Check if a user is logged in
       *   (synchronous|asynchronous)
       *
       * @param  {Function|*} callback - optional, function(is)
       * @return {Bool|Promise}
       */
      isLoggedIn: function(callback) {
        if (arguments.length === 0) {
          return currentUser.hasOwnProperty('roles');
        }

        return this.getCurrentUser(null)
          .then(function(user) {
            var is = user.hasOwnProperty('roles');
            safeCb(callback)(is);
            return is;
          });
      },

       /**
        * Check if a user is an staff
        *   (synchronous|asynchronous)
        *
        * @param  {Function|*} callback - optional, function(is)
        * @return {Bool|Promise}
        */
      isStaff: function(callback) {
        if (arguments.length === 0) {
          if (currentUser.roles === undefined) {
            return false;
          }

          var res = currentUser.roles.indexOf('staff');
          if (res === -1) {
            res = false;
          }

          return res;
        }

        return this.getCurrentUser(null)
          .then(function(user) {
            if (user.roles === undefined) {
              return false;
            }
            var is = user.roles.indexOf('staff');
            safeCb(callback)(is);
            
            if (is === -1) {
              is = false;
            }

            return is;
          });
      },

       /**
        * Check if a user is an manager
        *   (synchronous|asynchronous)
        *
        * @param  {Function|*} callback - optional, function(is)
        * @return {Bool|Promise}
        */
      isManager: function(callback) {
        if (arguments.length === 0) {
          if (currentUser.roles === undefined) {
            return false;
          }

          var res = currentUser.roles.indexOf('manager');
          if (res === -1) {
            res = false;
          }

          return res;
        }

        return this.getCurrentUser(null)
          .then(function(user) {
            if (user.roles === undefined) {
              return false;
            }
            var is = user.roles.indexOf('manager');
            safeCb(callback)(is);
            
            if (is === -1) {
              is = false;
            }

            return is;
          });
      },

      /**
      * Check if a user already created a business
      */
      isBusinessCreated: function(){
        
        if (currentUser.roles === undefined) {
          return false;
        }

        var res = currentUser.roles.indexOf('manager');
        if (res === -1) {
          return false;
        }

        if (res) {
        var business = currentUser.businessId;
          if (business === undefined) {
            return true;
          }else{
            return false;
          }
        } else {
          return false;
        }

      },


      /**
      * Check if a user already created a staff profile
      */
      isStaffCreated: function(){

        if (currentUser.roles === undefined) {
          return false;
        }

        var res = currentUser.roles.indexOf('staff');
        if (res === -1) {
          return false;
        }

        if (res) {
        var staffProfile = currentUser.staffId;
          if (staffProfile === undefined) {
            return true;
          }else{
            return false;
          }
        } else {
          return false;
        }

      },

      /**
       * Get auth token
       *
       * @return {String} - a token string used for authenticating
       */
      getToken: function() {
        return $cookieStore.get('token');
      }
    };
  });