app.factory('cocktailService', function() {
	return {
		getCocktails: function() {
			return [{
				name: 'Brandy daisy',
				ingredients: ['Cognac', 'Citroensap', 'Frambozensiroop', 'Frambozen', 'Poedersuiker'],
				alcoholLevel: 2,
				rating: 4
			}, {
				name: 'Old-fashioned',
				ingredients: ['Suikerklontjes', 'Angostura', 'Sinaasappelschil', 'Whiskey'],
				alcoholLevel: 2,
				rating: 5
			}];
		}
	};
});