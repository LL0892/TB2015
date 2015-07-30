/**
 * Using Rails-like standard naming convention for endpoints.

 --- Business routes ---
 * GET     /businesses              				->  getBusinesses
 * POST    /businesses              				->  createBusiness
 * GET     /businesses/:id          				->  showBusiness
 * PUT     /businesses/:id          				->  updateBusiness
 * PUT     /businesses/:id/pageId      				->  addPageId
 * POST    /businesses/searchByPageId				->  searchByPageId
 --- Schedules subdocument routes ---
 * GET  	/businesses/:id/schedules 				->  getSchedules
 * POST     /businesses/:id/Schedules  				->  addSchedule
 * GET      /businesses/:id/schedules/:scheduleId  	->  showSchedule
 * PUT      /businesses/:id/schedules/:scheduleId  	->  updateSchedule
 * DELETE   /businesses/:id/schedules/:scheduleId  	->  deleteSchedule

 --- Staffs routes ---
 * GET		/businesses/:id/staffs						->  getStaffs
 * GET		/businesses/:id/staffs/:staffId				->  showStaff
 * DELETE	/businesses/:id/staffs/:staffId		 		->  deleteStaff

 --- Prestations routes ---
 * GET 		/businesses/:id/prestations 						->  getPrestations
 * POST 	/businesses/:id/prestations 						->  createPrestation
 * GET 		/businesses/:id/prestations/:prestationId			->  showPrestation
 * PUT 		/businesses/:id/prestations/:prestationId			->  updatePrestation
 * DELETE 	/businesses/:id/prestations/:prestationId			->  deletePrestation
 --- Prices subdocument routes ---
 * POST 	/businesses/:id/prestations/:prestationId/prices 			->  createPrice
 * GET 		/businesses/:id/prestations/:prestationId/prices/:priceId	->  showPrice
 * PUT 		/businesses/:id/prestations/:prestationId/prices/:priceId	->  updatePrice
 * DELETE 	/businesses/:id/prestations/:prestationId/prices/:priceId	->  deletePrice

 --- Rendezvous routes ---
 * GET 		/businesses/:id/rendezvous 						->  getRendezvous
 * POST 	/businesses/:id/rendezvous/search 				->  searchRendezvous
 * POST 	/businesses/:id/rendezvous 						->  createRendezvous
 * GET 		/businesses/:id/rendezvous/:rdvId 				->  showRendezvous
 * PUT 		/businesses/:id/rendezvous/:rdvId/missed		->  rendezvousMissed
 * PUT 		/businesses/:id/rendezvous/:rdvId/finished		->  rendezvousFinished
 * PUT 		/businesses/:id/rendezvous/:rdvId/cancelled 	->  rendezvousCancelled
 * PUT 		/businesses/:id/rendezvous/:rdvId/move			->  moveRendezvous
 * DELETE 	/businesses/:id/rendezvous/:rdvId				->  deleteRendevous

 --- Notification routes ---
 * GET  	/businesses/:id/notifications				->  getNotifications
 * POST 	/businesses/:id/notifications				->  createNotification
 * DELETE 	/businesses/:id/notifications/:notifId		->  deleteNotification

 --- Test auth.hasAccess ---
 * GET  	/businesses/:id/test 		->  test
 */

'use strict';

var Business = require('./business.model'),
	Staff = require('../staff/staff.model'),
	User = require('../user/user.model'),
	Prestation = require('../prestation/prestation.model'),
	Rendezvous = require('../rendezvous/rendezvous.model'),
	PrestationRdv = require('../prestationRdv/prestationRdv.model'),
	Notification = require('../notification/notification.model');


// --- Business routes ------------

