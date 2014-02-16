'use strict';

/* Controllers */

angular.module('ascoliNcApp.controllers', [])
	.controller('HomeCtrl', ['$scope', '$translate', function($scope, $translate) {
		$scope.changeLanguage = function(langKey) {
			$translate.uses(langKey);
		};
	}])
	.controller('ApiCtrl', ['$scope', '$translate', function($scope, $translate) {
		$scope.changeLanguage = function(langKey) {
			$translate.uses(langKey);
		};
	}])
	.controller('ChampionshipsCtrl', ['$scope', '$translate', function($scope, $translate) {
		$scope.championships = [];
		$scope.changeLanguage = function(langKey) {
			$translate.uses(langKey);
		};
		$scope.setChampionships = function(championships) {
			$scope.championships = championships;
    };
  }]);