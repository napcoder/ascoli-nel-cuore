'use strict';


var translationsEN = {
  SITE: {
    NAME: 'Ascoli my heart',
    DESCRIPTION: 'This site was one of the first one in the far 1996 to go online, cool!',
    FOOTER: 'Made at late night by a sleepy '
  },
  NAV: {
    HOME: '@:SITE.NAME',
    CHAMPIONSHIPS: 'Championships',
    CUPS: 'Cups',
    API: 'API',
    LANGUAGE: 'Language'
  }
};

var translationsIT = {
  SITE: {
    NAME: 'Ascoli nel cuore',
    DESCRIPTION: 'Questo sito è stato uno dei primi nel lontano 1996 ad andare online, fico!',
    FOOTER: 'Fatto a notte fonda da un assonnato '
  },
  NAV: {
    HOME: '@:SITE.NAME',
    CHAMPIONSHIPS: 'Campionati',
    CUPS: 'Trofei',
    LANGUAGE: 'Lingua'
  }
};

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