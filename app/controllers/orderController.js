app.controller('OrderController', function($scope, cocktailService){

	$scope.orderedCocktails = function(){
		return cocktailService.orderedCocktails();
	}

	$scope.clearOrder = function(){
		cocktailService.clearOrder();
	}
});