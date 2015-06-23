'use strict';

var express = require('express');
var controller = require('./rendezvous.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

// --- User routes ---
router.get('/', auth.isAuthenticated(), controller.index);
router.get('/me', auth.isAuthenticated(), controller.me);
router.post('/', auth.isAuthenticated(), controller.create);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.put('/:id', auth.isAuthenticated(), controller.update);

// --- Staff routes ---
router.get('/myRdv', auth.hasRole('staff'), controller.myRdv);
router.post('/book', auth.hasRole('staff'), controller.book);
router.put('/:id/move', auth.hasRole('staff'), controller.move);
router.put('/:id/status', auth.hasRole('staff'), controller.status);
router.delete('/:id', auth.hasRole('staff'), controller.destroy);

module.exports = router;
