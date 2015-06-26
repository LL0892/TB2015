'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require('../user/user.model');

var NotificationSchema = new Schema({
	createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now },

	title: { type: String, required: true },
	text: { type: String, required: true },

	sentBy : { 
    emitterId : { type: Schema.Types.ObjectId, ref: 'user', required: true },
    emitterName : { type: String, required: true }
  },
	sentTo : { type: Schema.Types.ObjectId, ref: 'user', required: true },

	isViewed : { type: Boolean, default: false },
	status: { type: String, default: 'not processed' },

  business : {
    businessId: { type: Schema.Types.ObjectId, ref: 'business', required: true },
    businessName: { type: String, required: true }
  }
});

module.exports = mongoose.model('Notification', NotificationSchema);

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

/*NotificationSchema.pre('save', function (next) {
  var self = this;
  User.find({_id : self.sentTo}, function (err, userExists) {
      if (!userExists.length){
        next(new Error('Le recepteur n\'existe pas!'));
      }else{                
        next();
      }
  });
});*/

/*
* Validations
*/

// Validate sentTo field is existant
NotificationSchema
  .path('sentTo')
  .validate(function(value, respond) {
    var self = this;
    User.findOne({_id : self.sentTo}, function(err, userExists) {
      if(err) throw err;
      if(!userExists) {
        return respond(false);
      }
      respond(true);
    });
}, 'Le recepteur n\'existe pas.');