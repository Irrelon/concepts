(function () {
	'use strict';

	angular
		.module('oblique.home')

		.controller('HomeController', ["$scope", "$state", function ($scope, $state) {
			$scope.query = null;

			$scope.search = function () {
				$state.go('auth', {
					query: $scope.query
				});
			};
		}]);
}());
