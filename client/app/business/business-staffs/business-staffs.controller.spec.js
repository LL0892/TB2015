'use strict';

describe('Controller: BusinessStaffsCtrl', function () {

  // load the controller's module
  beforeEach(module('tbApp'));

  var BusinessStaffsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BusinessStaffsCtrl = $controller('BusinessStaffsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
