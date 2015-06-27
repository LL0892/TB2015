/**
 * Using Rails-like standard naming convention for endpoints.

 * GET     /rendezvous		           	->  index
 * POST    /rendezvous              	->  create
 * GET     /rendezvous/:id    			->  show
 * PUT     /rendezvous/:id    			->  update
 * DELETE  /rendezvous/:id          	->  destroy
 */

'use strict';

var Rendezvous = require('./rendezvous.model');
var PrestationRdv = require('../prestationRdv/prestationRdv.model');

/**
 * Get a list of my rendezvous
 */
 exports.index = function(req, res, next){
	var clientId = req.user._id;

	Rendezvous.find({'client.clientId': clientId}, 
		'-recurance -__v -createdOn -updatedOn', function (err, rendezvousFound){
		if(err) return res.send(500, err);
		if (rendezvousFound.length <= 0) return res.status(404).json({ message : 'Il n\'y a pas de rendez-vous à afficher.' });

		return res.status(200).json({ 
			rendezvous: rendezvousFound
		}).end();
	});
 };

/**
 * Create a new rendezvous
 */
 exports.create = function(req, res, next){

 };

/**
 * Get a single rendezvous
 */
 exports.show = function(req, res, next){
	var clientId = req.user._id,
		rendezvousId = req.params.id;

	Rendezvous.findOne({_id: rendezvousId, 'client.clientId': clientId}, 
		'-recurance -__v -createdOn -updatedOn',  function (err, rendezvousFound){
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
 * Cancel a rendezvous (if the start Hour is in more than 24h)
 */
 exports.update = function(req, res, next){
	var clientId = req.user._id,
		rendezvousId = req.params.id;

	Rendezvous.findOne({_id: rendezvousId, 'client.clientId': clientId}, function (err, rendezvousFound){
		if(err) return res.send(500, err);
		if (!rendezvousFound) return res.status(404).json({ message : 'Le rendez-vous demandé n\'existe pas.' });

		var now = new Date();
		var tommorow = new Date();
		tommorow.setDate(now.getDate()+1);
		
		if (rendezvousFound.startHour > tommorow) {
			rendezvousFound.status = 'annulé'
			rendezvousFound.save(function (err, rendezvousUpdated){
				if(err) return res.send(500, err);
				return res.status(200).json({ 
					message : 'Status du rendez-vous changé avec succès en : ' + rendezvousUpdated.status
				}).end();
			});
		} else {
			return res.status(403).json({
				message: 'Vous ne pouvez pas réaliser cette action après que l\'heure de départ soit passée.'
			}).end();
		}
	});
 };

 /**
 * Delete a rendezvous
 */
 exports.destroy = function(req, res, next){
 	return res.status(501).json({ message : 'Fonction non implémentée.'}).end();
 };