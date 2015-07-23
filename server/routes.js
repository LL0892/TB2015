/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var cors = require('cors');

var Business = require('./api/business/business.model'),
  User = require('./api/user/user.model'),
  SignedRequest = require('facebook-signed-request');
  SignedRequest.secret = '1435864036716003';

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
  
  app.route('/api/fb/rendezvous')
    .post(function(req, res) {
      var pageId = '';

      //console.log(req.body.signed_request);
      var request = req.body.signed_request;
      var signedRequest = new SignedRequest( request );

      signedRequest.parse(function (errors, request){
        pageId = request.data.page.id;
        console.log('rdv dans ce salon - page id :' + pageId);
      });

      var options = {
        root: app.get('appPath')
      };

      // Créé un cookie avec l'identifiant de la page
      res.cookie('page-id', pageId);

      return res.sendfile('/index.html', options);
    });

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets|img)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
