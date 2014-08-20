app.directive('cocktailthumbnail', function() {
	return {
		restrict: 'E',
		scope: {
			cocktail: '='
		},
		templateUrl: '/app/directives/cocktailthumbnail.html'
	};
});