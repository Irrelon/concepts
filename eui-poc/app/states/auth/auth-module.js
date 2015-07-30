(function () {
	'use strict';

	angular
		.module('oblique.auth', ['ui.router'])
		.config(["$stateProvider", function ($stateProvider) {
			$stateProvider.state('auth', {
				url: '/auth',
				templateUrl: 'auth/auth.tpl.html',
				controller: 'AuthController',
				data: {
					layout: 'cover'
				}
			});
		}]);
}());
