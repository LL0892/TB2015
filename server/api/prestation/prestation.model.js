'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Business = require('../business/business.model');

/*
* Schemas
*/

// Schema Price (embedded in Prestation)
var PriceSchema = new Schema({
  categoryName: { type: String, default: 'Default price category' },
  ageLowLimit: { type: Number, default: '1' },
  ageHighLimit: { type: Number, default: '99' },
  price: { type: Number, default: '1' },
  gender: { type: String, enum: ['homme', 'femme', 'mixte'], default: 'mixte' }
});

// Schema Prestation
var PrestationSchema = new Schema({
	createdOn: { type: Date, default: Date.now },
	updatedOn: { type: Date, default: Date.now },

	name: { type: String, required: true },
	shortDescription : { type: String },
	description: { type: String },
	duration: { type: Number, required: true, default: '5' },

	prices: [PriceSchema],

	businessId: { type: Schema.Types.ObjectId, ref: 'business', required: true },
	isActive: { type: Boolean, default: true }
});

/*
* Validation
*/

// Validate existing business
PrestationSchema
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

/*
* Pre-save hook
*/
PrestationSchema
  .pre('save', function (next){
    this.updatedOn = Date.now();
    next();
  });

PrestationSchema
  .pre('update', function (next){
    this.updatedOn = Date.now();
    next();
  });

module.exports = mongoose.model('Prestation', PrestationSchema);