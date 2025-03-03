function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 41.8369, lng: -87.6131 },
        zoom: 16 
    });

    var marker = new google.maps.Marker({
        position: { lat: 41.8369, lng: -87.6131 },
        map: map,
        title: 'Illinois Institute of Technology'
    });

    var infowindow = new google.maps.InfoWindow({
        content: '<div style="font-weight: bold; color: #000;">Here we are!</div>'
    });

    infowindow.open(map, marker);

    var styledMapType = new google.maps.StyledMapType([
        {
            "elementType": "geometry",
            "stylers": [
                {"color": "#212121"}
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {"visibility": "off"}
            ]
        }
    ]);

}
