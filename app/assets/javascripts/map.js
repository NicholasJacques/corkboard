


//this makes the radius circle
// Create marker
var marker = new google.maps.Marker({
  map: map,
  position: new google.maps.LatLng(53, -2.5),  // need to make this changable per zipcode input from user
  title: 'Some location'
});

// Add circle overlay and bind to marker
var circle = new google.maps.Circle({
  map: map,
  radius: 16093,    // 10 miles in metres -- need to make this changable per input from userd
  fillColor: '#AA0000'
});
circle.bindTo('center', marker, 'position');
