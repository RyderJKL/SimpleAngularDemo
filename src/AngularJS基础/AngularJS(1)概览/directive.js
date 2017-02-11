/**
 * Created by onejustone on 2017/1/18.
 */

angular.module('exampleApp.Directive', [])
.directive('highlight', function ($filter) {
	var dayFilter = $filter("dayName");
	return function (scope, element, attrs) {
		if (dayFilter(scope.day) == attrs['highlight']){
			element.css("color", "red");
		}
	}
})