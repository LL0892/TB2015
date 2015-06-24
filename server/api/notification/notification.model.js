'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

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