(function () {
	'use strict';

	angular
		.module('oblique.core')
		.directive('enter', ["$timeout", function ($timeout) {
			return {
				restrict: 'A',
				link: function (scope, element, attrs) {
					element.keydown(function (e) {
						if (e.keyCode === 13 && element.is(e.target)) {
							scope.$apply(function () {
								scope.$eval(attrs.enter);
							});
							e.preventDefault();
						}
					});
				}
			};
		}]);
}());
