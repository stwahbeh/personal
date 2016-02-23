'use strict';
console.log("greg hay yo");

// Create app
var myApp = angular.module('myApp',[])

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
	//console.log('my controller');
	$scope.getData = function() {
		//console.log('am i getting data?');
		$http.get('./data/info.json').success(function(data){
		//console.log("in get function");	
		console.log(data);
		$scope.items = data;
		//console.log($scope.items);
		});
	}
	//console.log("getting data");
	$scope.getData();
	//console.log("got data");
});