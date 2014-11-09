(function () {
	'use strict';

	var should = chai.should();
	var expect = chai.expect;

	describe('Championship Controller', function () {
		var ctrl, scope, httpMock;
		beforeEach(module('ascoliNcApp.controllers'));
		beforeEach(inject(function ($controller, $rootScope, $injector) {
			scope = $rootScope.$new();
			httpMock = $injector.get('$httpBackend');
			ctrl = $controller('ChampionshipsCtrl', { $scope: scope });
		}));

		afterEach(function () {
			httpMock.verifyNoOutstandingExpectation();
			httpMock.verifyNoOutstandingRequest();
		});

		it('should have championships defined', function () {
			expect(scope.championships, 'scope.championships').to.exist;
		});

		it('should have championships of 1940 undefined', function() {
			expect(scope.championships['1940']).to.be.undefined;
		});

		it('should set championships of 1950 to [1]', function() {
			var champ = [1];
			scope.setChampionships('1950', champ);
			scope.championships['1950'].length.should.be.equal(1);
			scope.championships['1950'].should.contain(1);
		});

		it('should get 1960 data and set to [2]', function() {
			var champ = [2];
			httpMock.when('GET', '/api/0.1/championships/overview/1960').respond(champ);
			scope.getDecade('1960');
			httpMock.flush();
			scope.championships['1960'].length.should.be.equal(1);
			scope.championships['1960'].should.contain(2);
		});

		it('should not perform a new api call when data is present', function() {
			scope.setChampionships('1970', [3]);
			var champ = [2, 2];
			httpMock.when('GET', '/api/0.1/championships/overview/1970').respond(champ);
			scope.getDecade('1970');
			scope.championships['1970'].length.should.be.equal(1);
			scope.championships['1970'].should.contain(3);
		});
	});
}());
