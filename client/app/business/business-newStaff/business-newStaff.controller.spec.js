'use strict';

describe('Controller: BusinessNewStaffCtrl', function () {

  // load the controller's module
  beforeEach(module('tbApp'));

  var BusinessNewStaffCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BusinessNewStaffCtrl = $controller('BusinessNewStaffCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
