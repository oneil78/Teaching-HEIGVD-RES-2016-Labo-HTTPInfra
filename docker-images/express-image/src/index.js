var Chance = require('chance');
var chance = new Chance();
var Express = require('express');
var app = new Express();

app.get('/test', function(req, res) {
	res.send("Hello test");
});


app.get('/', function(req, res) {
        res.send(generateHotels());
});



app.listen(3000, function () {
	console.log("Accepting HTTP Request on port 3000.");
});


function generateHotels(){
	var numberOfHotels = chance.integer({min: 1, max : 10});
	console.log("Génération de " + numberOfHotels + " hotels");
	var hotels = [];
	for (var i = 0; i < numberOfHotels; i++){
		var address = chance.address();
		var stars = chance.integer({min: 1, max:5});
		var city = chance.city();
		var name = chance.last();
		hotels.push({name: name, address: address, city: city, stars: stars});
	}
	console.log(hotels);
	return hotels;
}
