/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /users              ->  index
 * GET     /users/me           ->  me
 * POST    /users/             ->  create
 * POST    /users/Manager      ->  createManager
 * GET     /users/:id          ->  show
 * DELETE  /users/:id          ->  destroy
 * PUT     /users/:id/password ->  changePassword
 */

'use strict';

var User = require('./user.model');
var Business = require('../business/business.model');

var passport = require('passport');
var config = require('../../config/environment');
var jwt = require('jsonwebtoken');

var validationError = function(res, err) {
  return res.json(422, err);
};

/**
 * Get list of users
 * restriction: 'admin'
 */
exports.index = function(req, res) {
  User.find({}, '-salt -hashedPassword', function (err, users) {
    if(err) return res.send(500, err);
    res.json(200, users);
  });
};

/**
* Get my profile
*/
exports.me = function(req, res, next) {
  var userId = req.user._id;
  User.findOne({
    _id: userId
  }, '-salt -hashedPassword', function(err, user) { // don't ever give out the password or salt
    if (err) return next(err);
    if (!user) return res.json(401);
    res.json(user);
  });
};

/**
* Creates a new user
*/
exports.create = function (req, res, next) {
  var newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    dateOfBirth: req.body.dateOfBirth,
    password: req.body.password,
    phone: req.body.phone,
    mobile: req.body.mobile,
    imageProfileURL: req.body.imageProfileURL,
    zip: req.body.zip,
    city: req.body.city,
    canton: req.body.canton,
    street: req.body.street
  });
  newUser.provider = 'local';
  newUser.roles = 'user';
  newUser.save(function(err, user) {
    if (err) return validationError(res, err);
    var token = jwt.sign({_id: user._id }, config.secrets.session, { expiresInMinutes: 60*15 });
    res.status(201).json({ token: token });
  });
};

/**
* Create a new user with manager roles
*/
exports.createManager = function (req, res, next){
  //var userID = '';
  var token = '';

  var newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    dateOfBirth: req.body.dateOfBirth,
    password: req.body.password,
    phone: req.body.phone,
    mobile: req.body.mobile,
    imageProfileURL: req.body.imageProfileURL,
    zip: req.body.zip,
    city: req.body.city,
    canton: req.body.canton,
    street: req.body.street
  });
  newUser.provider = 'local';
  newUser.roles = ['user', 'staff', 'manager'];
  newUser.save(function(err, user) {
    if (err) return validationError(res, err);
    token = jwt.sign({_id: user._id }, config.secrets.session, { expiresInMinutes: 60*15 });
    //userID = user._id;
    res.status(201).json({ token: token });
  });
};

/**
 * Get a single user
 * restriction: 'staff'
 */
exports.show = function (req, res, next) {
  var userId = req.params.id;

  User.findById(userId, function (err, user) {
    if (err) return next(err);
    if (!user) return res.send(401);
    res.json(user.profile);
  });
};

/**
 * Deletes a user
 * restriction: 'admin'
 */
exports.destroy = function(req, res, next) {
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if(err) return res.send(500, err);
    return res.send(204);
  });
};

/**
 * Change a users password
 */
exports.changePassword = function(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  User.findById(userId, function (err, user) {
    if(user.authenticate(oldPass)) {
      user.password = newPass;
      user.save(function(err) {
        if (err) return validationError(res, err);
        res.send(200);
      });
    } else {
      res.send(403);
    }
  });
};


/**
 * Authentication callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('/');
};
