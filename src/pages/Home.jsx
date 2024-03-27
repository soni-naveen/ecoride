import React, { useEffect, useRef, useState } from "react";
import Banner from "../assets/Banner.png";
import Button from "@mui/material/Button";
import Card from "../components/Card.jsx";
import AccordionUsage from "../components/Faq.jsx";
import Stickingcards from "../components/Stickingcards.jsx";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { ReactLeafletRoutingMachine } from "react-leaflet-routing-machine";
import "leaflet/dist/leaflet.css";

const Home = () => {
  const mapRef = useRef(null);
  const [startPosition, setStartPosition] = useState([33.539, 75.267]); // Default start position
  const [endPosition, setEndPosition] = useState([30.362, 76.4988]); // Default end position
  // const handleViewMap = () => {
  //   var newMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
  //   L.Routing.control({
  //     waypoints: [
  //       L.latLng(28.238, 83.9956),
  //       L.latLng(e.latlng.lat, e.latlng.lng),
  //     ],
  //   })
  //     .on("routesfound", function (e) {
  //       var routes = e.routes;
  //       console.log(routes);

  //       e.routes[0].coordinates.forEach(function (coord, index) {
  //         setTimeout(function () {
  //           marker.setLatLng([coord.lat, coord.lng]);
  //         }, 100 * index);
  //       });
  //     })
  //     .addTo(map);
  // };

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current.leafletElement;

      // Define custom icon for markers
      const startIcon = L.icon({
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      });

      const endIcon = L.icon({
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      });

      // Add markers to the map
      const startMarker = L.marker(startPosition, { icon: startIcon });
      const endMarker = L.marker(endPosition, { icon: endIcon });

      startMarker.addTo(map);
      endMarker.addTo(map);

      // Add a polyline to show the route

      const polyline = L.polyline([startPosition, endPosition], {
        color: "blue",
      }).addTo(map);

      // Fit the map bounds to show all markers and the route
      map.fitBounds(polyline.getBounds());
    }
  }, [startPosition, endPosition]);

  return (
    <>
      {/*-------- Banner and title ---------  */}
      <div className="h-[532px]">
        <img
          src={Banner}
          alt="Sharing rides building connections"
          className="w-screen h-auto m-auto"
        />
        <div className="text-7xl font-bold text-dark-color leading-snug w-1/3 relative top-[-370px] left-36">
          <div className="">Sharing rides, building connections</div>
        </div>
      </div>

      {/*--------- Find ride and MAP section ------  */}
      <div className="mapSection py-5 w-full flex justify-around items-start">
        <div className="left">
          <p className="text-dark-color ml-3 text-lg mb-3">
            Request a ride and go
          </p>
          <div className="w-[400px] h-[420px] flex flex-col items-center p-14 rounded-2xl bg-dark-color">
            <form
              action=""
              id="form"
              className="locations text-center flex flex-col gap-10"
            >
              <input
                type="text"
                placeholder="Starting location"
                // onChange={(e) => {
                //   const [lat, lng] = e.target.value.split(",").map(parseFloat);
                //   setStartPosition([lat, lng]);
                // }}
                required
                className=" w-[300px] px-3 py-3 text-black rounded-md outline-none text-sm"
              />
              <input
                type="text"
                placeholder="Destination"
                // onChange={(e) => {
                //   const [lat, lng] = e.target.value.split(",").map(parseFloat);
                //   setEndPosition([lat, lng]);
                // }}
                required
                className=" w-[300px] px-3 py-3 text-black rounded-md outline-none text-sm"
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2a6171",
                  border: "1px solid white",
                  marginTop: 2,
                  color: "white",
                  fontWeight: 400,
                  letterSpacing: 1,
                  boxShadow: "none",
                  borderRadius: 1,
                  textTransform: "none",
                  paddingY: 0.5,
                  fontSize: 14,
                  "&:hover": {
                    backgroundColor: "#07b2a4",
                    color: "white",
                    border: "1px solid #07b2a4",
                  },
                }}
                className="w-[45%] place-self-center font-medium rounded-md"
              >
                View on map
              </Button>
            </form>
          </div>
        </div>
        <div className="right border-2 border-medium-color w-[700px] h-[505px] mb-14 bg-light-color rounded-md z-0">
          <MapContainer
            center={[30.1471, 77.3412]}
            zoom={5}
            style={{ height: "500px", borderRadius: 8 }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              defer="true"
            />
            <Marker position={startPosition}>
              <Popup>Start</Popup>
            </Marker>
            <Marker position={endPosition}>
              <Popup>End</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {/*---------- Specifications banner ---------*/}
      <div className="belowBanner h-[170px] w-full bg-dark-color flex justify-around items-center text-white">
        <div className="left flex flex-col items-center">
          <h1 className="text-5xl font-bold">150+</h1>
          <p>Daily Users</p>
        </div>
        <div className="middle flex flex-col items-center">
          <h1 className="text-5xl font-bold">24/7</h1>
          <p>Customer Support</p>
        </div>
        <div className="right flex flex-col items-center">
          <h1 className="text-5xl font-roboto font-bold">500+</h1>
          <p>Verified Drivers</p>
        </div>
      </div>

      {/*--------- 3 cards - why stick with us -------*/}
      <div className="stickWithUs h-auto w-full p-20 mt-10 mb-16">
        <div className="inner flex flex-col justify-center gap-28">
          <div>
            <h1 className="ml-10 text-5xl font-semibold text-dark-color">
              People stick with us because
            </h1>
          </div>

          <div className="cards flex gap-10 justify-evenly items-center">
            <Stickingcards
              icon={<CheckCircleOutlineIcon fontSize="large" />}
              title="Trust who you travel with"
              content="We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you're travelling with and can book your ride at ease on our secure platform."
            />
            <Stickingcards
              icon={<CurrencyRupeeIcon fontSize="large" />}
              title="Fair fares"
              content="We are here to prove that people can always come to an agreement. Despite traffic or bad weather, the price for a ride remains fair."
            />
            <Stickingcards
              icon={<RocketLaunchIcon fontSize="large" />}
              title="Scroll, click, tap and go!"
              content="Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes."
            />
          </div>
        </div>
      </div>

      {/*-------------- FAQ ------------- */}
      <div className="faqs w-full h-auto bg-dark-color flex flex-col justify-evenly items-center gap-20">
        <div className="heading text-white text-5xl font-semibold mt-16">
          FAQ's
        </div>
        <div className="list mb-16">
          <AccordionUsage />
        </div>
      </div>

      {/*----------- Our service feedback ----------*/}
      <div className="feedback w-full h-[600px] bg-light-color m-auto flex flex-col justify-evenly items-center">
        <div className="heading text-5xl font-semibold mt-10">
          <h1 className="text-dark-color">Our Service Feedback</h1>
        </div>
        <div className="w-full">
          <Card />
        </div>
      </div>

      {/*----------- Get started today --------- */}
      <div className="abovefooter h-72 w-full">
        <div className="heading m-16 pt-5 pl-16">
          <h1 className="text-dark-color text-5xl font-bold">
            Get started today!
          </h1>
        </div>
        <div className="buttons flex flex-row justify-center gap-14">
          <Button
            variant="outlined"
            style={{
              width: "200px",
              height: "50px",
              color: "#07b2a4",
              borderColor: "#07b2a4",
              borderRadius: "30px",
              fontSize: "18px",
              textTransform: "none",
            }}
          >
            Find a Ride
          </Button>
          <Button
            varient="contained"
            style={{
              width: "200px",
              height: "50px",
              backgroundColor: "#07b2a4",
              color: "white",
              borderRadius: "30px",
              fontSize: "18px",
              textTransform: "none",
            }}
          >
            Offer a Ride
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
