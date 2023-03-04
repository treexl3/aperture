//! Adding Map
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
function init() {
   var mapOptions = {
      zoom: 16.48,

      center: new google.maps.LatLng(55.9432777, -3.2058572),
   };

   var mapElement = document.getElementById('map');

   var map = new google.maps.Map(mapElement, mapOptions);
};