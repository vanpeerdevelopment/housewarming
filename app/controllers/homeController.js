app.controller('HomeController', function($scope, cocktailService){
	
	$scope.getAllCocktails = function(){
		return cocktailService.getAllCocktails();
	};
	
});