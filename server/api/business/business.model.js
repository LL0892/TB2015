'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require('../user/user.model');

/*
* Schema Schedule
*/

var ScheduleSchema = new Schema({
  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now },

  dayName: { type: String, required: true, enum: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi','samedi', 'dimanche'] },
  dayId: { type: Number, required: true, enum: ['0', '1', '2', '3', '4', '5', '6'] },
  startHour: { type: String },
  endHour: { type: String },
  description: { type: String },
  workingDay: { type: Boolean, default: true },
/*  staffs: [
    { 
      staffId : { type: Schema.Types.ObjectId, ref: 'staff' },
      staffName : { type: String }
    }
  ]*/
});

/**
 * Virtuals for schedule
 */

// Public schedule information
/*ScheduleSchema
  .virtual('profile')
  .get(function() {
    return {
      '_id': this._id,
      'dayName': this.dayName,
      'startHour': this.startHour,
      'endHour': this.endHour,
      'workingDay': this.workingDay,
      'description': this.description,
      'staffs': this.staffs
    };
  });*/

/*
* Schema Business
*/

var BusinessSchema = new Schema({
  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now },

  name: { type: String, required: true },
  imageBusinessURL : { type: String, default: 'businessPlaceholder.png' },

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
  //isActive: { type: Boolean, default: false },

  founder: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  staffs: [
    {
      staffName : { type: String },
      staffId : { type: Schema.Types.ObjectId, ref: 'staff' }
      //staffVisibility : { type: Boolean, default: true }
    }
   ],

  schedules: [ ScheduleSchema ],
  fbPageId: { type: String }
/*  ratting: {
    nbVotes: { type: Number, default: '0' },
    nbStars: { type: Number, default: '0' }
  } */
});

//BusinessSchema.set('toJSON', { getters: true });
//BusinessSchema.set('toObject', { getters: true });

/**
 * Virtuals for business
 */

// Public business information
/*BusinessSchema
  .virtual('profile')
  .get(function() {
    return {
      '_id': this._id,
      'name': this.name,
      'city': this.city,
      'zip': this.zip,
      'canton': this.canton,
      'street': this.street,
      'email': this.businessContact.email,
      'phone': this.businessContact.phone,
      'mobile': this.businessContact.mobile,
      'site': this.businessContact.siteURL,
      'facebook': this.businessContact.facebookURL,
      'imageBusinessUrl': this.imageBusinessURL,
      'schedules': this.schedules
    };
  });*/

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

module.exports = mongoose.model('Business', BusinessSchema);