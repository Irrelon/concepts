/* global angular */
(function () {
	"use strict";

	angular
		.module('oblique.core')
		.config(["$provide", function ($provide) {
			$provide.decorator("$exceptionHandler", ["$delegate", "$injector", function ($delegate, $injector) {

				var LOG = $injector.get('$log').getInstance('$exceptionHandler');
				return function (exception, cause) {
					LOG.error(exception, cause);
				};
			}]);
		}]);
}());
