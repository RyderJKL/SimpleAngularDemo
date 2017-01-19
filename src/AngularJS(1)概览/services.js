/**
 * Created by onejustone on 2017/1/18.
 */

 
angular.module('exampleApp.Services', [])
.service('days', function (nowValue) {
	this.today = nowValue.getDay();
}).config(function () {
	console.log("Services module config: (no time)");
}).run(function (startTime) {
	console.log("Services module run: " + startTime);
});