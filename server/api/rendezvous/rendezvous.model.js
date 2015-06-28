'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require('../user/user.model'),
    Staff = require('../staff/staff.model'),
    PrestationRdv = require('../prestationRdv/prestationRdv.model'),
    Business = require('../business/business.model');

/*
* Schema
*/

var RendezvousSchema = new Schema({
	createdOn: { type: Date, default: Date.now },
	updatedOn: { type: Date, default: Date.now },

	//date: { type: Date, required: true },
	startHour: { type: Date, required: true },
	endHour: { type: Date, required: true },

	business: {
		businessId: { type: Schema.Types.ObjectId, ref: 'business', required: true },
		businessName: { type: String, required: true }
	},
	client: {
		clientId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
		clientName: { type: String, required: true }
	},
	staff: {
		staffId: { type: Schema.Types.ObjectId, ref: 'staff', required: true },
		staffName: { type: String, required: true }
	},
	prestation: {
		prestationRdvId: { type: Schema.Types.ObjectId, ref: 'prestationRdv', required: true  },
		prestationRdvName: { type: String, required: true }
	},
	
	status: { type: String, default: 'reservé', enum: ['reservé', 'annulé', 'terminé', 'déplacé', 'manqué'] },

	recurance: {
		loopStatus: { type: Boolean, default: false },
		loopFrequency: { type: Number, default: '0' },
		loopDuration: { type: String, default: '-', enum: ['-', 'd', 'w', 'm'] }
	}
});

/*
* Pre-save hook
*/
RendezvousSchema
  .pre('save', function (next){
    this.updatedOn = Date.now();
    next();
  });

RendezvousSchema
  .pre('update', function (next){
    this.updatedOn = Date.now();
    next();
  });

/*
* Validations
*/

// Validate prestationRdv exists
RendezvousSchema
  .path('prestation.prestationRdvId')
  .validate(function(value, respond) {
    var self = this;
    PrestationRdv.findOne({_id : value}, function(err, presRdvExists) {
      if(err) throw err;
      if(!presRdvExists) {
        return respond(false);
      }
      return respond(true);
    });
}, 'Une erreur s\'est produite durant l\'enregistrement de votre rendez-vous.');

// Validate client (user) exists
RendezvousSchema
  .path('client.clientId')
  .validate(function(value, respond) {
    var self = this;
    User.findOne({_id : value}, function(err, userExists) {
      if(err) throw err;
      if(!userExists) {
        return respond(false);
      }
      return respond(true);
    });
}, 'Le client n\'existe pas ou est introuvable.');

// Validate staff exists
RendezvousSchema
  .path('staff.staffId')
  .validate(function(value, respond) {
    var self = this;
    Staff.findOne({_id : value}, function(err, staffExists) {
      if(err) throw err;
      if(!staffExists) {
        return respond(false);
      }
      return respond(true);
    });
}, 'Le staff n\'existe pas ou est introuvable.');

// Validate business exists
RendezvousSchema
  .path('business.businessId')
  .validate(function(value, respond) {
    var self = this;
    Business.findOne({_id : value}, function(err, businessExists) {
      if(err) throw err;
      if(!businessExists) {
        return respond(false);
      }
      return respond(true);
    });
}, 'Le business n\'existe pas ou est introuvable.');

// Validate startHour is not empty or null
// Validate endHour is not empty or null

module.exports = mongoose.model('Rendezvous', RendezvousSchema);