app.factory('cocktailService', function() {
	var cocktails = [{
		id: 1,
		number: 6,
		name: "Caprioska",
		keyIngredient: "Wodka",
		imageUrl: "/img/cocktails/caprioska.jpg"
	}, {
		id: 2,
		number: 9,
		name: "Wodka Martini",
		keyIngredient: "Wodka",
		imageUrl: "/img/cocktails/wodka-martini.jpg"
	}, {
		id: 3,
		number: 23,
		name: "Cosmopolitan",
		keyIngredient: "Wodka",
		imageUrl: "/img/cocktails/cosmopolitan.jpg"
	}, {
		id: 4,
		number: 29,
		name: "Cappuccino Cocktail",
		keyIngredient: "Wodka",
		imageUrl: "/img/cocktails/cappuccino-cocktail.jpg"
	}, {
		id: 5,
		number: 40,
		name: "Long Island Iced Tea",
		keyIngredient: "Wodka",
		imageUrl: "/img/cocktails/long-island-iced-tea.jpg"
	}, {
		id: 6,
		number: 50,
		name: "Delmonico",
		keyIngredient: "Gin",
		imageUrl: "/img/cocktails/delmonico.jpg"
	}, {
		id: 7,
		number: 69,
		name: "Parisian",
		keyIngredient: "Gin",
		imageUrl: "/img/cocktails/parisian.jpg"
	}, {
		id: 8,
		number: 77,
		name: "Bronx",
		keyIngredient: "Gin",
		imageUrl: "/img/cocktails/bronx.jpg"
	}, {
		id: 9,
		number: 78,
		name: "Cowboy 45",
		keyIngredient: "Gin",
		imageUrl: "/img/cocktails/cowboy-45.jpg"
	}, {
		id: 10,
		number: "/",
		name: "Gin Tonic",
		keyIngredient: "Gin",
		imageUrl: "/img/cocktails/gin-tonic.jpg"
	}, {
		id: 11,
		number: 119,
		name: "Margarita",
		keyIngredient: "Tequila",
		imageUrl: "/img/cocktails/margarita.jpg"
	}, {
		id: 12,
		number: 123,
		name: "Tequila Manhattan",
		keyIngredient: "Tequila",
		imageUrl: "/img/cocktails/tequila-manhattan.jpg"
	}, {
		id: 13,
		number: 148,
		name: "Raspberry Delight",
		keyIngredient: "Rum"
	}, {
		id: 14,
		number: 157,
		name: "Bacardi Cocktail",
		keyIngredient: "Rum"
	}, {
		id: 15,
		number: 163,
		name: "Rum Swizzle",
		keyIngredient: "Rum"
	}, {
		id: 16,
		number: 164,
		name: "Mojito",
		keyIngredient: "Rum"
	}, {
		id: 17,
		number: 174,
		name: "Caipirinha",
		keyIngredient: "Rum"
	}, {
		id: 18,
		number: 184,
		name: "Cuba Libre",
		keyIngredient: "Rum"
	}, {
		id: 19,
		number: 211,
		name: "Old-Fashioned",
		keyIngredient: "Whiskey"
	}, {
		id: 20,
		number: 224,
		name: "Whiskey Sour",
		keyIngredient: "Whiskey"
	}, {
		id: 21,
		number: 226,
		name: "Manhattan",
		keyIngredient: "Whiskey"
	}, {
		id: 22,
		number: 262,
		name: "Brandy Daisy",
		keyIngredient: "Cognac"
	}, {
		id: 26,
		number: 341,
		name: "Pippin Zoë",
		keyIngredient: "Cava"
	}, {
		id: 27,
		number: 344,
		name: "Kir Royale",
		keyIngredient: "Cava"
	}, {
		id: 28,
		number: 345,
		name: "Cava Classic",
		keyIngredient: "Cava"
	}, {
		id: 29,
		number: 351,
		name: "Pick Me Up",
		keyIngredient: "Cava"
	}, {
		id: 23,
		number: 310,
		name: "Hazel Cream",
		keyIngredient: "Andere"
	}, {
		id: 24,
		number: 316,
		name: "Bushwacker",
		keyIngredient: "Andere"
	}, {
		id: 25,
		number: 324,
		name: "Toasted Almond",
		keyIngredient: "Andere"
	}];

	var keyIngredientCocktailMap = function() {
		var result = {};
		cocktails.forEach(function(cocktail) {
			if (result[cocktail.keyIngredient]) {
				result[cocktail.keyIngredient].push(cocktail);
			} else {
				result[cocktail.keyIngredient] = [cocktail];
			}
		});
		return result;
	}();

	return {
		keyIngredientCocktailMap: keyIngredientCocktailMap
	};
});