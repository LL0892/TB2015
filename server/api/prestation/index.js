'use strict';

var express = require('express');
var controller = require('./prestation.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.isAuthenticated(), controller.index);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', auth.hasRole('staff'), controller.create);
router.put('/:id', auth.hasRole('staff'), controller.update);
router.put('/:id/status', auth.hasRole('manager'), controller.changeStatus);
router.delete('/:id', auth.hasRole('manager'), controller.destroy);

module.exports = router;