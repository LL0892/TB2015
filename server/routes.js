/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/v1/things', require('./api/thing'));
  app.use('/api/v1/users', require('./api/user'));
  app.use('/api/v1/staffs', require('./api/staff'));
  app.use('/api/v1/business', require('./api/business'));
  app.use('/api/v1/notifications', require('./api/notification'));
  app.use('/api/v1/prestations', require('./api/prestation'));
  app.use('/api/v1/rendezvous', require('./api/rendezvous'));
  app.use('/api/v1/prestationRdvs', require('./api/prestationRdv'));

  app.use('/auth', require('./auth'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
