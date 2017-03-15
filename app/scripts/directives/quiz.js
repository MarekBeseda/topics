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
        scope.answers = [];
        scope.answered = function(index){
          if(scope.definition.questions[scope.page - 1].correct === index){
            scope.lastCorrect = true;
          } else {
            scope.lastCorrect = false;
          }
          scope.answers[scope.page - 1 ] = index;
          scope.page++;
        };
        scope.quizStyle = function(){
          if(scope.page === 0){
            return {height: 200};
          } else if (scope.page === scope.definition.questions.length + 1){
            return {height: 600};
          } else if(scope.page === 1){
            return {height: (100 + scope.definition.questions[scope.page - 1].options.length * 50)};
          } else {
            return {height: (150 + scope.definition.questions[scope.page - 1].options.length * 50)};
          }
        };
      }
    };
  });
