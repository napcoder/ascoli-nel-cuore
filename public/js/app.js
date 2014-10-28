(function () {
    'use strict';

    // Declare app level module which depends on filters, and services
    angular.module('ascoliNcApp', [
      //'ascoliNcApp.directives',
      'ascoliNcApp.controllers',
      'ngCookies',
      'pascalprecht.translate'
    ])
    .config(['$translateProvider', function ($translateProvider) {
      // add translation table
      $translateProvider.useStaticFilesLoader({
        prefix: '/languages/',
        suffix: '.json'
      });
      $translateProvider.preferredLanguage('it');
      $translateProvider.fallbackLanguage('en');
      // remember language
      $translateProvider.useLocalStorage();
    }]);
}());
