/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /Geodatas                   ->  index
 */

'use strict';

var Geodata = require('./Geodata.model');

/**
 * Get list of geodatas
 */
exports.index = function(req, res) {
  Geodata.find({}, '-_id', function (err, Geodatas) {
    if(err) return res.send(500, err);
    return res.status(200).json({
      geodatas : Geodatas
    }).end();
  });
};