'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require('../user/user.model');

/*
* Schema
*/

// Schedule Schema
var ScheduleSchema = new Schema({
  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now },

  dayName: { type: String, required: true, enum: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi','samedi', 'dimanche'] },
  dayID: { type: Number, required: true, enum: ['0', '1', '2', '3', '4', '5', '6'] },
  startHour: { type: String },
  endHour: { type: String },
  description: { type: String },
  workingDay: { type: Boolean, default: true },
  affiliatedStaff: { type: [Schema.Types.ObjectId], ref: 'staff' }
});

// Business Schema
var BusinessSchema = new Schema({
  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now },

  name: { type: String, required: true },
  imageBusinessURL : { type: String, default: 'businessLogo.png' },

  businessContact: {
    email: { type: String, default: ''},
    mobile: { type: String, default: '' },
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
  staffs: [
    {
      staffName : { type: String },
      staffId : { type: Schema.Types.ObjectId, ref: 'staff' },
      staffVisibility : { type: Boolean, default: true }
    }
   ],
  schedules: [ ScheduleSchema ],
  //prestations: { type: Schema.Types.ObjectId, ref: 'prestation' },

  // Ratting d'un business
  ratting: {
    nbVotes: { type: Number, default: '0' },
    nbStars: { type: Number, default: '0' }
  } 
});

//module.exports = mongoose.model('Schedule', ScheduleSchema);
module.exports = mongoose.model('Business', BusinessSchema);

/*
* Pre-save hook
*/
BusinessSchema
  .pre('save', function (next){
    this.updatedOn = Date.now();
    next();
  });

BusinessSchema
  .pre('update', function (next){
    this.updatedOn = Date.now();
    next();
  });

/*
* Validations
*/

// Validate founder is existant
BusinessSchema
  .path('founder')
  .validate(function(value, respond) {
    var self = this;
    User.findOne({_id : self.sentTo}, function(err, userExists) {
      if(err) throw err;
      if(!userExists) {
        return respond(false);
      }
      respond(true);
    });
}, 'L\'utilisateur n\'existe pas.');