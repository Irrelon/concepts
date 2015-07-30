(function () {
	'use strict';

	angular
		.module('oblique.core')
		.controller('TableController', ["$scope", function ($scope) {
			$scope.selectedRow = -1;
			$scope.selectRow = function (rowIndex) {
				$scope.selectedRow = rowIndex;
			};
		}]);
}());
