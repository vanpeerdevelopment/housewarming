app.controller('HomeController', function($scope, cocktailService) {

	$scope.keyIngredients = function() {
		return Object.keys(cocktailService.keyIngredientCocktailMap);
	};

	$scope.cocktailsForKeyIngredient = function(keyIngredient) {
		return cocktailService.keyIngredientCocktailMap[keyIngredient];
	};
});