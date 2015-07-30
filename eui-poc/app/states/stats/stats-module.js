(function () {
    'use strict';

    angular
        .module('oblique.stats', ['ui.router'])
        .config(["$stateProvider", function ($stateProvider) {
            $stateProvider.state('stats', {
                url: '/stats',
                templateUrl: 'stats/stats.tpl.html',
                controller: 'StatsController',
                data: {
                    description: 'states.stats.description'
                }
            });
        }]);
}());
