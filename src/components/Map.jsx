import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-control-geocoder";
import "leaflet-contextmenu";
import "leaflet-contextmenu/dist/leaflet.contextmenu.min.css";

const Map = () => {
  useEffect(() => {
    const mymap = L.map("mapid", { scrollWheelZoom: false }).setView(
      [29.1471, 79.3412],
      6
    );
    // Initialize map
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
    }).addTo(mymap);

    // Get user's current location
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Set current location as the initial waypoint
          const currentLocation = L.latLng(latitude, longitude);
          mymap.setView(currentLocation, 12);

          // Create routing control 
          L.Routing.control({
            waypoints: [currentLocation], // Set current location as the waypoint
            router: new L.Routing.osrmv1({
              language: "en",
              profile: "car",
            }),
            collapsible: true,
            fitSelectedRoutes: true,
            reverseWaypoints: true,
            geocoder: L.Control.Geocoder.nominatim({}),
          }).addTo(mymap);
        },
        (error) => {
          console.error("Error getting user's location:", error);
          L.Routing.control({
            collapsible: true,
            fitSelectedRoutes: true,
            reverseWaypoints: true,
            geocoder: L.Control.Geocoder.nominatim({}),
          }).addTo(mymap);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }

    // Clean up function
    return () => {
      mymap.remove();
    };
  }, []);

  return <div id="mapid" className="h-[550px] w-[800px] 2xl:w-[700px]"></div>;
};

export default Map;
