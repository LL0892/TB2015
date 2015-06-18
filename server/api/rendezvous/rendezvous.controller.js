/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /rendezvous              ->  index
 * POST    /rendezvous              ->  create
 * GET     /rendezvous/:id          ->  show
 * PUT     /rendezvous/:id          ->  update
 * PUT	   /rendezvous/:id/status   ->  changeStatus
 * DELETE  /prestation/:id			->	destroy
 */

'use strict';

var rendezvous = require('./rendezvous.model');

/**
 * Get a list of rendezvous
 */
 exports.index = function(req, res){

 };

/**
 * Create a new rendezvous
 */
 exports.create = function(req, res){

 };

/**
 * Get a single rendezvous
 */
 exports.show = function(req, res){

 };

/**
 * Update a rendezvous
 * restriction: 'staff'
 */
 exports.update = function(req, res){

 };

/**
 * Change the rendezvous status
 * restriction: 'staff'
 */
 exports.changeStatus = function(req, res){

 };

/**
 * Remove a rendezvous
 * restriction: 'staff'
 */
 exports.destroy = function(req, res){

 };