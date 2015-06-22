/**
 * Using Rails-like standard naming convention for endpoints.
 * POST    /staffs          	->  index
 * GET     /staffs/:id          ->  show
 * GET     /staffs/me           ->  me
 * POST    /staffs              ->  create
 * PUT	   /staffs/me 			->	update
 * PUT     /staffs/:id/status   ->  status
 */
'use strict';

var Staff = require('./staff.model');
var User = require('../user/user.model');
var Business = require('../business/business.model');

/*
* Get a list of staff from a business
*/
exports.index = function (req, res, next){
 	Staff.find({
 		businessID: req.body.businessID
 	}, '-createdOn -updatedOn', function (err, staffsFound){
 		if(err) return res.send(500, err);
 		res.status(200).json(staffsFound).end();
 	});
};

/*
* Get a single staff profile
*/
exports.show = function(req, res, next){
	var staffId = req.params.id;

	Staff.findById(staffId, function (err, staffFound){
		if(err) return handleError(res, err);
		if(!staffFound) return res.status(404).json({ message : 'Ce staff n\'existe pas.' });
		return res.json(200, staffFound);
	})
};

/*
* Get my staff profile
* restriction: 'staff'
*/
exports.me = function(req, res, next){
	var staffId = req.user.staff;
	Staff.findOne({
		_id: staffId
	}, function (err, staffFound){
		if(err) return handleError(res, err);
		if(!staffFound) return res.status(404).json({ message : 'Ce staff n\'existe pas.' });
		return res.json(200, staffFound);
	});
};

/*
* Create a new Staff
* restriction: 'staff'
* steps:
* 1. check there is no existing staff profile
* 1.1 save staff profile
* 2. modifier user with the staff refId
*/
exports.create = function (req, res, next) {
	var userId = req.user._id;

	User
		.findById(userId, function(err, userFound){
			if(err) return next(err);
			if(!userFound) return res.status(404).json({ message : 'Cet utilisateur n\'existe pas.' });

			if (userFound.staff === 0 || userFound.staff === null || userFound.staff === undefined) {
				// Create a new staff
				var newStaff = new Staff({
				  	name: req.body.name,
				  	staffContact: {
				  		phone: req.body.phone,
				  		mobile: req.body.mobile,
				  		email: req.body.email
				  	},
				  	photoStaffURL: req.body.photoStaffURL,
				  	businessID: req.body.businessID,
				  	isActive: false
				});

				// Check business is existant
				Business.findById(req.body.businessID, function (err, businessExistant){
					if (err) return next(err);
					if (!businessExistant) { 
						return res.status(404).json({
							message: 'Le salon de coiffure demandé est introuvable.'
						}); 
					}
				});

				newStaff.save(function(err, staffSaved){
					if(err) return next(err);

					// Update user
					userFound.staffId = staffSaved._id;
					userFound.save(function (err, userSaved){
					if (err) return next(err);
						return res.status(201).json({
							message: 'Votre profil client a été mit à jours. Votre profil staff a été créé avec succès.',
							user: userSaved,
							staff: staffSaved
						}).end();
					});

				});

			} else {
				return res.status(422).json({ 
					message: 'Profil de staff déjà existant.',
					profile: userFound.staff
				});
			}
		});
};

/*
* Update my staff profile
* restriction : 'staff'
*/
exports.update = function (req, res, next){
	Staff.findOne(req.user.staffId, function (err, staffFound){
		if(err) return res.send(500, err);
		if(!staffFound) return res.status(404).json({
			message : 'ce staff n\'existe pas.'
		});

		staffFound.name = String(req.body.name);
		staffFound.photoStaffURL = String(req.body.photoStaffURL);
		staffFound.staffContact.email = String(req.body.email);
		staffFound.staffContact.phone = String(req.body.phone);
		staffFound.staffContact.mobile = String(req.body.mobile);
		staffFound.businessID = staffFound.businessID;
		staffFound.isActive = staffFound.isActive;

		staffFound.save(function (err, staffUpdated){
			if (err) return next(err);
			return res.status(200).json({
				message : 'Votre profil staff a été correctement modifié.',
				staff: staffUpdated
			});
		});
	});
};

/*
* Change the status of this staff
* restriction : 'staff'
*/
exports.status = function (req, res, next){
 	var staffId = req.params.id;

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

 		staffFound.save(function (err, staffUpdated){
 			if (err) return next(err);
 			res.status(200).json({ 
 				message: 'Le status de '+ staffUpdated.name +' a été correctement modifié. Prise de rendez-vous possible :' + staffUpdated.isActive, 
 				staff: staffUpdated 
 			}).end();
 		});
 	});
};

function convertStaff(staff){
	return {
		id: staff.id,
		name: staff.name,
	  	staffContact: {
	  		phone: staff.phone,
	  		mobile: staff.mobile,
	  		email: staff.email
	  	},
		photoStaffURL: staff.photoStaffURL,
		businessID: staff.businessID
	}
}

function handleError(res, err) {
  return res.send(500, err);
}