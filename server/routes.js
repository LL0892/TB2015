/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
cors = require('cors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/users', require('./api/user'));
  app.use('/api/staffs', require('./api/staff'));
  app.use('/api/businesses', require('./api/business'));
  app.use('/api/notifications', require('./api/notification'));
  app.use('/api/prestations', require('./api/prestation'));
  app.use('/api/rendezvous', require('./api/rendezvous'));
  app.use('/api/geodatas', require('./api/geodata'));

  app.use('/auth', require('./auth'));
  
  app.use('/fb/rendezvous', require('./api/fb'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets|img|fb)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
