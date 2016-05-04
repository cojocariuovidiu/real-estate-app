'use strict';

var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {
      url:'/',
      templateUrl: '/html/home.html'
    })
    
    .state('properties', {
      url:'/properties',
      templateUrl: '/html/properties.html',
      controller: 'propertiesCtrl',
    })
    .state('tenants', {
      url:'/tenants',
      templateUrl: '/html/tenants.html',
      controller: 'tenantsCtrl'
    })

  $urlRouterProvider.otherwise('/');
});
