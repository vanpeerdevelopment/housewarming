app.directive('cocktaildetailthumbnail', function() {
	return {
		restrict: 'E',
		scope: {
			cocktail: '='
		},
		templateUrl: '/app/directives/cocktaildetailthumbnail.html'
	};
});