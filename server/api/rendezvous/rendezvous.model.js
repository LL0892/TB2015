'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/*
* Schema
*/

var RendezvousSchema = new Schema({
	createdOn: { type: Date, default: Date.now },
	updatedOn: { type: Date, default: Date.now },

	date: { type: Date, required: true },
	hourStart: { type: Number, required: true },
	hourEnd: { type: Number, required: true },

	businessId: { type: Schema.Types.ObjectId, ref: 'option', required: true },
	clientId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
	staffId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
	prestationRdvId: { type: Schema.Types.ObjectId, ref: 'prestationRdv' },
	status: { type: String, default: 'reserved' },

	recurance: {
		loopStatus: { type: Boolean, default: false },
		loopFrequency: { type: Number, default: '0' },
		loopDuration: { type: String, default: '-', enum: ['-', 'd', 'w', 'm'] }
	}
});

module.exports = mongoose.model('Rendezvous', RendezvousSchema);

/*
* Pre-save hook
*/
RendezvousSchema
  .pre('save', function (next){
    this.updatedOn = Date.now();
    next();
  });

RendezvousSchema
  .pre('update', function (next){
    this.updatedOn = Date.now();
    next();
  });