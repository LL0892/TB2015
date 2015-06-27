/**
 * Using Rails-like standard naming convention for endpoints.

 * GET     /rendezvous		           	->  index
 * POST    /rendezvous              	->  create
 * GET     /rendezvous/:id    			->  show
 * PUT     /rendezvous/:id/cancelled    ->  update
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
 * Update a rendezvous
 */
 exports.update = function(req, res, next){

 };

 /**
 * Delete a rendezvous
 */
 exports.destroy = function(req, res, next){

 };