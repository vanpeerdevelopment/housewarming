app.directive('cocktailGroup', function(){
	return {
		restrict: 'E',
		scope: {
			keyIngredient: '=',
			cocktails: '='
		},
		templateUrl: '/app/directives/cocktailGroup.html'
	};
});