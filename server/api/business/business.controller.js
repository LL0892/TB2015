/**
 * Using Rails-like standard naming convention for endpoints.

 --- Business routes ---
 * GET     /businesses              	->  index
 * POST    /businesses              	->  create
 * GET     /businesses/:id          	->  show
 * PUT     /businesses/:id          	->  update
 * PUT	   /businesses/:id/status   	->  changeStatus

 --- Schedule routes ---
 * GET  	/businesses/:id/schedules 				->  getSchedules
 * POST     /businesses/:id/Schedules  				->  addSchedule
 * GET      /businesses/:id/schedules/:idSchedule  	->  getSchedule
 * PUT      /businesses/:id/schedules/:idSchedule  	->  updateSchedule
 * DELETE   /businesses/:id/schedules/:idSchedule  	->  deleteSchedule

 --- Staff affiliation routes ---
 Todo

 --- Business Applicative Services ---
 * POST		/businesses/:id/overview	->  overview
 */

'use strict';

var Business = require('./business.model');

// --- Business Controller ---
/**
* Get a list of business
*/
 exports.index = function(req, res, next){
 	Business.find({}, function (err, businessesFound){
 		if(err) return res.send(500, err);
 		res.status(200).json({ salons: businessesFound }).end();
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
 		if(!businessFound) return res.status(404).json({ message : 'Ce salon n\'existe pas.' });
 		if(err) return res.send(500, err);
 		res.status(200).json({ salon : businessFound }).end();
 	});
 };

 /**
 * Update a business
 * restriction: 'staff'
 */
 exports.update = function(req, res, next){
 	var businessId = req.params.id;

 	Business.findOne(businessId, function (err, businessFound){
 		if(!businessFound) return res.status(404).json({ message : 'Ce salon n\'existe pas.' });
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
 * restriction : 'staff'
 */
 exports.changeStatus = function(req, res, next){
 	var businessId = req.params.id;

 	Business.findOne(businessId, function (err, businessFound){
 		if(!businessFound) return res.status(404).json({ message : 'Ce salon n\'existe pas.' });
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


// --- Schedule Controller ---
/**
* Get a list of schedules for this business
* restriction : 'staff'
*/
exports.getSchedules = function(req, res, next){

};

/**
* Add a schedule for this business
* restriction : 'staff'
*/
exports.addSchedule = function(req, res, next){
	
};

/**
* Get a single schedule for this business
* restriction : 'staff'
*/
exports.getSchedule = function(req, res, next){
	
};

/**
* Update a schedule for this business
* restriction : 'staff'
*/
exports.updateSchedule = function(req, res, next){
	
};

/**
* Remove a schedule for this business
* restriction : 'staff'
*/
exports.deleteSchedule = function(req, res, next){
	
};


// --- Business Applicative Service ---
/**
* Change the business status
*/
exports.overview = function(req, res, next){
	// GET Business (+ Schedules) datas
	// GET Staffs
	// GET Prestations (+ Prices)
	// GET Rendezvous futurs sur période T
};