/**
 * Created by onejustone on 2017/2/10.
 */

 
angular.module('ngViewExample',['ngRoute'])
.controller('mainCtrl', function ($scope,$routeParams) {
	$scope.data = [12,34,45];
	$scope.$on('$viewContentLoaded', function () {
		console.log("fdsafdda")
	})

})