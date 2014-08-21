var app = angular.module('housewarmingApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'HomeController',
			templateUrl: '/app/partials/home.html'
		})
		.when('/cocktail/:name', {
			controller: 'CocktailController',
			templateUrl: '/app/partials/cocktail.html',
			resolve: {
				cocktail: function($route, cocktailService){
					return cocktailService.findByName($route.current.params.name);
				}
			}
		})
		.when('/search', {
			controller: 'SearchController',
			templateUrl: '/app/partials/search.html'
		})
		.when('/order', {
			controller: 'OrderController',
			templateUrl: '/app/partials/order.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});