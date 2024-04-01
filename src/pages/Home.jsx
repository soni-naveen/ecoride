import React from "react";
import Banner from "../assets/Banner.png";
import Button from "@mui/material/Button";
import Card from "../components/Card.jsx";
import AccordionUsage from "../components/Faq.jsx";
import faqLogo from "../assets/FAQs.png";
import Stickingcards from "../components/Stickingcards.jsx";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import VerifiedIcon from "@mui/icons-material/Verified";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PeopleIcon from "@mui/icons-material/People";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Map from "../components/Map.jsx";
import Calender from "../components/Calender.jsx";
import Numberinput from "../components/Numberinput.jsx";

const Home = () => {
  return (
    <>
      {/*-------- Banner and title ---------  */}
      <div className="image h-[650px]">
        <img
          src={Banner}
          alt="Sharing rides building connections"
          className="w-screen"
        />
        <div className="text-7xl font-bold text-dark-color leading-snug w-1/3 absolute top-[180px] left-32">
          <div className="">Sharing rides, building connections</div>
        </div>
        <div className="text-4xl text-white font-medium bg-[#07b2a480] text-center m-auto leading-[80px]">
          Your pick of rides at low prices
        </div>
      </div>

      {/*--------- Find ride and MAP section ------  */}
      <div className="mapSection h-[700px] flex justify-around items-start">
        <div className="left">
          <p className="text-dark-color ml-3 mb-3 text-xl">
            Request a ride and go
          </p>
          <div className="w-[28rem] h-[29rem] relative flex flex-col items-center p-16 rounded-2xl bg-dark-color">
            <form
              action=""
              id="form"
              className="locations text-center flex flex-col gap-10"
            >
              <input
                id="start"
                type="text"
                placeholder="Starting location"
                required
                className=" w-[22rem] pl-8 pr-5 py-3 text-black rounded-md outline-none text-lg"
              />
              <input
                id="end"
                type="text"
                placeholder="Destination"
                required
                className=" w-[22rem] pl-8 pr-5 py-3 text-black rounded-md outline-none text-lg"
              />
              <div className="connectinglines flex flex-col items-center absolute top-[5.4rem] left-[3.6rem]">
                <div className="bg-medium-color h-2.5 w-2.5 rounded-lg"></div>
                <div className="bg-medium-color h-[5.2rem] w-0.5"></div>
                <div className="bg-medium-color h-2.5 w-2.5 rounded-lg"></div>
              </div>

              <div className="flex justify-around items-center">
                <Calender />
                <Numberinput />
              </div>
              <div className="flex justify-around">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#07b2a4",
                    marginTop: 2,
                    color: "white",
                    fontWeight: 600,
                    letterSpacing: 1,
                    boxShadow: "none",
                    borderRadius: 10,
                    textTransform: "none",
                    paddingY: 1.5,
                    fontSize: 17,
                    "&:hover": {
                      backgroundColor: "#07b2a4",
                      color: "white",
                    },
                  }}
                  className="w-[45%] place-self-center font-medium rounded-md"
                >
                  SEE RIDES
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#2a6171",
                    border: "1px solid white",
                    marginTop: 2,
                    color: "white",
                    fontWeight: 400,
                    letterSpacing: 0,
                    boxShadow: "none",
                    borderRadius: 10,
                    textTransform: "none",
                    paddingY: 1.5,
                    fontSize: 16,
                    "&:hover": {
                      backgroundColor: "#2a6171",
                      color: "white",
                      border: "1px solid white",
                      boxShadow: "none",
                    },
                  }}
                  className="w-[45%] place-self-center font-medium rounded-md"
                >
                  View full map
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="z-0">
          <p className="text-dark-color mb-3 text-xl">
            ► Search on map to see full route
          </p>
          <div className="right w-[800px] h-[550px] bg-light-color rounded-md">
            <Map />
          </div>
        </div>
      </div>

      {/*---------- Specifications banner ---------*/}
      <div className="belowBanner h-[170px] w-full bg-dark-color flex justify-around items-center text-white">
        <div className="left flex flex-row gap-7 items-center justify-center">
          <PeopleIcon sx={{ fontSize: 60 }} />
          <div>
            <h1 className="text-4xl font-semibold">150+</h1>
            <p className="text-sm">Daily Users</p>
          </div>
        </div>
        <div className="middle flex flex-row gap-7 items-center justify-center">
          <SupportAgentIcon sx={{ fontSize: 60 }} />
          <div>
            <h1 className="text-4xl font-semibold">24/7</h1>
            <p className="text-sm">Customer Support</p>
          </div>
        </div>
        <div className="right flex flex-row gap-7 items-center justify-center">
          <VerifiedIcon sx={{ fontSize: 60 }} />
          <div>
            <h1 className="text-4xl font-semibold">500+</h1>
            <p className="text-sm">Verified Drivers</p>
          </div>
        </div>
      </div>

      {/*--------- 3 cards - why stick with us -------*/}
      <div className="stickWithUs h-auto w-full p-20 mt-5 mb-14">
        <div className="inner flex flex-col justify-center gap-28">
          <div>
            <h1 className="ml-10 text-5xl font-semibold text-dark-color">
              People stick with us because
            </h1>
          </div>

          <div className="cards flex gap-10 justify-evenly items-center">
            <Stickingcards
              icon={<VerifiedUserIcon fontSize="large" />}
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
      <div className="faqs bg-dark-color flex items-center ">
        <div className="left w-[100%] mx-20">
          <img src={faqLogo} alt="FAQ's" />
        </div>
        <div className="right flex flex-col items-center gap-10">
          <div className="heading text-white text-5xl font-semibold mt-16">
            FAQ's
          </div>
          <div className="faqs mb-16 flex justify-center">
            <AccordionUsage />
          </div>
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