/**
* GET	/businesses
* Get a list of business
*/
 exports.getBusinesses = function(req, res, next){
 	Business.find({}, function (err, businessesFound){
 		if(err) return res.send(500, err);
 		if(businessesFound.length <= 0) return res.status(404).json({ message : 'Il n\'y a pas de salons à afficher.' });
 		
 		// Loop through the businesses - apply profile virtual for each businesses
/* 		var i = 0;
 		do{
 			
 			// Loop through the schedules - apply profile virtual for each schedules
 			var j = 0;
 			do{
				businessesFound[i].schedules[j] = businessesFound[i].schedules[j].profile
 				j++;
 			}while(j <= businessesFound[i].schedules.length-1)

 			businessesFound = businessesFound[i].profile

 			i++;
 		}while(i <= businessesFound.length-1)*/

 		res.status(200).json(businessesFound).end();
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
			      siteURL: req.body.siteURL,
			      facebookURL: req.body.facebookURL
			    },
			    imageBusinessURL: req.body.imageBusinessURL
		 	});
		 	newBusiness.founder = req.user._id;
		  	//newBusiness.isActive = false;

		  	// Default Schedules
		  	newBusiness.schedules.push(
		  		{
					dayName: 'lundi',
					dayId: '0',
					startHour: '08:00',
					endHour: '17:00',
					description: 'Horaire du lundi',
					workingDay: true
		  		},
		  		{
					dayName: 'mardi',
					dayId: '1',
					startHour: '08:00',
					endHour: '17:00',
					description: 'Horaire du mardi',
					workingDay: true
		  		},
		  		{
					dayName: 'mercredi',
					dayId: '2',
					startHour: '08:00',
					endHour: '17:00',
					description: 'Horaire du mercredi',
					workingDay: true
		  		},
		  		{
					dayName: 'jeudi',
					dayId: '3',
					startHour: '08:00',
					endHour: '17:00',
					description: 'Horaire du jeudi',
					workingDay: true
		  		},
		  		{
					dayName: 'vendredi',
					dayId: '4',
					startHour: '08:00',
					endHour: '17:00',
					description: 'Horaire du vendredi',
					workingDay: true
		  		},
		  		{
					dayName: 'samedi',
					dayId: '5',
					description: 'Fermé le samedi',
					workingDay: false
		  		},
		  		{
					dayName: 'dimanche',
					dayId: '6',
					description: 'Fermé le dimanche',
					workingDay: false
		  		}
		  	);
			
			User.findOne({'_id': req.user._id}, function (err, userFound){
				if (!userFound) return res.status(404).end();
				if(err) return res.send(500, err);

				userFound.businessId = newBusiness._id;
				userFound.save(function (err, userSaved){
					
				});
			});

			// Save the business
		  	newBusiness.save(function (err, businessSaved){
		    	if(err) return res.send(500, err);
		    	return res.status(201).json({ 
		    		message: 'Votre salon a été créé avec succès.'
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

		// Loop through the schedules - apply profile virtual for each schedules
/*		var i = 0;
		do{
			businessFound.schedules[i] = businessFound.schedules[i].profile
			i++;
		}while(i <= businessFound.schedules.length-1)*/

 		//res.status(200).json({ salon : businessFound.profile }).end();
 		//res.status(200).json(businessFound.profile).end();
 		res.status(200).json(businessFound).end();
 	});
 };

 /**
 * PUT	/businesses/:id
 * Update a business
 * restriction: 'staff'
 */
 exports.updateBusiness = function(req, res, next){
 	var businessId = req.staff.businessId;

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
 			if(err) return res.send(500, err);
 			res.status(200).json({ 
 				message: 'Votre salon a été modifié avec succès.', 
 				business: businessUpdated 
 			}).end();
 		})
 	});
 };

 /**
 * PUT	/businesses/:id/pageId
 * Add the page id reference for this business
 * restriction: 'staff'
 */
 exports.addPageId = function(req, res, next){
 	var businessId = req.user.businessId;

 	Business.findById(businessId, function (err, businessFound){
 		if(!businessFound) return res.status(404).json({ message : 'Ce salon n\'existe pas.' });
 		if(err) return res.send(500, err);

 		businessFound.fbPageId = req.body.fbPageId;
 		
 		businessFound.save(function (err, businessUpdated){
 			if(err) return res.send(500, err);
 			res.status(200).json({ 
 				message: 'Votre page Facebook a été réferencée avec succès.', 
 				business: businessUpdated 
 			}).end();
 		})
 	});
 };

 /**
 * POST /businesses/searchByPageId
 * Search an existing business with a specific facebook page id
 */
