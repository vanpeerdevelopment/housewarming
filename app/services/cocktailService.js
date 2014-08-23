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
		imageUrl: "/img/cocktails/caprioska.jpg",
		timesOrdered: 0
	}, {
		number: 9,
		name: "Wodka Martini",
		keyIngredient: "Wodka",
		alcoholLevel: 2,
		rating: 4,
		ingredients: [
			"55 ml wodka",
			"15 ml vermout"
		],
		recipe: "Shenk zo veel vermout in een met ijs gevulde shaker dat het ijs ermee is bedekt. Schenk alle vermout eruit door de zeef. Schenk de wodka in de shaker. Roer een paar seconden om de wodka koud te maken. Giet hem dan door de zeef in een gekoeld glas. Garneer met een sliertje citroenschil en eventueel een olijf. Koel, indien mogelijk, de wodka van tevoren, zodat het doorroeren van de alcohol zo weinig mogelijk effect heeft.",
		imageUrl: "/img/cocktails/wodka-martini.jpg",
		timesOrdered: 0
	}, {
		number: 23,
		name: "Cosmopolitan",
		keyIngredient: "Wodka",
		alcoholLevel: 3,
		rating: 5,
		ingredients: [
			"55 ml wodka",
			"30 ml triple sec",
			"55 ml cranberrysap",
			"scheutje limoensap"
		],
		recipe: "Schud alle ingrediënten samen met ijs in de shaker en schenk het mengsel door de zeef in het glas. Garneer met een stukje geflambeerde sinaasappelschil. Houd het sliertje tussen duim en wijsvinger boven het glas en verhit het voorzichtig met een aansteker. Gebruik hiervoor biologische sinaasappelen zoder waslaagje. Knijp in de schil terwijl u hem verhit, zodat de geurige oliën uit de schil in het glas komen. Laat het stukje schil in het glas vallen.",
		imageUrl: "/img/cocktails/cosmopolitan.jpg",
		timesOrdered: 0
	}, {
		number: 29,
		name: "Cappuccino Cocktail",
		keyIngredient: "Wodka",
		alcoholLevel: 1.5,
		rating: 4,
		ingredients: [
			"20 ml wodka",
			"20 ml Kahlua",
			"1 espresso (heet)",
			"20 ml room",
			"schuitje suikerstroop"
		],
		recipe: "Schenk alle ingrediënten in een shaker, schud en schenk het mengsel door de zeef in een martiniglas. Strooi er een beetje cacaopoeder of chocoladevlokken over voor de garnering.",
		imageUrl: "/img/cocktails/cappuccino-cocktail.jpg",
		timesOrdered: 0
	}, {
		number: 40,
		name: "Long Island Iced Tea",
		keyIngredient: "Wodka",
		alcoholLevel: 3.5,
		rating: 5,
		ingredients: [
			"15 ml wodka",
			"15 ml gin",
			"15 ml lichte rum",
			"15 ml tequila",
			"15 ml triple sec",
			"sap van 1/4 citroen",
			"scheutje cola"
		],
		recipe: "Schud alle ingrediënten (behalve de cola) samen met ijs in een shaker en schenk het mengsel door de zeef in een met ijs gevuld glas. Voeg een scheutje cola toe voor de kleur en leg een schijfje citroen in het glat voor de garnering.",
		imageUrl: "/img/cocktails/long-island-iced-tea.jpg",
		timesOrdered: 0
	}, {
		number: 50,
		name: "Delmonico",
		keyIngredient: "Gin",
		alcoholLevel: 2,
		rating: 3,
		ingredients: [
			"20 ml gin",
			"15 ml brandewijn",
			"15 ml droge vermout",
			"15 ml zoete vermout"
		],
		recipe: "Roer alle ingrediënten samen met ijs in een shaker. Giet het mengsel door de zeef in een glas. Garneer met een kers in het glas.",
		imageUrl: "/img/cocktails/delmonico.jpg",
		timesOrdered: 0
	}, {
		number: 69,
		name: "Parisian",
		keyIngredient: "Gin",
		alcoholLevel: 2,
		rating: 3,
		ingredients: [
			"30 ml gin",
			"30 ml droge vermout",
			"7 ml crème de cassis"
		],
		recipe: "Schud alle ingrediënten samen met ijs in een mengbeker en schenk het mengsel door de zeef in het glas.",
		imageUrl: "/img/cocktails/parisian.jpg",
		timesOrdered: 0
	}, {
		number: 77,
		name: "Bronx",
		keyIngredient: "Gin",
		alcoholLevel: 3.5,
		rating: 4,
		ingredients: [
			"55 ml gin",
			"20 ml droge vermout",
			"20 ml zoete vermout",
			"40 ml sinaasappelsap"
		],
		recipe: "Schud alle ingrediënten samen met ijs in een shaker en shenk het mengsel door de zeef in een met ijs gevuld glas. Laat voor de garnering een kers in het glas vallen.",
		imageUrl: "/img/cocktails/bronx.jpg",
		timesOrdered: 0
	}, {
		number: 78,
		name: "Cowboy 45",
		keyIngredient: "Gin",
		alcoholLevel: 2,
		rating: 3,
		ingredients: [
			"2 blaadjes munt",
			"30 ml gin",
			"15 ml limoensap",
			"1/2 tl poedersuiker",
			"cava"
		],
		recipe: "Plet de muntblaadjes met een cocktailstamper in een shaker. Voeg gin, limoensap, suiker en ijs toe. Schud en schenk het mengsel door de zeef in het glas. Vul aan met cava.",
		imageUrl: "/img/cocktails/cowboy-45.jpg",
		timesOrdered: 0
	}, {
		number: "/",
		name: "Gin Tonic",
		keyIngredient: "Gin",
		alcoholLevel: 2.5,
		rating: 4,
		ingredients: [
			"60 ml gin",
			"120 ml tonic",
			"1/8 limoen"
		],
		recipe: "Pers de limoen uit in het glas en wrijf de binnenkant van het glas in met de uitgeperste limoen, laat de limoen in het glas liggen. Voeg de gin toe aan het glas en voeg vervolgens ijs toe aan het glas en roer. Voeg tot slot de tonic toe en roer nogmaals.",
		imageUrl: "/img/cocktails/gin-tonic.jpg",
		timesOrdered: 0
	}, {
		number: 119,
		name: "Margarita",
		keyIngredient: "Tequila",
		alcoholLevel: 3,
		rating: 5,
		ingredients: [
			"55 ml tequila",
			"30 ml triple sec",
			"sap van 1/2 limoen"
		],
		recipe: "Schud alle ingrediënten samen met ijs in een shaker en schenk het mengsel door de zeef in een gekoeld glas met een randje zout. Snijd voor de garnering een dun schijfje limoen en halveer dit. Leg één helft in het glase en de andere op de rand.",
		imageUrl: "/img/cocktails/margarita.jpg",
		timesOrdered: 0
	}, {
		number: 123,
		name: "Tequila Manhattan",
		keyIngredient: "Tequila",
		alcoholLevel: 3,
		rating: 5,
		ingredients: [
			"55 ml tequila",
			"30 ml zoete vermout",
			"scheutje limoensap"
		],
		recipe: "Schud de ingrediënten samen met ijs in een shaker en schenk het mengsel door de zeef in een glas met een ijsklontje. Laat er een kers en een sliertje sinaasappelschil in vallen voor de garnering.",
		imageUrl: "/img/cocktails/tequila-manhattan.jpg",
		timesOrdered: 0
	}, {
		number: 148,
		name: "Raspberry Delight",
		keyIngredient: "Rum",
		alcoholLevel: 1.5,
		rating: 5,
		ingredients: [
			"6 verse frambozen (plus 2 of 3 om te garneren)",
			"40 ml lichte rum",
			"1/2 tl triple sec",
			"1 tl citroensap",
			"1 tl sinaasappelsap",
			"1 tl frambozenpuree"
		],
		recipe: "Pureer het fruit met de cocktailstamper in een shaker. Schenk de rest van de ingrediënten erbij, voeg ijs toe en schud krachtig. Schenk het mengsel door de zeef in het glas. Garneer met 2-3 frambozen.",
		imageUrl: "/img/cocktails/raspberry-delight.jpg",
		timesOrdered: 0
	}, {
		number: 157,
		name: "Bacardi Cocktail",
		keyIngredient: "Rum",
		alcoholLevel: 2.5,
		rating: 4,
		ingredients: [
			"70 ml lichte Bacardi rum",
			"20 ml limoensap",
			"15 ml grenadine"
		],
		recipe: " Schud alle ingrediënten samen met ijs in een shaker en schenk het mengsel door de zeef in het glas. Garneer met een verse kers aan een steeltje.",
		imageUrl: "/img/cocktails/bacardi-cocktail.jpg",
		timesOrdered: 0
	}, {
		number: 163,
		name: "Rum Swizzle",
		keyIngredient: "Rum",
		alcoholLevel: 2,
		rating: 5,
		ingredients: [
			"sap van 1 limoen",
			"1 tl poedersuiker",
			"1,1 dl spuitwater",
			"2 scheutjes Angostura",
			"55 ml lichte of donkere rum"
		],
		recipe: "Doe limoensap, suiker en 55 ml van het spuitwater in een longdrinkglas. Vul aan met ijs en roer. Voeg de Angostura en de rum toe. Schenk de rest van het spuitwater erbij. Serveer met een roerstokje.",
		imageUrl: "/img/cocktails/rum-swizzle.jpg",
		timesOrdered: 0
	}, {
		number: 164,
		name: "Mojito",
		keyIngredient: "Rum",
		alcoholLevel: 2,
		rating: 5,
		ingredients: [
			"10 muntblaadjes",
			"2 tl rietsuiker",
			"1/2 limoen",
			"55 ml Havana Club",
			"spuitwater"
		],
		recipe: "Pureer de munt, suiker en limoen met een cocktailstamper in een longdrinkglas. Vul het glas met ijsgruis en schenk de rum erbij. Vul aan met spuitwater. Garneer met een takje munt.",
		imageUrl: "/img/cocktails/mojito.jpg",
		timesOrdered: 0
	}, {
		number: 174,
		name: "Caipirinha",
		keyIngredient: "Rum",
		alcoholLevel: 2,
		rating: 5,
		ingredients: [
			"1 limoen, in 8 partjes",
			"2 tl rietsuiker",
			"55 ml cachaça"
		],
		recipe: "Pureer de limoen en de suiker met een cocktailstamper in een whiskyglas. Vul het glas met ijsgruis. Schenk de cachaça erbij en roer. Vul aan met ijsgruis.",
		imageUrl: "/img/cocktails/caipirinha.jpg",
		timesOrdered: 0
	}, {
		number: 184,
		name: "Cuba Libre",
		keyIngredient: "Rum",
		alcoholLevel: 2,
		rating: 5,
		ingredients: [
			"55 ml Havana Club of goudkleurige rum",
			"cola",
			"3 partjes limoen"
		],
		recipe: "Schenk de rum in een met ijs gevuld glas. Vul aan met cola. Knijp het sap uit de partjes limoen in het glas en roer. Laat de uitgeknepen partjes in het glas vallen voor de garnering.",
		imageUrl: "/img/cocktails/cuba-libre.jpg",
		timesOrdered: 0
	}, {
		number: 211,
		name: "Old-Fashioned",
		keyIngredient: "Whiskey",
		alcoholLevel: 2,
		rating: 5,
		ingredients: [
			"2 suikerklontjes (wit)",
			"2 scheutjes Angostura",
			"sinaasappelschil",
			"55 ml whiskey naar keuze"
		],
		recipe: "Leg de suikerklontjes in een whiskyglas en schenk de bitter erover, zodat de suikerklontjes de bitter kunnen opzuigen. Voeg de sinaasappelschil en een scheutje whiskey toe. Pureer de ingrediënten met een cocktailstamper. Roer het mengsel terwijl u langzaam de rest van de whiskey erbij schenkt. Blijf roeren en voeg ijs toe tot het glas is gematteerd en gevuld met ijs (dit duurt ten minste 5 minuten). Garneer met een kers in het glas.",
		imageUrl: "/img/cocktails/old-fashioned.jpg",
		timesOrdered: 0
	}, {
		number: 224,
		name: "Whiskey Sour",
		keyIngredient: "Whiskey",
		alcoholLevel: 2,
		rating: 5,
		ingredients: [
			"40 ml gemengde scotch",
			"sap van 1/2 citroen",
			"1/2 tl poedersuiker",
			"1 tl eiwit (naar keuze)"
		],
		recipe: "Schud alle ingrediënten samen met ijs in een shaker en schenk het mengsel door de zeef in een met ijs gevuld glas. Garneer met een schijfje citroen en een kers in het glas.",
		imageUrl: "/img/cocktails/whiskey-sour.jpg",
		timesOrdered: 0
	}, {
		number: 226,
		name: "Manhattan",
		keyIngredient: "Whiskey",
		alcoholLevel: 2.5,
		rating: 5,
		ingredients: [
			"55 ml whiskey naar keuze",
			"7 ml zoete vermout",
			"2 druppels Angostura"
		],
		recipe: "Schenk alle ingrediënten in een shaker, voeg ijs toe en schud tot de shaker is gematteerd. Schenk het mengsel door de zeef in het glas. Garneer met een sinaasappelschilletje en een kers in het glas.",
		imageUrl: "/img/cocktails/manhattan.jpg",
		timesOrdered: 0
	}, {
		number: 262,
		name: "Brandy Daisy",
		keyIngredient: "Cognac",
		alcoholLevel: 2,
		rating: 4,
		ingredients: [
			"55 ml brandewijn",
			"sap van 1/2 citroen",
			"1 tl frambozensiroop",
			"1/2 tl poedersuiker"
		],
		recipe: "Schud alle ingrediënten samen met ijs in een shaker en schenk het mengsel door de zeef in een met ijs gevuld glas. Garneer met 5 verse frambozen.",
		imageUrl: "/img/cocktails/brandy-daisy.jpg",
		timesOrdered: 0
	}, {
		number: 341,
		name: "Pippin Zoë",
		keyIngredient: "Cava",
		alcoholLevel: 1.5,
		rating: 5,
		ingredients: [
			"15 ml brandewijn",
			"scheutje grenadinesiroop",
			"scheutje citroensap",
			"cava",
			"1/2 granaatappel"
		],
		recipe: "Schud de eerst drie ingrediënten samen met ijs in een shaker en schenk het mengsel door de zeef in het glas. Vul aan met cava. Knijp een halve granaatappel uit boven het glas en laat de pitten in de cocktail vallen voor de garnering.",
		imageUrl: "/img/cocktails/pippin-zoe.jpg",
		timesOrdered: 0
	}, {
		number: 344,
		name: "Kir Royale",
		keyIngredient: "Cava",
		alcoholLevel: 1,
		rating: 4,
		ingredients: [
			"15 ml crème de cassis",
			"cava"
		],
		recipe: "Schenk de crème de cassis in het champagneglas en vul aan met cava.",
		imageUrl: "/img/cocktails/kir-royale.jpg",
		timesOrdered: 0
	}, {
		number: 345,
		name: "Cava Classic",
		keyIngredient: "Cava",
		alcoholLevel: 2,
		rating: 5,
		ingredients: [
			"3 drupples Angostura",
			"1 suikerklontje (wit)",
			"20 ml brandewijn",
			"cava"
		],
		recipe: "Druppel de Angostura op het suikerklontje en leg het in het glas. Schenk de brandewijn erover en vul aan met cava. Garneer met een sliertje sinaasappelschil.",
		imageUrl: "/img/cocktails/cava-classic.jpg",
		timesOrdered: 0
	}, {
		number: 351,
		name: "Pick Me Up",
		keyIngredient: "Cava",
		alcoholLevel: 2,
		rating: 4,
		ingredients: [
			"30 ml cognac",
			"20 ml citroensap",
			"20 ml sinaasappelsap",
			"scheutje suikerstroop",
			"cava"
		],
		recipe: "Schud de eerste vier ingrediënten samen met ijs in een shaker en schenk het mengsel door de zeef in het glas. Vul aan met cava. Leg een stukje citroen- en sinaasappelschil in het glas voor de garnering.",
		imageUrl: "/img/cocktails/pick-me-up.jpg",
		timesOrdered: 0
	}, {
		number: 310,
		name: "Hazel Cream",
		keyIngredient: "Andere",
		alcoholLevel: 3,
		rating: 5,
		ingredients: [
			"30 ml frangelico",
			"30 ml Kahlua",
			"20 ml wodka",
			"scheutje melk of room"
		],
		recipe: "Schenk alle ingrediënten in een met ijs gevuld glas. Strooi er gemalen koffie of gekneusde hazelnoten over voor de garnering.",
		imageUrl: "/img/cocktails/hazel-cream.jpg",
		timesOrdered: 0
	}, {
		number: 316,
		name: "Bushwacker",
		keyIngredient: "Andere",
		alcoholLevel: 2,
		rating: 4,
		ingredients: [
			"15 ml amaretto",
			"15 ml Bailey's",
			"15 ml Kahlua",
			"15 ml lichte rum",
			"55 ml room"
		],
		recipe: "Meng alle ingrediënten samen met een halve kop ijsgruis in een keukenmachine of met een mixer en schenk het mengsel in het glas. Garneer met cacaopoeder.",
		imageUrl: "/img/cocktails/bushwacker.jpg",
		timesOrdered: 0
	}, {
		number: 324,
		name: "Toasted Almond",
		keyIngredient: "Andere",
		alcoholLevel: 2.5,
		rating: 5,
		ingredients: [
			"40 ml Kahlua",
			"30 ml amaretto",
			"40 ml melk"
		],
		recipe: "Schenk de ingrediënten in een met ijs gevuld glas en roer. Strooi er geroosterde geschaafde amandelen over voor de garnering.",
		imageUrl: "/img/cocktails/toasted-almond.jpg",
		timesOrdered: 0
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

	var isOrdered = function(cocktail){
		return cocktail.timesOrdered > 0;
	}

	return {
		allCocktails: cocktails,
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
		},
		order: function(cocktail){
			cocktail.timesOrdered = cocktail.timesOrdered + 1;
		},
		orderedCocktails: function(){
			return cocktails
				.filter(isOrdered);
		},
		clearOrder: function(){
			cocktails.forEach(function(cocktail){
				cocktail.timesOrdered = 0;
			});
		}
	};
});