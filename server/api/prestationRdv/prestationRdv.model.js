'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/*
* Schema
*/

var PrestationRdvSchema = new Schema({
	createdOn: { type: Date, default: Date.now },
	updatedOn: { type: Date, default: Date.now },

	name: { type: String, required: true },
	shortDescription : { type: String },
	description: { type: String },
	duration: { type: Number, required: true, default: '5' },

	price: {
		categoryName: { type: String, required: true },
		ageLowLimit: { type: Number, required: true, default: '1' },
		ageHighLimit: { type: Number, required: true, default: '99' },
		price: { type: Number, required: true, default: '1' },
		gender: { type: String, enum: ['Homme', 'Femme', 'Mixte'], default: 'Mixte' }
	}
});

module.exports = mongoose.model('PrestationRdv', PrestationRdvSchema);

/*
* Pre-save hook
*/
PrestationRdvSchema
  .pre('save', function (next){
    this.updatedOn = Date.now();
    next();
  });

PrestationRdvSchema
  .pre('update', function (next){
    this.updatedOn = Date.now();
    next();
  });