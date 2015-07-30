(function () {
    'use strict';

    angular
        .module('oblique.charts', ['ui.router'])
        .config(["$stateProvider", function ($stateProvider) {
            $stateProvider.state('charts', {
                url: '/charts',
                templateUrl: 'charts/charts.tpl.html',
                controller: 'ChartsController',
                data: {
                    description: 'states.charts.description'
                },
                resolve: {
                    chartConf: ["ChartsService", function(ChartsService) {
                        return ChartsService.init();
                    }]
                }
            })
            .state('charts.chartjs', {
                url: '/chartjs',
                templateUrl: 'charts/chartjs.tpl.html'
            })
            .state('charts.highchart', {
                url: '/highchart',
                templateUrl: 'charts/highchart.tpl.html'
            });
        }]);
}());
