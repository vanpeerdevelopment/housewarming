app.controller('HomeController', function($scope, cocktailService) {

	$scope.keyIngredients = function() {
		return cocktailService.keyIngredients();
	};

});