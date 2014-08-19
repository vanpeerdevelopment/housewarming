app.controller('HomeController', function($scope, cocktailService){
	$scope.cocktails = cocktailService.getAllCocktails();
});