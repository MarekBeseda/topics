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
        '': {templateUrl: 'views/main.html'},
        'jumbotron': {template: '<h1>ICS!</h1><p>is fun ... </p>'}
      },
      resolve: {
        $title: function() { return 'ICS'; }
      }
    }).state('article', {
      abstract: true,
      views:{
        '': {templateUrl: 'views/article.html'},
      }
    }).state('article.networking', {
      url: '/networking',
      views:{
        'article': {templateUrl: 'views/networking.html'},
        'jumbotron@': {template: '<h1>Networking!</h1><p>is not fun</p>'}
      },
      resolve: {
        $title: function() { return 'Networking security'; }
      }
    }).state('article.removable', {
      url: '/removable',
      views:{
        'article': {templateUrl: 'views/removablemedia.html'},
        'jumbotron@': {template: '<h1>Networking!</h1><p>is not fun</p>'}
      },
      resolve: {
        $title: function() { return 'Removable media'; }
      }
    }).state('article.monitoring', {
      url: '/monitoring',
      views:{
        'article': {templateUrl: 'views/monitoring.html'},
        'jumbotron@': {template: '<h1>Monitoring!</h1><p>DYI NSA</p>'}
      },
      resolve: {
        $title: function() { return 'Monitoring'; }
      }
    }).state('article.risk-incidence', {
      url: '/risk-incidence',
      views:{
        'article': {templateUrl: 'views/risk-incidence.html'},
        'jumbotron@': {template: '<h1>Risk & Incidence Mangement!</h1><p>Prevention is the best defence</p>'}
      },
      resolve: {
        $title: function() { return 'Risk-incidence'; }
      }
    });
    $locationProvider.html5Mode(true);
  })
  .run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  });
