'use strict';

/* jasmine specs for controllers go here */

var translatorMock = function ($translateProvider) {
	$translateProvider
	.translations('en', {
		'ID': 'foo'
	})
	.translations('it', {
		'ID': 'it-foo'
	})
	.preferredLanguage('en');
};

describe('Home Controller', function() {
	var ctrl, scope, translate;
	beforeEach(module('ascoliNcApp.controllers'));
	beforeEach(module('pascalprecht.translate', translatorMock));
	beforeEach(inject(function($controller, $rootScope, _$translate_) {
		scope = $rootScope.$new();
		translate = _$translate_;
		ctrl = $controller('HomeCtrl', {
			$scope: scope,
			$translate: translate
		});
	}));

	it('should start with english', function() {
		expect(translate.uses()).toBe('en');
	});

	it('should change to "it" on request', function() {
		scope.changeLanguage('it');
		expect(translate.uses()).toBe('it');
	});
});

describe('Championship Controller', function() {
	var ctrl, scope, translate;
	beforeEach(module('ascoliNcApp.controllers'));
	beforeEach(module('pascalprecht.translate', translatorMock));
	beforeEach(inject(function($controller, $rootScope, _$translate_) {
		scope = $rootScope.$new();
		translate = _$translate_;
		ctrl = $controller('ChampionshipsCtrl', {
			$scope: scope,
			$translate: translate
		});
	}));


	it('should have championships defined', function() {
		expect(scope.championships).toBeDefined();
	});

	it('should have championships empty', function() {
		expect(scope.championships.length).toBe(0);
	});

	it('should set championships to [1]', function() {
		var champ = [1];
		scope.setChampionships(champ);
		expect(scope.championships.length).toBe(1);
		expect(scope.championships).toContain(1);
	});
});
