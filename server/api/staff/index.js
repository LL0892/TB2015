'use strict';

var express = require('express');
var controller = require('./staff.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.post('/', auth.isAuthenticated(), controller.index);
router.get('/me', auth.hasRole('staff'), controller.me);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', auth.hasRole('staff'), controller.create);
//router.put('/:id', auth.hasRole('manager'), controller.changeStatus);

module.exports = router;