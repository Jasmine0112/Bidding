


	function init() {





var latitude=-74.03325530000001;
var longitude =40.71934530000001;
//console.log(lat)
	var mapOptions = {
                center: new google.maps.LatLng(longitude, latitude),
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	zoom: 13


	};

var venueMAP;

venueMAP = new google.maps.Map(document.getElementById('googlemap'), mapOptions); 

 if (navigator.geolocation) {
        // defaultLocation();
        navigator.geolocation.getCurrentPosition(locationFound, defaultLocation);
    } else {
        defaultLocation();
    }



}

function locationFound(position) {
	// var latitude=-74.03325530000001;
	// var longitude =40.71934530000001;
	alert(position)
//	console.log(position)

//    showMap(position.coords.latitude, position.coords.longitude, true);
}

function defaultLocation() {
	var latitude=-74.03325530000001;
	var longitude =40.71934530000001;

//    showMap(38.8977, -77.0366, false);
}

function loadScript() { 
	var script = document.createElement('script');
	script.src = 'http://maps.googleapis.com/maps/api/js?sensor=true&callback=init';
	document.body.appendChild(script);





}

window.onload = loadScript 