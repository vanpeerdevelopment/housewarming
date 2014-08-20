app.factory('cocktailService', function() {
	var cocktails = [{
		id: 1,
		number: 6,
		name: "Caprioska",
		keyIngredient: "Wodka",
		alcoholLevel: 2,
		rating: 4,
		imageUrl: "/img/cocktails/caprioska.jpg"
	}, {
		id: 2,
		number: 9,
		name: "Wodka Martini",
		keyIngredient: "Wodka",
		alcoholLevel: 2,
		rating: 4,
		imageUrl: "/img/cocktails/wodka-martini.jpg"
	}, {
		id: 3,
		number: 23,
		name: "Cosmopolitan",
		keyIngredient: "Wodka",
		alcoholLevel: 3,
		rating: 5,
		imageUrl: "/img/cocktails/cosmopolitan.jpg"
	}, {
		id: 4,
		number: 29,
		name: "Cappuccino Cocktail",
		keyIngredient: "Wodka",
		alcoholLevel: 1.5,
		rating: 4,
		imageUrl: "/img/cocktails/cappuccino-cocktail.jpg"
	}, {
		id: 5,
		number: 40,
		name: "Long Island Iced Tea",
		keyIngredient: "Wodka",
		alcoholLevel: 3.5,
		rating: 5,
		imageUrl: "/img/cocktails/long-island-iced-tea.jpg"
	}, {
		id: 6,
		number: 50,
		name: "Delmonico",
		keyIngredient: "Gin",
		alcoholLevel: 2,
		rating: 3,
		imageUrl: "/img/cocktails/delmonico.jpg"
	}, {
		id: 7,
		number: 69,
		name: "Parisian",
		keyIngredient: "Gin",
		alcoholLevel: 2,
		rating: 3,
		imageUrl: "/img/cocktails/parisian.jpg"
	}, {
		id: 8,
		number: 77,
		name: "Bronx",
		keyIngredient: "Gin",
		alcoholLevel: 3.5,
		rating: 4,
		imageUrl: "/img/cocktails/bronx.jpg"
	}, {
		id: 9,
		number: 78,
		name: "Cowboy 45",
		keyIngredient: "Gin",
		alcoholLevel: 2,
		rating: 3,
		imageUrl: "/img/cocktails/cowboy-45.jpg"
	}, {
		id: 10,
		number: "/",
		name: "Gin Tonic",
		keyIngredient: "Gin",
		alcoholLevel: 2.5,
		rating: 4,
		imageUrl: "/img/cocktails/gin-tonic.jpg"
	}, {
		id: 11,
		number: 119,
		name: "Margarita",
		keyIngredient: "Tequila",
		alcoholLevel: 3,
		rating: 5,
		imageUrl: "/img/cocktails/margarita.jpg"
	}, {
		id: 12,
		number: 123,
		name: "Tequila Manhattan",
		keyIngredient: "Tequila",
		alcoholLevel: 3,
		rating: 5,
		imageUrl: "/img/cocktails/tequila-manhattan.jpg"
	}, {
		id: 13,
		number: 148,
		name: "Raspberry Delight",
		keyIngredient: "Rum",
		alcoholLevel: 1.5,
		rating: 5,
		imageUrl: "/img/cocktails/raspberry-delight.jpg"
	}, {
		id: 14,
		number: 157,
		name: "Bacardi Cocktail",
		keyIngredient: "Rum",
		alcoholLevel: 2.5,
		rating: 4,
		imageUrl: "/img/cocktails/bacardi-cocktail.jpg"
	}, {
		id: 15,
		number: 163,
		name: "Rum Swizzle",
		keyIngredient: "Rum",
		alcoholLevel: 2,
		rating: 5,
		imageUrl: "/img/cocktails/rum-swizzle.jpg"
	}, {
		id: 16,
		number: 164,
		name: "Mojito",
		keyIngredient: "Rum",
		alcoholLevel: 2,
		rating: 5,
		imageUrl: "/img/cocktails/mojito.jpg"
	}, {
		id: 17,
		number: 174,
		name: "Caipirinha",
		keyIngredient: "Rum",
		alcoholLevel: 2,
		rating: 5,
		imageUrl: "/img/cocktails/caipirinha.jpg"
	}, {
		id: 18,
		number: 184,
		name: "Cuba Libre",
		keyIngredient: "Rum",
		alcoholLevel: 2,
		rating: 5,
		imageUrl: "/img/cocktails/cuba-libre.jpg"
	}, {
		id: 19,
		number: 211,
		name: "Old-Fashioned",
		keyIngredient: "Whiskey",
		alcoholLevel: 2,
		rating: 5,
		imageUrl: "/img/cocktails/old-fashioned.jpg"
	}, {
		id: 20,
		number: 224,
		name: "Whiskey Sour",
		keyIngredient: "Whiskey",
		alcoholLevel: 2,
		rating: 5,
		imageUrl: "/img/cocktails/whiskey-sour.jpg"
	}, {
		id: 21,
		number: 226,
		name: "Manhattan",
		keyIngredient: "Whiskey",
		alcoholLevel: 2.5,
		rating: 5,
		imageUrl: "/img/cocktails/manhattan.jpg"
	}, {
		id: 22,
		number: 262,
		name: "Brandy Daisy",
		keyIngredient: "Cognac",
		alcoholLevel: 2,
		rating: 4,
		imageUrl: "/img/cocktails/brandy-daisy.jpg"
	}, {
		id: 26,
		number: 341,
		name: "Pippin Zoë",
		keyIngredient: "Cava",
		alcoholLevel: 1.5,
		rating: 5,
		imageUrl: "/img/cocktails/pippin-zoe.jpg"
	}, {
		id: 27,
		number: 344,
		name: "Kir Royale",
		keyIngredient: "Cava",
		alcoholLevel: 1,
		rating: 4,
		imageUrl: "/img/cocktails/kir-royale.jpg"
	}, {
		id: 28,
		number: 345,
		name: "Cava Classic",
		keyIngredient: "Cava",
		alcoholLevel: 2,
		rating: 5,
		imageUrl: "/img/cocktails/cava-classic.jpg"
	}, {
		id: 29,
		number: 351,
		name: "Pick Me Up",
		keyIngredient: "Cava",
		alcoholLevel: 2,
		rating: 4,
		imageUrl: "/img/cocktails/pick-me-up.jpg"
	}, {
		id: 23,
		number: 310,
		name: "Hazel Cream",
		keyIngredient: "Andere",
		alcoholLevel: 3,
		rating: 5,
		imageUrl: "/img/cocktails/hazel-cream.jpg"
	}, {
		id: 24,
		number: 316,
		name: "Bushwacker",
		keyIngredient: "Andere",
		alcoholLevel: 2,
		rating: 4,
		imageUrl: "/img/cocktails/bushwacker.jpg"
	}, {
		id: 25,
		number: 324,
		name: "Toasted Almond",
		keyIngredient: "Andere",
		alcoholLevel: 2.5,
		rating: 5,
		imageUrl: "/img/cocktails/toasted-almond.jpg"
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

	var withName = function(name){
		return function(cocktail){
			return cocktail.name === name;
		}		
	};

	return {
		keyIngredientCocktailMap: keyIngredientCocktailMap,
		findByName: function(name){
			return cocktails
			.filter(withName(name))[0];
		}
	};
});