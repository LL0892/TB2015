'use strict';

describe('Controller: BusinessRendezvousCtrl', function () {

  // load the controller's module
  beforeEach(module('tbApp'));

  var BusinessRendezvousCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BusinessRendezvousCtrl = $controller('BusinessRendezvousCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
