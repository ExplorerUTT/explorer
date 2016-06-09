'use strict';

function initMap() {
  var center = { lat: 48.2973, lng: 4.0744 };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: center,
    disableDefaultUI: true
  });

  map.data.loadGeoJson('/data/random-troyes.geojson')

  var geoMarker = new google.maps.Marker({
    map: map,
    icon: '/icons/my_location.png',
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      geoMarker.setPosition(pos);
      map.setCenter(pos);
    }, function() {
      console.log('Geolocation refused')
    });
  } else {
    console.log('No browser support');
  }
}

