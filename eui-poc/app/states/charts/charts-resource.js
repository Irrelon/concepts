(function () {
    'use strict';

    var module = angular.module('oblique.charts');

    module.factory('ChartsResource', ["$http", function ($http) {

        return {
            getConf: function() {
                return  $http.get('./data/conf.json');
            },

            getData: function(serieId) {
                return  $http.get('./data/serie' + serieId + '.json');
            }
        };

    }]);
}());
