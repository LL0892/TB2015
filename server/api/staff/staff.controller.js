/**
 * Using Rails-like standard naming convention for endpoints.
 * POST    /staff              ->  create
 * GET     /staff/:id          ->  show
 */
'use strict';

var Staff = require('./staff.model');
var User = require('../user/user.model');
//var Business = require('../business/business.model');

/*
* Get a list of staff from that business
* restriction : 'manager'
*/
// TODO

/*
* Get a single staff profile
*/
exports.show = function(req, res){
	var staffId = req.params.id;

	Staff.findById(staffId, function (err, staff){
		if(err) { return handleError(res, err); }
		if(!thing) { return res.send(404); }
		return res.json(200, staff);
	})
}

/*
* Create a new Staff
* restriction: 'staff' if not existant profile
* steps:
* 1. find if not existing staff
* 1.1 save staff
* 2. modifier user
*/
exports.create = function (req, res, next) {
	var staffSaved = '';
	var userId = req.user._id;

	// Step 1 + 1.1
	User
		.find({ _id: userId })
		.where({ staff: {'$eq': null} })
		.exec(function (err, staffFound){
			if(err) return next(err);

			if (staffFound.length == 0) {
				// Create a new staff
				var newStaff = new User({
				  	name: req.body.name,
				  	staffContact: {
				  		phone: req.body.phone,
				  		mobile: req.body.mobile,
				  		email: req.body.email
				  	},
				  	photoStaffURL: req.body.photoStaffURL,
				  	businessID: req.body.businessID
				});
				newStaff.save(function(err, staffSaved){
					if(err) return next(err);
					staffSaved = staffSaved;
					//res.status(201).json(convertStaff(staffSaved)).end();
				});
			} else {
				return res.status(422).json({ message: 'Profil de staff déjà existant.' });
			}

		});

	// Step 2
	User.findById({ _id: userId }), function (err, user){
		if(err) return next(err);
		user.staff = staffSaved._id;
		user.save(function (err, userSaved){
			if (err) return next(err);
			return res.status(201).json({
				message: 'Votre profil client a été mit à jours. Votre profil staff a été crée avec succès.',
				user: userSaved,
				staff: staffSaved
			}).end();
		});
	};
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