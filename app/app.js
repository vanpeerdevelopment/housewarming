var app = angular.module('housewarmingApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'HomeController',
			templateUrl: '/app/partials/home.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});