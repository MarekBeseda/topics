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
        scope.correct = 0;
        scope.answers = [];
        scope.answered = function(index){
          if(scope.definition.questions[scope.page - 1].correct === index){
            scope.lastCorrect = true;
            scope.correct++;
          } else {
            scope.lastCorrect = false;
          }
          scope.answers[scope.page - 1 ] = index;
          scope.page++;
        };
        scope.quizStyle = function(){
          var sum = 0;
          if(scope.page === 0){
            return {height: 200};
          } else if (scope.page === scope.definition.questions.length + 1){
            sum = 0;
            angular.forEach(scope.definition.questions, function(q) {
              angular.forEach(q.options, function(o){
                sum += o.length / 50 * 30 + 40;
              });
            });
            return {height: 250 + sum};
          } else {
            sum = Math.ceil(scope.definition.questions[scope.page - 1].title.length / 45) * 35;
            if(scope.page !== 1){
              sum += 50;
            }
            angular.forEach(scope.definition.questions[scope.page - 1].options, function(o){
              sum += Math.ceil(o.length / 80) * 30 + 20;
            });
            return {height: 100 + sum};
          }
        };
      }
    };
  });
