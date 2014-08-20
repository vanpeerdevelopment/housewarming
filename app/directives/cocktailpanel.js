app.directive('cocktailpanel', function() {
	return {
		restrict: 'E',
		scope: {
			keyIngredient: '=',
			cocktails: '='
		},
		templateUrl: '/app/directives/cocktailpanel.html'
	};
});