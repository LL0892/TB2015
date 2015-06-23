/**
 * Using Rails-like standard naming convention for endpoints.

 --- Business routes ---
 * GET     /businesses              	->  index
 * POST    /businesses              	->  create
 * GET     /businesses/:id          	->  show
 * PUT     /businesses/:id          	->  update
 * PUT	   /businesses/:id/status   	->  status

 --- Schedule routes ---
 * GET  	/businesses/:id/schedules 				->  getSchedules
 * POST     /businesses/:id/Schedules  				->  addSchedule
 * GET      /businesses/:id/schedules/:scheduleId  	->  getSchedule
 * PUT      /businesses/:id/schedules/:scheduleId  	->  updateSchedule
 * DELETE   /businesses/:id/schedules/:scheduleId  	->  deleteSchedule

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
 		res.status(200).json({ businesses: businessesFound }).end();
 	});
 };

 /**
 * Create a new business
 * restriction: 'manager'
 */
 exports.create = function(req, res, next){
 	var userID = req.user._id;

 	Business.find({
 		founder: userID
 	}, function (err, businessFound){
 		if(err) return res.send(500, err);

 		if (businessFound[businessFound.length-1] === undefined) {
 			// Business datas
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

		  	// Default Schedules
		  	newBusiness.schedules.push(
		  		{
					dayName: 'lundi',
					dayID: '0',
					startHour: '08:00',
					endHour: '17:00',
					description: 'Horaire du lundi',
					workingDay: true
		  		},
		  		{
					dayName: 'mardi',
					dayID: '1',
					startHour: '08:00',
					endHour: '17:00',
					description: 'Horaire du mardi',
					workingDay: true
		  		},
		  		{
					dayName: 'mercredi',
					dayID: '2',
					startHour: '08:00',
					endHour: '17:00',
					description: 'Horaire du mercredi',
					workingDay: true
		  		},
		  		{
					dayName: 'jeudi',
					dayID: '3',
					startHour: '08:00',
					endHour: '17:00',
					description: 'Horaire du jeudi',
					workingDay: true
		  		},
		  		{
					dayName: 'vendredi',
					dayID: '4',
					startHour: '08:00',
					endHour: '17:00',
					description: 'Horaire du vendredi',
					workingDay: true
		  		},
		  		{
					dayName: 'samedi',
					dayID: '5',
					description: 'Fermé le samedi',
					workingDay: false
		  		},
		  		{
					dayName: 'dimanche',
					dayID: '6',
					description: 'Fermé le dimanche',
					workingDay: false
		  		}
		  	);
			
			// Save the business
		  	newBusiness.save(function(err, businessSaved){
		    	if (err) return next(err);
		    	return res.status(201).json({ 
		    		message: 'Votre salon a été créé avec succès.', 
		    		business: businessSaved 
		    	}).end();
		  	});

 		} else {
			return res.status(403).json({
				message : 'Vous avez déjà crée un salon.'
			}).end();
 		}
 	});


 /*
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

  	// Horaires par défaut
  	newBusiness.schedules.push(
  		{
			dayName: 'lundi',
			dayID: '0',
			startHour: '08:00',
			endHour: '17:00',
			description: 'Horaire du lundi',
			workingDay: true
  		},
  		{
			dayName: 'mardi',
			dayID: '1',
			startHour: '08:00',
			endHour: '17:00',
			description: 'Horaire du mardi',
			workingDay: true
  		},
  		{
			dayName: 'mercredi',
			dayID: '2',
			startHour: '08:00',
			endHour: '17:00',
			description: 'Horaire du mercredi',
			workingDay: true
  		},
  		{
			dayName: 'jeudi',
			dayID: '3',
			startHour: '08:00',
			endHour: '17:00',
			description: 'Horaire du jeudi',
			workingDay: true
  		},
  		{
			dayName: 'vendredi',
			dayID: '4',
			startHour: '08:00',
			endHour: '17:00',
			description: 'Horaire du vendredi',
			workingDay: true
  		},
  		{
			dayName: 'samedi',
			dayID: '5',
			description: 'Fermé le samedi',
			workingDay: false
  		},
  		{
			dayName: 'dimanche',
			dayID: '6',
			description: 'Fermé le dimanche',
			workingDay: false
  		}
  	);

  	newBusiness.save(function(err, businessSaved){
    	if (err) return next(err);
    	return res.status(201).json({ 
    		message: 'Votre salon a été créé avec succès.', 
    		business: businessSaved 
    	}).end();
  	});
*/
 };

 /**
 * Get a single business
 */
 exports.show = function(req, res, next){
 	var businessId = req.params.id;

 	Business.findById(businessId, function (err, businessFound){
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

 	Business.findById(businessId, function (err, businessFound){
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
 exports.status = function(req, res, next){
 	var businessId = req.params.id;

 	Business.findById(businessId, function (err, businessFound){
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
	var businessId = req.params.id;

	Business.findById(businessId, function (err, businessFound){
		if(err) return res.send(500, err);
		if(!businessFound) return res.status(404).json({ message : 'Ce salon n\'existe pas.' });
		if(!businessFound.schedules) return res.status(404).json({ message : 'Aucun horaire à afficher.' });

		res.status(200).json({
			horaires : businessFound.schedules
		}).end();
	});
};

/**
* Add a schedule for this business
* restriction : 'staff'
*/
exports.addSchedule = function(req, res, next){
	var businessId = req.params.id;

	Business.findById(businessId, function (err, businessFound){
		if (err) return next (err);
		if (!businessFound) return res.status(404).json({ message : 'Ce salon n\'existe pas.' });

		businessFound.schedules.push({
			dayName: req.body.dayName,
			dayID: req.body.dayID,
			startHour: req.body.startHour,
			endHour: req.body.endHour,
			description: req.body.description,
			workingDay: req.body.workingDay
		});

		businessFound.save(function(err, businessUpdated){
			if (err) return next(err);
			res.status(200).json({
				message : 'L\'horaire a été ajouté avec succès.',
				horaire : businessFound.schedules
			}).end();
		});
	})
};

/**
* Get a single schedule for this business
* restriction : 'staff'
*/
exports.getSchedule = function(req, res, next){
	var businessId = req.params.id,
		scheduleId = req.params.scheduleId;

	Business.findById(businessId, function (err, businessFound){
		if(err) return res.send(500, err);
		if(!businessFound) return res.status(404).json({ message : 'Ce salon n\'existe pas.' });
		if(!businessFound.schedules.id(scheduleId)) return res.status(404).json({ message : 'Cette horaire n\'existe pas.' });

		res.status(200).json({
			horaire : businessFound.schedules.id(scheduleId)
		}).end();
	});
};

/**
* Update a schedule for this business
* restriction : 'staff'
*/
exports.updateSchedule = function(req, res, next){
	var businessId = req.params.id,
		scheduleId = req.params.scheduleId;

	Business.findById(businessId, function (err, businessFound){
		if(err) return res.send(500, err);
		if(!businessFound) return res.status(404).json({ message : 'Ce salon n\'existe pas.' });
		if(!businessFound.schedules.id(scheduleId)) return res.status(404).json({ message : 'Cette horaire n\'existe pas.' });

		var schedule = businessFound.schedules.id(scheduleId);
		schedule.dayName = req.body.dayName;
		schedule.dayID = req.body.dayID;
		schedule.startHour = req.body.startHour;
		schedule.endHour = req.body.endHour;
		schedule.description = req.body.description;
		schedule.workingDay = req.body.workingDay;

		// Remove hours if this isn't a working day
		if(schedule.workingDay === false){
			schedule.startHour = undefined;
			schedule.endHour = undefined;
		}
		// TODO determiner dayId sur dayName automatiquement
		// TODO check sur le format des dates d'horaires (00:00) et length (5 charactères)

		businessFound.save(function (err, businessUpdated){
			if (err) return next(err);
			res.status(200).json({
				message : 'L\'horaire a été modifié avec succès.',
				horaire : businessUpdated.schedules.id(scheduleId)
			}).end();
		})
	});
};

/**
* Remove a schedule for this business
* restriction : 'staff'
*/
exports.deleteSchedule = function(req, res, next){
	var businessId = req.params.id,
		scheduleId = req.params.scheduleId;

	Business.findById(businessId, function (err, businessFound){
		if(err) return res.send(500, err);
		if(!businessFound) return res.status(404).json({ message : 'Ce salon n\'existe pas.' });
		if(!businessFound.schedules.id(scheduleId)) return res.status(404).json({ message : 'Cette horaire n\'existe pas.' });

		businessFound.schedules.id(scheduleId).remove();

		businessFound.save(function (err, businessUpdated){
	 		if (err) return next(err);
	 		res.status(200).json({
	 			message : 'L\'hoaire a été correctement supprimé du salon.',
	 			prestation : businessUpdated
	 		}).end();
		});
	});
};

// --- Staff affiliation routes ---
// TODO

// --- Business Applicative Service ---
/**
* Get a set of data for this business
*/
exports.overview = function(req, res, next){
	// GET Business (+ Schedules) datas
	// GET Staffs
	// GET Prestations (+ Prices)
	// GET Rendezvous futurs sur période T
};