/**
 * Using Rails-like standard naming convention for endpoints.
 
 --- Prestations routes ---
 * GET     /prestation              	->  index
 * POST    /prestation              	->  create
 * GET     /prestation/:id          	->  show
 * PUT     /prestation/:id          	->  update
 * PUT	   /prestation/:id/status   	->  status
 * DELETE  /prestation/					->	destroy

 --- Prices routes ---
 * POST    /prestation/:id/prices     	->  addPrice
 * PUT     /prestation/:id/prices/:id 	->  updatePrice
 * DELETE  /prestation/:id/prices/:id 	->  deletePrice
 */

'use strict';

var Prestation = require('./prestation.model');
//var Price = require('./prestation.model').Price;

// --- Prestation controller ---
/**
 * Get a list of prestation
 */
 exports.index = function(req, res, next){
  Prestation.find({}, function (err, prestationsFound) {
    if(err) { return handleError(res, err); }
    return res.status(200).json({
    	prestations: prestationsFound
    });
  });
 };

/**
 * Create a new prestation
 * restriction: 'staff'
 */
 exports.create = function(req, res, next){
 	var newPrestation = new Prestation({
		name: req.body.name,
		shortDescription : req.body.shortDescription,
		description: req.body.description,
		duration: req.body.duration,
		businessID: req.body.businessID,
		//price: new Price(),
		isActive: true
 	});

 	newPrestation.save(function (err, prestationSaved){
 		if (err) return next(err);
 		res.status(201).json({
 			message : 'La prestation a été ajoutée avec succès. <br/> Les prix sont modifiable via le menu de gestion des prestations.',
 			prestation : prestationSaved
 		});
 	});
 };

/**
 * Get a single prestation
 */
 exports.show = function(req, res, next){
 	var prestationId = req.params.id;

	Prestation.findById(prestationId, function (err, prestationFound) {
		if (err) return next(err);
		if (!prestationFound) return res.status(404).json({ message : 'Prestation non existante.' });
		res.status(200).json({
			prestation : prestationFound
		});
	});
 };

/**
 * Update a prestation
 * restriction: 'staff'
 */
 exports.update = function(req, res, next){
 	var prestationId = req.params.id;

 	Prestation.findById(prestationId, function (err, prestationFound){
 		if (err) return next(err);
		if (!prestationFound) return res.status(404).json({ message : 'Prestation non existante.' });
 		
		prestationFound.name = req.body.name,
		prestationFound.shortDescription = req.body.shortDescription,
		prestationFound.description = req.body.description,
		prestationFound.duration = req.body.duration,
		prestationFound.businessID = req.body.businessID

		prestationFound.save(function(err, prestationUpdated){
	 		if (err) return next(err);
	 		res.status(200).json({
	 			message : 'La prestation a été modifiée avec succès. <br/> Les prix sont modifiable via le menu de gestion des prestations.',
	 			prestation : prestationUpdated
	 		});
		});
 	});
 };

/**
 * Change the prestation status
 * restriction: 'staff'
 */
 exports.status = function(req, res, next){
 	var prestationId = req.params.id;

 	Prestation.findById(prestationId, function (err, prestationFound){
 		if (err) return next(err);
		if (!prestationFound) return res.status(404).json({ message : 'Prestation non existante.' });
 		
 		if (prestationFound.isActive === false) {
 			prestationFound.isActive = true;
 		} else {
 			prestationFound.isActive = false;
 		}
 		
		prestationFound.save(function(err, prestationUpdated){
	 		if (err) return next(err);
	 		res.status(200).json({
	 			message : 'Le status de la prestation a été modifiée avec succès. Visibilité par la clientèle : ' + prestationUpdated.isActive,
	 			prestation : prestationUpdated
	 		});
		});
 	});
 };

/**
 * Remove a prestation
 * restriction: 'manager'
 */
 exports.destroy = function(req, res, next){

 };

// --- Price controller ---
 /**
 * Add a price category
 * restriction: 'staff'
 */
 exports.addPrice = function(req, res, next){

 };

 /**
 * Update a price category
 * restriction: 'staff'
 */
 exports.updatePrice = function(req, res, next){

 };

 /**
 * delete a price category
 * restriction: 'staff'
 */
 exports.deletePrice = function(req, res, next){

 };