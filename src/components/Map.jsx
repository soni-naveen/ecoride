import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-control-geocoder";

const Map = () => {
  useEffect(() => {
    // Initialize map
    const mymap = L.map("mapid").setView([29.1471, 79.3412], 5);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(mymap);

    // Create routing control
    const control = L.Routing.control({
      waypoints: [L.latLng(30.516, 76.659), L.latLng(30.7333, 76.7794)],
      router: new L.Routing.osrmv1({
        language: "en",
        profile: "car",
      }),
      geocoder: L.Control.Geocoder.nominatim({}),
    }).addTo(mymap);

    // Clean up function
    return () => {
      mymap.remove();
    };
  }, []);

  return <div id="mapid" style={{ height: "600px", width: "800px" }}></div>;
};

export default Map;

// Leaflet is an open-source JavaScript library for creating interactive maps. It's designed to be lightweight, simple, and flexible, making it easy to integrate maps into websites or web applications. Leaflet provides a range of features for displaying various map layers (such as tile layers, markers, polygons, etc.) and supports interactions like zooming, panning, and event handling.

// OpenStreetMap (OSM) is a collaborative project that creates a free editable map of the world. It's built by a community of mappers who contribute and maintain data about roads, trails, cafés, railway stations, and much more, all over the globe. OSM provides map data that can be freely used in various applications, including Leaflet maps. By using Leaflet with OpenStreetMap, developers can create customized, interactive maps using OSM's rich and detailed geographic data.
