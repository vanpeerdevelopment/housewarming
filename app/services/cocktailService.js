app.factory('cocktailService', function() {
	var cocktails = [{
		id: 1,
		number: 6,
		name: "Caprioska",
		keyIngredient:"Wodka"
	}, {
		id: 2,
		number: 9,
		name: "Wodka Martini",
		keyIngredient:"Wodka"
	}, {
		id: 3,
		number: 23,
		name: "Cosmopolitan",
		keyIngredient:"Wodka"
	}, {
		id: 4,
		number: 29,
		name: "Capuccino Cocktail",
		keyIngredient:"Wodka"
	}, {
		id: 5,
		number: 40,
		name: "Long Island Iced Tea",
		keyIngredient:"Wodka"
	}, {
		id: 6,
		number: 50,
		name: "Delmonico",
		keyIngredient: "Gin"
	}, {
		id: 7,
		number: 69,
		name: "Parisian",
		keyIngredient: "Gin"
	}, {
		id: 8,
		number: 77,
		name: "Bronx",
		keyIngredient: "Gin"
	}, {
		id: 9,
		number: 78,
		name: "Cowboy 45",
		keyIngredient: "Gin"
	}, {
		id: 10,
		number: undefined,
		name: "Gin Tonic",
		keyIngredient: "Gin"
	}, {
		id: 11,
		number: 119,
		name: "Margarita",
		keyIngredient: "Tequila"
	}, {
		id: 12,
		number: 123,
		name: "Tequila Manhattan",
		keyIngredient: "Tequila"
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
	}];

	return {
		getAllCocktails: function() {
			return cocktails;
		}
	};
});