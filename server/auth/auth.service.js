'use strict';

var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/environment');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var compose = require('composable-middleware');
var User = require('../api/user/user.model');
var Staff = require('../api/staff/staff.model');
var validateJwt = expressJwt({ secret: config.secrets.session });

/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 403
 */
function isAuthenticated() {
  return compose()
    
    // Validate jwt
    .use(function (req, res, next) {
      // allow access_token to be passed through query parameter as well
      if(req.query && req.query.hasOwnProperty('access_token')) {
        req.headers.authorization = 'Bearer ' + req.query.access_token;
      }
      validateJwt(req, res, next);
    })

    // Attach user to request
    .use(function (req, res, next) {
      User.findById(req.user._id, function (err, user) {
        if (err) return next(err);
        if (!user) return res.status(401).json({ message : 'Vous devez vous identifier pour accéder à cette ressource.' });
        req.user = user;

        // Attach the staff profile if existant  
        if(req.user.staffId){
          Staff.findById(req.user.staffId, function (err, staffFound){
            if (err) return next(err);
            if(!staffFound) return res.status(500).json({ message : 'Une erreur s\'est produite.' });
            req.staff = staffFound;
            //console.log('staff attached');
            next();
          });
        } else {
          //console.log('no staff attached');
          next();
        }
      });
    });
}

/**
 * Checks if the user role meets the minimum requirements of the route
 */
function hasRole(roleRequired) {
  if (!roleRequired) throw new Error('Required role needs to be set');

  return compose()
    .use(isAuthenticated())
    .use(function meetsRequirements(req, res, next) {

      var i = 0;
      var effectiveRole = 'user';
      do{
        if (config.userRoles.indexOf(req.user.roles[i]) === config.userRoles.indexOf(roleRequired)) {
          effectiveRole = req.user.roles[i];
          i++;
        } else {
          //effectiveRole = req.user.roles[i];
          i++;
        }
      }while(i <= (req.user.roles.length-1));

      //if (config.userRoles.indexOf(req.user.role) >= config.userRoles.indexOf(roleRequired)) {
      if (config.userRoles.indexOf(effectiveRole) === config.userRoles.indexOf(roleRequired)) {
        next();
      }
      else {
        //res.send(403);
        res.status(403).json({ message: 'Vous n\'avez pas l\'autorisation d\'exécuter cette action.' });
      }
    });
}

/**
* Checks if the staff can access this business ressource and there is a staff profile created
*/
function hasAccess(roleRequired){
    if (!roleRequired) throw new Error('Required role needs to be set');

    return compose()
      .use(hasRole(roleRequired))
      .use(function hasAccess(req,res,next){

        // if staff profile doesn't exist
        if(!req.staff){
          res.status(403).json({ message: 'Vous devez créer votre profil staff pour exécuter cette action.' }); 
        } 
        else {
          // Check if business id in params match business id in staff profile
          if (String(req.params.id) === String(req.staff.businessId)) {
            //console.log('auth ok');
            next();
          } 
          else {
            res.status(403).json({ message: 'Vous n\'avez pas l\'autorisation d\'exécuter cette action.' });
          }
        }

      });
}


/**
 * Returns a jwt token signed by the app secret
 */
function signToken(id) {
  return jwt.sign({ _id: id }, config.secrets.session, { expiresInMinutes: 60*30 });
}

/**
 * Set token cookie directly for oAuth strategies
 */
function setTokenCookie(req, res) {
  if (!req.user) return res.json(404, { message: 'Something went wrong, please try again.'});
  var token = signToken(req.user._id, req.user.role);
  res.cookie('token', JSON.stringify(token));
  res.redirect('/');
}

exports.isAuthenticated = isAuthenticated;
exports.hasRole = hasRole;
exports.hasAccess = hasAccess;
exports.signToken = signToken;
exports.setTokenCookie = setTokenCookie;