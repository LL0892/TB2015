'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

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
  businessID: { type: Schema.Types.ObjectId, ref: 'business', required: true },
  isActive: { type: Boolean, default: false }
});

module.exports = mongoose.model('Staff', StaffSchema);

/*
* Validation
*/

// Validate existing busines ID
/*StaffSchema
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
  }, 'Business non existant.');
*/

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