'use strict';

describe('Controller: ArticlecontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('icstopicsApp'));

  var ArticlecontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArticlecontrollerCtrl = $controller('ArticlecontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ArticlecontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
