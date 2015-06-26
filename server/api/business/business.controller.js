/**
 * Using Rails-like standard naming convention for endpoints.

 --- Business routes ---
 * GET     /businesses              				->  getBusinesses
 * POST    /businesses              				->  createBusiness
 * GET     /businesses/:id          				->  showBusiness
 * PUT     /businesses/:id          				->  updateBusiness
 * PUT	   /businesses/:id/status   				->  statusBusiness
 --- Schedules subdocument routes ---
 * GET  	/businesses/:id/schedules 				->  getSchedules
 * POST     /businesses/:id/Schedules  				->  addSchedule
 * GET      /businesses/:id/schedules/:scheduleId  	->  showSchedule
 * PUT      /businesses/:id/schedules/:scheduleId  	->  updateSchedule
 * DELETE   /businesses/:id/schedules/:scheduleId  	->  deleteSchedule

 --- Staffs routes ---
 * GET		/businesses/:id/staffs						->  getStaffs
 * GET		/businesses/:id/staffs/:staffId				->  showStaff
 * PUT		/businesses/:id/staffs/:staffId/status 		->  statusStaff
 * DELETE	/businesses/:id/staffs/:staffId		 		->  deleteStaff

 --- Prestations routes ---
 * GET 		/businesses/:id/prestations 						->  getPrestations
 * POST 	/businesses/:id/prestations 						->  createPrestation
 * GET 		/businesses/:id/prestations/:prestationId			->  showPrestation
 * PUT 		/businesses/:id/prestations/:prestationId			->  updatePrestation
 * PUT 		/businesses/:id/prestations/:prestationId/status 	->  statusPrestation
 * DELETE 	/businesses/:id/prestations 						->  deletePrestation
 --- Prices subdocument routes ---
 * POST 	/businesses/:id/prestations/:prestationId/prices 			->  createPrice
 * GET 		/businesses/:id/prestations/:prestationId/prices/:priceId	->  showPrice
 * PUT 		/businesses/:id/prestations/:prestationId/prices/:priceId	->  updatePrice
 * DELETE 	/businesses/:id/prestations/:prestationId/prices/:priceId	->  deletePrice

 --- Rendezvous routes ---
 * GET 		/businesses/:id/rendezvous 						->  getRendezvous
 * POST 	/businesses/:id/rendezvous 						->  createRendezvous
 * GET 		/businesses/:id/rendezvous/:rdvId 				->  showRendezvous
 * PUT 		/businesses/:id/rendezvous/:rdvId/missed		->  rendezvousMissed
 * PUT 		/businesses/:id/rendezvous/:rdvId/finished		->  rendezvousFinished
 * PUT 		/businesses/:id/rendezvous/:rdvId/cancelled 	->  rendezvousCancelled
 * PUT 		/businesses/:id/rendezvous/:rdvId/move			->  moveRendezvous
 * DELETE 	/businesses/:id/rendezvous/:rdvId				->  deleteRendevous

 --- Notification routes ---
 * POST 	/businesses/:id/notifications				->  getNotifications
 * DELETE 	/businesses/:id/notifications/:notifId		->  deleteNotification

 --- Test auth.hasAccess ---
 * GET  	/businesses/:id/test 		->  test

 --- Business Applicative Services ---
 * POST		/businesses/:id/overview	->  overview
 */

'use strict';

var Business = require('./business.model');
var Staff = require('../staff/staff.model');
var Prestation = require('../prestation/prestation.model');


// --- Business routes ------------

