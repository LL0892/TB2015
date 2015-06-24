'use strict';

var express = require('express');
var controller = require('./notification.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

//router.get('/', auth.isAuthenticated(), controller.index);
//router.get('/received', auth.isAuthenticated(), controller.received);
//router.get('/sent', auth.isAuthenticated(), controller.sent);
router.post('/', auth.hasRole('staff'), controller.create);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.put('/:id/accepted', auth.isAuthenticated(), controller.accepted);
router.put('/:id/refused', auth.isAuthenticated(), controller.refused);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);

module.exports = router;