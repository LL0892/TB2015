'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/*
* Schema
*/

// Schedule Schema
var ScheduleSchema = new Schema({
  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now },

  // businessID is not stored inside this object, because Schedule is part of a business anyways.
  dayName: { type: String, required: true, enum: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi','samedi', 'dimanche'] },
  dayID: { type: Number, required: true, enum: ['0', '1', '2', '3', '4', '5', '6', '7'] },
  startHour: { type: Number, required: true },
  endHour: { type: Number, required: true },
  description: { type: String },
  affiliatedStaff: { type: [Schema.Types.ObjectId], ref: 'user' }
});

// Business Schema
var BusinessSchema = new Schema({
  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now },

  name: { type: String, required: true },
  imageBusinessURL : { type: String, default: 'businessLogo.png' },
  businessContact: {
    email: { type: String, default: ''},
    phone: { type: String, default: '' },
    siteURL: { type: String, default: '' },
    facebookURL : { type: String, default: '' }
  },
  city: { type: String, required: true },
  street: { type: String, default: '' },
  canton: { type: String, default: '' },
  zip: { type: Number, required: true },
  isActive: { type: Boolean, default: false },

  founder: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  staffs: { type: [Schema.Types.ObjectId], ref: 'user' },
  schedules: [ ScheduleSchema ],
  //prestations: { type: Schema.Types.ObjectId, ref: 'prestation' },

  // Ratting d'un business
  ratting: {
    nbVotes: { type: Number, default: '0' },
    nbStars: { type: Number, default: '0' }
  } 
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
module.exports = mongoose.model('Business', BusinessSchema);

/*
* Validation
*/

// Validate existing business ID
BusinessSchema
  .path('founder')
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
  }, 'Utilisateur non existant.');