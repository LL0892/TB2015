'use strict';

var express = require('express');
var controller = require('./staff.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.post('/', auth.hasRole('staff'), controller.create);
router.get('/me', auth.hasRole('staff'), controller.me);
router.put('/me', auth.hasRole('staff'), controller.update);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.get('/:id/rendezvous', controller.rendezvous);

module.exports = router;