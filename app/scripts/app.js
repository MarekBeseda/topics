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
      '': {templateUrl: 'views/main.html'}
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
    },
    'secure_config':{
      'title' : 'Test your knowledge!',
      'questions': [
        {
          'title': 'The internet connection for ICS should be',
          'correct': 1,
          'options':[
            'as fast as possible',
            'limited as much as possible',
            'set up using the newest technologies',
            'not secured at all'
          ]
        },
        {
          'title': 'Users privileges should',
          'correct': 2,
          'options':[
            'be the same for all users',
            'be very limited for all users',
            'be tailored to the user role following "least privilage" principle',
            'block the internet connection and email access for all users'
          ]
        },
        {
          'title': 'Why secure configuration is so important?',
          'correct': 3,
          'options':[
            'It can save money',
            'It makes yoo look professional',
            'It makes the system faster',
            'It can prevent malicious attacks'
          ]
        }
      ]
    },
    'user_privileges':{
      'title' : 'Test your knowledge!',
      'questions': [
        {
          'title': 'What is the "least privilage" principle?',
          'correct': 1,
          'options':[
            'all users are provided with strictly limited privileges',
            'users are only provided with the privileges that they need to do their job',
            'users do not have any privileges',
          ]
        },
        {
          'title': 'Users privileges should',
          'correct': 2,
          'options':[
            'be the same for all users',
            'be very limited for all users',
            'be tailored to the user role following "least privilage" principle',
            'block the internet connection and email access for all users'
          ]
        },
        {
          'title': 'How to effectively manage user privileges?',
          'correct': 0,
          'options':[
            'Decide what privileges user needs and limit the number of privileged users',
            'Review user accounts, decide what privileges user needs and increase the number of privileged users',
            'Monitor users, introduce standards for user access control and grant admin privileges to all users'
          ]
        }
      ]
    },
    'removable_media':{
      'title' : 'Test your knowledge!',
      'questions': [
        {
          'title': 'When a removable storage device reached the end of its life cycle, the correct procedure is to',
          'correct': 2,
          'options':[
            'Dispose of it without any special procedures',
            'Delete all files on it and dispose of it afterwards',
            'Do a multi-pass wipe or have it wiped by a certified service',
            'Erase it and give it to an employee'
          ]
        },
        {
          'title': 'How many per cent of confirmed data breaches are accounted for by lost removable storage and personal devices?',
          'correct': 1,
          'options':[
            '30%',
            '40%',
            '50%',
            '60%'
          ]
        },
        {
          'title': 'What level of removable media freedom of use is acceptable for ICS?',
          'correct': 2,
          'options':[
            'Every user can use their personal removable media',
            'Users are not allowed to use any kind of removable device',
            'Users are only allowed to use devices issued to them',
            'Users are allowed to use issued media for personal and professional use'
          ]
        }
      ]
    },
    'remote_working':{
      'title' : 'Test your knowledge!',
      'questions': [
        {
          'title': 'What is a spearphishing?',
          'correct': 1,
          'options':[
            'It is an e-mail fraud attempt to steal confidential data',
            'It is a fishing with a spear instead of a rod',
            'It is a network configuration',
          ]
        },
        {
          'title': 'What are the recommendations?',
          'correct': 2,
          'options':[
            'Allow all users to work in the way they like',
            'Do not allow users to work remotely',
            'Educate useres and introduce the use of VPN'

          ]
        },
        {
          'title': 'What is the risk for ICS linked with remote working?',
          'correct': 0,
          'options':[
            'Theft of the device or man-in-the-middle attack',
            'User can procrastinate instead of working',
            'Worse efficiency of the workers'
          ]
        }
      ]
    }
  };
});
