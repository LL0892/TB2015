/**
 * POST     fb/rendezvous/                   ->  index
 * POST     fb/rendezvous/link               ->  Link
 */

'use strict';

var Business = require('../business/business.model'),
	User = require('../user/user.model');

var SignedRequest = require('facebook-signed-request');
SignedRequest.secret = '1435864036716003';

/**
 * Get the facebook POST request
 */
exports.index = function(req, res) {
	//	console.log(req.body.signed_request);

	var request = req.body.signed_request;
	var signedRequest = new SignedRequest( request );

	signedRequest.parse(function (errors, request){
	  // check if request was valid
	  //console.log(request.isValid());

	  // access errors
	  //console.log(errors);

	  // this is your data object
	  //console.log(request.data);
	  var pageId = request.data.page.id;

	  console.log(pageId);

	  	if (pageId) {
		Business.findOne({'fbPageId': pageId}, function(err, businessFound){
	 		if(!businessFound){
	 			return console.log('lier la page');
	 			//var string = encodeURIComponent(pageId);
	 			//res.status(301).redirect('https://directhaircut.ch/fb/login?pageId='+ string).end();
	 		}

	 		if(err) return res.send(500, err);

	 		console.log('réserver pour ce salon');
			
			});
			} else{
				console.log('erreur de page id');
			}
		});

	return res.status(200).json(
      'all ok'
    ).end();
};

/**
 * Link an existing business with a facebook page id
 */
exports.link = function(req, res, next){
	var email = req.body.email,
	pageId = req.body.fbPageId;

	User.findOne({'email' : email}, function (err, userFound){
		if(!userFound) return res.status(404).json({ message: 'Utilisateur non existant.' });
	 	if(err) return res.send(500, err);

	 	Business.findOne({'_id': userFound.businessId}, function(err, businessFound){
			if(!businessFound) return res.status(404).json({ message: 'Salon non existant.' });
		 	if(err) return res.send(500, err);

		 	businessFound.fbPageId = pageId;

		 	businessFound.save(function(err, businessSaved){
		 		res.status(200).json(businessSaved);
		 	})
	 	});
	});
};