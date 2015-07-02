/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /users                   ->  index
 * GET     /users/me                ->  me
 * PUT     /users/me                ->  update
 * POST    /users                   ->  create
 * POST    /users/manager           ->  createManager
 * GET     /users/:id               ->  show
 * DELETE  /users/:id               ->  destroy
 * PUT     /users/:id/password      ->  changePassword
 * PUT     /users/:id/email         ->  changeEmail
 * PUT     /users/:id/prefDisplay   ->  preferenceDisplay
 * PUT     /users/:id/prefFavorite  ->  preferenceFavorite
 */

'use strict';

var User = require('./user.model');

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
    return res.status(200).json({
      utilisateurs : users.profilePublic
    }).end();
  });
};

/**
* Get my profile (and staff profile when existant)
*/
exports.me = function(req, res, next) {
  var userId = req.user._id;
  User.findOne({
    _id: userId
  }, '-salt -hashedPassword', function (err, userFound) { // don't ever give out the password or salt
    if(err) return res.send(500, err);
    if(!userFound) return res.status(401).json({ message : 'Vous n\'êtes pas connecté.' }).end();

    return res.status(200).json(
      userFound.profilePrivate
      //staff: req.staff.profilePrivate
    ).end();
  });
};

/**
 * Update my user profile
 */
exports.update = function(req, res, next) {
  var userId = req.user._id;

  User.findById(userId, '-salt -hashedPassword', function (err, userFound){
    if(err) return res.send(500, err);
    if(!userFound) return res.status(401).json({ message : 'Vous n\'êtes pas connecté.' }).end();

    // Update datas
    userFound.firstName = req.body.firstName;
    userFound.lastName = req.body.lastName;
    //userFound.dateOfBirth = req.body.dateOfBirth;
    //userFound.gender = req.body.gender;
    userFound.phone = req.body.phone;
    userFound.mobile = req.body.mobile;
    userFound.city = req.body.city;
    userFound.street = req.body.street;
    userFound.canton = req.body.canton;
    userFound.zip = req.body.zip;
    userFound.imageProfileURL = req.body.imageProfileURL;

    userFound.save(function (err, userUpdated){
      if(err) return res.send(500, err);

      return res.status(200).json({
        message: 'Profil utilisateur modifié avec succès.'
      }).end();
    });
  
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
    gender: req.body.gender,
    password: req.body.password,
    phone: req.body.phone,
    mobile: req.body.mobile,
    imageProfileURL: req.body.imageProfileURL,
    zip: req.body.zip,
    city: req.body.city,
    canton: req.body.canton,
    street: req.body.street,
    preferences: {
      homeDisplay: 'list'
    },
    provider: 'local',
    roles : 'user'
  });
  //newUser.provider = 'local';
  //newUser.roles = 'user';
  newUser.save(function(err, user) {
    if (err) return validationError(res, err);
    var token = jwt.sign({_id: user._id }, config.secrets.session, { expiresInMinutes: 60*15 });
    return res.status(201).json({ token: token }).end();
  });
};

/**
* Create a new user with manager roles
*/
exports.createManager = function (req, res, next){
  var token = '';

  var newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender,
    password: req.body.password,
    phone: req.body.phone,
    mobile: req.body.mobile,
    imageProfileURL: req.body.imageProfileURL,
    zip: req.body.zip,
    city: req.body.city,
    canton: req.body.canton,
    street: req.body.street,
    preferences: {
      homeDisplay: 'list'
    },
    provider: 'local',
    roles: ['user', 'staff', 'manager']
  });
  //newUser.provider = 'local';
  //newUser.roles = ['user', 'staff', 'manager'];
  newUser.save(function(err, user) {
    if (err) return validationError(res, err);
    token = jwt.sign({_id: user._id }, config.secrets.session, { expiresInMinutes: 60*15 });
    return res.status(201).json({ token: token }).end();
  });
};

/**
 * Get a single user
 */
exports.show = function (req, res, next) {
  var userId = req.params.id;

  User.findById(userId, function (err, user) {
    if(err) return res.send(500, err);
    if (!user) return res.send(401);
    return res.status(200).json({
      utilisateur : user.profilePublic
    }).end();
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
        return res.status(200).json({
          message : 'Votre mot de passe a été changé avec succès.'
        }).end();
      });
    } else {
      res.send(403);
    }
  });
};

/**
 * Change a user email
 */
exports.changeEmail = function(req, res, next) {
  var userId = req.user._id;
  var newEmail = req.body.email;

  User.findById(userId, function (err, userFound) {
    if(err) return res.send(500, err);

    userFound.email = newEmail;
    userFound.save(function (err){
      if (err) return validationError(res, err);
      return res.status(200).json({
        message : 'Votre email a été changé avec succès.'
      }).end();
    })
  });
};

/**
* Update my home display preferences
* UNUSED IN UI
*/
exports.preferenceDisplay = function(req, res, next) {
  var userId = req.user._id;

  User.findById(userId, function (err, userFound){
    if(err) return res.send(500, err);

    userFound.preferences.homeDisplay = req.body.homeDisplay;
    userFound.save(function (err, userUpdated){
      if (err) next(err);
      return res.status(200).json({
        message: 'Vos préférences d\'affichage de l\'accueil ont été mises à jours avec succès.'
      }).end();
    });
  });
};

/**
* Update my home display preferences
* UNUSED IN UI
*/
exports.preferenceFavorite = function(req, res, next){
  var userId = req.user._id;

  User.findById(userId, function (err, userFound){
    if(err) return res.send(500, err);

    userFound.preferences.favorite = req.body.businessId;
    userFound.save(function (err, userUpdated){
      if (err) next(err);
      return res.status(200).json({
        message: 'Votre salon favoris ont été mit à jours avec succès.'
      }).end();
    });
  });
}

/**
 * Authentication callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('/');
};