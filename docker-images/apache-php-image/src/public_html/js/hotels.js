$(function() {
	console.log("Chargement des hotels");

	function loadHotels() {
		$.getJSON( "/api/hotels/", function( hotels ) {
			console.log(hotels);
			var message = "Aucun hotel";
			if (hotels.length > 0) {
				message = hotels[0].name + ", " + hotels[0].stars + " étoile" + (hotels[0].stars > 1 ? "s" : "");
			}
			$(".address-bar").text(message);
		});
	};
	loadHotels();
	setInterval( loadHotels, 2000 );
});
