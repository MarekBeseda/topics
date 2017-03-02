'use strict';

/**
 * @ngdoc function
 * @name icstopicsApp.controller:ArticlecontrollerCtrl
 * @description
 * # ArticlecontrollerCtrl
 * Controller of the icstopicsApp
 */
angular.module('icstopicsApp')
  .controller('ArticleCtrl', ['$anchorScroll', '$location', '$scope',
  function($anchorScroll, $location, $scope) {
    $scope.gotoAnchor = function(x) {
      var newHash = 'anchor' + x;
      if ($location.hash() !== newHash) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash('anchor' + x);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    };
  }
]);
