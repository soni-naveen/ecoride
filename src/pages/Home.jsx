import React from "react";
import Banner from "../assets/Banner.png";
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
      <div className="max-w-[1600px] m-auto relative">
        {/*------------ Banner and title ------------*/}
        <div className="image h-[700px] sm2xl:h-[390px] smxl:h-[380px] sm:h-[480px] md1:h-[600px] lg:h-[650px] xl:h-[630px]">
          <img
            src={Banner}
            alt="Sharing rides building connections"
            className="w-screen h-[550px] object-cover object-center smxl:h-80 sm:h-[400px] md1:h-[30rem] lg:h-[32rem]"
          />
          <div className="text-7xl font-bold text-dark-color leading-snug w-1/3 absolute top-[160px] left-[100px] smxl:top-[70px] smxl:left-[25px] smxl:text-4xl smxl:leading-snug sm:top-[80px] sm:left-[40px] sm:text-5xl sm:leading-snug md1:leading-snug md1:text-5xl md1:top-[150px] md1:left-[60px] md1:w-1/3 lg:text-6xl lg:leading-snug lg:top-[120px] lg:left-[70px] lg:w-1/3 xl:leading-snug xl:top-[160px] xl:left-[80px] xl:w-[50%] 2xl:w-[50%] ">
            Sharing rides, building connections
          </div>
          <div className="text-4xl text-white font-medium bg-[#07b2a480] text-center m-auto leading-[80px] sm:text-2xl smxl:text-lg smxl:font-normal smxl:leading-[45px] sm:leading-[60px] sm:font-medium sm:text-2xl md1:text-3xl md1:leading-[70px]">
            Your pick of rides at low prices
          </div>
        </div>

        {/*---------- Search and map section --------*/}
        <div className="mapSection h-[700px] flex flex-row justify-around items-start smxl:h-[600px]
        lg:h-[600px] xl:flex-col xl:h-[1300px] xl:items-center xl:justify-evenly">
          <div className="left">
            <p className="text-dark-color ml-3 mb-3 text-xl smxl:text-[1rem] smxl:ml-3">
              Request a ride and go
            </p>
            <div className="w-[28rem] h-[29rem] relative flex flex-col items-center p-16 rounded-2xl bg-dark-color sm2xl:w-[17rem] smxl:w-[20rem] sm2xl:p-10 sm2xl:h-[27rem] smxl:p-10">
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
                  className="w-[22rem] pl-8 pr-5 py-3 text-black rounded-md outline-none text-lg 
                  sm2xl:w-[14rem] sm2xl:py-2.5 sm2xl:text-sm smxl:w-[16rem] smxl:text-md smxl:py-2"
                />
                <input
                  id="end"
                  type="text"
                  placeholder="Destination"
                  required
                  className="w-[22rem] pl-8 pr-5 py-3 text-black rounded-md outline-none text-lg sm2xl:py-2.5 sm2xl:text-sm sm2xl:w-[14rem] smxl:w-[16rem] smxl:text-md smxl:py-2"
                />
                <div className="connectinglines flex flex-col items-center absolute top-[5.4rem] left-[3.7rem] sm2xl:top-[3.5rem] sm2xl:left-[2.2rem] smxl:left-[2.6rem] smxl:top-[3.7rem]">
                  <div className="bg-medium-color h-2.5 w-2.5 rounded-lg"></div>
                  <div className="bg-medium-color h-[5.2rem] w-0.5 sm2xl:h-[4.5rem] smxl:h-[4.6rem]"></div>
                  <div className="bg-medium-color h-2.5 w-2.5 rounded-lg"></div>
                </div>
                <div className="flex justify-around items-center smxl:flex-col smxl:gap-8">
                  <Calender />
                  <Numberinput />
                </div>
                <div className="mt-4 flex justify-around sm2xl:mt-0 smxl:mt-1 smxl:gap-4">
                  <button className="bg-medium-color py-3 text-white tracking-[1px] w-[45%] font-medium rounded-full sm2xl:text-xs sm2xl:py-2 smxl:text-sm smxl:py-3">
                    SEE RIDES
                  </button>
                  <div className="bg-dark-color border py-3 text-white tracking-[1px] w-[45%] font-light rounded-full hover:cursor-pointer sm2xl:text-xs sm2xl:tracking-normal sm2xl:py-2 smxl:text-sm smxl:py-3">
                    View <span className="smxl:hidden">full</span> map
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="right z-0">
            <p className="text-dark-color mb-3 text-xl lg:hidden">
              ► Search on map to see full route
            </p>
            <div className="right w-[800px] h-[550px] bg-light-color rounded-md lg:hidden">
              <Map />
            </div>
          </div>
        </div>

        {/*----------- Specifications banner ---------*/}
        <div className="belowBanner h-[170px] w-full bg-dark-color flex justify-around items-center text-white">
          <div className="left flex flex-row gap-7 md:flex-col md:items-start md:gap-0 ">
            <PeopleIcon sx={{ fontSize: 60 }} />
            <div>
              <h1 className="text-4xl font-semibold lg:text-3xl sm:text-2xl">
                150+
              </h1>
              <p className="text-sm">Daily Users</p>
            </div>
          </div>
          <div className="middle flex flex-row gap-7 md:flex-col md:items-start md:gap-0">
            <SupportAgentIcon sx={{ fontSize: 60 }} />
            <div>
              <h1 className="text-4xl font-semibold lg:text-3xl sm:text-2xl">
                24/7
              </h1>
              <p className="text-sm">Customer Support</p>
            </div>
          </div>
          <div className="right flex flex-row gap-7  md:flex-col md:items-start md:gap-0">
            <VerifiedIcon sx={{ fontSize: 60 }} />
            <div>
              <h1 className="text-4xl font-semibold lg:text-3xl sm:text-2xl">
                500+
              </h1>
              <p className="text-sm">Verified Drivers</p>
            </div>
          </div>
        </div>

        {/*---------- 3 cards - why stick with us -------*/}
        <div className="stickWithUs h-auto w-full p-20 mt-5 mb-14">
          <div className="inner flex flex-col justify-center gap-28">
            <div>
              <h1 className="ml-10 text-5xl font-semibold text-dark-color">
                People stick with us because
              </h1>
            </div>

            <div className="cards flex gap-10 justify-evenly items-center h-auto lg:flex-col">
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

        {/*-------------- FAQ section ------------- */}
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
        <div className="abovefooter h-auto w-full mb-10">
          <div className="heading m-16 pt-5 pl-16">
            <h1 className="text-dark-color text-5xl font-bold md:text-4xl">
              Get started today!
            </h1>
          </div>
          <div className="buttons flex flex-row justify-center gap-14 sm:flex-col sm:justify-center items-center sm:gap-6">
            <button className="w-52 border border-medium-color p-3 rounded-full transition-all text-medium-color text-lg active:bg-light-color active:duration-50">
              Find a Ride
            </button>
            <button className="w-52 border bg-medium-color transition-all text-white border-medium-color p-3 rounded-full text-lg active:bg-[#05a195] active:duration-50 ">
              Offer a Ride
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
