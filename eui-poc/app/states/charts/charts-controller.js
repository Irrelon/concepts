(function () {
	'use strict';

	angular
		.module('oblique.charts')

		.controller('ChartsController', ["$scope", "$timeout", "ChartsService", function ($scope, $timeout, ChartsService) {

			// Filters:
			$scope.series = ChartsService.series;
			$scope.range = ChartsService.range;
            $scope.chartjsColors = [];

			// Chart:
			$scope.chartjsConfig = {
				type: 'Line',
				labels: [],
				series: [],
				data: [],
                options: {
                    bezierCurve: false,
                    datasetFill: false
                }
			};
            $scope.highchartConfig = {
                options: {
                    chart: {
                        type: 'line'
                    }
                },
                plotOptions: {
                    line: {
                        animation: false
                    }
                },
                series: [],
                title: false,
                yAxis: {
                    title: {
                        enabled: false
                    }
                },
                loading: false
            };

			// Current selection:
			$scope.selection = {
				series: []
			};
            $scope.selection.series.push($scope.series[0]);

			$scope.refresh = function () {
                $scope.chartjsConfig.series = _.pluck($scope.selection.series, 'title');
				$scope.chartjsConfig.labels = ChartsService.getLabels();

                $scope.chartjsConfig.data.length = 0;
                $scope.highchartConfig.series.length = 0;
                $scope.chartjsColors.length = 0;

				_.each($scope.selection.series, function (serie) {
					ChartsService.getData(serie.id).then(function(data) {
                        var color = ChartsService.getColor(serie.id);

                        $scope.chartjsColors.push(color);

                        $scope.chartjsConfig.data.push(data);
                        $scope.highchartConfig.series.push({
                            data: data,
                            color: color
                        });
                    });
				});
			};

			// Watchers:
			$scope.$watchGroup(['range.current'], $scope.refresh);
			$scope.$watchCollection('selection.series', function(newVal, oldVal) {
                if(!angular.equals(newVal, oldVal)) {
                    $scope.refresh();
                }
            });
            $scope.$watch('chartjsConfig.type', function() {
                var chartType = $scope.chartjsConfig.type;
                $scope.highchartConfig.options.chart.type = chartType === 'Line' ? 'line' : 'column';
            });

			$scope.onClick = function (points, evt) {
				console.log(points);
			};

		}]);
}());
