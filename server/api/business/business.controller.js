/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /businesses              ->  index
 * POST    /businesses              ->  create
 * GET     /businesses/:id          ->  show
 * PUT     /businesses/:id          ->  update
 * PUT	   /businesses/:id/status   ->  changeStatus
 */

'use strict';

var Business = require('./business.model');

/**
 * Get a list of business
 */
 exports.index = function(req, res, next){
 	Business.find({}, function (err, businessFound){
 		if(err) return res.send(500, err);
 		res.status(200).json(businessFound).end();
 	});
 };

 /**
 * Create a new business
 * restriction: 'manager'
 */
 exports.create = function(req, res, next){
			var newBusiness = new Business({
			 	name: req.body.name,
			    city: req.body.city,
			    zip: req.body.zip,
			    street: req.body.street,
			    canton: req.body.canton,
			    businessContact: {
			      email: req.body.email,
			      phone: req.body.phone,
			      mobile: req.body.mobile,
			      siteURL: req.body.site,
			      facebookURL: req.body.facebookURL
			    },
			    imageBusinessURL: req.body.imageBusinessURL
		 	});
		 	newBusiness.founder = req.user._id;
		  	newBusiness.isActive = false;
		  	newBusiness.save(function(err, businessSaved){
		    	if (err) return next(err);
		    	return res.status(201).json({ 
		    		message: 'Votre salon a été créé avec succès.', 
		    		business: businessSaved 
		    	}).end();
		  	});
 };

 /**
 * Get a single business
 */
 exports.show = function(req, res, next){
 	var businessId = req.params.id;

 	Business.findOne(businessId, function (err, businessFound){
 		if(err) return res.send(500, err);
 		res.status(200).json(businessFound).end();
 	});
 };

 /**
 * Update a business
 * restriction: 'staff'
 */
 exports.update = function(req, res, next){
 	var businessId = req.params.id;

 	Business.findOne(businessId, function (err, businessFound){
 		if(err) return res.send(500, err);

 		businessFound.name = req.body.name;
 		businessFound.city = req.body.city;
 		businessFound.zip = req.body.zip;
 		businessFound.street = req.body.street;
 		businessFound.canton = req.body.canton;
 		businessFound.businessContact.email = req.body.email;
 		businessFound.businessContact.phone = req.body.phone;
 		businessFound.businessContact.mobile = req.body.mobile;
 		businessFound.businessContact.siteURL = req.body.siteURL;
 		businessFound.businessContact.facebookURL = req.body.facebookURL;
 		businessFound.imageBusinessURL = req.body.imageBusinessURL;
 		
 		businessFound.save(function (err, businessUpdated){
 			if(err) return next(err);
 			res.status(200).json({ 
 				message: 'Votre salon a été modifié avec succès.', 
 				business: businessUpdated 
 			}).end();
 		})
 	});
 };

 /**
 * Change the business status
 * restriction : 'manager'
 */
 exports.changeStatus = function(req, res, next){
 	var businessId = req.params.id;

 	Business.findOne(businessId, function (err, businessFound){
 		if(err) return res.send(500, err);
 		if (businessFound.isActive === false) {
 			businessFound.isActive = true;
 		} else {
 			businessFound.isActive = false;
 		}

 		businessFound.save(function (err, businessUpdated){
 			if (err) return next(err);
 			res.status(200).json({ 
 				message: 'Le status de votre salon a été correctement modifié, prise de rendez-vous possible :' + businessFound.isActive, 
 				business: businessUpdated 
 			}).end();
 		});
 	});
 };