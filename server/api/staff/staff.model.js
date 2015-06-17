'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ManagerSchema = new Schema({
  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now },

  name: { type: String, required: true },
  staffContact: {
    phone: { type : String, default: '' },
    mobile: { type : Number, default: '' },
    email: { type: String, lowercase: true, default: '' }
  },
  photoStaffURL: { type : String, default : 'staffProfile.png' },
  businessID: { type: Schema.Types.ObjectId, ref: 'business', required: true }
});

module.exports = mongoose.model('Manager', ManagerSchema);

/*
* Validation
*/

// Validate existing busines ID
ManagerSchema
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