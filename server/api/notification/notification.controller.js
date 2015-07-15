/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /notifications              ->  index
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
 * GET     /notifications   ->  index
 * Get a list of my notifications received
 */
 exports.index = function(req, res, next){
 	var userId = req.user._id;

	var query = Notification.find({
		'sentTo.receptorId': userId
	});

	query.exec(function (err, notificationsFound) {
	    if(err) return res.send(500, err);
	    if (notificationsFound.length < 1) return res.status(404).json({
	    	message : 'Il n\'y a pas de notification à afficher.'
	    }).end();
	    

		// Loop through the notifications - apply profile virtual for each notifications
		var i = 0;
		do{
			notificationsFound[i] = notificationsFound[i].profileUser
			i++;
		}while(i <= notificationsFound.length-1)

	    return res.status(200).json({
	    	notifications :	notificationsFound
	    }).end();
	});
 };

 /**
 * GET	   /notifications/:id   ->  show
 * Get a notification, change viewed boolean if false, or just show the notif.
 */
 exports.show = function(req, res, next){
 	var notifId = req.params.id,
 		userId = req.user._id;

 	Notification.findOne({'sentTo.receptorId': userId, _id: notifId}, function (err, notificationFound){
 		if(err) return res.send(500, err);
 		if (!notificationFound) return res.status(404).json({ message : 'Notification non existante.' }).end();
 		
 		if(notificationFound.isViewed === false){
	 		notificationFound.isViewed = true;
	 		notificationFound.save(function (err, notificationSaved){
		 		if(err) return res.send(500, err);
		 		return res.status(200).json({
		 			notification : notificationSaved.profileUser
		 		}).end();
	 		});
 		} else {
 			return res.status(200).json({
 				notification : notificationFound.profileUser
 			}).end();
 		}
 	});
 };

 /**
 * PUT	   /notifications/:id/accepted ->  accepted
 * Change the status to accepted
 */
 exports.accepted = function(req, res, next){
 	var notifId = req.params.id,
 		userId = req.user._id;

 	Notification.findOne({'sentTo.receptorId': userId, _id: notifId}, function (err, notificationFound){
 		if(err) return res.send(500, err);
 		if (!notificationFound) return res.status(404).json({ message : 'Notification non existante.' }).end();
 		
 		if(notificationFound.status === 'not processed'){
	 		notificationFound.status = 'accepted';
	 		notificationFound.save(function (err, notificationSaved){
		 		if(err) return res.send(500, err);

		 		// Add staff role for this user and businessId
		 		User.findById(userId, function (err, userFound){
		 			if(err) return res.send(500, err);
		 			if (!userFound) return res.status(404).json({ message : 'Vous n\'êtes pas connecté.' }).end();

		 			userFound.roles.push('staff');
		 			userFound.businessId = notificationFound.business.businessId;
		 			userFound.save(function (err, userSaved){
		 				if(err) return res.send(500, err);
		 			});
		 		});

		 		return res.status(200).json({
		 			message : 'Le status de la notification a été mit à jours avec succès: ' + notificationSaved.status
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
 * PUT	   /notifications/:id/refused  ->  refused
 * Change the status to refused
 */
 exports.refused = function(req, res, next){
 	var notifId = req.params.id,
 		userId = req.user._id;

 	Notification.findOne({'sentTo.receptorId': userId, _id: notifId}, function (err, notificationFound){
 		if(err) return res.send(500, err);
 		if (!notificationFound) return res.status(404).json({ message : 'Notification non existante.' }).end();
 		if(notificationFound.status === 'not processed'){
	 		notificationFound.status = 'refused';
	 		notificationFound.save(function (err, notificationSaved){
		 		if(err) return res.send(500, err);
		 		return res.status(200).json({
		 			message : 'Le status de la notification a été mit à jours avec succès: ' + notificationSaved.status
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
 * DELETE  /notifications/:id  ->  destroy
 * Remove a notification
 */
 exports.destroy = function(req, res, next){
 	var notifId = req.params.id,
 		userId = req.user._id;

 	Notification.remove({'sentTo.receptorId': userId, _id: notifId}, function (err, notificationRemoved){
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