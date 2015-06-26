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

// --- Schedules subdocument routes ---
router.get('/:id/schedules', auth.hasRole('staff'), controller.getSchedules);
router.post('/:id/schedules', auth.hasRole('staff'), controller.addSchedule);
router.get('/:id/schedules/:scheduleId', auth.hasRole('staff'), controller.showSchedule);
router.put('/:id/schedules/:scheduleId', auth.hasRole('staff'), controller.updateSchedule);
router.delete('/:id/schedules/:scheduleId', auth.hasRole('staff'), controller.deleteSchedule);

// --- Staffs routes ---
router.get('/businesses/:id/staffs', auth.hasAccess('staff'), controller.getStaffs);
router.get('/businesses/:id/staffs/:staffId', auth.hasAccess('staff'), controller.showStaff);
router.put('/businesses/:id/staffs/:staffId/status', auth.hasAccess('staff'), controller.statusStaff);
router.delete('/businesses/:id/staffs/:staffId', auth.hasAccess('staff'), controller.deleteStaff);

// --- Prestations routes ---
router.get('/businesses/:id/Prestations', auth.hasAccess('staff'), controller.getPrestations);
router.post('/businesses/:id/Prestations', auth.hasAccess('staff'), controller.createPrestation);
router.get('/businesses/:id/prestations/:prestationId', auth.hasAccess('staff'), controller.showPrestation);
router.put('/businesses/:id/prestations/:prestationId', auth.hasAccess('staff'), controller.updatePrestation);
router.put('/businesses/:id/prestations/:prestationId/status', auth.hasAccess('staff'), controller.statusPrestation);
router.delete('/businesses/:id/prestations', auth.hasAccess('staff'), controller.deletePrestation);

// --- Prices subdocument routes ---
router.post('/businesses/:id/prestations/:prestationId/prices', auth.hasAccess('staff'), controller.createPrice);
router.get('/businesses/:id/prestations/:prestationId/prices/:priceId', auth.hasAccess('staff'), controller.showPrice);
router.put('/businesses/:id/prestations/:prestationId/prices/:priceId', auth.hasAccess('staff'), controller.updatePrice);
router.delete('/businesses/:id/prestations/:prestationId/prices/:priceId', auth.hasAccess('staff'), controller.deletePrice);

// --- Rendezvous routes ---
router.get('/businesses/:id/rendezvous', auth.hasAccess('staff'), controller.getRendezvous);
router.post('/businesses/:id/rendezvous', auth.hasAccess('staff'), controller.createRendezvous);
router.get('/businesses/:id/rendezvous/:rdvId', auth.hasAccess('staff'), controller.showRendezvous);
router.put('/businesses/:id/rendezvous/:rdvId/missed', auth.hasAccess('staff'), controller.rendezvousMissed);
router.put('/businesses/:id/rendezvous/:rdvId/finished', auth.hasAccess('staff'), controller.rendezvousFinished);
router.put('/businesses/:id/rendezvous/:rdvId/cancelled', auth.hasAccess('staff'), controller.rendezvousCancelled);
router.put('/businesses/:id/rendezvous/:rdvId/move', auth.hasAccess('staff'), controller.moveRendezvous);
router.delete('/businesses/:id/rendezvous/:rdvId/', auth.hasAccess('staff'), controller.deleteRendevous);

// --- Notification routes ---
router.post('/businesses/:id/notifications/', auth.hasAccess('staff'), controller.getNotifications);
router.delete('/businesses/:id/notifications/:notifId', auth.hasAccess('staff'), controller.deleteNotification);

// --- Test auth.hasAccess ---
router.get('/:id/test', auth.hasAccess('staff'), controller.test);

// --- Business Applicative Services ---
router.post('/overview', auth.isAuthenticated(), controller.overview);

module.exports = router;
