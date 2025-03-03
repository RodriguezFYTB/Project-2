function initMap() {
    // Create a map centered around IIT
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 41.8369, lng: -87.6131 },  // IIT Coordinates
        zoom: 16  // Set zoom to focus on IIT
    });

    // Create a marker at IIT's location
    var marker = new google.maps.Marker({
        position: { lat: 41.8369, lng: -87.6131 },  // IIT Coordinates
        map: map,
        title: 'Illinois Institute of Technology'
    });

    // Info window on marker click
    var infowindow = new google.maps.InfoWindow({
        content: '<div style="font-weight: bold; color: #000;">Illinois Institute of Technology</div>'
    });

    // Open info window when map is initialized (before any click)
    infowindow.open(map, marker);

    // Adding custom map styles
    var styledMapType = new google.maps.StyledMapType([
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#212121"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }
    ]);

    // Apply custom map styles
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
}
