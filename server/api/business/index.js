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
router.put('/:id', auth.hasAccess('staff'), controller.updateBusiness);
//router.put('/:id/status', auth.hasAccess('staff'), controller.statusBusiness);

// --- Schedules subdocument routes ---
router.get('/:id/schedules', auth.hasAccess('staff'), controller.getSchedules);
router.post('/:id/schedules', auth.hasAccess('staff'), controller.addSchedule);
router.get('/:id/schedules/:scheduleId', auth.hasAccess('staff'), controller.showSchedule);
router.put('/:id/schedules/:scheduleId', auth.hasAccess('staff'), controller.updateSchedule);
router.delete('/:id/schedules/:scheduleId', auth.hasAccess('staff'), controller.deleteSchedule);

// --- Staffs routes ---
router.get('/:id/staffs', auth.hasAccess('staff'), controller.getStaffs);
router.get('/:id/staffs/:staffId', auth.hasAccess('staff'), controller.showStaff);
//router.put('/:id/staffs/:staffId/status', auth.hasAccess('staff'), controller.statusStaff);
router.delete('/:id/staffs/:staffId', auth.hasAccess('staff'), controller.deleteStaff);

// --- Prestations routes ---
router.get('/:id/prestations', auth.hasAccess('staff'), controller.getPrestations);
router.post('/:id/prestations', auth.hasAccess('staff'), controller.createPrestation);
router.get('/:id/prestations/:prestationId', auth.hasAccess('staff'), controller.showPrestation);
router.put('/:id/prestations/:prestationId', auth.hasAccess('staff'), controller.updatePrestation);
//router.put('/:id/prestations/:prestationId/status', auth.hasAccess('staff'), controller.statusPrestation);
router.delete('/:id/prestations', auth.hasAccess('staff'), controller.deletePrestation);

// --- Prices subdocument routes ---
router.post('/:id/prestations/:prestationId/prices', auth.hasAccess('staff'), controller.createPrice);
router.get('/:id/prestations/:prestationId/prices/:priceId', auth.hasAccess('staff'), controller.showPrice);
router.put('/:id/prestations/:prestationId/prices/:priceId', auth.hasAccess('staff'), controller.updatePrice);
router.delete('/:id/prestations/:prestationId/prices/:priceId', auth.hasAccess('staff'), controller.deletePrice);

// --- Rendezvous routes ---
router.get('/:id/rendezvous', auth.hasAccess('staff'), controller.getRendezvous);
router.post('/:id/rendezvous', auth.hasAccess('staff'), controller.createRendezvous);
router.get('/:id/rendezvous/:rdvId', auth.hasAccess('staff'), controller.showRendezvous);
//router.put('/:id/rendezvous/:rdvId/missed', auth.hasAccess('staff'), controller.rendezvousMissed);
//router.put('/:id/rendezvous/:rdvId/finished', auth.hasAccess('staff'), controller.rendezvousFinished);
//router.put('/:id/rendezvous/:rdvId/cancelled', auth.hasAccess('staff'), controller.rendezvousCancelled);
//router.put('/:id/rendezvous/:rdvId/move', auth.hasAccess('staff'), controller.moveRendezvous);
//router.delete('/:id/rendezvous/:rdvId', auth.hasAccess('staff'), controller.deleteRendevous);

// --- Notification routes ---
router.get('/:id/notifications', auth.hasAccess('staff'), controller.getNotifications);
router.post('/:id/notifications', auth.hasAccess('staff'), controller.createNotification);
router.delete('/:id/notifications/:notifId', auth.hasAccess('staff'), controller.deleteNotification);

// --- Test auth.hasAccess ---
router.get('/:id/test', auth.hasAccess('staff'), controller.test);

// --- Business Applicative Services ---
router.post('/overview', auth.isAuthenticated(), controller.overview);

module.exports = router;
