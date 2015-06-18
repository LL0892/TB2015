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

	businessID: { type: Schema.Types.ObjectId, ref: 'option', required: true },
	clientID: { type: Schema.Types.ObjectId, ref: 'user', required: true },
	staffID: { type: Schema.Types.ObjectId, ref: 'user', required: true },
	prestationRdvID: { type: Schema.Types.ObjectId, ref: 'prestationRdv' },
	status: { type: String, default: 'reserved' },

	recurance: {
		loopStatus: { type: Boolean, default: false },
		loopFrequency: { type: Number, default: '0' },
		loopDuration: { type: String, default: '-', enum: ['-', 'd', 'w', 'm'] }
	}
});

module.exports = mongoose.model('Rendezvous', RendezvousSchema);
