(function () {
    'use strict';

    /* Directives */
    angular.module('ascoliNcApp.directives', ['pascalprecht.translate', 'ngCookies'])
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
    }])
    .directive('languageChooser', ['$translate', function ($translate) {
        return {
            scope: {},
            restrict: 'E',
            replace: true,
            templateUrl: '/partials/language-chooser.html',
            link: function (scope, element, attrs) {
                scope.changeLanguage = function (langKey) {
                    $translate.use(langKey);
                };
            }     
        };
    }]);

}());