/**
 * Using Rails-like standard naming convention for endpoints.
 
 --- Prestations routes ---
 * GET     /prestations              	->  index
 \* POST   /prestations              	->  create
 * GET     /prestations/:id          	->  show
 \* PUT     /prestations/:id          	->  update
 \* PUT	   /prestations/:id/status   	->  status
 \* DELETE /prestations/				->	destroy

 --- Prices routes ---
 \* POST    /prestations/:id/prices     		->  addPrice
 \* GET     /prestations/:id/prices/:idPrice 	->  getPrice
 \* PUT     /prestations/:id/prices/:idPrice 	->  updatePrice
 \* DELETE  /prestations/:id/prices/:idPrice 	->  deletePrice
 */

'use strict';

var Prestation = require('./prestation.model');

// --- Prestation controller ---

/**
 * Get a list of prestations
 */
 exports.index = function(req, res, next){
  Prestation.find({}, function (err, prestationsFound) {
    if(err) return res.send(500, err);
    if (prestationsFound.length <= 0) return res.status(404).json({ message : 'Il n\'y a pas de prestations à afficher.' });
    return res.status(200).json({
    	prestations: prestationsFound
    }).end();
  });
 };

/**
 * Create a new prestation
 * restriction: 'staff'
 */
/* exports.create = function(req, res, next){
 	var newPrestation = new Prestation({
		name: req.body.name,
		shortDescription : req.body.shortDescription,
		description: req.body.description,
		duration: req.body.duration,
		businessId: req.staff.businessId,
		//price: new Price(),
		isActive: false
 	});

 	newPrestation.save(function (err, prestationSaved){
 		if (err) return next(err);
 		res.status(201).json({
 			message : 'La prestation a été ajoutée avec succès. <br/> Les prix sont modifiable via le menu de gestion des prestations.',
 			prestation : prestationSaved
 		}).end();
 	});
 };*/

/**
 * Get a single prestation
 */
 exports.show = function(req, res, next){
 	var prestationId = req.params.id;

	Prestation.findById(prestationId, function (err, prestationFound) {
		if(err) return res.send(500, err);
		if (!prestationFound) return res.status(404).json({ message : 'Prestation non existante.' });
		return res.status(200).json({
			prestation : prestationFound
		}).end();
	});
 };

/**
 * Update a prestation
 * restriction: 'staff'
 */
/* exports.update = function(req, res, next){
 	var prestationId = req.params.id;

 	Prestation.findById(prestationId, function (err, prestationFound){
 		if (err) return next(err);
		if (!prestationFound) return res.status(404).json({ message : 'Prestation non existante.' });
 		
		prestationFound.name = req.body.name,
		prestationFound.shortDescription = req.body.shortDescription,
		prestationFound.description = req.body.description,
		prestationFound.duration = req.body.duration,
		prestationFound.businessId = req.staff.businessId

		prestationFound.save(function(err, prestationUpdated){
	 		if (err) return next(err);
	 		res.status(200).json({
	 			message : 'La prestation a été modifiée avec succès. <br/> Les prix sont modifiable via le menu de gestion des prestations.',
	 			prestation : prestationUpdated
	 		}).end();
		});
 	});
 };*/

/**
 * Change the prestation status
 * restriction: 'staff'
 */
/* exports.status = function(req, res, next){
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
	 		}).end();
		});
 	});
 };*/

/**
 * Remove a prestation
 * restriction: 'manager'
 */
/* exports.destroy = function(req, res, next){

 };*/

// --- Price controller ---
 /**
 * Add a price category
 * restriction: 'staff'
 */
/* exports.addPrice = function(req, res, next){
 	var prestationId = req.params.id;

	Prestation.findById(prestationId, function (err, prestationFound){
		if (err) return next(err);
		if (!prestationFound) return res.status(404).json({ message : 'Prestation non existante.' });

		prestationFound.prices.push({
		  	categoryName: req.body.name,
		  	ageLowLimit: req.body.ageLowLimit,
		  	ageHighLimit: req.body.ageHighLimit,
		  	price: req.body.price,
			gender: req.body.gender
		});

		prestationFound.save(function (err, prestationUpdated){
	 		if (err) return next(err);
	 		res.status(201).json({
	 			message : 'Le prix a été correctement ajouté à votre prestation.',
	 			prestation : prestationUpdated
	 		}).end();
		});
	});
 };*/

 /**
 * Get a price category
 * restriction: 'staff'
 */
/* exports.getPrice = function(req, res, next){
 	var prestationId = req.params.id,
 		priceId = req.params.priceId;

	Prestation.findById(prestationId, function (err, prestationFound){
		if (err) return next(err);
		if (!prestationFound) return res.status(404).json({ message : 'Prestation non existante.' });
		if (!prestationFound.prices.id(priceId)) return res.status(404).json({ message : 'Prix demandé non existant.' });

		res.status(200).json({
			price : prestationFound.prices.id(priceId)
		}).end();
	});
 };*/

 /**
 * Update a price category
 * restriction: 'staff'
 */
/* exports.updatePrice = function(req, res, next){
 	var prestationId = req.params.id,
 		priceId = req.params.priceId;

	Prestation.findById(prestationId, function (err, prestationFound){
		if (err) return next(err);
		if (!prestationFound) return res.status(404).json({ message : 'Prestation non existante.' });
		if (!prestationFound.prices.id(priceId)) return res.status(404).json({ message : 'Prix demandé non existant.' });

		prestationFound.prices.id(priceId).categoryName = req.body.name;
		prestationFound.prices.id(priceId).ageLowLimit = req.body.ageLowLimit;
		prestationFound.prices.id(priceId).ageHighLimit = req.body.ageHighLimit;
		prestationFound.prices.id(priceId).price = req.body.price;
		prestationFound.prices.id(priceId).gender = req.body.gender;

		prestationFound.save(function (err, prestationUpdated){
	 		if (err) return next(err);
	 		res.status(200).json({
	 			message : 'Le prix a été correctement modifié pour la prestation souhaitée.',
	 			prestation : prestationUpdated
	 		}).end();
		});
	});
 };*/
 
 /**
 * delete a price category
 * restriction: 'staff'
 */
/* exports.deletePrice = function(req, res, next){
 	var prestationId = req.params.id,
 		priceId = req.params.priceId;

	Prestation.findById(prestationId, function (err, prestationFound){
		if (err) return next(err);
		if (!prestationFound) return res.status(404).json({ message : 'Prestation non existante.' });
		if (!prestationFound.prices.id(priceId)) return res.status(404).json({ message : 'Prix demandé non existant.' });

		prestationFound.prices.id(priceId).remove();

		prestationFound.save(function (err, prestationUpdated){
	 		if (err) return next(err);
	 		res.status(200).json({
	 			message : 'Le prix a été correctement supprimé de la prestation souhaitée.',
	 			prestation : prestationUpdated
	 		}).end();
		});
	});
 };*/