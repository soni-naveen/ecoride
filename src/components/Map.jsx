import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-control-geocoder";
import "leaflet-contextmenu";
import "leaflet-contextmenu/dist/leaflet.contextmenu.min.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

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

    // Create routing control
    L.Routing.control({
      waypoints: [],
      router: new L.Routing.osrmv1({
        language: "en",
        profile: "car",
      }),
      collapsible: true,
      fitSelectedRoutes: true,
      reverseWaypoints: true,
      geocoder: L.Control.Geocoder.nominatim({}),
    }).addTo(mymap);

    // Clean up function
    return () => {
      mymap.remove();
    };
  }, []);

  return <div id="mapid" className="h-[550px] w-[800px] 2xl:w-[700px]"></div>;
};

export default Map;
