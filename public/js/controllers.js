(function () {
	'use strict';

	/* Controllers */
	angular.module('ascoliNcApp.controllers', [])
		.controller('HomeCtrl', ['$scope', function ($scope) {
		}])
		.controller('ApiCtrl', ['$scope', function ($scope) {
		}])
		.controller('ChampionshipsCtrl', ['$scope', '$http', function ($scope, $http) {
			$scope.championships = {};
			$scope.setChampionships = function (decade, championships) {
				$scope.championships[decade] = championships;
			};
			$scope.getDecade = function (decade) {
				if (!$scope.championships[decade]) {
					$http.get('/api/0.1/championships/overview/' + decade).success(function (data) {
						$scope.setChampionships(decade, data);
					});
				}
			};
		}]);
}());
