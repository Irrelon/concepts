(function () {
	'use strict';

	var module = angular.module('oblique.core');

	module.directive('labeledCheckbox', function () {
		return {
			restrict: 'E',
			require: 'ngModel',
			scope: {
				ngModel: '=',
				value: '=',
				label: '@label',
                checkboxId: '@checkboxId'
			},
			template:   '<div class="checkbox">' +
                            '<input type="checkbox" id="{{checkboxId}}" checklist-model="ngModel" checklist-value="value"/>' +
                            '<label for="{{checkboxId}}">{{label}}</label>' +
						'</div>',
			link: function (scope, element, attrs) {
				/* Do Nothing */
			}
		};
	});
}());
