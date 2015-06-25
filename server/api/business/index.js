'use strict';

var express = require('express');
var controller = require('./business.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

// --- Business routes ---
router.get('/', controller.getBusinesses);
router.post('/', auth.hasRole('manager'), controller.createBusiness);
router.get('/:id', auth.isAuthenticated(), controller.showBusiness);
router.put('/:id', auth.hasRole('staff'), controller.updateBusiness);
router.put('/:id/status', auth.hasRole('staff'), controller.statusBusiness);

// --- Schedules routes ---
router.get('/:id/schedules', auth.hasRole('staff'), controller.getSchedules);
router.post('/:id/schedules', auth.hasRole('staff'), controller.addSchedule);
router.get('/:id/schedules/:scheduleId', auth.hasRole('staff'), controller.showSchedule);
router.put('/:id/schedules/:scheduleId', auth.hasRole('staff'), controller.updateSchedule);
router.delete('/:id/schedules/:scheduleId', auth.hasRole('staff'), controller.deleteSchedule);

// --- Staff routes ---
// Todo

// --- Prestations routes ---
// Todo

// --- Rendezvous (Staff) routes ---
// Todo

// --- Test auth.hasAccess ---
router.get('/:id/test', auth.hasAccess('staff'), controller.test);

// --- Business Applicative Services ---
router.post('/overview', auth.isAuthenticated(), controller.overview);

module.exports = router;
