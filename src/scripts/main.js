"use strict";

window.createMap = function() {
  var opts = {
    center: {
      lat: -34.6310825609,
      lng: -58.76948374
    },
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
    mapTypeId: "terrain"
  };

  opts.clickableIcons = true;
  opts.disableDoubleClickZoom = false;
  opts.draggable = true;
  opts.keyboardShortcuts = true;
  opts.scrollwheel = true;

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

  setControlOptions("rotate", false, "DEFAULT", "", null);

  setControlOptions("scale", false, "", "", null);

  setControlOptions("streetView", false, "DEFAULT", "", null);

  setControlOptions("zoom", true, "DEFAULT", "", null);

  var map = new google.maps.Map(document.getElementById("map"), opts);

  (function() {
    var markerOptions = {
      map: map,
      position: {
        lat: -34.63108256096,
        lng: -58.76948374
      }
    };

    markerOptions.icon = {
      path:
        "M11 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13 0 0 7-7.7 7-13 0-3.9-3.1-7-7-7Zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5 0-1.4 1.1-2.5 2.5-2.5 1.4 0 2.5 1.1 2.5 2.5 0 1.4-1.1 2.5-2.5 2.5Z",
      scale: 1.6363636363636363636363636364,
      anchor: new google.maps.Point(11, 22),
      fillOpacity: 1,
      fillColor: "#4c4c4c",
      strokeOpacity: 0
    };

    var marker = new google.maps.Marker(markerOptions);

    marker.addListener("click", function() {
      document.getElementById("hidden-map-link").click();
    });
  })();
};
