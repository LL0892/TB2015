'use strict';

var express = require('express');
var controller = require('./user.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.hasRole('staff'), controller.index);
router.get('/me', auth.isAuthenticated(), controller.me);
router.put('/me', auth.isAuthenticated(), controller.update);
router.post('/', controller.create);
router.post('/manager', controller.createManager);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.put('/:id/email', auth.isAuthenticated(), controller.changeEmail);
//router.put('/:id/prefDisplay', auth.isAuthenticated(), controller.preferenceDisplay);
router.put('/:id/prefFavorite', auth.isAuthenticated(), controller.preferenceFavorite);

module.exports = router;
