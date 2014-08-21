app.directive('cocktailpanel', function() {
	return {
		restrict: 'E',
		scope: {
			keyIngredient: '=',
			cocktails: '=',
			order: '='
		},
		templateUrl: '/app/directives/cocktailpanel.html'
	};
});