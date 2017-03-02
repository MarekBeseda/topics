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
  'ui.router.title'
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
      'header@article': {template: '<h1>Networking!</h1><p>is not fun</p>'}
    },
    resolve: {
      $title: function() { return 'Networking Security'; }
    }
  }).state('article.education', {
    url: '/education',
    views:{
      'article': {templateUrl: 'views/usereducation.html'},
      'header@article': {template: '<h1>Networking!</h1><p>is not fun</p>'}
    },
    resolve: {
      $title: function() { return 'User Education'; }
    }
  }).state('article.malware', {
    url: '/malware',
    views:{
      'article': {templateUrl: 'views/malwareprotection.html'},
      'header@article': {template: '<h1>Networking!</h1><p>is not fun</p>'}
    },
    resolve: {
      $title: function() { return 'Malware Protection'; }
    }
  }).state('article.removable', {
    url: '/removable',
    views:{
      'article': {templateUrl: 'views/removablemedia.html'},
      'header@article': {template: '<h1>Networking!</h1><p>is not fun</p>'}
    },
    resolve: {
      $title: function() { return 'Removable Media'; }
    }
  }).state('article.monitoring', {
    url: '/monitoring',
    views:{
      'article': {templateUrl: 'views/monitoring.html'},
      'header@article': {template: '<h1>Monitoring!</h1><p>DYI NSA</p>'}
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
     'jumbotron@': {template: '<h1>Secure config</h1><p>I hate computing topics</p>'}
   },
   resolve: {
     $title: function() { return 'Secure Configuration'; }
   }
 }).state('article.userprivileges', {
   url: '/userprivileges',
   views:{
     'article': {templateUrl: 'views/userprivileges.html'},
     'header@article': {template: '<h1>User Privileges</h1><p>I hate compt topics</p>'}
   },
   resolve: {
     $title: function() { return 'User Privileges'; }
   }
 }).state('article.remoteworking', {
   url: '/remoteworking',
   views:{
     'article': {templateUrl: 'views/remoteworking.html'},
     'header@article': {template: '<h1>Mobile and Home Working</h1><p>I hate computing topics</p>'}
   },
   resolve: {
     $title: function() { return 'Remote Working'; }
   }
 });
 $locationProvider.html5Mode(true);
})
.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 50;
}])
.run(function ($rootScope, $state, $stateParams, anchorSmoothScroll, $location) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.gotoElement = function (eID){
    $location.hash('eID');
    anchorSmoothScroll.scrollTo(eID);
  };
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
});