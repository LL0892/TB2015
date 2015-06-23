/**
 * Using Rails-like standard naming convention for endpoints.

 --- User routes ---
 * GET     /rendezvous              ->  index
 * GET     /rendezvous/me           ->  me
 * POST    /rendezvous              ->  create
 * GET     /rendezvous/:id          ->  show
 * PUT     /rendezvous/:id          ->  update

 --- Staff routes ---
 * GET     /rendezvous/myRdv        ->  myRdv
 * POST    /rendezvous/book         ->  book
 * PUT     /rendezvous/:id/move     ->  move
 * PUT	   /rendezvous/:id/status   ->  status
 * DELETE  /prestation/:id			->	destroy
 */

'use strict';

var rendezvous = require('./rendezvous.model');
var prestationRdv = require('../prestationRdv/prestationRdv.model');

// --- User routes ---

/**
 * Get a list of rendezvous
 */
 exports.index = function(req, res){

 };

/**
 * Get a list my rendezvous
 */
 exports.me = function(req, res){

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
 */
 exports.update = function(req, res){

 };


// --- Staff routes ---

/**
 * Get a list of rendezvous as a staff
 * restriction: 'staff'
 */
 exports.myRdv = function(req, res){

 };

/**
 * Create a rendezvous for a user as a staff
 * restriction: 'staff'
 */
 exports.book = function(req, res){

 };

/**
 * Update the date of a rendezvous
 * restriction: 'staff'
 */
 exports.move = function(req, res){

 };

/**
 * Change the rendezvous status
 * restriction: 'staff'
 */
 exports.status = function(req, res){

 };

/**
 * Remove a rendezvous
 * restriction: 'staff'
 */
 exports.destroy = function(req, res){

 };