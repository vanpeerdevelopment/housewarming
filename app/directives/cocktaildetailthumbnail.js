app.directive('cocktaildetailthumbnail', function() {
	return {
		restrict: 'E',
		scope: {
			cocktail: '=',
			previous: '=',
			next: '='
		},
		templateUrl: '/app/directives/cocktaildetailthumbnail.html'
	};
});