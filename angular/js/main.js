var app = angular.module("Test", ['ngRoute', 'ctrl', 'services']);

app.config(['$routeProvider',
	function($routeProvider) {	
		$routeProvider.
			when('/', {
				templateUrl: 'views/start.html',
				controller: 'appCtrl'
			}).
			when('/result', {
				templateUrl: 'views/result.html',
				controller: 'resultCtrl'
			}).
			otherwise({
				redirectTo: '/'
			});

	}]);