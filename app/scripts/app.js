'use strict';

/**
 * @ngdoc overview
 * @name icstopicsApp
 * @description
 * # icstopicsApp
 *
 * Main module of the application.
 */
 angular
 .module('icstopicsApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.router',
  'ui.router.title',
  'smoothScroll'
  ])
 .config(function ($stateProvider, $locationProvider) {
  $stateProvider.state('main', {
    url: '/',
    views:{
      '': {templateUrl: 'views/main.html'},
      'jumbotron': {template: '<p>Industrial control systems security</p>'}
    },
    resolve: {
      $title: function() { return 'ICS'; }
    }
  }).state('article', {
    abstract: true,
    views:{
      '': {templateUrl: 'views/article.html'}
    }
  }).state('article.networking', {
    url: '/networking',
    views:{
      'article': {templateUrl: 'views/networking.html'},
      'header@article': {template: '<h1>Networking!</h1><p>How to make friends and influence people</p>'}
    },
    resolve: {
      $title: function() { return 'Networking Security'; }
    }
  }).state('article.education', {
    url: '/education',
    views:{
      'article': {templateUrl: 'views/usereducation.html'},
      'header@article': {template: '<h1>User Education!</h1><p>MEdu Degrees</p>'}
    },
    resolve: {
      $title: function() { return 'User Education'; }
    }
  }).state('article.malware', {
    url: '/malware',
    views:{
      'article': {templateUrl: 'views/malwareprotection.html'},
      'header@article': {template: '<h1>Malware Protection!</h1><p>Unless the government wants you</p>'}
    },
    resolve: {
      $title: function() { return 'Malware Protection'; }
    }
  }).state('article.removable', {
    url: '/removable',
    views:{
      'article': {templateUrl: 'views/removablemedia.html'},
      'header@article': {template: '<h1>Removable Media!</h1><p>Remove yourself from the outside - Dalai Lama</p>'}
    },
    resolve: {
      $title: function() { return 'Removable Media'; }
    }
  }).state('article.monitoring', {
    url: '/monitoring',
    views:{
      'article': {templateUrl: 'views/monitoring.html'},
      'header@article': {template: '<h1>Monitoring!</h1><p>DIY NSA</p>'}
    },
    resolve: {
      $title: function() { return 'Monitoring'; }
    }
  }).state('article.risk-incidence', {
    url: '/risk-incidence',
    views:{
      'article': {templateUrl: 'views/risk-incidence.html'},
      'header@article': {template: '<h1>Risk & Incidence Management</h1><p>Prevention is the best defence</p>'}
    },
    resolve: {
      $title: function() { return 'Risk Incidence'; }
    }
  }).state('article.secureconfig', {
   url: '/secureconfig',
   views:{
     'article': {templateUrl: 'views/secureConfig.html'},
     'header@article': {template: '<h1>Secure config</h1><p>Like the Netcraft workshop said</p>'}
   },
   resolve: {
     $title: function() { return 'Secure Configuration'; }
   }
 }).state('article.userprivileges', {
   url: '/userprivileges',
   views:{
     'article': {templateUrl: 'views/userprivileges.html'},
     'header@article': {template: '<h1>User Privileges</h1><p>The Social Stratification of Networks</p>'}
   },
   resolve: {
     $title: function() { return 'User Privileges'; }
   }
 }).state('article.remoteworking', {
   url: '/remoteworking',
   views:{
     'article': {templateUrl: 'views/remoteworking.html'},
     'header@article': {template: '<h1>Mobile and Home Working</h1><p>Nokia 101</p>'}
   },
   resolve: {
     $title: function() { return 'Remote Working'; }
   }
  }).state('article.ukraineCaseStudy', {
   url: '/ukraineCaseStudy',
   views:{
   'article': {templateUrl: 'views/ukraineCaseStudy.html'},
   'header@article': {template: '<h1>Ukraine Case Study</h1><p>All power grids matter</p>'}
   },
   resolve: {
   $title: function() { return 'Ukraine Case Study'; }
  }
}).state('article.equationCaseStudy', {
   url: '/equationCaseStudy',
   views:{
   'article': {templateUrl: 'views/equationCaseStudy.html'},
   'header@article': {template: '<h1>Equation Group Case Study</h1><p>You know the drill, make them equal and subtract both sides</p>'}
   },
   resolve: {
   $title: function() { return 'Equation Case Study'; }
   }
  });
 $locationProvider.html5Mode(true);
})
.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 50;
}])
.run(function ($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.setFragment = function (fragment){
    if(fragment !== ''){
      if(window.location.hash !== '#' + fragment){
        window.location.replace(window.location.pathname + '#'+ fragment);
      }
    } else {
      window.location.replace(window.location.pathname + '#close');
    }
  };
  /*$rootScope.$on('$stateChangeStart',
  function(){
    if($state.includes('article')) {
      $location.hash('');
      anchorSmoothScroll.scrollTo('article-header');
    }
  });*/
}).run(function($rootScope){
  $rootScope.quizzes = {
    'test':{
      'title' : 'lets test this thing',
      'questions': [
        {
          'title': 'press C',
          'correct': 2,
          'options':[
            'A',
            'B',
            'C',
            'D'
          ]
        },
        {
          'title': 'press C',
          'correct': 2,
          'options':[
            'A',
            'B',
            'C',
            'D'
          ]
        }
      ] 
    }
  };
});