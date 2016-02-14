// Create app
var myApp = angular.module('myApp',[])

var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
	console.log('my controller');
	var getData = function() {
		$http.get('data/info.json').success(function(response){
		console.log("in get function");	
		$scope.items = response;
		console.log($scope.items);
		})
	}
	console.log("getting data");
	getData();
	console.log("got data");
});