'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/*
* Schema
*/

var GeodataSchema = new Schema({
	Commune: { type: String },
	NPA: { type: Number },
	Canton: { type: String }
});

module.exports = mongoose.model('Geodata', GeodataSchema);