'use strict';

var express = require('express');
var controller = require('./notification.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.isAuthenticated(), controller.index);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', auth.hasRole('manager'), controller.create);
router.put('/:id', auth.isAuthenticated, controller.update);
router.put('/:id/viewed', auth.isAuthenticated(), controller.viewed);

module.exports = router;