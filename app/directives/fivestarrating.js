app.directive('fivestarrating', function() {
	return {
		restrict: 'E',
		scope: {
			rating: '='
		},
		templateUrl: '/app/directives/fivestarrating.html'
	};
});