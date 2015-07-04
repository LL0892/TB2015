'use strict';

angular.module('tbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('rendezvous', {
        url: '/rendezvous',
        templateUrl: 'app/rendezvous/rendezvous.html',
        controller: 'RendezvousCtrl'
      })
      .state('rendezvous.step1', {
        url: '/step1',
        templateUrl: 'app/rendezvous/rendezvous-step1.html',
        controller: 'RendezvousCtrl'
      })      
      .state('rendezvous.step2', {
        url: '/step2',
        templateUrl: 'app/rendezvous/rendezvous-step2.html',
        controller: 'RendezvousCtrl'
      })
       .state('rendezvous.step3', {
        url: '/step3',
        templateUrl: 'app/rendezvous/rendezvous-step3.html',
        controller: 'RendezvousCtrl'
      })
  });