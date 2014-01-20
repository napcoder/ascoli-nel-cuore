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
  }]);