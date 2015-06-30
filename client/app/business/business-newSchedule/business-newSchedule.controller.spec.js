'use strict';

describe('Controller: BusinessNewScheduleCtrl', function () {

  // load the controller's module
  beforeEach(module('tbApp'));

  var BusinessNewScheduleCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BusinessNewScheduleCtrl = $controller('BusinessNewScheduleCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
