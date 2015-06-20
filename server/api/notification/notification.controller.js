/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /notifications              ->  index
 * GET     /notifications              ->  me
 * POST    /notifications              ->  create
 * GET     /notifications/:id          ->  show
 * PUT     /notifications/:id          ->  update
 * PUT	   /notifications/:id/viewed   ->  viewed
 * PUT	   /notifications/:id/accepted ->  accepted
 * PUT	   /notifications/:id/refused  ->  refused
 * DELETE  /notifications/:id          ->  destroy
 */

'use strict';

var Notification = require('./notification.model');
//var User = require('../user/user.model');

 /**
 * Get a list of notification
 */
 exports.index = function(req, res, next){
  Notification.find({}, function (err, notificationsFound) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(notificationsFound);
  });
 };

 /**
 * Get the notifications recieved and sent by this user
 */
exports.me = function(req, res, next){
	userId = req.user._id;
	Notification.find({
		sentBy: userId
	}).or({
		sentTo: userId
	}), function (err, notificationsFound){

	};
};

 /**
 * Create a new notification
 */
 exports.create = function(req, res, next){
 	var newNotification = new Notification({
		title: req.body.title,
		text: req.body.text,
		sentBy : req.user._id,
		sentTo : req.body.sentTo,
		status : 'not processed',
		isViewed : false,
		relatedToBusiness: req.body.businessID
 	});

 	newNotification.save(function (err, notificationSaved){
 		if (err) return next(err);
 		res.status(201).json({
 			message: 'La notification fut envoyée avec succès.',
 			notification: notificationSaved
 		}).end();
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
		res.status(200).json(notificationFound);
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
	 	relatedToBusiness: notif.relatedToBusiness,
	 	status: notif.status,
	 	isViewed: notif.isViewed
	 }
 }