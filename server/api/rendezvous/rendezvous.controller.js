/**
 * Using Rails-like standard naming convention for endpoints.

 * GET     /rendezvous		           	->  index
 * POST    /rendezvous              	->  create
 * GET     /rendezvous/:id    			->  show
 * PUT     /rendezvous/:id    			->  update
 * DELETE  /rendezvous/:id          	->  destroy
 */

'use strict';

var Rendezvous = require('./rendezvous.model'),
	Staff = require('../staff/staff.model'),
	Business = require('../business/business.model'),
	Prestation = require('../prestation/prestation.model'),
	PrestationRdv = require('../prestationRdv/prestationRdv.model');

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
	var clientId = req.user._id,
		clientName = req.user.fullname,
		clientAge = req.user.age,
		prestationId = req.body.prestationId,
		businessId = req.body.businessId,
		staffId = req.body.staffId;

	Prestation.findOne({ _id: prestationId, businessId: businessId }, function (err, prestationFound){
		if(err) return res.send(500, err);
		if (!prestationFound) return res.status(404).json({ message : 'Prestation non trouvé.' });

		Staff.findOne({_id: staffId}, function (err, staffFound){
			if(err) return res.send(500, err);
			if (!staffFound) return res.status(404).json({ message : 'Ce staff n\'existe pas.' });

			// Initiate var for price category search
			var i = 0,
				message = '',
				status = 404,
				priceId = '';

			// Find the correct price category (compare with user schema age virtual)
			do{
				if(prestationFound.prices[i].ageLowLimit <= clientAge && 
					prestationFound.prices[i].ageHighLimit > clientAge){

					if(prestationFound.prices[i].gender === req.user.gender ||
						prestationFound.prices[i].gender === 'mixte'){
						
						status = 200;
						priceId = prestationFound.prices[i]._id;

					} else {
						message = 'Sexe de l\'utilisateur : '+req.user.gender+'<br/> Sexe applicable à cette prestation : '+prestationFound.prices[i].gender;
					}
				} else {
					message = 'Aucun prix de cette prestation ne convient à votre age.';
				}

				i++;
			} while(i <= prestationFound.prices.length-1 && status === 404)

			// Stop the process if the status is still '404'
			if (status === 404) {
				return res.status(404).json({ message : message }).end();
			} 
			// We have the correct price -> PrestationRdv & Rendezvous creation
			else {
				var myPrice = prestationFound.prices.id(priceId);

				var newPrestationRdv = new PrestationRdv({
					name: prestationFound.name,
					shortDescription: prestationFound.shortDescription,
					description: prestationFound.description,
					duration: prestationFound.duration,
					price: {
						categoryName: myPrice.categoryName,
						ageLowLimit: myPrice.ageLowLimit,
						ageHighLimit: myPrice.ageHighLimit,
						price: myPrice.price,
						gender: myPrice.gender
					}
				});

				Business.findOne({_id: businessId}, function (err, businessFound){
					if(err) return res.send(500, err);
					if (!businessFound) return res.status(404).json({ message : 'Le salon recherché n\'existe pas.' });
					
					var newRendezvous = new Rendezvous({
						startHour: req.body.startHour,
						endHour: req.body.endHour,
						business: {
							businessId: businessId,
							businessName: businessFound.name
						},
						client: {
							clientId: clientId,
							clientName: clientName
						},
						staff: {
							staffId: staffId,
							staffName: staffFound.name
						},
						prestation: {
							prestationRdvId: newPrestationRdv._id,
							prestationRdvName: prestationFound.name
						},
						status: 'reservé' 
					});

					newPrestationRdv.save(function (err, prestationRdvSaved){
						if(err) return res.send(500, err);
					});

					newRendezvous.save(function (err, rendezvousSaved){
						if(err) return res.send(500, err);
					});

					return res.status(201).json({
						message : 'Votre rendez-vous a été enregistré avec succès.'
					}).end();

				}); // fin Business.find();

			} // fin else{}
			
		}); // fin User.find();
	}); // fin Prestation.find();
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
				message: 'Vous ne pouvez pas réaliser cette action si votre rendez-vous à lieu dans moins de 24h.'
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