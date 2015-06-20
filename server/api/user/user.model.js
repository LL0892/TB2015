'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');
var authTypes = ['github', 'twitter', 'facebook', 'google'];

// User Schema
var UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  dateOfBirth: { type: Date, required: false },
  
  roles: { type: [String], default: 'user', enum: ['user', 'staff', 'founder', 'admin'] },
  hashedPassword: String,
  provider: String,
  salt: String,
  facebook: {},
  google: {},
  github: {},

  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now },

  staff: { type: Schema.Types.ObjectId, ref: 'staff'},
  phone: { type : String, default: '' },
  mobile: { type : String, default: '' },
  city: { type : String, default: '' },
  street: { type : String, default: '' },
  canton: { type : String, default: '' },
  zip: { type : Number, default: '' },
  imageProfileURL: { type : String, default : 'userProfile.png' },
  
  stats: {
    nbRdvDone: { type: Number, default: '0' },
    nbRdvMissed: { type: Number, default: '0' },
    nbRdvCancelled: { type: Number, default: '0' },
    nbRdvMoved: { type: Number, default: '0' },
    lastRdv: { type: Date }
  }
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
  .virtual('profile')
  .get(function() {
    return {
      'name': this.name,
      'roles': this.roles
    };
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

// Validate existing Staff Profile ID
UserSchema
  .path('staff')
  .validate(function(value, respond) {
    var self = this;
    this.constructor.findOne({_id: value}, function (){
      if (err) throw err;
      if(err || !doc) {
        return respond(false);
      } else {
        return respond(true);
      }
    });
  }, 'Staff non existant.');


var validatePresenceOf = function(value) {
  return value && value.length;
};

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