exports.searchByPageId = function(req, res, next){
	var pageId = req.body.fbPageId;
	
	Business.findOne({'fbPageId': pageId}, function(err, businessFound){
		if(!businessFound) return res.status(404).json({ message: 'Salon non existant.' });
	 	if(err) return res.send(500, err);

	 	businessFound.save(function(err, businessSaved){
	 		res.status(200).json(businessSaved);
	 	})
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
		if(err) return res.send(500, err);
		if (!businessFound) return res.status(404).json({ message : 'Ce salon n\'existe pas.' });

		var days = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
		var dayId = days.indexOf(req.body.dayName);


		if (req.body.workingDay) {
			businessFound.schedules.push({
				dayName: req.body.dayName,
				dayId : dayId,
				startHour: req.body.startHour,
				endHour: req.body.endHour,
				description: req.body.description,
				workingDay: req.body.workingDay
			});
		} else {
			businessFound.schedules.push({
				dayName: req.body.dayName,
				dayId : dayId,
				description: req.body.description,
				workingDay: req.body.workingDay
			});
		}

		//console.log(businessFound.schedules);

		businessFound.save(function (err, businessUpdated){
			if(err) return res.send(500, err);
			res.status(200).json({
				message : 'L\'horaire a été ajouté avec succès.',
				horaires : businessFound.schedules
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

		var days = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];

		var schedule = businessFound.schedules.id(scheduleId);
		schedule.dayName = req.body.dayName;
		schedule.dayId = days.indexOf(schedule.dayName);
		schedule.startHour = req.body.startHour;
		schedule.endHour = req.body.endHour;
		schedule.description = req.body.description;
		schedule.workingDay = req.body.workingDay;

		// Remove hours if this isn't a working day
		if(schedule.workingDay === false){
			schedule.startHour = undefined;
			schedule.endHour = undefined;
		}

		businessFound.save(function (err, businessUpdated){
			if(err) return res.send(500, err);
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
	 		if(err) return res.send(500, err);
	 		res.status(204).json({
	 			message : 'L\'hoaire a été correctement supprimé du salon.'
	 		}).end();
		});
	});
};



// --- Staffs routes ------------

/**
* GET	/businesses/:id/staffs
* Get a list of staffs for this business
*/
exports.getStaffs = function(req, res, next){
	var businessId = req.params.id;

	Staff.find({businessId : businessId}, function (err, staffsFound){
		if(err) return res.send(500, err);
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
	var staffId = req.params.staffId,
		businessId = req.staff.businessId;

	Staff.findOne({_id: staffId, businessId: businessId}, function (err, staffFound){
		if(err) return res.send(500, err);
		if (!staffFound) return res.status(404).json({ message : 'Il n\'y a pas de staffs à afficher.' });
		return res.status(200).json({ 
			staff: staffFound
		}).end();
	});
};

/**
* DELETE 	/businesses/:id/staffs/:staffId
* Delete a staff for this business
* restriction : 'staff'
*/
exports.deleteStaff = function(req, res, next){
	return res.status(501).json({ message : 'Fonction non implémentée.'}).end();
};



// --- Prestations routes ------------

/**
* GET 	/businesses/:id/prestations
* Get a list of prestations for this business
*/
exports.getPrestations = function(req, res, next){
	var businessId = req.params.id;

	Prestation.find({businessId : businessId}, function (err, prestationsFound){
		if(err) return res.send(500, err);
		if (prestationsFound.length <= 0) return res.status(404).json({ message : 'Il n\'y a pas de prestations à afficher.' });
		return res.status(200).json({ 
			prestations: prestationsFound
		}).end();
	});
};

/**
* POST 	/businesses/:id/prestations
* Create a prestation for this business
* REMOVED FROM UI
* restriction : 'staff'
*/
exports.createPrestation = function(req, res, next){
	var businessId = req.staff.businessId;

 	var newPrestation = new Prestation({
		name: req.body.name,
		//shortDescription : req.body.shortDescription,
		description: req.body.description,
		duration: req.body.duration,
		businessId: businessId
 	});

 	newPrestation.prices.push({
	  	categoryName: 'Prix par défaut',
	  	ageLowLimit: 1,
	  	ageHighLimit: 99,
	  	price: 25,
		gender: 'mixte'
	});

 	newPrestation.save(function (err, prestationSaved){
 		if(err) return res.send(500, err);
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
	var prestationId = req.params.prestationId,
		businessId = req.staff.businessId;

	Prestation.findOne({_id: prestationId, businessId: businessId}, function (err, prestationFound){
		if(err) return res.send(500, err);
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
 	var prestationId = req.params.prestationId,
 		businessId = req.staff.businessId;

 	Prestation.findOne({_id: prestationId, businessId: businessId}, function (err, prestationFound){
 		if(err) return res.send(500, err);
		if (!prestationFound) return res.status(404).json({ message : 'Prestation non existante.' });
 		
		prestationFound.name = req.body.name;
		//prestationFound.shortDescription = req.body.shortDescription;
		prestationFound.description = req.body.description;
		prestationFound.duration = req.body.duration;

		prestationFound.save(function (err, prestationUpdated){
	 		if(err) return res.send(500, err);
	 		return res.status(200).json({
	 			message : 'La prestation a été modifiée avec succès. <br/> Les prix sont modifiable via le menu de gestion des prestations.',
	 			prestation : prestationUpdated
	 		}).end();
		});
 	});
};

/**
* DELETE /businesses/:id/prestations/:prestationId
* Delete a prestation for this business
* restriction : 'staff'
*/
exports.deletePrestation = function(req, res, next){
 	var prestationId = req.params.prestationId,
 		businessId = req.staff.businessId;

 	Prestation.remove({'_id': prestationId, 'businessId': businessId}, function (err, prestationRemoved){
 		if(!prestationRemoved){
 			return res.status(404).json({
 				message : 'Cette prestation n\'existe pas.'
 			}).end();
 		}
 		if (!err) {
 			return res.status(204).json({
 				message: 'La prestation a été supprimée avec succès.'
 			}).end();
 		}else{
			return res.send(500, err);
 		}
 	});
};



// --- Prices subdocument routes ------------

/**
* POST 	/businesses/:id/prestations/:prestationId/prices
* Create a price category (inside a prestation) for this business
* restriction : 'staff'
*/
exports.createPrice = function(req, res, next){
 	var prestationId = req.params.prestationId,
 		businessId = req.staff.businessId;

	Prestation.findOne({_id: prestationId, businessId: businessId}, function (err, prestationFound){
		if(err) return res.send(500, err);
		if (!prestationFound) return res.status(404).json({ message : 'Prestation non existante.' });

		prestationFound.prices.push({
		  	categoryName: req.body.categoryName,
		  	ageLowLimit: req.body.ageLowLimit,
		  	ageHighLimit: req.body.ageHighLimit,
		  	price: req.body.price,
			gender: req.body.gender
		});

		prestationFound.save(function (err, prestationUpdated){
	 		if(err) return res.send(500, err);
	 		return res.status(201).json({
	 			message : 'Le prix a été correctement ajouté à votre prestation.',
	 			prestation : prestationUpdated
	 		}).end();
		});
	});
};

/**
* GET 	/businesses/:id/prestations/:prestationId/prices/:priceId
* Get a single price category (inside a prestation) for this business
* restriction : 'staff'
*/
exports.showPrice = function(req, res, next){
 	var prestationId = req.params.prestationId,
 	 	businessId = req.staff.businessId,
 		priceId = req.params.priceId;

	Prestation.findOne({_id: prestationId, businessId: businessId}, function (err, prestationFound){
		if(err) return res.send(500, err);
		if (!prestationFound) return res.status(404).json({ message : 'Prestation non existante.' });
		if (!prestationFound.prices.id(priceId)) return res.status(404).json({ message : 'Prix demandé non existant.' });

		return res.status(200).json({
			price : prestationFound.prices.id(priceId)
		}).end();
	});
};

/**
* PUT	/businesses/:id/prestations/:prestationId/prices/:priceId
* Update a price category (inside a prestation) for this business
* restriction : 'staff'
*/
exports.updatePrice = function(req, res, next){
 	var prestationId = req.params.prestationId,
 	 	businessId = req.staff.businessId,
 		priceId = req.params.priceId;

	Prestation.findOne({_id: prestationId, businessId: businessId}, function (err, prestationFound){
		if(err) return res.send(500, err);
		if (!prestationFound) return res.status(404).json({ message : 'Prestation non existante.' });
		if (!prestationFound.prices.id(priceId)) return res.status(404).json({ message : 'Prix demandé non existant.' });

		prestationFound.prices.id(priceId).categoryName = req.body.categoryName;
		prestationFound.prices.id(priceId).ageLowLimit = req.body.ageLowLimit;
		prestationFound.prices.id(priceId).ageHighLimit = req.body.ageHighLimit;
		prestationFound.prices.id(priceId).price = req.body.price;
		prestationFound.prices.id(priceId).gender = req.body.gender;

		prestationFound.save(function (err, prestationUpdated){
	 		if(err) return res.send(500, err);
	 		return res.status(200).json({
	 			message : 'Le prix a été correctement modifié pour la prestation souhaitée.',
	 			prestation : prestationUpdated
	 		}).end();
		});
	});
};

/**
* DELETE 	/businesses/:id/prestations/:prestationId/prices/:priceId
* Delete a price category (inside a prestation) for this business
* restriction : 'staff'
*/
exports.deletePrice = function(req, res, next){
 	var prestationId = req.params.prestationId,
 	 	businessId = req.staff.businessId,
 		priceId = req.params.priceId;

	Prestation.findOne({_id: prestationId, businessId: businessId}, function (err, prestationFound){
		if(err) return res.send(500, err);
		if (!prestationFound) return res.status(404).json({ message : 'Prestation non existante.' });
		if (!prestationFound.prices.id(priceId)) return res.status(404).json({ message : 'Prix demandé non existant.' });

		prestationFound.prices.id(priceId).remove();

		prestationFound.save(function (err, prestationUpdated){
	 		if(err) return res.send(500, err);
	 		res.status(200).json({
	 			message : 'Le prix a été correctement supprimé de la prestation souhaitée.',
	 			prestation : prestationUpdated
	 		}).end();
		});
	});
};



// --- Rendezvous routes ------------

/**
* GET 	/businesses/:id/rendezvous
* Get a list of rendezvous for this business
* restriction : 'staff'
*/
exports.getRendezvous = function(req, res, next){
	var businessId = req.staff.businessId;

	Rendezvous.find({'business.businessId': businessId}, 
		'-__v -createdOn -updatedOn', function (err, rendezvousFound){
		if(err) return res.send(500, err);
		if (rendezvousFound.length <= 0) return res.status(404).json({ message : 'Il n\'y a pas de rendez-vous à afficher.' });

		return res.status(200).json({ 
			rendezvous: rendezvousFound
		}).end();
	});
};

/**
* POST 	/businesses/:id/rendezvous/search
* Get a list of rendezvous for a staff member within a timeframe
*/
exports.searchRendezvous = function(req, res, next){
	var businessId = req.params.id,
		staffId = req.body.staffId,
		start = req.body.startDay,
		end = req.body.endDay;

	Rendezvous.find({
		'business.businessId': businessId, 
		'staff.staffId': staffId,
		'startHour': {$gte: start, $lt: end}
	}, '-__v -createdOn -updatedOn', function (err, rendezvousFound){
		if(err) return res.send(500, err);

		return res.status(200).json({ 
			rendezvous: rendezvousFound
		}).end();
	});
};

/**
* POST 	/businesses/:id/rendezvous
* Create a rendezvous for this business
* restriction : 'staff'
*/
exports.createRendezvous = function(req, res, next){
	var businessId = req.staff.businessId,
		staffId = req.body.staffId,
		staffName = req.body.staffName,
		prestationId = req.body.prestationId,
		userId = req.body.clientId;

	Prestation.findOne({ _id: prestationId, businessId: businessId }, function (err, prestationFound){
		if(err) return res.send(500, err);
		if (!prestationFound) return res.status(404).json({ message : 'Prestation non trouvée.' });

		User.findOne({_id: userId}, function (err, userFound){
			if(err) return res.send(500, err);
			if (!userFound) return res.status(404).json({ message : 'Ce client n\'existe pas.' });

			// Initiate var for price category search
			var i = 0,
				message = '',
				status = 404;
				var priceId = '';

			// Find the correct price category (compare with user schema age virtual)
			do{
				if(prestationFound.prices[i].ageLowLimit <= userFound.age && 
					prestationFound.prices[i].ageHighLimit > userFound.age){

					if(prestationFound.prices[i].gender === userFound.gender ||
						prestationFound.prices[i].gender === 'mixte'){
						
						status = 200;
						priceId = prestationFound.prices[i]._id;

					} else {
						message = 'Sexe de l\'utilisateur : '+userFound.gender+'<br/> Sexe applicable à cette prestation : '+prestationFound.prices[i].gender;
					}
				} else {
					message = 'Aucun prix de cette prestation ne convient à votre age.';
				}

				i++;
			} while(i <= prestationFound.prices.length-1 && status === 404)

			// Stop the process if the status is still '404'
			if (status === 404) {
				return res.status(404).json({ message : message }).end();
			} 
			// We have the correct price -> PrestationRdv & Rendezvous creation
			else {
				var myPrice = prestationFound.prices.id(priceId);

				var newPrestationRdv = new PrestationRdv({
					name: prestationFound.name,
					//shortDescription: prestationFound.shortDescription,
					description: prestationFound.description,
					duration: prestationFound.duration,
					price: {
						categoryName: myPrice.categoryName,
						ageLowLimit: myPrice.ageLowLimit,
						ageHighLimit: myPrice.ageHighLimit,
						price: myPrice.price,
						gender: myPrice.gender
					}
				});

				Business.findOne({_id: businessId}, function (err, businessFound){
					if(err) return res.send(500, err);
					if (!businessFound) return res.status(404).json({ message : 'Le salon recherché n\'existe pas.' });
					
					var newRendezvous = new Rendezvous({
						startHour: req.body.startHour,
						endHour: req.body.endHour,
						business: {
							businessId: businessId,
							businessName: businessFound.name
						},
						client: {
							clientId: userFound._id,
							clientName: userFound.fullname
						},
						staff: {
							staffId: staffId,
							staffName: staffName
						},
						prestation: {
							prestationRdvId: newPrestationRdv._id,
							prestationRdvName: prestationFound.name
						},
						status: 'reservé' 
					});

					newPrestationRdv.save(function (err, prestationRdvSaved){
						if(err) return res.send(500, err);
					});

					newRendezvous.save(function (err, rendezvousSaved){
						if(err) return res.send(500, err);
					});

					return res.status(201).json({
						message : 'Votre rendez-vous a été enregistré avec succès.'
					}).end();

				}); // fin Business.find();

			} // fin else{}
			
		}); // fin User.find();
	}); // fin Prestation.find();
};

/**
* GET 	/businesses/:id/rendezvous/:rdvId
* Get a single rendezvous for this business
* restriction : 'staff'
*/
exports.showRendezvous = function(req, res, next){
	var businessId = req.staff.businessId,
		rendezvousId = req.params.rdvId;

	Rendezvous.findOne({_id: rendezvousId, 'business.businessId': businessId}, 
		'-__v -createdOn -updatedOn',  function (err, rendezvousFound){
		if(err) return res.send(500, err);
		if (!rendezvousFound) return res.status(404).json({ message : 'Il n\'y a pas de rendez-vous à afficher.' });

		PrestationRdv.findOne({_id: rendezvousFound.prestation.prestationRdvId}, 
			'-__v -createdOn -updatedOn', function (err, prestationRdvFound){
			if(err) return res.send(500, err);
			if (!prestationRdvFound) return res.status(404).json({ message : 'Il n\'y a pas de prestation pour ce rendez-vous à afficher.' });
			
			return res.status(200).json({ 
				rendezvous: rendezvousFound,
				detailRdv : prestationRdvFound
			}).end();
		})
	});
};

/**
* PUT 	/businesses/:id/rendezvous/:rdvId/missed
* Update the rendezvous status to 'manqué' for this business
* restriction : 'staff'
* REMOVED FROM UI
*/
exports.rendezvousMissed = function(req, res, next){
	var businessId = req.staff.businessId,
		rendezvousId = req.params.rdvId;

	Rendezvous.findOne({_id: rendezvousId, 'business.businessId': businessId}, function (err, rendezvousFound){
		if(err) return res.send(500, err);
		if (!rendezvousFound) return res.status(404).json({ message : 'Le rendez-vous demandé n\'existe pas.' });
		
		var now = new Date();
		if (rendezvousFound.endHour < now) {
			rendezvousFound.status = 'manqué'
			rendezvousFound.save(function (err, rendezvousUpdated){
				if(err) return res.send(500, err);
				return res.status(200).json({ 
					message : 'Status du rendez-vous changé avec succès en : ' + rendezvousUpdated.status
				}).end();
			});
		} else{
			return res.status(403).json({
				message: 'Vous ne pouvez pas réaliser cette action avant que l\'heure de fin soit passée.'
			}).end();
		}
	});
};

/**
* PUT 	/businesses/:id/rendezvous/:rdvId/finished
* Update the rendezvous status to 'terminé' for this business
* restriction : 'staff'
* REMOVED FROM UI
*/
exports.rendezvousFinished = function(req, res, next){
	var businessId = req.staff.businessId,
		rendezvousId = req.params.rdvId;

	Rendezvous.findOne({_id: rendezvousId, 'business.businessId': businessId}, function (err, rendezvousFound){
		if(err) return res.send(500, err);
		if (!rendezvousFound) return res.status(404).json({ message : 'Le rendez-vous demandé n\'existe pas.' });
		
		var now = new Date();
		if (rendezvousFound.endHour < now) {
			rendezvousFound.status = 'terminé'
			rendezvousFound.save(function (err, rendezvousUpdated){
				if(err) return res.send(500, err);
				return res.status(200).json({ 
					message : 'Status du rendez-vous changé avec succès en : ' + rendezvousUpdated.status
				}).end();
			});
		} else{
			return res.status(403).json({
				message: 'Vous ne pouvez pas réaliser cette action avant que l\'heure de fin soit passée.'
			}).end();
		}
	});
};

/**
* PUT 	/businesses/:id/rendezvous/:rdvId/cancelled
* Update the rendezvous status to 'annulé' for this business
* restriction : 'staff'
* REMOVED FROM UI
*/
exports.rendezvousCancelled = function(req, res, next){
	var businessId = req.staff.businessId,
		rendezvousId = req.params.rdvId;

	Rendezvous.findOne({_id: rendezvousId, 'business.businessId': businessId}, function (err, rendezvousFound){
		if(err) return res.send(500, err);
		if (!rendezvousFound) return res.status(404).json({ message : 'Le rendez-vous demandé n\'existe pas.' });

			rendezvousFound.status = 'annulé'
			rendezvousFound.save(function (err, rendezvousUpdated){
				if(err) return res.send(500, err);
				return res.status(200).json({ 
					message : 'Status du rendez-vous changé avec succès en : ' + rendezvousUpdated.status
				}).end();
			});
	});
};

/**
* PUT 	/businesses/:id/rendezvous/:rdvId/move
* Update the rendezvous date & status to 'déplacé' for this business
* restriction : 'staff'
* REMOVED FROM UI
*/
exports.moveRendezvous = function(req, res, next){
	return res.status(501).json({ message : 'Fonction non implémentée.'}).end();
};

/**
* DELETE 	/businesses/:id/rendezvous/:rdvId
* Delete a rendezvous for this business
* restriction : 'staff'
* REMOVED FROM UI
*/
exports.deleteRendevous = function(req, res, next){
	return res.status(501).json({ message : 'Fonction non implémentée.'}).end();
};



// --- Notification routes ------------

/**
* GET 	/businesses/:id/notifications
* Get a list of notifications for this business
* restriction : 'staff'
*/
exports.getNotifications = function(req, res, next){
	var businessId = req.staff.businessId;

	Notification.find({ 'business.businessId': businessId }, function (err, notificationsFound){
		if(err) return res.send(500, err);
		if (notificationsFound.length <= 0) return res.status(404).json({ 
			message : 'Il n\'y a pas de notification à afficher.'
		}).end();
		
		// Loop through the notifications - apply profile virtual for each notifications
		var i = 0;
		do{
			notificationsFound[i] = notificationsFound[i].profileStaff
			i++;
		}while(i <= notificationsFound.length-1)

		res.status(200).json({
			notifications : notificationsFound
		}).end();
	});
};

/**
* POST 	/businesses/:id/notifications
* Create a notification (staff request) for this business
* restriction : 'staff'
*/
exports.createNotification = function(req, res, next){
 	var staffId = req.staff._id,
 		businessId = req.staff.businessId,
		staffName = String(req.staff.name);

 	Business.findById(businessId, function (err, businessFound){
 		if(err) return res.send(500, err);
 		if(!businessFound) return res.status(403).json({
 			message : 'Vous n\'avez pas les droits d\'ajouter une personne au staff sans avoir un profil staff.'
 		}).end();

 		User.findOne({_id: req.body.receptorId}, function (err, userFound){
 			if(err) return res.send(500, err);
 			if (!userFound) return res.status(404).json({
 				message : 'L\'utilisateur demandé n\'est pas trouvable.'
 			});

 			var newNotification = new Notification({
			title: 'Ajout du rôle staff',
			text: 'Acceptes ou refuses cette demande.',
			sentBy : {
				emitterId : staffId,
				emitterName: staffName
			},
			sentTo : {
				receptorId : userFound._id,
				receptorName: userFound.fullname
			},
			status : 'not processed',
			isViewed : false,
			business : {
				businessId: businessFound._id,
				businessName: businessFound.name
			}
	 	});

	 	newNotification.save(function (err, notificationSaved){
	 		if(err) return res.send(500, err);
	 		return res.status(201).json({
	 			message: 'La notification fut envoyée avec succès pour le salon : '+ notificationSaved.business.businessName,
	 			notification: notificationSaved.profileStaff
	 		}).end();
	 	});
 		});


 	});
};

/**
* DELETE 	/businesses/:id/notifications/:notifId
* Delete a notification for this business
* restriction : 'staff'
*/
exports.deleteNotification = function(req, res, next){
	var businessId = req.staff.businessId,
		notifId = req.params.notifId;

 	Notification.remove({_id: notifId, 'business.businessId': businessId}, function (err, notificationRemoved){
 		if(!notificationRemoved){
 			return res.status(404).json({
 				message : 'Cette notification n\'existe pas.'
 			}).end();
 		}
 		if (!err) {
 			return res.status(204).json({
 				message: 'La notification a été supprimée avec succès.'
 			}).end();
 		}else{
			return res.send(500, err);
 		}
 	});
};



// --- Test auth.hasAccess ------------

exports.test = function(req, res, next){
	return res.status(200).json({
		message : 'Access Granted.'
	});
}