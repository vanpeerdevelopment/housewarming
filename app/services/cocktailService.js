app.factory('cocktailService', function() {
	var cocktails = [{
		number: 6,
		name: "Caprioska",
		keyIngredient: "Wodka",
		alcoholLevel: 2,
		rating: 4,
		ingredients: [
			"55 ml wodka",
			"5 limoenpartjes",
			"3 tl rietsuiker"
		],
		recipe: "Pureer met een cocktailstamper de limoen samen met de suiker in een whiskyglas dat u eerst heeft voorzien van een randje suiker. Vul het glas met ijsgruis en vul aan met wodka.",
		imageUrl: "/img/cocktails/caprioska.jpg"
	}, {
		number: 9,
		name: "Wodka Martini",
		keyIngredient: "Wodka",
		alcoholLevel: 2,
		rating: 4,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/wodka-martini.jpg"
	}, {
		number: 23,
		name: "Cosmopolitan",
		keyIngredient: "Wodka",
		alcoholLevel: 3,
		rating: 5,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/cosmopolitan.jpg"
	}, {
		number: 29,
		name: "Cappuccino Cocktail",
		keyIngredient: "Wodka",
		alcoholLevel: 1.5,
		rating: 4,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/cappuccino-cocktail.jpg"
	}, {
		number: 40,
		name: "Long Island Iced Tea",
		keyIngredient: "Wodka",
		alcoholLevel: 3.5,
		rating: 5,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/long-island-iced-tea.jpg"
	}, {
		number: 50,
		name: "Delmonico",
		keyIngredient: "Gin",
		alcoholLevel: 2,
		rating: 3,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/delmonico.jpg"
	}, {
		number: 69,
		name: "Parisian",
		keyIngredient: "Gin",
		alcoholLevel: 2,
		rating: 3,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/parisian.jpg"
	}, {
		number: 77,
		name: "Bronx",
		keyIngredient: "Gin",
		alcoholLevel: 3.5,
		rating: 4,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/bronx.jpg"
	}, {
		number: 78,
		name: "Cowboy 45",
		keyIngredient: "Gin",
		alcoholLevel: 2,
		rating: 3,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/cowboy-45.jpg"
	}, {
		number: "/",
		name: "Gin Tonic",
		keyIngredient: "Gin",
		alcoholLevel: 2.5,
		rating: 4,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/gin-tonic.jpg"
	}, {
		number: 119,
		name: "Margarita",
		keyIngredient: "Tequila",
		alcoholLevel: 3,
		rating: 5,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/margarita.jpg"
	}, {
		number: 123,
		name: "Tequila Manhattan",
		keyIngredient: "Tequila",
		alcoholLevel: 3,
		rating: 5,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/tequila-manhattan.jpg"
	}, {
		number: 148,
		name: "Raspberry Delight",
		keyIngredient: "Rum",
		alcoholLevel: 1.5,
		rating: 5,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/raspberry-delight.jpg"
	}, {
		number: 157,
		name: "Bacardi Cocktail",
		keyIngredient: "Rum",
		alcoholLevel: 2.5,
		rating: 4,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/bacardi-cocktail.jpg"
	}, {
		number: 163,
		name: "Rum Swizzle",
		keyIngredient: "Rum",
		alcoholLevel: 2,
		rating: 5,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/rum-swizzle.jpg"
	}, {
		number: 164,
		name: "Mojito",
		keyIngredient: "Rum",
		alcoholLevel: 2,
		rating: 5,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/mojito.jpg"
	}, {
		number: 174,
		name: "Caipirinha",
		keyIngredient: "Rum",
		alcoholLevel: 2,
		rating: 5,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/caipirinha.jpg"
	}, {
		number: 184,
		name: "Cuba Libre",
		keyIngredient: "Rum",
		alcoholLevel: 2,
		rating: 5,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/cuba-libre.jpg"
	}, {
		number: 211,
		name: "Old-Fashioned",
		keyIngredient: "Whiskey",
		alcoholLevel: 2,
		rating: 5,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/old-fashioned.jpg"
	}, {
		number: 224,
		name: "Whiskey Sour",
		keyIngredient: "Whiskey",
		alcoholLevel: 2,
		rating: 5,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/whiskey-sour.jpg"
	}, {
		number: 226,
		name: "Manhattan",
		keyIngredient: "Whiskey",
		alcoholLevel: 2.5,
		rating: 5,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/manhattan.jpg"
	}, {
		number: 262,
		name: "Brandy Daisy",
		keyIngredient: "Cognac",
		alcoholLevel: 2,
		rating: 4,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/brandy-daisy.jpg"
	}, {
		number: 341,
		name: "Pippin Zoë",
		keyIngredient: "Cava",
		alcoholLevel: 1.5,
		rating: 5,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/pippin-zoe.jpg"
	}, {
		number: 344,
		name: "Kir Royale",
		keyIngredient: "Cava",
		alcoholLevel: 1,
		rating: 4,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/kir-royale.jpg"
	}, {
		number: 345,
		name: "Cava Classic",
		keyIngredient: "Cava",
		alcoholLevel: 2,
		rating: 5,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/cava-classic.jpg"
	}, {
		number: 351,
		name: "Pick Me Up",
		keyIngredient: "Cava",
		alcoholLevel: 2,
		rating: 4,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/pick-me-up.jpg"
	}, {
		number: 310,
		name: "Hazel Cream",
		keyIngredient: "Andere",
		alcoholLevel: 3,
		rating: 5,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/hazel-cream.jpg"
	}, {
		number: 316,
		name: "Bushwacker",
		keyIngredient: "Andere",
		alcoholLevel: 2,
		rating: 4,
		ingredients: [
		],
		recipe: "",
		imageUrl: "/img/cocktails/bushwacker.jpg"
	}, {
		number: 324,
		name: "Toasted Almond",
		keyIngredient: "Andere",
		alcoholLevel: 2.5,
		rating: 5,
		ingredients: [
		],
		recipe: "",
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

	var withName = function(name) {
		return function(cocktail) {
			return cocktail.name === name;
		}
	};

	return {
		keyIngredientCocktailMap: keyIngredientCocktailMap,
		findByName: function(name) {
			return cocktails
				.filter(withName(name))[0];
		},
		findPrevious: function(cocktail) {
			return cocktails[cocktails.indexOf(cocktail) - 1];
		},
		findNext: function(cocktail) {
			return cocktails[cocktails.indexOf(cocktail) + 1];
		}
	};
});