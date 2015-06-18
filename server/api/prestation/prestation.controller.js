/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /prestation              ->  index
 * POST    /prestation              ->  create
 * GET     /prestation/:id          ->  show
 * PUT     /prestation/:id          ->  update
 * PUT	   /prestation/:id/status   ->  changeStatus
 * DELETE  /prestation/				->	destroy
 */

'use strict';

var Prestation = require('./prestation.model');

/**
 * Get a list of prestation
 */
 exports.index = function(req, res){

 };

/**
 * Create a new prestation
 * restriction: 'staff'
 */
 exports.create = function(req, res){

 };

/**
 * Get a single prestation
 */
 exports.show = function(req, res){

 };

/**
 * Update a prestation
 * restriction: 'staff'
 */
 exports.update = function(req, res){

 };

/**
 * Change the prestation status
 * restriction: 'manager'
 */
 exports.changeStatus = function(req, res){

 };

/**
 * Remove a prestation
 * restriction: 'manager'
 */
 exports.destroy = function(req, res){

 };