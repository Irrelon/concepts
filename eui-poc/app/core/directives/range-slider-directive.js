(function () {
	'use strict';

	var module = angular.module('oblique.core');

	module.directive('rangeSlider', function () {

		return {
			restrict: 'E',
			scope: {
				ngModel: '=ngModel',
				min: '@',
				max: '@',
				step: "=step"
			},
			template: '<div ui-slider="sliderOptions" min="{{min}}" max="{{max}}" step="{{step}}" ng-model="ngModel"></div>',
			link: function (scope, element, attrs) {
				var $this = this;

				scope.sliderOptions = {
					range: true,
					slide: function (event, ui) {
						scope.setupTooltip(event, ui);
					},
					change: function (event, ui) {
						scope.setupTooltip(event, ui);
					}
				};

				scope.setupTooltip = function (event, ui) {
					$(ui.handle).html('<div class="range-slider-tooltip">' + ui.value + '</div>');
				};
			}
		};
	});
}());
