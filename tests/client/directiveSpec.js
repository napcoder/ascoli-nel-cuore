(function () {
    'use strict';

    var should = chai.should();
    var expect = chai.expect;    

    describe('Language Chooser Directive', function() {
        var elm, scope, translate;
        
        beforeEach(module('partials/language-chooser.html'));
        beforeEach(module('ngCookies'));
        beforeEach(module('pascalprecht.translate', function ($translateProvider) {
            $translateProvider
                .translations('en', {
                    'ID': 'foo'
                })
                .translations('it', {
                    'ID': 'it-foo'
                })
                .preferredLanguage('en');
        }));

        beforeEach(module('ascoliNcApp.directives', ['pascalprecht.translate', 'ngCookies']));

        beforeEach(inject(function ($compile, $rootScope, _$translate_) {
            elm = angular.element('<language-chooser></language-chooser>');
            scope = $rootScope.$new(true);
            translate = _$translate_;
            $compile(elm)(scope);
            scope.$digest();
        }));
        
        /******************************
         * problems maybe due to https://github.com/angular/angular.js/issues/9686
         *******************************/

        xit('should start with english', function() {
            expect(translate, 'translate').to.exist;
            expect(translate.use()).toBe('en');
        });

        xit('should change to "it" on request', function() {
            scope.changeLanguage('it');
            expect(translate.use()).toBe('it');
        });
    });
}());
