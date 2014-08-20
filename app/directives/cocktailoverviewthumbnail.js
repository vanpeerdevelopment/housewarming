app.directive('cocktailoverviewthumbnail', function() {
	return {
		restrict: 'E',
		scope: {
			cocktail: '='
		},
		templateUrl: '/app/directives/cocktailoverviewthumbnail.html'
	};
});