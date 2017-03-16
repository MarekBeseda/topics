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
      templateUrl: 'views/quizView.html',
      restrict: 'E',
      scope: {
        definition: '=quiz'
      },
      link: function postLink(scope, elem) {
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
          console.log(page.height());
          console.log(page.width());
          console.log(" ");
          page.removeAttr('style');
          return {height: h + 10}
        };
      }
    };
  });
