'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ManagerSchema = new Schema({
  createdOn: {
  	type: Date,
  	default: Date.now
  },
  updatedOn: {
  	type: Date,
  	default: Date.now
  },

  contact: {
    phone: Number,
    mobile: Number,
    email: {
      type: String,
      lowercase: true,
      required: true
    }
  },
  businessID: {
    type: Schema.ObjectId, 
    ref: 'business', 
    required: true
  },

  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
});

//module.exports = ManagerSchema;
module.exports = mongoose.model('Manager', ManagerSchema);