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
 * Creates a new user
 */
exports.create = function (req, res, next) {
  var newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.emailUser,
    dateOfBirth: req.body.dateOfBirth,
    password: req.body.password,
    phone: req.body.phoneUser,
    mobile: req.body.mobileUser,
    imageProfileURL: req.body.imageProfileURL
  });
  newUser.provider = 'local';
  newUser.roles = 'user';
  newUser.save(function(err, user) {
    if (err) return validationError(res, err);
    var token = jwt.sign({_id: user._id }, config.secrets.session, { expiresInMinutes: 60*5 });
    res.json({ token: token });
  });
};

/**
* Create a new user + business
*/
exports.createManager = function (req, res, next){
  var userID = '';
  var token = '';

  var newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.emailUser,
    dateOfBirth: req.body.dateOfBirth,
    password: req.body.password,
    phone: req.body.phoneUser,
    mobile: req.body.mobileUser,
    imageProfileURL: req.body.imageProfileURL
  });
  newUser.provider = 'local';
  newUser.roles = 'manager';
  newUser.save(function(err, user) {
    if (err) return validationError(res, err);
    token = jwt.sign({_id: user._id }, config.secrets.session, { expiresInMinutes: 60*5 });
    userID = user._id;
    //res.json({ token: token });
  });

  var newBusiness = new Business({
    name: req.body.nameBusiness,
    city: req.body.cityBusiness,
    zip: req.body.zipBusiness,
    street: req.body.streetBusiness,
    businessContact: {
      email: req.body.emailBusiness,
      phone: req.body.phoneBusiness,
      mobile: req.body.mobileBusiness,
      siteURL: req.body.siteBusiness,
      facebookURL: req.body.facebookURL
    },
    imageBusinessURL: req.body.imageBusinessURL
  });
  newBusiness.founder = userID;
  newBusiness.isActive = false;
  newBusiness.save(function(err, businessSaved){
    if (err) return next(err);
    return res.status(201).json({ message: 'Votre compte et votre salon ont été créés avec succès.', token: token }).end();
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
 * Get my info
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
 * Authentication callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('/');
};
