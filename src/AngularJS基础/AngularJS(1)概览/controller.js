/**
 * Created by onejustone on 2017/1/18.
 */
angular.module('exampleApp.Controllers', [])
.controller('dayCtrl', function ($scope, days) {
	console.log(days)
	$scope.day = days.today;
})
 
