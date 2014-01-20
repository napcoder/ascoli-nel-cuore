'use strict';


var translationsEN = {
  SITE: {
    NAME: 'Ascoli My Heart',
    DESCRIPTION: 'Cras pulvinar, nunc sit amet gravida fringilla, mi tortor sagittis leo, vel facilisis tellus sem.',
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
    NAME: 'Ascoli Nel Cuore',
    DESCRIPTION: 'Suspendisse sagittis dapibus leo, non ornare nisl. Pellentesque sed lorem nunc. Proin vitae adipiscing tellus.',
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