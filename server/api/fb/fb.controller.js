/**
 * POST     fb/rendezvous/                   ->  index
 */

'use strict';

/**
 * Get the facebook POST request
 */
exports.index = function(req, res) {
	console.log(req);
	return res.status(200).json(
      'all ok'
    ).end();
};