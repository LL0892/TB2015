'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Staff = require('../staff/staff.model'),
    User = require('../user/user.model'),
    Business = require('../business/business.model');

var NotificationSchema = new Schema({
	createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now },

	title: { type: String, required: true },
	text: { type: String, required: true },

	sentBy : { 
    emitterId : { type: Schema.Types.ObjectId, ref: 'staff', required: true },
    emitterName : { type: String, required: true }
  },
	sentTo : {
    receptorId : { type: Schema.Types.ObjectId, ref: 'user', required: true },
    receptorName: { type: String, required: true }
  },

	isViewed : { type: Boolean, default: false },
	status: { type: String, default: 'not processed' },

  business : {
    businessId: { type: Schema.Types.ObjectId, ref: 'business', required: true },
    businessName: { type: String, required: true }
  }
});

/**
 * Virtuals
 */

// Private notification information (user-oriented)
NotificationSchema
  .virtual('profileUser')
  .get(function() {
    return {
      '_id': this._id,
      'title': this.title,
      'text': this.text,
      'emitterName': this.sentBy.emitterName,
      'receptorName': this.sentTo.receptorName,
      'businessName': this.business.businessName,
      'businessId': this.business.businessId,
      'isViewed': this.isViewed,
      'status': this.status
    };
  });

// Public notification information (staff-oriented)
NotificationSchema
  .virtual('profileStaff')
  .get(function() {
    return {
      '_id': this._id,
      'title': this.title,
      'text': this.text,
      'emitterName': this.sentBy.emitterName,
      'emitterId': this.sentBy.emitterId,
      'receptorName': this.sentTo.receptorName,
      'receptorId': this.sentTo.receptorId,
      'status': this.status,
      'createdOn': this.createdOn
    };
  });

/*
* Pre-save hook
*/
NotificationSchema
  .pre('save', function (next){
    this.updatedOn = Date.now();
    next();
  });

NotificationSchema
  .pre('update', function (next){
    this.updatedOn = Date.now();
    next();
  });

/*
* Validations
*/

// Validate receptor exists
NotificationSchema
  .path('sentTo.receptorId')
  .validate(function(value, respond) {
    var self = this;
    User.findOne({_id : value}, function (err, userExists) {
      if(err) throw err;
      if(!userExists) {
        return respond(false);
      }
      respond(true);
    });
}, 'Le recepteur n\'existe pas.');

// Validate emitter exists
NotificationSchema
  .path('sentBy.emitterId')
  .validate(function(value, respond) {
    var self = this;
    Staff.findOne({_id : value}, function (err, staffExists) {
      if(err) throw err;
      if(!staffExists) {
        return respond(false);
      }
      respond(true);
    });
}, 'Le staff n\'existe pas.');

// Validate emitter is existant
NotificationSchema
  .path('business.businessId')
  .validate(function(value, respond) {
    var self = this;
    Business.findOne({_id : value}, function (err, staffExists) {
      if(err) throw err;
      if(!staffExists) {
        return respond(false);
      }
      respond(true);
    });
}, 'Le salon n\'existe pas.');

module.exports = mongoose.model('Notification', NotificationSchema);