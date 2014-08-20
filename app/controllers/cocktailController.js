app.controller('CocktailController', function($scope, cocktail, cocktailService){

	$scope.cocktail = cocktail;

	$scope.previous = function(){
		return cocktailService.findPrevious(cocktail);
	};

	$scope.next = function(){
		return cocktailService.findNext(cocktail);
	};
});