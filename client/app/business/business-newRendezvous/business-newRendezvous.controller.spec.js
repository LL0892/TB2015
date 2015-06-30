'use strict';

describe('Controller: BusinessNewRendezvousCtrl', function () {

  // load the controller's module
  beforeEach(module('tbApp'));

  var BusinessNewRendezvousCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BusinessNewRendezvousCtrl = $controller('BusinessNewRendezvousCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
