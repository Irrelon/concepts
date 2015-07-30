(function () {
    'use strict';

    var module = angular.module('oblique.charts');

    module.factory('ChartsService', ["$q", "ChartsResource", function ($q, ChartsResource) {

        var service = {

            _conf: null,
            _years: [],
            _seriesData: {},
            _seriesColor: {},

            range: {
                min: 0,
                max: 0,
                current: [1995, 2010]
            },
            series: [],

            _buildConf: function() {
                service.range.min = Number.MAX_VALUE;
                service.range.max = Number.MIN_VALUE;

                service.series = service._conf.series;
                service.series = service.series.slice(0, 20);
                service._years = [];

                _.each(service.series, function(val, index) {
                    service._seriesColor[val.id] = service._generateRandomColor();
                });
                _.each(_.range(service._conf.years.from, service._conf.years.to + 1), function(val, index) {
                    ((val > service.range.max) && (service.range.max = val));
                    ((val < service.range.min) && (service.range.min = val));

                    service._years.push(val);
                });

                ((service.range.current[0] < service.range.min) && (service.range.current[0] = service.range.min));
                ((service.range.current[1] > service.range.max) && (service.range.current[1] = service.range.max));
            },

            _range: function(arr) {
                var from = _.indexOf(service._years, service.range.current[0]),
                    to = _.indexOf(service._years, service.range.current[1]) + 1;

                return _.slice(arr, from, to);
            },

            _compress: function(arr, n) {
                var i, step,
                    result = [];

                step = (arr.length - 1)/ (n - 1);
                for(i = 0; i < n; i++) {
                    result.push(arr[Math.round(i * step)]);
                }

                return result;
            },

            _prepare: function(arr, n) {
                var ranged = service._range(arr);

                if(n && ranged.length > n) {
                    ranged = service._compress(ranged, n);
                }

                return ranged;
            },

            _generateRandomColor: function() {
                var letters = '0123456789ABCDEF'.split(''),
                    color = '#',  i;

                for ( i = 0; i < 6; i++ ) {
                    color += letters[Math.floor(Math.random() * 16)];
                }

                return color;
            },

            init: function() {
                return ChartsResource.getConf().then(function(response) {
                    service._conf = response.data;
                    service._buildConf();
                });
            },

            getData: function(serie, max) {
                return $q(function(resolve, reject) {
                    var data = service._seriesData[serie];

                    if(data) {
                        resolve(service._prepare(data, max));
                    } else {
                        ChartsResource.getData(serie).then(function(response) {
                            var values = response.data.values;
                            service._seriesData[serie] = values;
                            resolve(service._prepare(values, max));

                        }, function(err) {
                            reject(err);
                        });
                    }
                });
            },

            getColor: function(serie) {
                return service._seriesColor[serie];
            },

            getLabels: function(max) {
                return service._prepare(service._years, max);
            }

        };

        return service;
    }]);
})();
