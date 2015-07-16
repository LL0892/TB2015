/**
 * POST     fb/rendezvous/                   ->  index
 */

'use strict';

var SignedRequest = require('facebook-signed-request');
SignedRequest.secret = '1435864036716003';

/**
 * Get the facebook POST request
 */
exports.index = function(req, res) {
	var request = req.body.signed_request;
	var signedRequest = new SignedRequest( request );

	signedRequest.parse(function (errors, request){
	  // check if request was valid
	  console.log(request.isValid());

	  // access errors
	  console.log(errors);

	  // this is your data object
	  console.log(request.data);
	});


	console.log(req.body);
	return res.status(200).json(
      'all ok'
    ).end();
};