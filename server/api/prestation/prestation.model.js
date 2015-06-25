'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

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

	//prestationOptions: { type: [Schema.Types.ObjectId], ref: 'option' },

	prices: [PriceSchema],

	businessID: { type: Schema.Types.ObjectId, ref: 'option', required: true },
	isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('Prestation', PrestationSchema);

/*
* Validation
*/

// Validate existing businessID
/*PrestationSchema
  .path('businessID')
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
  }, 'Salon non existant.');*/

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