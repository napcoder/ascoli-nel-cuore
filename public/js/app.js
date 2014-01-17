'use strict';


// Declare app level module which depends on filters, and services
angular.module('ascoliNcApp', [
  'ngRoute',
  //'ascoliNcApp.filters',
  //'ascoliNcApp.services',
  //'ascoliNcApp.directives',
  'ascoliNcApp.controllers'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.
    when('/home', {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    }).
    when('/api', {
      templateUrl: 'partials/api.html', 
      controller: 'ApiCtrl'
    }).
    when('/view1', {
      templateUrl: 'partials/partial1.html', 
      controller: 'MyCtrl1'
    }).
    when('/view2', {
      templateUrl: 'partials/partial2.html', 
      controller: 'MyCtrl2'
    }).
  	otherwise({
  		redirectTo: '/home'
  	});
}]);
