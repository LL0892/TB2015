/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /notifications              ->  index
 \* POST   /notifications              ->  create
 * GET	   /notifications/:id   	   ->  show
 * PUT	   /notifications/:id/accepted ->  accepted
 * PUT	   /notifications/:id/refused  ->  refused
 * DELETE  /notifications/:id          ->  destroy
 */

'use strict';

var Notification = require('./notification.model'),
	Business = require('../business/business.model'),
	User = require('../user/user.model');

 /**
 * Get a list of my notifications received
 */
 exports.index = function(req, res, next){
 	var userId = req.user._id;

	var query = Notification.find({
		'sentTo': {
	  		$in: [userId]
	  	}
	}).select(
		'-createdOn -updatedOn -__v'
	);

	query.exec(function (err, notificationsFound) {
	    if(err) return res.send(500, err);
	    if (notificationsFound.length < 1) return res.status(404).json({
	    	message : 'Il n\'y a pas de notification à afficher.'
	    }).end();
	    
	    return res.status(200).json({
	    	notifications :	notificationsFound
	    }).end();
	});
 };

 /**
 * Create a new notification
 * restriction : 'staff'
 */
/* exports.create = function(req, res, next){
 	var staffId = req.staff._id,
 		businessId = req.staff.businessId,
		staffName = String(req.staff.name);

 	Business.findById(businessId, function (err, businessFound){
 		if(err) return res.send(500, err);
 		if(!businessFound) return res.status(403).json({
 			message : 'Vous n\'avez pas les droits d\'ajouter une personne au staff sans avoir un profil staff.'
 		}).end();

	 	var newNotification = new Notification({
			title: req.body.title,
			text: req.body.text,
			sentBy : {
				emitterId : staffId,
				emitterName: staffName
			},
			sentTo : req.body.sentTo,
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
	 			message: 'La notification fut envoyée avec succès pour le salon : '+ notificationSaved.business.businessName + '.',
	 			notification: notificationSaved
	 		}).end();
	 	});
 	});
 };*/

 /**
 * Get a notification, change viewed boolean if false, or just show the notif.
 */
 exports.show = function(req, res, next){
 	var notifId = req.params.id;

 	Notification.findById(notifId, function (err, notificationFound){
 		if(err) return res.send(500, err);
 		if (!notificationFound) return res.status(404).json({ message : 'Notification non existante.' }).end();
 		
 		if(notificationFound.isViewed === false){
	 		notificationFound.isViewed = true;
	 		notificationFound.save(function (err, notificationSaved){
		 		if(err) return res.send(500, err);
		 		return res.status(200).json({
		 			//message : 'La notification suivante désormais notifié comme lue.',
		 			notification : notificationSaved
		 		}).end();
	 		});
 		} else {
 			return res.status(200).json({
 				//message : 'La notification suivante fut déjà lue precédement.',
 				notification : notificationFound
 			}).end();
 		}
 	});
 };

 /**
 * Change the status to accepted
 */
 exports.accepted = function(req, res, next){
 	var notifId = req.params.id,
 		userId = req.user._id;

 	Notification.findById(notifId, function (err, notificationFound){
 		if(err) return res.send(500, err);
 		if (!notificationFound) return res.status(404).json({ message : 'Notification non existante.' }).end();
 		
 		if(notificationFound.status === 'not processed'){
	 		notificationFound.status = 'accepted';
	 		notificationFound.save(function (err, notificationSaved){
		 		if(err) return res.send(500, err);

		 		// Add staff role for this user
		 		User.findById(userId, function (err, userFound){
		 			if(err) return res.send(500, err);
		 			if (!userFound) return res.status(404).json({ message : 'Vous n\'êtes pas connecté.' }).end();

		 			userFound.roles.push('staff');
		 			userFound.save(function (err, userSaved){
		 				if(err) return res.send(500, err);
		 			});
		 		});

		 		return res.status(200).json({
		 			message : 'Le status de la notification a été mit à jours avec succès: ' + notificationSaved.status,
		 			notification: notificationSaved 
		 		}).end();
	 		});
 		} else {
 			return res.status(403).json({
 				message : 'Vous avez déjà traité cette demande.'
 			});
 		}
 	});
 };

 /**
 * Change the status to refused
 */
 exports.refused = function(req, res, next){
 	var notifId = req.params.id;

 	Notification.findById(notifId, function (err, notificationFound){
 		if(err) return res.send(500, err);
 		if (!notificationFound) return res.status(404).json({ message : 'Notification non existante.' }).end();
 		if(notificationFound.status === 'not processed'){
	 		notificationFound.status = 'refused';
	 		notificationFound.save(function (err, notificationSaved){
		 		if(err) return res.send(500, err);
		 		return res.status(200).json({
		 			message : 'Le status de la notification a été mit à jours avec succès: ' + notificationSaved.status,
		 			notification: notificationSaved 
		 		}).end();
	 		});
 		} else {
 			return res.status(403).json({
 				message : 'Vous avez déjà traité cette demande.'
 			});
 		}
 	});
 };

 /**
 * Remove a notification
 * restriction : 'staff'
 */
 exports.destroy = function(req, res, next){
 	var notifId = req.params.id;

 	Notification.remove(notifId, function (err, notificationRemoved){
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