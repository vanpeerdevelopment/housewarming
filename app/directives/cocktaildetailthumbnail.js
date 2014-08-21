app.directive('cocktaildetailthumbnail', function() {
	return {
		restrict: 'E',
		scope: {
			cocktail: '=',
			previous: '=',
			next: '=',
			order: '='
		},
		templateUrl: '/app/directives/cocktaildetailthumbnail.html'
	};
});