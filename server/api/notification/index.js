'use strict';

var express = require('express');
var controller = require('./notification.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.isAuthenticated(), controller.index);
router.post('/', auth.hasRole('staff'), controller.create);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.put('/:id/accepted', auth.isAuthenticated(), controller.accepted);
router.put('/:id/refused', auth.isAuthenticated(), controller.refused);
router.delete('/:id', auth.hasRole('staff'), controller.destroy);

module.exports = router;