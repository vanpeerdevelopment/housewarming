app.directive('cocktailoverviewthumbnail', function() {
	return {
		restrict: 'E',
		scope: {
			cocktail: '=',
			order: '='
		},
		templateUrl: '/app/directives/cocktailoverviewthumbnail.html'
	};
});