'use strict';

describe('Controller: BusinessPrestationsCtrl', function () {

  // load the controller's module
  beforeEach(module('tbApp'));

  var BusinessPrestationsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BusinessPrestationsCtrl = $controller('BusinessPrestationsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
