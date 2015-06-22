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
 * GET     /prestation/:id/prices/:id 	->  getPrice
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
 	var prestationId = req.params.id;

	Prestation.findById(prestationId, function (err, prestationFound){
		if (err) return next(err);
		if (!prestationFound) return res.status(404).json({ message : 'Prestation non existante.' });

		prestationFound.prices.push({
		  	categoryName: req.body.name,
		  	ageLowLimit: req.body.lowLimit,
		  	ageHighLimit: req.body.highLimit,
		  	price: req.body.price,
			gender: req.body.gender
		});

		prestationFound.save(function (err, prestationUpdated){
	 		if (err) return next(err);
	 		res.status(201).json({
	 			message : 'Le prix a été correctement ajouté à votre prestation.',
	 			prestation : prestationUpdated
	 		});
		});
	});

/* Prestation.findByIdAndUpdate(
     prestationId,
     { $push: {"prices": priceToAdd} },
     //{  safe: true, upsert: true}, 
     function (err, prestationUpdated) {
     	if (!prestationUpdated) return res.status(404).json({ message : 'Prestation non existante.' });
 		if (err) return next(err);
 		res.status(200).json({
 			message : 'Le prix a été correctement ajouté à votre prestation.',
 			prestation : prestationUpdated
 		});
    });*/
 };

 /**
 * Get a price category
 * restriction: 'staff'
 */
 exports.getPrice = function(req, res, next){
 	var prestationId = req.params.id,
 		priceId = req.params.priceId;

	Prestation.findById(prestationId, function (err, prestationFound){
		if (err) return next(err);
		if (!prestationFound) return res.status(404).json({ message : 'Prestation non existante.' });
		if (!prestationFound.prices.id(priceId)) return res.status(404).json({ message : 'Prix demandé non existant.' });

		res.status(200).json({
			price : prestationFound.prices.id(priceId)
		});
	});
 };

 /**
 * Update a price category
 * restriction: 'staff'
 */
 exports.updatePrice = function(req, res, next){
 	var prestationId = req.params.id,
 		priceId = req.params.priceId;

	Prestation.findById(prestationId, function (err, prestationFound){
		if (err) return next(err);
		if (!prestationFound) return res.status(404).json({ message : 'Prestation non existante.' });
		if (!prestationFound.prices.id(priceId)) return res.status(404).json({ message : 'Prix demandé non existant.' });

		prestationFound.prices.id(priceId).categoryName = req.body.name;
		prestationFound.prices.id(priceId).ageLowLimit = req.body.lowLimit;
		prestationFound.prices.id(priceId).ageHighLimit = req.body.highLimit;
		prestationFound.prices.id(priceId).price = req.body.price;
		prestationFound.prices.id(priceId).gender = req.body.gender;

		prestationFound.save(function (err, prestationUpdated){
	 		if (err) return next(err);
	 		res.status(200).json({
	 			message : 'Le prix a été correctement modifié pour la prestation souhaitée.',
	 			prestation : prestationUpdated
	 		});
		});
	});
 };

 /**
 * delete a price category
 * restriction: 'staff'
 */
 exports.deletePrice = function(req, res, next){
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
	 		});
		});
	});
 };