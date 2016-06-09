'use strict';

function initMap() {
  var center = { lat: 48.2973, lng: 4.0744 };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: center
  });

  var marker = new google.maps.Marker({
    position: center,
    map: map,
    title: "Parc'Ours",
    disableDefaultUI: true
  });

  map.data.loadGeoJson('data/random-troyes.geojson')
}

