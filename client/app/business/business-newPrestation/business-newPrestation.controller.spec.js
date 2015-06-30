'use strict';

describe('Controller: BusinessNewPrestationCtrl', function () {

  // load the controller's module
  beforeEach(module('tbApp'));

  var BusinessNewPrestationCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BusinessNewPrestationCtrl = $controller('BusinessNewPrestationCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
