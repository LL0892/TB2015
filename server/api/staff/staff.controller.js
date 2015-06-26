/**
 * Using Rails-like standard naming convention for endpoints.
 * POST    /staffs              ->  create
 * GET     /staffs/me           ->  me
 * PUT	   /staffs/me 			->	update
 * GET     /staffs/:id          ->  show
 \* PUT     /staffs/:id/status   ->  status
 */

'use strict';

var Staff = require('./staff.model');
var User = require('../user/user.model');
var Business = require('../business/business.model');
var mongoose = require('mongoose');


/*
* Create a new Staff
* restriction: 'staff'
*/
exports.create = function (req, res, next) {
	var userId = req.user._id;
	//console.log(userId);

	User.findById(userId, function(err, userFound){
		if(err) return next(err);
		if(!userFound) return res.status(404).json({ message : 'Cet utilisateur n\'existe pas.' });

		// If no staff profile already created
		if(userFound.staffId === undefined){
			
			var newStaff = new Staff({
				name: req.body.name,
				staffContact: {
					phone: req.body.phone,
					mobile: req.body.mobile,
					email: req.body.email
				},
				photoStaffURL: req.body.photoStaffURL,
				businessId: req.body.businessId,
				isActive: true
			});

			// Check business is existant
			Business.findById(req.body.businessId, function (err, businessFound){
				if (err) return next(err);
				if (!businessFound) { 
					return res.status(404).json({
						message: 'Le salon de coiffure demandé est introuvable.'
					}).end(); 
				} else {
					businessFound.staffs.push({
						staffName : newStaff.name,
						staffId : newStaff._id,
						staffVisibility : newStaff.isActive
					});

					businessFound.save(function (err, businessUpdated){
						if (err) return next(err);
						//console.log(businessUpdated);
					});
				}
			});

			// Create the staff
			newStaff.save(function (err, staffSaved){
				if (err) return next(err);
				
				// Update User
				userFound.staffId = staffSaved._id;
				userFound.save(function (err, userUpdated){
					if (err) return next(err);

					return res.status(201).json({
						message : 'Votre profil staff a été crée avec succès.',
						user: userUpdated,
						staff: staffSaved
					}).end();
				});
			});

		} else {
			return res.status(403).json({
				message : 'Vous avez déjà crée un profil staff.'
			}).end();
		}
	});
};

/*
* Get my staff profile
* restriction: 'staff'
*/
exports.me = function(req, res, next){
	var staffId = req.user.staffId;

	Staff.findById(staffId, function (err, staffFound){
		if(err) return handleError(res, err);
		if(!staffFound) return res.status(404).json({ message : 'Vous n\'avez pas de profil staff existant.' });
		return res.status(200).json({
			staff : staffFound
		}).end();
	});
};

/*
* Update my staff profile
* restriction : 'staff'
*/
exports.update = function (req, res, next){
	var staffId = req.user.staffId;

	Staff.findOne(staffId, function (err, staffFound){
		if(err) return res.send(500, err);
		if(!staffFound) return res.status(404).json({
			message : 'ce profil staff n\'existe pas.'
		});

		staffFound.name = String(req.body.name);
		staffFound.photoStaffURL = String(req.body.photoStaffURL);
		staffFound.staffContact.email = String(req.body.email);
		staffFound.staffContact.phone = String(req.body.phone);
		staffFound.staffContact.mobile = String(req.body.mobile);
		staffFound.businessId = staffFound.businessId;
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
* Get a single staff profile
*/
exports.show = function(req, res, next){
	var staffId = req.params.id;

	Staff.findById(staffId, function (err, staffFound){
		if(err) return handleError(res, err);
		if(!staffFound) return res.status(404).json({ message : 'Ce staff n\'existe pas.' });
		return res.status(200).json({
			staff : staffFound
		}).end();
	})
};

/*
* Change the status of this staff (and the public status in business)
* restriction : 'staff'
*/
exports.status = function (req, res, next){
 	var staffId = req.params.id;
 	var businessId = req.staff.businessId;
 	// businessId = req.params.businessId;

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
		 				message: 'Le status de '+ staffUpdated.name +' a été correctement modifié. Prise de rendez-vous possible :' + staffUpdated.isActive, 
		 				staff: staffUpdated 
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

function handleError(res, err) {
  return res.send(500, err);
}