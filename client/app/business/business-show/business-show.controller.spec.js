'use strict';

describe('Controller: BusinessShowCtrl', function () {

  // load the controller's module
  beforeEach(module('tbApp'));

  var BusinessShowCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BusinessShowCtrl = $controller('BusinessShowCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
