/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /notifications              ->  index
 * GET     /notifications/received     ->  received
 * GET     /notifications/sent         ->  sent
 * POST    /notifications              ->  create
 * GET     /notifications/:id          ->  show
 * PUT     /notifications/:id          ->  update
 * PUT	   /notifications/:id/viewed   ->  viewed
 * PUT	   /notifications/:id/accepted ->  accepted
 * PUT	   /notifications/:id/refused  ->  refused
 * DELETE  /notifications/:id          ->  destroy
 */

'use strict';

var Notification = require('./notification.model'),
	Business = require('../business/business.model');

 /**
 * Get a list of notifications
 * UNUSED NOW
 */
 exports.index = function(req, res, next){
  Notification.find({}, function (err, notificationsFound) {
    if(err) { return handleError(res, err); }
    return res.status(200).json({
    	notifications :	notificationsFound
    }).end();
  });
 };

 /**
 * Get the notifications received
 * UNUSED NOW
 */
exports.received = function(req, res, next){
	var userId = req.user._id;
	Notification.find({
		sentTo: userId
	}), function (err, notificationsFound){
		if (err) return next(err);
		if (!notificationsFound) return res.status(404).json({ message : 'Notifications non existantes.' });
		return res.status(200).json({
			notification : notificationsFound
		}).end();
	};
};

 /**
 * Get the notifications sent
 * UNUSED NOW
 */
exports.sent = function(req, res, next){

};

 /**
 * Create a new notification
 * restriction : 'staff'
 */
 exports.create = function(req, res, next){
 	var userId = req.user._id,
 		businessId = req.staff.businessId;

 	Business.findById(businessId, function (err, businessFound){
 		if(err) return next(err);
 		if(!businessFound) return res.status(403).json({
 			message : 'Vous n\'avez pas les droits d\'ajouter une personne au staff sans avoir un profil staff.'
 		}).end();

	 	var newNotification = new Notification({
			title: req.body.title,
			text: req.body.text,
			sentBy : userId,
			sentTo : req.body.sentTo,
			status : 'not processed',
			isViewed : false,
			business : {
				businessId: businessFound._id,
				businessName: businessFound.name
			}
	 	});

	 	newNotification.save(function (err, notificationSaved){
	 		if (err) return next(err);
	 		res.status(201).json({
	 			message: 'La notification fut envoyée avec succès pour le salon : '+ notificationSaved.business.businessName + '.',
	 			notification: notificationSaved
	 		}).end();
	 	});
 	});
 };
 
 /**
 * Get a single notification
 */
 exports.show = function(req, res, next){
 	var notifID = req.params.id;

	Notification.findById(notifID, function (err, notificationFound) {
		if (err) return next(err);
		if (!notificationFound) return res.status(404).json({ message : 'Notification non existante.' });
		res.status(200).json({
			notification : notificationFound
		}).end();
	});
 };

 /**
 * Update the notification attributes
 */
 exports.update = function(req, res, next){
 	return res.send(501);
 };
 
 /**
 * Change the viewed boolean of a notification
 */
 exports.viewed = function(req, res, next){
 	var notifID = req.params.id;

 	Notification.findById(notifID, function (err, notificationFound){
 		if (!notificationFound) return res.status(404).json({ message : 'Notification non existante.' });
 		if(notificationFound.isViewed === false){
	 		notificationFound.isViewed = true;
	 		notificationFound.save(function (err, notificationSaved){
		 		if (err) return next(err);
		 		res.status(200).json({
		 			message : 'La notification suivante désormais notifié comme lue.',
		 			notification : notificationSaved
		 		}).end();
	 		});
 		} else {
 			res.status(200).json({
 				message : 'La notification suivante fut déjà lue precédement.',
 				notification : notificationFound
 			}).end();
 		}
 	});
 };

 /**
 * Change the status to accepted
 */
 exports.accepted = function(req, res, next){
 	var notifID = req.params.id;

 	Notification.findById(notifID, function (err, notificationFound){
 		if (!notificationFound) return res.status(404).json({ message : 'Notification non existante.' });
 		notificationFound.status = 'accepted';
 		notificationFound.save(function (err, notificationSaved){
	 		if (err) return next(err);
	 		res.status(200).json({
	 			message : 'Le status de la notification est changé avec succès: ' + notificationSaved.status,
	 			notification: notificationSaved 
	 		}).end();
 		});
 	});
 };

 /**
 * Change the status to refused
 */
 exports.refused = function(req, res, next){
 	var notifID = req.params.id;

 	Notification.findById(notifID, function (err, notificationFound){
 		if (!notificationFound) return res.status(404).json({ message : 'Notification non existante.' });
 		notificationFound.status = 'refused';
 		notificationFound.save(function (err, notificationSaved){
	 		if (err) return next(err);
	 		res.status(200).json({
	 			message : 'Le status de la notification est changé avec succès: ' + notificationSaved.status,
	 			notification: notificationSaved 
	 		}).end();
 		});
 	});
 };

 /**
 * Remove a notification
 */
 exports.destroy = function(req, res, next){
 	return res.send(501);
 };

 function convertNotification(notif){
	return { 	
		id: notif.id,
	 	name: notif.name,
	 	text: notif.text,
	 	sentBy: notif.sentBy,
	 	sentTo: notif.sentTo,
	 	businessId: notif.businessId,
	 	status: notif.status,
	 	isViewed: notif.isViewed
	 }
 }