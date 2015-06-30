'use strict';

describe('Controller: BusinessSchedulesCtrl', function () {

  // load the controller's module
  beforeEach(module('tbApp'));

  var BusinessSchedulesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BusinessSchedulesCtrl = $controller('BusinessSchedulesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
