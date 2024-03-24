import React from "react";
import Banner from "../assets/Banner.png";
import Button from "@mui/material/Button";
import Card from "../components/Card.jsx";
import AccordionUsage from "../components/Faq.jsx";
import Stickingcards from "../components/Stickingcards.jsx";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const Home = () => {
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

      {/*--------- Find ride and map section ------  */}
      <div className="mapSection py-5 w-full flex justify-around items-start">
        <div className="left">
          <p className="text-dark-color ml-3 text-lg mb-3">
            Request a ride and go
          </p>
          <div className="w-[400px] h-[420px] rounded-2xl bg-dark-color"></div>
        </div>
        <div className="right w-[700px] h-[500px] mb-14 bg-light-color rounded-md"></div>
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
        <div className="buttons flex flex-row justify-center gap-16">
          <Button
            variant="outlined"
            style={{
              width: "220px",
              height: "60px",
              color: "#07b2a4",
              borderColor: "#07b2a4",
              borderRadius: "30px",
              fontSize: "20px",
              textTransform: "none",
            }}
          >
            Find a Ride
          </Button>
          <Button
            varient="contained"
            style={{
              width: "220px",
              height: "60px",
              backgroundColor: "#07b2a4",
              color: "white",
              borderRadius: "30px",
              fontSize: "20px",
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
