'use strict';

/**
 * @ngdoc directive
 * @name icstopicsApp.directive:Quiz
 * @description
 * # Quiz
 */
angular.module('icstopicsApp')
  .directive('quiz', function ($rootScope) {
    return {
      templateUrl: 'views/quizView.html',
      restrict: 'E',
      scope: {
        definition: '=quiz'
      },
      link: {
        pre: function (scope, elem) {
          scope.quiz = scope.definition;
          scope.page = 1;
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
            var page = $(elem).find('.page:eq(' + scope.page +')');
            page.css('cssText', 'position:absolute !important; visibility:hidden !important; display:block !important; opacity:1 !important');
            var h = page.height();
            page.removeAttr('style');
            return {height: h + 10}
          };
        }
      }
    };
  });
