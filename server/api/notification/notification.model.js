'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NotificationSchema = new Schema({
	createdOn: { type: Date, default: Date.now },
  	updatedOn: { type: Date, default: Date.now },

  	title: { type: String, required: true },
  	text: { type: String, required: true },

  	sentBy : { type: Schema.Types.ObjectId, ref: 'user', required: true },
  	sentTo : { type: Schema.Types.ObjectId, ref: 'user', required: true },

  	isViewed : { type: Boolean, default: '0' },
  	status: { type: String, default: 'not processed' },
  	relatedToBusiness: { type: Schema.Types.ObjectId, ref: 'business' } 
});

module.exports = mongoose.model('Notification', NotificationSchema);
