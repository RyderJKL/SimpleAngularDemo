/**
 * Created by onejustone on 2017/1/18.
 */


angular.module('exampleApp.Filters', [])
.constant('dayNames', ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
.filter('dayName', function (dayNames) {
	return function (input) {
		return angular.isNumber(input) ? dayNames[input] : input;
	}
})