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
	var ctrl, scope, translate, httpMock;
	beforeEach(module('ascoliNcApp.controllers'));
	beforeEach(module('pascalprecht.translate', translatorMock));
	beforeEach(inject(function($controller, $rootScope, _$translate_, $injector) {
		scope = $rootScope.$new();
		translate = _$translate_;
		httpMock = $injector.get('$httpBackend');
		ctrl = $controller('ChampionshipsCtrl', {
			$scope: scope,
			$translate: translate
		});
	}));

	afterEach(function() {
		httpMock.verifyNoOutstandingExpectation();
		httpMock.verifyNoOutstandingRequest();
	});

	it('should have championships defined', function() {
		expect(scope.championships).toBeDefined();
	});

	it('should have championships of 1940 undefined', function() {
		expect(scope.championships['1940']).toBeUndefined();
	});

	it('should set championships of 1950 to [1]', function() {
		var champ = [1];
		scope.setChampionships('1950', champ);
		expect(scope.championships['1950'].length).toBe(1);
		expect(scope.championships['1950']).toContain(1);
	});

	it('should get 1960 data and set to [2]', function() {
		var champ = [2];
		httpMock.when('GET', '/api/championships/overview/1960').respond(champ);
		scope.getDecade('1960');
		httpMock.flush();
		expect(scope.championships['1960'].length).toBe(1);
		expect(scope.championships['1960']).toContain(2);
	});

	it('should not perform a new api call when data is present', function() {
		scope.setChampionships('1970', [3]);
		var champ = [2, 2];
		httpMock.when('GET', '/api/championships/overview/1970').respond(champ);
		scope.getDecade('1970');
		expect(scope.championships['1970'].length).toBe(1);
		expect(scope.championships['1970']).toContain(3);
	});
});