/**
* GET	/businesses
* Get a list of business
*/
 exports.getBusinesses = function(req, res, next){
 	Business.find({}, function (err, businessesFound){
 		if(err) return res.send(500, err);
 		if(businessesFound.length <= 0) return res.status(404).json({ message : 'Il n\'y a pas de salons à afficher.' });
 		res.status(200).json({ businesses: businessesFound }).end();
 	});
 };

 /**
 * POST		/businesses 
 * Create a new business
 * restriction: 'manager'
 */
 exports.createBusiness = function(req, res, next){
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
 };

 /**
 * GET	/businesses/:id
 * Get a single business
 */
 exports.showBusiness = function(req, res, next){
 	var businessId = req.params.id;

 	Business.findById(businessId, function (err, businessFound){
 		if(!businessFound) return res.status(404).json({ message : 'Ce salon n\'existe pas.' });
 		if(err) return res.send(500, err);
 		res.status(200).json({ salon : businessFound }).end();
 	});
 };

 /**
 * PUT	/businesses/:id
 * Update a business
 * restriction: 'staff'
 */
 exports.updateBusiness = function(req, res, next){
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
 * PUT	/businesses/:id/status
 * Change the business status
 * restriction : 'staff'
 */
 exports.statusBusiness = function(req, res, next){
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


// --- Schedules subdocument routes ------------

/**
* GET	/businesses/:id/schedules
* Get a list of schedules for this business
* restriction : 'staff'
*/
exports.getSchedules = function(req, res, next){
	var businessId = req.params.id;

	Business.findById(businessId, function (err, businessFound){
		if(err) return res.send(500, err);
		if(!businessFound) return res.status(404).json({ message : 'Ce salon n\'existe pas.' });
		if(businessFound.schedules.length <= 0) return res.status(404).json({ message : 'Aucun horaire à afficher.' });

		res.status(200).json({
			horaires : businessFound.schedules
		}).end();
	});
};

/**
* POST	/businesses/:id/Schedules
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
* GET	/businesses/:id/schedules/:scheduleId
* Get a single schedule for this business
* restriction : 'staff'
*/
exports.showSchedule = function(req, res, next){
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
* PUT	/businesses/:id/schedules/:scheduleId
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
* DELETE   /businesses/:id/schedules/:scheduleId
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



// --- Staffs routes ------------

/**
* GET	/businesses/:id/staffs
* Get a list of staffs for this business
* restriction : 'staff'
*/
exports.getStaffs = function(req, res, next){
	var businessId = req.params.id;

	Staff.find({businessId : businessId}, function (err, staffsFound){
		if (err) next(err);
		if (staffsFound.length <= 0) return res.status(404).json({ message : 'Il n\'y a pas de staffs à afficher.' });
		return res.status(200).json({ 
			staffs: staffsFound
		}).end();
	});
};

/**
* GET	/businesses/:id/staffs/:staffId
* Get a single staff for this business
* restriction : 'staff'
*/
exports.showStaff = function(req, res, next){
	var staffId = req.params.staffId;

	Staff.findById(staffId, function (err, staffFound){
		if (err) next(err);
		if (!staffFound) return res.status(404).json({ message : 'Il n\'y a pas de staffs à afficher.' });
		return res.status(200).json({ 
			staff: staffFound
		}).end();
	});
};

/**
* PUT	/businesses/:id/staffs/:staffId/status
* Update a staff status for this business
* restriction : 'staff'
*/
exports.statusStaff = function(req, res, next){
 	var businessId = req.params.id,
 		staffId = req.params.staffId;

 	Staff.findOne(staffId, function (err, staffFound){
 		if(err) return res.send(500, err);
		if(!staffFound) return res.status(404).json({
			message : 'ce staff n\'existe pas.'
		});

 		if (staffFound.isActive === false) {
 			staffFound.isActive = true;
 		} else {
 			staffFound.isActive = false;
 		}

 		Business.findById(businessId, function(err, businessFound){
 			if(err) return res.send(500, err);
			if(!businessFound) return res.status(404).json({
				message : 'Le salon ou doit travailler ce staff n\'existe pas.'
			});

			var i = 0;
			var	isAllowed = false;

			// Find the correct staff inside business staff array and change the visibility value
			do{
				if(String(businessFound.staffs[i].staffId) === String(staffFound._id)){
					businessFound.staffs[i].staffVisibility = staffFound.isActive;
					businessFound.save(function(err, businessUpdated){
						if (err) return next(err);
					});

					isAllowed = true;
				}

				i++;
			}while(i <= businessFound.staffs.length-1 && isAllowed === false);

			// if allowed to update this staff
			if (isAllowed === true) {
		 		staffFound.save(function (err, staffUpdated){
		 			if (err) return next(err);

		 			return res.status(200).json({ 
		 				message: 'Le status de '+ staffUpdated.name +' a été correctement modifié. Prise de rendez-vous possible :' + staffUpdated.isActive
		 			}).end();
		 		});
			} else {
				return res.status(403).json({
					message : 'Vous n\'avez pas l\'autorisation de modifier d\'éléments liés à ce salon.'
				}).end();
			}

 		});
 	});
};

/**
* DELETE 	/businesses/:id/staffs/:staffId
* Delete a staff for this business
* restriction : 'staff'
*/
exports.deleteStaff = function(req, res, next){
	return res.status(501).json({ message : 'fonction non implémentée.'}).end();
};



// --- Prestations routes ------------

/**
* GET 	/businesses/:id/prestations
* Get a list of prestations for this business
* restriction : 'staff'
*/
exports.getPrestations = function(req, res, next){
	var businessId = req.params.id;

	Prestation.find({businessId : businessId}, function (err, prestationsFound){
		if (err) next(err);
		if (prestationsFound.length <= 0) return res.status(404).json({ message : 'Il n\'y a pas de prestations à afficher.' });
		return res.status(200).json({ 
			prestations: prestationsFound
		}).end();
	});
};

/**
* POST 	/businesses/:id/prestations
* Create a prestation for this business
* restriction : 'staff'
*/
exports.createPrestation = function(req, res, next){
 	var newPrestation = new Prestation({
		name: req.body.name,
		shortDescription : req.body.shortDescription,
		description: req.body.description,
		duration: req.body.duration,
		businessId: req.staff.businessId,
		//price: new Price(),
		isActive: false
 	});

 	newPrestation.save(function (err, prestationSaved){
 		if (err) return next(err);
 		return res.status(201).json({
 			message : 'La prestation a été ajoutée avec succès. <br/> Les prix sont modifiable via le menu de gestion des prestations.',
 			prestation : prestationSaved
 		}).end();
 	});
};

/**
* GET 	/businesses/:id/prestations/:prestationId
* Get a single prestation for this business
* restriction : 'staff'
*/
exports.showPrestation = function(req, res, next){
	var prestationId = req.params.prestationId;

	Prestation.findById(prestationId, function (err, prestationFound){
		if (err) return next(err);
		if (!prestationFound) return res.status(404).json({ message : 'Prestation non existante.' });
		return res.status(200).json({
			prestation : prestationFound
		}).end();
	});
};

/**
* PUT 	/businesses/:id/prestations/:prestationId
* Update a prestation for this business
* restriction : 'staff'
*/
exports.updatePrestation = function(req, res, next){
 	var prestationId = req.params.prestationId;

 	Prestation.findById(prestationId, function (err, prestationFound){
 		if (err) return next(err);
		if (!prestationFound) return res.status(404).json({ message : 'Prestation non existante.' });
 		
		prestationFound.name = req.body.name,
		prestationFound.shortDescription = req.body.shortDescription,
		prestationFound.description = req.body.description,
		prestationFound.duration = req.body.duration

		prestationFound.save(function(err, prestationUpdated){
	 		if (err) return next(err);
	 		res.status(200).json({
	 			message : 'La prestation a été modifiée avec succès. <br/> Les prix sont modifiable via le menu de gestion des prestations.',
	 			prestation : prestationUpdated
	 		}).end();
		});
 	});
};

/**
* PUT 	/businesses/:id/prestations/:prestationId/status
* Change the prestation status for this business
* restriction : 'staff'
*/
exports.statusPrestation = function(req, res, next){
 	var prestationId = req.params.prestationId;

 	Prestation.findById(prestationId, function (err, prestationFound){
 		if (err) return next(err);
		if (!prestationFound) return res.status(404).json({ message : 'Prestation non existante.' });
 		
 		if (prestationFound.isActive === false) {
 			prestationFound.isActive = true;
 		} else {
 			prestationFound.isActive = false;
 		}

		prestationFound.save(function(err, prestationUpdated){
	 		if (err) return next(err);
	 		res.status(200).json({
	 			message : 'Le status de la prestation a été modifiée avec succès. Visibilité par la clientèle : ' + prestationUpdated.isActive,
	 			prestation : prestationUpdated
	 		}).end();
		});
 	});
};

/**
* DELETE /businesses/:id/prestations
* Delete a prestation for this business
* restriction : 'staff'
*/
exports.deletePrestation = function(req, res, next){

};



// --- Prices subdocument routes ------------

/**
* POST 	/businesses/:id/prestations/:prestationId/prices
* Create a price category (inside a prestation) for this business
* restriction : 'staff'
*/
exports.createPrice = function(req, res, next){

};

/**
* GET 	/businesses/:id/prestations/:prestationId/prices/:priceId

* Get a single price category (inside a prestation) for this business
* restriction : 'staff'
*/
exports.showPrice = function(req, res, next){

};

/**
* PUT	/businesses/:id/prestations/:prestationId/prices/:priceId

* Update a price category (inside a prestation) for this business
* restriction : 'staff'
*/
exports.updatePrice = function(req, res, next){

};

/**
* DELETE 	/businesses/:id/prestations/:prestationId/prices/:priceId
* Delete a price category (inside a prestation) for this business
* restriction : 'staff'
*/
exports.deletePrice = function(req, res, next){

};



// --- Rendezvous routes ------------

/**
* GET 	/businesses/:id/rendezvous
* Get a list of rendezvous for this business
* restriction : 'staff'
*/
exports.getRendezvous = function(req, res, next){

};

/**
* POST 	/businesses/:id/rendezvous
* Create a rendezvous for this business
* restriction : 'staff'
*/
exports.createRendezvous = function(req, res, next){

};

/**
* GET 	/businesses/:id/rendezvous/:rdvId
* Get a single rendezvous for this business
* restriction : 'staff'
*/
exports.showRendezvous = function(req, res, next){

};

/**
* PUT 	/businesses/:id/rendezvous/:rdvId/missed
* Update the rendezvous status to 'manqué' for this business
* restriction : 'staff'
*/
exports.rendezvousMissed = function(req, res, next){

};

/**
* PUT 	/businesses/:id/rendezvous/:rdvId/finished
* Update the rendezvous status to 'terminé' for this business
* restriction : 'staff'
*/
exports.rendezvousFinished = function(req, res, next){

};

/**
* PUT 	/businesses/:id/rendezvous/:rdvId/cancelled
* Update the rendezvous status to 'annulé' for this business
* restriction : 'staff'
*/
exports.rendezvousCancelled = function(req, res, next){

};

/**
* PUT 	/businesses/:id/rendezvous/:rdvId/move
* Update the rendezvous date & status to 'déplacé' for this business
* restriction : 'staff'
*/
exports.moveRendezvous = function(req, res, next){

};

/**
* DELETE 	/businesses/:id/rendezvous/:rdvId
* Delete a rendezvous for this business
* restriction : 'staff'
*/
exports.deleteRendevous = function(req, res, next){

};



// --- Notification routes ------------

/**
* POST 	/businesses/:id/notifications
* Get a list of notifications for this business
* restriction : 'staff'
*/
exports.getNotifications = function(req, res, next){

};

/**
* DELETE 	/businesses/:id/notifications/:notifId
* Delete a notification for this business
* restriction : 'staff'
*/
exports.deleteNotification = function(req, res, next){

};



// --- Test auth.hasAccess ------------

exports.test = function(req, res, next){
	return res.status(200).json({
		message : 'test done.'
	});
}



// --- Business Applicative Service ------------

/**
* Get a set of data for this business
*/
exports.overview = function(req, res, next){
	// GET Business (+ Schedules) datas
	// GET Staffs
	// GET Prestations (+ Prices)
	// GET Rendezvous futurs sur période T
};