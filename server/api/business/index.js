'use strict';

var express = require('express');
var controller = require('./business.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

// --- Business only ---
router.get('/', controller.index);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', auth.hasRole('manager'), controller.create);
router.put('/:id', auth.hasRole('staff'), controller.update);
router.put('/:id/status', auth.hasRole('staff'), controller.changeStatus);

// --- Business Applicative Services ---
router.post('/:id/overview', isAuthenticated(), controller.overview);

module.exports = router;
