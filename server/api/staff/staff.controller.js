/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /staffs          	->  index
 * GET     /staffs/:id          ->  show
 * GET     /staffs/me           ->  me
 * POST    /staffs              ->  create
 */
'use strict';

var Staff = require('./staff.model');
var User = require('../user/user.model');
var Business = require('../business/business.model');
//var Business = require('../business/business.model');

/*
* Get a list of staff from that business
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
		if(err) { return handleError(res, err); }
		if(!staffFound) { return res.send(404); }
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
		if(err) { return handleError(res, err); }
		if(!staffFound) { return res.send(404); }
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
				  	businessID: req.body.businessID
				});

				// Check business is existant
				Business.findById(req.body.businessID, function (err, businessExistant){
					if (err) return next(err);
					if (!businessExistant) { 
						return res.send(404).json({
							message: 'Le salon de coiffure demandé est introuvable.'
						}); 
					}
				});

				newStaff.save(function(err, staffSaved){
					if(err) return next(err);

					// Update user
					userFound.staff = staffSaved._id;
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