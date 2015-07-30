(function () {
    'use strict';

    angular
        .module('oblique.stats')

        .controller('StatsController', ["$scope", function ($scope) {

            $scope.loadingData = [{
                network: 'Regular 2G (250 Kbps, 300ms RTT)',
                time: 324.3
            }, {
                network: 'Regular 3G (750 Kbps, 100ms RTT)',
                time: 109.1
            }, {
                network: 'WiFi (30 Mbps, 2ms RTT)',
                time: 5.5
            }];

            $scope.renderingData = [{
                series: 1,
                chartjs: 38,
                highchart: 78,
                chartjs_bar: 25,
                highchart_bar: 48
            }, {
                series: 2,
                chartjs: 24,
                highchart: 62,
                chartjs_bar: 27,
                highchart_bar: 56
            }, {
                series: 3,
                chartjs: 29,
                highchart: 65,
                chartjs_bar: 29,
                highchart_bar: 57
            }, {
                series: 4,
                chartjs: 34,
                highchart: 72,
                chartjs_bar: 31,
                highchart_bar: 65
            }, {
                series: 5,
                chartjs: 43,
                highchart: 80,
                chartjs_bar: 33,
                highchart_bar: 76
            }, {
                series: 6,
                chartjs: 52,
                highchart: 84,
                chartjs_bar: 36,
                highchart_bar: 77
            }, {
                series: 7,
                chartjs: 61,
                highchart: 94,
                chartjs_bar: 36,
                highchart_bar: 81
            }, {
                series: 8,
                chartjs: 71,
                highchart: 104,
                chartjs_bar: 36,
                highchart_bar: 99
            }, {
                series: 9,
                chartjs: 80,
                highchart: 114,
                chartjs_bar: 39,
                highchart_bar: 98
            }, {
                series: 10,
                chartjs: 93,
                highchart: 121,
                chartjs_bar: 45,
                highchart_bar: 112
            }, {
                series: 11,
                chartjs: 109,
                highchart: 130,
                chartjs_bar: 46,
                highchart_bar: 112
            }, {
                series: 12,
                chartjs: 118,
                highchart: 149,
                chartjs_bar: 51,
                highchart_bar: 124
            }, {
                series: 13,
                chartjs: 132,
                highchart: 171,
                chartjs_bar: 49,
                highchart_bar: 124
            }, {
                series: 14,
                chartjs: 148,
                highchart: 166,
                chartjs_bar: 55,
                highchart_bar: 130
            }, {
                series: 15,
                chartjs: 160,
                highchart: 164,
                chartjs_bar: 56,
                highchart_bar: 146
            }, {
                series: 16,
                chartjs: 186,
                highchart: 165,
                chartjs_bar: 61,
                highchart_bar: 146
            }, {
                series: 17,
                chartjs: 189,
                highchart: 179,
                chartjs_bar: 63,
                highchart_bar: 103
            }, {
                series: 18,
                chartjs: 232,
                highchart: 183,
                chartjs_bar: 69,
                highchart_bar: 105
            }, {
                series: 19,
                chartjs: 237,
                highchart: 200,
                chartjs_bar: 69,
                highchart_bar: 106
            }, {
                series: 20,
                chartjs: 259,
                highchart: 198,
                chartjs_bar: 70,
                highchart_bar: 110
            }];

            $scope.chart = {
                type: 'Line',
                labels: _.range(1, 20), // [Number*]
                series: ['Chart.js', 'Highchart', 'Chart.js (Bar)', 'Highchart (Bar)'],  // [String*],
                data: [] // [[Number]*]
            };

            var chartjsData = [];
            var chartjsBarData = [];
            var highchartData = [];
            var highchartBarData = [];
            _.each($scope.renderingData, function(val) {
                chartjsData.push(val.chartjs);
                chartjsBarData.push(val.chartjs_bar);

                highchartData.push(val.highchart);
                highchartBarData.push(val.highchart_bar);
            });

            $scope.chart.data.push(chartjsData);
            $scope.chart.data.push(highchartData);
            $scope.chart.data.push(chartjsBarData);
            $scope.chart.data.push(highchartBarData);

        }]);
}());
