app.directive('fivedotrating', function() {
	return {
		restrict: 'E',
		scope: {
			rating: '='
		},
		templateUrl: '/app/directives/fivedotrating.html'
	};
});