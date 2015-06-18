/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /notification              ->  index
 * POST    /notification              ->  create
 * GET     /notification/:id          ->  show
 * PUT     /notification/:id          ->  update
 * PUT	   /notification/:id/viewed   ->  viewed
 */

'use strict';

var Notification = require('./notification.model');

/**
 * Get a list of notification
 */
 exports.index = function(req, res){

 };

 /**
 * Create a new notification
 * rectification: 'manager'
 */
 exports.create = function(req, res){

 };
 
 /**
 * Get a single notification
 */
 exports.show = function(req, res){

 };
 
 /**
 * Update the notification attributes
 */
 exports.update = function(req, res){

 };
 
 /**
 * Change the notification status
 */
 exports.viewed = function(req, res){

 };