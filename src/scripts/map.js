window.createMap = function() {
  createMapCivil();
  createMapFiesta();
};

function createMapCivil() {
  var map = createMapFor("mapcivil", {
    lat: -34.5691349,
    lng: -58.4181544
  });

  var restaurant = {
    lat: -34.5712206,
    lng: -58.4224825
  };

  var markerOptions = {
    map: map,
    position: restaurant
  };

  markerOptions.icon = {
    path:
      "M11 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13 0 0 7-7.7 7-13 0-3.9-3.1-7-7-7Zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5 0-1.4 1.1-2.5 2.5-2.5 1.4 0 2.5 1.1 2.5 2.5 0 1.4-1.1 2.5-2.5 2.5Z",
    scale: 1.63,
    anchor: new google.maps.Point(11, 22),
    fillOpacity: 1,
    fillColor: "#4c4c4c",
    strokeOpacity: 0
  };

  var marker = new google.maps.Marker(markerOptions);

  marker.addListener("click", function() {
    window.open(
      "https://www.google.com/maps/place/Williamsburg/@-34.5712206,-58.4224825,21z/data=!4m8!1m2!3m1!2sMuseo+S%C3%ADvori!3m4!1s0x95bcb56ac5f20c0d:0x7d30c057375354d1!8m2!3d-34.5712089!4d-58.4223533"
    );
  });
}

function createMapFiesta() {
  var map = createMapFor("mapfiesta", {
    lat: -34.63108256096,
    lng: -58.76948374
  });

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

  var map = new google.maps.Map(document.getElementById(id), opts);
  var markerOptions = {
    map: map,
    position: center
  };

  markerOptions.icon = {
    path:
      "M11 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13 0 0 7-7.7 7-13 0-3.9-3.1-7-7-7Zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5 0-1.4 1.1-2.5 2.5-2.5 1.4 0 2.5 1.1 2.5 2.5 0 1.4-1.1 2.5-2.5 2.5Z",
    scale: 1.63,
    anchor: new google.maps.Point(11, 22),
    fillOpacity: 1,
    fillColor: "#4c4c4c",
    strokeOpacity: 0
  };

  var marker = new google.maps.Marker(markerOptions);

  marker.addListener("click", function() {
    document.getElementById(id + "-hidden-link").click();
  });

  return map;
}
