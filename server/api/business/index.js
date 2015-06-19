'use strict';

var express = require('express');
var controller = require('./business.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', /*auth.hasRole('manager')*/ auth.isAuthenticated(), controller.create);
router.put('/:id', /*auth.hasRole('staff')*/ auth.isAuthenticated(), controller.update);
router.put('/:id/status', /*auth.hasRole('manager')*/ auth.isAuthenticated(), controller.changeStatus);

module.exports = router;
