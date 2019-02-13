window.createMap = function() {
  createMapCivil();
  createMapFiesta();
};

function createMapCivil() {
  var sivori = {
    lat: -34.5691349,
    lng: -58.4181544
  };

  var restaurant = {
    lat: -34.5712206,
    lng: -58.4224825
  };

  var map = createMapFor("mapcivil", {
    lat: -34.5696793,
    lng: -58.4209346
  });

  var sivoriMarkerOptions = {
    map: map,
    label: "Museo Sivori",
    position: sivori
  };

  sivoriMarkerOptions.icon = {
    path:
      "M10 13.9c-2.8-0.5-5-2.9-5-5.9 0-3.3 2.7-6 6-6 3.3 0 6 2.7 6 6 0 3-2.2 5.4-5 5.9l0 8.1 -2 0 0-8.1",
    scale: 1.63,
    anchor: new google.maps.Point(11, 22),
    fillOpacity: 1,
    fillColor: "#4c4c4c",
    strokeOpacity: 0
  };

  var sivoriMarker = new google.maps.Marker(sivoriMarkerOptions);
  sivoriMarker.addListener("click", function() {
    window.open(
      "https://www.google.com/maps/place/Museo+S%C3%ADvori/@-34.5691316,-58.4201594,17z/data=!4m8!1m2!3m1!2sMuseo+S%C3%ADvori!3m4!1s0x0:0x4808624945a2ee39!8m2!3d-34.5691317!4d-58.4179705"
    );
  });

  var restaurantMarkerOptions = {
    map: map,
    label: "Williamsburg",
    position: restaurant
  };

  restaurantMarkerOptions.icon = {
    path:
      "M10 13.9c-2.8-0.5-5-2.9-5-5.9 0-3.3 2.7-6 6-6 3.3 0 6 2.7 6 6 0 3-2.2 5.4-5 5.9l0 8.1 -2 0 0-8.1",
    scale: 1.63,
    anchor: new google.maps.Point(11, 22),
    fillOpacity: 1,
    fillColor: "#4c4c4c",
    strokeOpacity: 0
  };

  var restaurantMarker = new google.maps.Marker(restaurantMarkerOptions);
  restaurantMarker.addListener("click", function() {
    window.open(
      "https://www.google.com/maps/place/Williamsburg/@-34.5712206,-58.4224825,21z/data=!4m8!1m2!3m1!2sMuseo+S%C3%ADvori!3m4!1s0x95bcb56ac5f20c0d:0x7d30c057375354d1!8m2!3d-34.5712089!4d-58.4223533"
    );
  });
}

function createMapFiesta() {
  var quinta = {
    lat: -34.631034,
    lng: -58.769425
  };
  var map = createMapFor("mapfiesta", quinta);

  var path = [
    { lat: -34.634367, lng: -58.762285 },
    { lat: -34.634137, lng: -58.763465 },
    { lat: -34.63347, lng: -58.764667 },
    { lat: -34.633396, lng: -58.764967 },
    { lat: -34.633475, lng: -58.765439 },
    { lat: -34.629466, lng: -58.769378 },
    { lat: -34.630097, lng: -58.770334 },
    { lat: -34.631034, lng: -58.769425 }
  ];

  var arrivePath = new google.maps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: "#333333",
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  arrivePath.setMap(map);

  // Marcador
  var markerOptions = {
    map: map,
    position: quinta
  };

  markerOptions.icon = {
    path:
      "M10 13.9c-2.8-0.5-5-2.9-5-5.9 0-3.3 2.7-6 6-6 3.3 0 6 2.7 6 6 0 3-2.2 5.4-5 5.9l0 8.1 -2 0 0-8.1",
    scale: 1.63,
    fillOpacity: 1,
    anchor: new google.maps.Point(11, 22),
    fillColor: "#4c4c4c",
    strokeOpacity: 0
  };

  var marker = new google.maps.Marker(markerOptions);
  marker.addListener("click", function() {
    window.open(
      "https://www.google.com/maps/place/34%C2%B037'51.9%22S+58%C2%B046'10.1%22W/@-34.6310782,-58.7716724,17z"
    );
  });
}

function createMapFor(id, center) {
  var opts = {
    center: center,
    zoom: 16,
    styles: [
      {
        stylers: [{ visibility: "on" }, { saturation: -100 }, { gamma: 0.54 }]
      },
      {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "water",
        stylers: [{ color: "#4d4946" }]
      },
      {
        featureType: "poi",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "poi",
        elementType: "labels.text",
        stylers: [{ visibility: "simplified" }]
      },
      {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [{ color: "#ffffff" }]
      },
      {
        featureType: "road.local",
        elementType: "labels.text",
        stylers: [{ visibility: "simplified" }]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#ffffff" }]
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{ gamma: 0.48 }]
      },
      {
        featureType: "transit.station",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ gamma: 7.18 }]
      }
    ],
    maxZoom: 20,
    minZoom: 0,
    mapTypeId: "terrain",
    clickableIcons: true,
    disableDoubleClickZoom: false,
    keyboardShortcuts: true
  };

  var setControlOptions = function(key, enabled, position, style, mapTypeIds) {
    opts[key + "Control"] = enabled;
    opts[key + "ControlOptions"] = {
      position: google.maps.ControlPosition[position],
      style: google.maps.MapTypeControlStyle[style],
      mapTypeIds: mapTypeIds
    };
  };
  setControlOptions("fullscreen", false, "DEFAULT", "", null);
  setControlOptions("mapType", false, "DEFAULT", "DEFAULT", [
    "roadmap",
    "satellite",
    "terrain"
  ]);
  setControlOptions("streetView", false, "DEFAULT", "", null);

  // setControlOptions("rotate", false, "DEFAULT", "", null);
  // setControlOptions("scale", false, "", "", null);
  // setControlOptions("zoom", true, "DEFAULT", "", null);

  return new google.maps.Map(document.getElementById(id), opts);
}
