(function() {
  /* __markers will hold a reference to all markers currently shown
     on the map, as GMaps4Rails won't do it for you.
     This won't pollute the global window object because we're nested
     in a "self-executed" anonymous function */
  var __markers;

  function updateMarkers(map, markersData)
  {
    // Remove current markers
    map.removeMarkers(__markers);

    // Add each marker to the map according to received data
    __markers = _.map(markersData, function(markerJSON) {
      marker = map.addMarker(markerJSON);
      map.getMap().setZoom(4); // Not sure this should be in this iterator!

      _.extend(marker, markerJSON);

      marker.infowindow = new google.maps.InfoWindow({
        content: marker.infowindow
      });

      return marker;
    });

    map.bounds.extendWith(__markers);
    map.fitMapToBounds();
  };

  // "Publish" our method on window. You should probably have your own namespace
  window.updateMarkers = updateMarkers;
})();


// function myMap() {
// var mapOptions = {
//     center: new google.maps.LatLng(51.5, -0.12),
//     zoom: 10,
//     mapTypeId: google.maps.MapTypeId.HYBRID
// }
// var map = new google.maps.Map(document.getElementById("map"), mapOptions);
// }
//
// "https://maps.googleapis.com/maps/api/js?key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU&callback=myMap"



//this makes the radius circle
// Create marker
// var marker = new google.maps.Marker({
//   map: map,
//   position: new google.maps.LatLng(53, -2.5),  // need to make this changable per zipcode input from user
//   title: 'Some location'
// });

// Add circle overlay and bind to marker
// var circle = new google.maps.Circle({
//   map: map,
//   radius: 16093,    // 10 miles in metres -- need to make this changable per input from userd
//   fillColor: '#AA0000'
// });
// circle.bindTo('center', marker, 'position');
