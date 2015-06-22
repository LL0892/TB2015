/**
 * Using Rails-like standard naming convention for endpoints.
 
 --- Prestations routes ---
 * GET     /prestation              	->  index
 * POST    /prestation              	->  create
 * GET     /prestation/:id          	->  show
 * PUT     /prestation/:id          	->  update
 * PUT	   /prestation/:id/status   	->  changeStatus
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
 * Get a list of prestation for this business
 */
 exports.index = function(req, res, next){
  Prestation.find({}, function (err, prestationsFound) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(prestationsFound);
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

 };

/**
 * Update a prestation
 * restriction: 'staff'
 */
 exports.update = function(req, res, next){

 };

/**
 * Change the prestation status
 * restriction: 'manager'
 */
 exports.changeStatus = function(req, res, next){

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