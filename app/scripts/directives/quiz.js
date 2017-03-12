'use strict';

/**
 * @ngdoc directive
 * @name icstopicsApp.directive:Quiz
 * @description
 * # Quiz
 */
angular.module('icstopicsApp')
  .directive('quiz', function () {
    return {
      templateUrl: 'scripts/directives/quizView.html',
      restrict: 'E',
      scope: {
        definition: '=quiz'
      },
      link: function postLink(scope) {
        scope.page = 0;
        scope.answered = function(index){
          if(scope.definition.questions[scope.page - 1].correct === index){
            scope.lastCorrect = true;
          } else {
            scope.lastCorrect = false;
          }
          scope.page++;
        };
      }
    };
  });
