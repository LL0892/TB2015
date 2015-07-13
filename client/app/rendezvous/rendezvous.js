'use strict';

angular.module('tbApp')
  .config(function ($stateProvider) {
    $stateProvider
    // staff rendezvous
      .state('rendezvous', {
        url: '/business/rendezvous',
        templateUrl: 'app/rendezvous/rendezvous.html',
        controller: 'RendezvousCtrl',
        authenticate: true
      })
      .state('rendezvous.step1', {
        url: '/step1',
        templateUrl: 'app/rendezvous/rendezvous-step1.html',
        authenticate: true
      })      
      .state('rendezvous.step2', {
        url: '/step2',
        templateUrl: 'app/rendezvous/rendezvous-step2.html',
        authenticate: true
      })
       .state('rendezvous.step3', {
        url: '/step3',
        templateUrl: 'app/rendezvous/rendezvous-step3.html',
        authenticate: true
      })
       .state('rendezvous.step4', {
        url: '/step4',
        templateUrl: 'app/rendezvous/rendezvous-step4.html',
        authenticate: true
      })
       // user rendezvous
      .state('rendezvousUser', {
        url: '/business/:id/rendezvous',
        templateUrl: 'app/rendezvous/rendezvous-user.html',
        controller: 'RendezvousUserCtrl',
        authenticate: true
      })
      .state('rendezvousUser.step1', {
        url: '/step1',
        templateUrl: 'app/rendezvous/rendezvous-step2.html',
        authenticate: true
      })      
      .state('rendezvousUser.step2', {
        url: '/step2',
        templateUrl: 'app/rendezvous/rendezvous-step3.html',
        authenticate: true
      })
       .state('rendezvousUser.step3', {
        url: '/step3',
        templateUrl: 'app/rendezvous/rendezvous-step4.html',
        authenticate: true
      });
  });