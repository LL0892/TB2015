'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Business = require('../business/business.model');

var StaffSchema = new Schema({
  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now },

  name: { type: String, required: true },
  staffContact: {
    phone: { type: String, default: '' },
    mobile: { type: String, default: '' },
    email: { type: String, lowercase: true, default: '' }
  },
  photoStaffURL: { type: String, default: 'staffProfile.png' },
  businessId: { type: Schema.Types.ObjectId, ref: 'business', required: true }
  //isActive: { type: Boolean, default: false }
});

/**
 * Virtuals
 */

// Private profile information
StaffSchema
  .virtual('profilePrivate')
  .get(function() {
    return {
      '_id': this._id,
      'name': this.name,
      'email': this.staffContact.email,
      'phone': this.staffContact.phone,
      'mobile': this.staffContact.mobile,
      'imageProfileUrl': this.photoStaffURL,
      'businessId': this.businessId
    };
  });

// Public profile information
StaffSchema
  .virtual('profilePublic')
  .get(function() {
    return {
      '_id': this._id,
      'name': this.name,
      'email': this.staffContact.email,
      'phone': this.staffContact.phone,
      'mobile': this.staffContact.mobile,
      'imageProfileUrl': this.photoStaffURL
    };
  });

/*
* Validation
*/

// Validate existing business
StaffSchema
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
StaffSchema
  .pre('save', function (next){
    this.updatedOn = Date.now();
    next();
  });

StaffSchema
  .pre('update', function (next){
    this.updatedOn = Date.now();
    next();
  });

module.exports = mongoose.model('Staff', StaffSchema);