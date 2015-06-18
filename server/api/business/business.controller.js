/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /business              ->  index
 * POST    /business              ->  create
 * GET     /business/:id          ->  show
 * PUT     /business/:id          ->  update
 * PUT	   /business/:id/status   ->  changeStatus
 */

'use strict';

var Business = require('./business.model');

/**
 * Get a list of business
 */
 exports.index = function(req, res){

 };

 /**
 * Create a new business
 * restriction: 'manager'
 */
 exports.create = function(req, res){

 };

 /**
 * Get a single business
 */
 exports.show = function(req, res){

 };

 /**
 * Update a business
 * restriction: 'staff'
 */
 exports.update = function(req, res){

 };

 /**
 * Change the business status
 * restriction : 'manager'
 */
 exports.changeStatus = function(req, res){

 };