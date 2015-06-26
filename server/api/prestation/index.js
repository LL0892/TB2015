'use strict';

var express = require('express');
var controller = require('./prestation.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

// --- Prestations routes ---
router.get('/', auth.isAuthenticated(), controller.index);
//router.post('/', auth.hasRole('staff'), controller.create);
router.get('/:id', auth.isAuthenticated(), controller.show);
//router.put('/:id', auth.hasRole('staff'), controller.update);
//router.put('/:id/status', auth.hasRole('staff'), controller.status);
//router.delete('/:id', auth.hasRole('manager'), controller.destroy);

// --- Prices routes ---
//router.post('/:id/prices', auth.hasRole('staff'), controller.addPrice);
//router.get('/:id/prices/:priceId', auth.hasRole('staff'), controller.getPrice);
//router.put('/:id/prices/:priceId', auth.hasRole('staff'), controller.updatePrice);
//router.delete('/:id/prices/:priceId', auth.hasRole('staff'), controller.deletePrice);

module.exports = router;