'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    //BonSchema = require('mongoose').model('Bon');

// Schéma bon
var BonSchema = new Schema({
  createdOn: {
    type: Date,
    default: Date.now
  },
  updatedOn: {
    type: Date,
    default: Date.now
  },

  /*ownerID: {
    type: Schema.Types.ObjectId, 
    ref: 'client', 
    required: true
  },*/
  rdvID: {
    type: Schema.Types.ObjectId, 
    ref: 'rendezvous', 
    required: false
  },
  value: {
    type: Number,
    required: true
  },
  used: {
    type: Boolean,
    default: false
  }
});

// Schema client
var ClientSchema = new Schema({
  createdOn: {
  	type: Date,
  	default: Date.now
  },
  updatedOn: {
  	type: Date,
  	default: Date.now
  },
  
  dateOfBirth: {
  	type: Date, 
  	required: true
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
  //bons: [ BonSchema ],

  firstName: {
  	type: String,
  	required: true
  },
  lastName: {
  	type: String,
  	required: true
  },

  nbRdvDone: Number,
  nbRdvMissed: Number,
  nbRdvCancelled: Number,
  nbRdvMoved: Number,
  lastRdv: Date
});

module.exports = mongoose.model('Bon', BonSchema);
module.exports = mongoose.model('Client', ClientSchema);