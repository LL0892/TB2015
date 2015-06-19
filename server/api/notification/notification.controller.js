/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /notification              ->  index
 * POST    /notification              ->  create
 * GET     /notification/:id          ->  show
 * GET     /notification/me           ->  me  
 * PUT     /notification/:id          ->  update
 * PUT	   /notification/:id/viewed   ->  viewed
 * PUT	   /notification/:id/accepted ->  accepted
 * PUT	   /notification/:id/refused  ->  refused
 * DELETE  /notification/:id          ->  destroy
 */

'use strict';

var Notification = require('./notification.model');

 /**
 * Get a list of notification
 */
 exports.index = function(req, res, next){
  Notification.find(function (err, notifications) {
    if(err) { return handleError(res, err); }
    return res.json(200, notifications);
  });
 };

 /**
 * Create a new notification
 */
 exports.create = function(req, res, next){
 	var newNotification = new Notification({
		title: req.body.title,
		text: req.body.text,
		//sentBy : req.body.sentBy,
		sentTo : req.body.sentTo,
		relatedToBusiness: req.body.businessID
 	});
 	newNotification.sentBy = req.user._id;
 	newNotification.status = 'not processed';
 	newNotification.isViewed = false;

 	newNotification.save(function (err, notificationSaved){
 		if (err) return next(err);
 		res.status(201).json(notificationSaved).end();
 	});
 };
 
 /**
 * Get a single notification
 */
 exports.show = function(req, res, next){
 	var notifID = req.params.id;

	Notification.findById(notifID, function (err, notificationFound) {
		if (err) return next(err);
		if (!notificationFound) return res.send(401);
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
 		if(notificationFound.isViewed === false){
	 		notificationFound.isViewed = true;
	 		notificationFound.updatedOn = Date.now();
	 		notificationFound.save(function (err, notificationSaved){
		 		if (err) return next(err);
		 		res.status(200).json(notificationSaved).end();
	 		});
 		} else {
 			res.send(403);
 		}
 	});
 };

 /**
 * Change the status to accepted
 */
 exports.accepted = function(req, res, next){
 	var notifID = req.params.id;

 	Notification.findById(notifID, function (err, notificationFound){
 		notificationFound.status = 'accepted';
 		notificationFound.updatedOn = Date.now();
 		notificationFound.save(function (err, notificationSaved){
	 		if (err) return next(err);
	 		res.status(200).json(notificationSaved).end();
 		});
 	});
 };

 /**
 * Change the status to refused
 */
 exports.refused = function(req, res, next){
 	var notifID = req.params.id;

 	Notification.findById(notifID, function (err, notificationFound){
 		notificationFound.status = 'refused';
 		notificationFound.updatedOn = Date.now();
 		notificationFound.save(function (err, notificationSaved){
	 		if (err) return next(err);
	 		res.status(200).json(notificationSaved).end();
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