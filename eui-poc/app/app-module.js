(function () {
	'use strict';

	angular
		.module('oblique', [
			'ngCookies',
			'ui.bootstrap',
			'ui.router',
			'pascalprecht.translate',
			'satellizer',
			'ui.slider',
			'checklist-model',
            'chart.js',
            'highcharts-ng',

			'oblique.app-templates',
			'oblique.core',
			'oblique.auth',
			'oblique.home',
            'oblique.charts',
            'oblique.stats'
		])
		.constant('CONFIG', window['oblique'].CONFIG)
		.config(["$logProvider", function ($logProvider) {
			$logProvider.debugEnabled(true);
		}])
		.config(["CONFIG", "$authProvider", function (CONFIG, $authProvider) {
			$authProvider.signupUrl = CONFIG.api.url + '/auth/register';
			$authProvider.signupRedirect = '/';
			$authProvider.loginUrl = CONFIG.api.url + '/auth/login';
			$authProvider.loginRedirect = '/';
			$authProvider.logoutRedirect = '/';
			$authProvider.tokenPrefix = CONFIG.module; // Local Storage name prefix
		}])
		.config(["$httpProvider", "CONFIG", function ($httpProvider, CONFIG) {
			if (CONFIG.dev && CONFIG.dev.sendCredentials) {
				//$httpProvider.defaults.withCredentials = CONFIG.dev.sendCredentials;
			}
			$httpProvider.interceptors.push('HttpInterceptor');
		}])
		.config(["CONFIG", "$urlRouterProvider", function (CONFIG, $urlRouterProvider) {
			$urlRouterProvider.otherwise('/' + CONFIG.defaults.state);
		}])
		.config(["CONFIG", "$translateProvider", function (CONFIG, $translateProvider) {
			$translateProvider.useStaticFilesLoader({
				prefix: 'app/i18n/locale-',
				suffix: '.json'
			});
			$translateProvider.preferredLanguage(CONFIG.defaults.locale);
			$translateProvider.useLocalStorage();
		}])
		.config(["CONFIG", "LoadingServiceProvider", function (CONFIG, LoadingServiceProvider) {
			LoadingServiceProvider.setTimeout(CONFIG.defaults.http.timeout);
		}])
		.config(function () {
            Chart.defaults.global.animation = false;
			Chart.defaults.global.maintainAspectRatio = true;

            Highcharts.setOptions({
                plotOptions: {
                    series: {
                        animation: false
                    }
                },
                legend: {
                    enabled: false
                },
                title:{
                    text: ''
                }
            });
		})
		.run(["$httpDecorator", function ($httpDecorator) {
			// Decorate $http with prebuilt API methods:
			$httpDecorator.decorate();
		}]);

	// Bootstrap angular:
	angular.element(document).ready(function () {
		angular.bootstrap(document, ['oblique']);
	});
}());
