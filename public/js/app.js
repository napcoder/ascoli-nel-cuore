'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('ascoliNcApp', [
  //'ngRoute',
  //'ascoliNcApp.filters',
  //'ascoliNcApp.services',
  //'ascoliNcApp.directives',
  'ascoliNcApp.controllers',
  'ngCookies',
  'pascalprecht.translate'
]);

app.config(['$translateProvider', function($translateProvider) {
  // add translation table
  $translateProvider.translations('en', translationsEN);
  $translateProvider.translations('it', translationsIT);
  $translateProvider.preferredLanguage('it');
  $translateProvider.fallbackLanguage('en');
  // remember language
  $translateProvider.useCookieStorage();
}]);