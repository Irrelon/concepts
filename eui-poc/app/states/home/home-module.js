(function () {
	'use strict';

	angular
		.module('oblique.home', ['ui.router'])
		.config(["$stateProvider", function ($stateProvider) {
			$stateProvider.state('home', {
				url: '/home',
				templateUrl: 'home/home.tpl.html',
				controller: 'HomeController',
				data: {
					description: 'states.home.description'
				}
			});
		}]);
}());
