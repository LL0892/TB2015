'use strict';

var express = require('express');
var controller = require('./business.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

// --- Business routes ---
router.get('/', controller.index);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', auth.hasRole('manager'), controller.create);
router.put('/:id', auth.hasRole('staff'), controller.update);
router.put('/:id/status', auth.hasRole('staff'), controller.status);

// --- Schedules routes ---
router.get('/:id/schedules', auth.hasRole('staff'), controller.getSchedules);
router.post('/:id/schedules', auth.hasRole('staff'), controller.addSchedule);
router.get('/:id/schedules/:scheduleId', auth.hasRole('staff'), controller.getSchedule);
router.put('/:id/schedules/:scheduleId', auth.hasRole('staff'), controller.updateSchedule);
router.delete('/:id/schedules/:scheduleId', auth.hasRole('staff'), controller.deleteSchedule);

// --- Staff affiliation routes ---
// Todo

// --- Business Applicative Services ---
router.post('/overview', auth.isAuthenticated(), controller.overview);

module.exports = router;
