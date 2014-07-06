(function () {
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
		.controller('ChampionshipsCtrl', ['$scope', '$translate', '$http', function($scope, $translate, $http) {
			$scope.championships = {};
			$scope.changeLanguage = function(langKey) {
				$translate.uses(langKey);
			};
			$scope.setChampionships = function(decade, championships) {
				$scope.championships[decade] = championships;
			};
			$scope.getDecade = function(decade) {
				if (!$scope.championships[decade]) {
					$http.get('/api/0.1/championships/overview/' + decade).success(function(data) {
						$scope.setChampionships(decade, data);
					});
				}
			};
		}]);
}());
