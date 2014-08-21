app.controller('SearchController', function($scope, cocktailService){

	$scope.searchText = '';
	$scope.orderCriterium = 'name';

	$scope.cocktails = cocktailService.allCocktails;
	
	$scope.orderCocktail = function(cocktail){
		cocktailService.order(cocktail);
	};
});