'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');
var authTypes = ['github', 'twitter', 'facebook', 'google'];
var Staff = require('../staff/staff.model');
var Business = require('../business/business.model');

// User Schema
var UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, enum: ['homme', 'femme'], required: true },
  
  roles: { type: [String], default: 'user', enum: ['user', 'staff', 'manager', 'admin'] },
  hashedPassword: String,
  provider: String,
  salt: String,
  facebook: {},
  google: {},
  github: {},

  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now },

  staffId: { type: Schema.Types.ObjectId, ref: 'staff'},
  businessId: { type: Schema.Types.ObjectId, ref: 'business'},
  phone: { type : String, default: '' },
  mobile: { type : String, default: '' },
  city: { type : String, default: '' },
  street: { type : String, default: '' },
  canton: { type : String, default: '' },
  zip: { type : Number, default: '' },
  imageProfileURL: { type : String, default : 'userProfile.png' },
  
/*  stats: {
    nbRdvDone: { type: Number, default: '0' },
    nbRdvMissed: { type: Number, default: '0' },
    nbRdvCancelled: { type: Number, default: '0' },
    nbRdvMoved: { type: Number, default: '0' },
    lastRdv: { type: Date }
  },*/

/*  preferences: {
    homeDisplay: { type: String, enum: ['list', 'fav', 'dual'], default: 'list' },
    favorite : { type: Schema.Types.ObjectId, ref: 'business' }
  }*/
});

/**
 * Virtuals
 */
UserSchema
  .virtual('password')
  .set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashedPassword = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  });

// Public profile information
UserSchema
  .virtual('profilePublic')
  .get(function() {
    return {
      '_id': this._id,
      'name': this.fullname,
      'email': this.email,
      'age': this.age,
      'gender': this.gender,
      'phone': this.phone,
      'mobile': this.mobile,
      'city': this.city,
      'street': this.street,
      'canton': this.canton,
      'zip': this.zip,
      'imageProfileUrl': this.imageProfileURL,
    };
  });

// Private profile information
UserSchema
  .virtual('profilePrivate')
  .get(function() {
    return {
      '_id': this._id,
      'name': this.fullname,
      'email': this.email,
      'age': this.age,
      'gender': this.gender,
      'phone': this.phone,
      'mobile': this.mobile,
      'city': this.city,
      'street': this.street,
      'canton': this.canton,
      'zip': this.zip,
      'imageProfileUrl': this.imageProfileURL,
      'roles': this.roles,
      'businessId': this.businessId
      //'preferences': this.preferences
    };
  });


// User fullname
UserSchema
  .virtual('fullname')
  .get(function(){
    return this.firstName + ' ' + this.lastName;
  });

// User age
UserSchema
  .virtual('age')
  .get(function(){
    var birth = this.dateOfBirth,
        now = new Date();
    var age = ((now - birth) / 31536000000).toFixed(1);
    age = Math.floor(age);
    return age;
  });

// Non-sensitive info we'll be putting in the token
UserSchema
  .virtual('token')
  .get(function() {
    return {
      '_id': this._id,
      'roles': this.roles
    };
  });

/**
 * Validations
 */

// Validate empty email
UserSchema
  .path('email')
  .validate(function(email) {
    if (authTypes.indexOf(this.provider) !== -1) return true;
    return email.length;
  }, 'Email cannot be blank');

// Validate empty password
UserSchema
  .path('hashedPassword')
  .validate(function(hashedPassword) {
    if (authTypes.indexOf(this.provider) !== -1) return true;
    return hashedPassword.length;
  }, 'Password cannot be blank');

// Validate email is not taken
UserSchema
  .path('email')
  .validate(function(value, respond) {
    var self = this;
    this.constructor.findOne({email: value}, function(err, user) {
      if(err) throw err;
      if(user) {
        if(self.id === user.id) return respond(true);
        return respond(false);
      }
      respond(true);
    });
}, 'The specified email address is already in use.');


var validatePresenceOf = function(value) {
  return value && value.length;
};

// Validate staff exist
UserSchema
  .path('staffId')
  .validate(function(value, respond) {
    var self = this;
    Staff.findOne({_id: value}, function (err, staffExists){
      if(err) throw err;
      if(!staffExists) {
        return respond(false);
      }
      respond(true);
    });
  }, 'Staff non existant.');

// Validate business exist
UserSchema
  .path('businessId')
  .validate(function(value, respond) {
    var self = this;
    Business.findOne({_id: value}, function (err, businessExists){
      if(err) throw err;
      if(!businessExists) {
        return respond(false);
      }
      respond(true);
    });
  }, 'Salon non existant.');

/**
 * Pre-save hook
 */
UserSchema
  .pre('save', function(next) {
    this.updatedOn = Date.now();
    
    if (!this.isNew) return next();

    if (!validatePresenceOf(this.hashedPassword) && authTypes.indexOf(this.provider) === -1)
      next(new Error('Invalid password'));
    else
      next();
  });

UserSchema
  .pre('update', function (next){
    this.updatedOn = Date.now();
    next();
  });

/**
 * Methods
 */
UserSchema.methods = {
  /**
   * Authenticate - check if the passwords are the same
   *
   * @param {String} plainText
   * @return {Boolean}
   * @api public
   */
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashedPassword;
  },

  /**
   * Make salt
   *
   * @return {String}
   * @api public
   */
  makeSalt: function() {
    return crypto.randomBytes(16).toString('base64');
  },

  /**
   * Encrypt password
   *
   * @param {String} password
   * @return {String}
   * @api public
   */
  encryptPassword: function(password) {
    if (!password || !this.salt) return '';
    var salt = new Buffer(this.salt, 'base64');
    return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
  }
};

module.exports = mongoose.model('User', UserSchema);
