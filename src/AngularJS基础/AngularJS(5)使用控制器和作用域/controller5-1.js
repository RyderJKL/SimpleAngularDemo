/**
 * Created by onejustone on 2017/2/3.
 */

angular.module("exampleApp", [])
.controller("topLevelCtrl", ["$scope", function ($scope) {
	$scope.dataValue = "Hello, Jack";

	$scope.data = {
		dataValue: "hello, world!"
	};

	$scope.reverseText = function () {
		$scope.dataValue = $scope.dataValue.split("").reverse().join("");
		// $scope.data.dataValue = $scope.data.dataValue.split("").reverse().join("");
	};

	$scope.changeCase = function () {
		let result = [];
		angular.forEach($scope.data.dataValue.split(""), function (char, index) {
			result.push(index % 2 == 1 ? char.toString().toUpperCase() : char.toString().toLowerCase());

		});
		$scope.data.dataValue = result.join("");
	}

}]).controller("firstChildCtrl", ["$scope", function ($scope) {

	$scope.changeCase = function () {
		$scope.data.dataValue = $scope.data.dataValue.toUpperCase();
	};

}]).controller("secondChildCtrl", ["$scope", function ($scope) {

	$scope.changeCase = function () {
		$scope.data.dataValue = $scope.data.dataValue.toLowerCase();
	};

	$scope.shiftFour = function () {
		let result = [];
		angular.forEach($scope.data.dataValue.split(""), function (char, index) {
			result.push(index < 4 ? char.toUpperCase() : char);
		});

		$scope.data.dataValue = result.join("");
	}
}]);

