'use strict';

describe('Controller: BusinessUpdateCtrl', function () {

  // load the controller's module
  beforeEach(module('tbApp'));

  var BusinessUpdateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BusinessUpdateCtrl = $controller('BusinessUpdateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
