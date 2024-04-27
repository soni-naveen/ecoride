import React from "react";
import Banner from "../assets/Banner.png";
import Slidecard from "../components/Slidecard.jsx";
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
import "animate.css";
import AnimateBU from "../animations/AnimationBU.jsx";
import AnimateLR from "../animations/AnimationLR.jsx";
import Counter from "../animations/Counting.jsx";
import Autocomplete from "../components/Autocomplete.jsx";
import Autocomplete2 from "../components/Autocomplete2.jsx";
import ForumIcon from "@mui/icons-material/Forum";
import { Link } from "react-router-dom";

const Home = () => {
  const handleClickPageTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  return (
    <>
      <div className="max-w-[1800px] m-auto relative">
        {/*------------ Image and title ------------*/}
        <div className="fixed bottom-[20px] right-[20px] z-1 bg-light-color rounded-full color-white p-2">
          <Link to="/helpcenter" onClick={handleClickPageTop}>
            <ForumIcon color="primary" fontSize="large" />
          </Link>
        </div>
        <div className="image h-[700px] sm2xl:h-[390px] smxl:h-[390px] sm:h-[480px] md1:h-[570px] lg:h-[600px] xl:h-[650px]">
          <img
            src={Banner}
            alt="Sharing rides building connections"
            className="w-screen h-[550px] object-cover object-center smxl:h-80 sm:h-[400px] md1:h-[30rem] lg:h-[32rem]"
          />
          <div className="text-7xl font-bold text-dark-color leading-snug w-1/3 absolute top-[160px] left-[100px] smxl:top-[70px] smxl:left-[25px] smxl:text-4xl smxl:leading-snug sm:top-[80px] sm:left-[40px] sm:text-5xl sm:leading-snug md1:leading-snug md1:text-5xl md1:top-[150px] md1:left-[60px] md1:w-1/3 lg:text-6xl lg:leading-snug lg:top-[120px] lg:left-[70px] lg:w-1/3 xl:leading-snug xl:top-[160px] xl:left-[80px] xl:w-[50%] 2xl:w-[50%] animate__animated animate__fadeInDown">
            Sharing rides, building connections
          </div>

          <div className="text-4xl text-white font-medium bg-[#07b2a480] text-center m-auto leading-[80px]  smxl:text-lg smxl:font-normal smxl:leading-[45px] sm:leading-[60px] sm:text-2xl sm:font-medium md1:text-3xl md1:leading-[70px]">
            Your pick of rides at low prices
          </div>
        </div>

        {/*---------- Search and map section --------*/}
        <div
          className="mapSection h-[700px] flex flex-row justify-around items-start md:h-[600px] md1:h-[1300px]
          xl:flex-col xl:h-[1300px] xl:items-center mb-4"
        >
          <div className="left mt-5">
            <p className="text-dark-color ml-3 mb-3 text-xl smxl:text-[1rem] smxl:ml-3">
              Request a ride and go
            </p>
            <div className="w-[28rem] h-[27rem] relative flex flex-col items-center p-14 rounded-2xl bg-dark-color sm2xl:w-[17rem] smxl:w-[20rem] sm2xl:p-10 smxl:h-[27rem] smxl:p-10">
              <form
                action="/"
                id="form"
                className="locations text-center flex flex-col gap-10"
              >
                <Autocomplete id="starting location"></Autocomplete>
                <Autocomplete2 id="destination"></Autocomplete2>

                <div className="connectinglines flex flex-col items-center absolute top-[4.7rem] left-[3.6rem] sm2xl:top-[3.5rem] sm2xl:left-[2.2rem] smxl:left-[2.7rem] smxl:top-[3.5rem]">
                  <div className="bg-medium-color h-2.5 w-2.5 rounded-lg"></div>
                  <div className="bg-medium-color h-[5rem] w-0.5 sm2xl:h-[4.5rem] smxl:h-[4.4rem]"></div>
                  <div className="bg-medium-color h-2.5 w-2.5 rounded-lg"></div>
                </div>
                <div className="flex justify-between mt-4 items-center smxl:flex-col smxl:gap-8 smxl:mt-0">
                  <Calender />
                  <Numberinput />
                </div>
                <div className="mt-4 flex justify-between sm2xl:mt-0 smxl:mt-1">
                  <button className="bg-medium-color active:bg-[#05a195] py-3 text-white tracking-[1px] w-[45%] font-medium rounded-full sm2xl:text-xs sm2xl:py-2 smxl:text-sm smxl:py-3">
                    SEE RIDES
                  </button>
                  <a
                    href="../fullmap.html"
                    target="_blank"
                    className="bg-dark-color border py-3 text-white tracking-[1px] w-[45%] font-light rounded-full hover:cursor-pointer sm2xl:text-xs sm2xl:tracking-normal sm2xl:py-2 smxl:text-sm smxl:py-3"
                  >
                    View <span className="smxl:hidden">full</span> map
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="right z-0">
            <p className=" reveallr text-dark-color mb-3 text-xl md:hidden">
              <AnimateLR />► Search on map to see full route
            </p>
            <div className="right w-[800px] h-[550px] bg-light-color rounded-md md:hidden 2xl:w-[700px]">
              <Map />
            </div>
          </div>
        </div>

        {/*----------- Specifications banner ---------*/}
        <div className="belowBanner h-[150px] w-full bg-dark-color flex justify-around gap-5 items-center text-white">
          <div className="left flex flex-row items-center gap-6 md:flex-col md:gap-1 ">
            <PeopleIcon sx={{ fontSize: { xs: 35, sm: 50 } }} />
            <div>
              <h1 className="text-4xl font-semibold  text-center smxl:text-2xl sm:text-3xl">
                <Counter target={150} />
              </h1>
              <p className="text-sm text-center smxl:text-xs">Daily users</p>
            </div>
          </div>
          <div className="middle flex flex-row items-center gap-6 md:flex-col md:gap-1">
            <SupportAgentIcon sx={{ fontSize: { xs: 35, sm: 50 } }} />
            <div>
              <h1 className="text-4xl font-semibold  text-center smxl:text-2xl sm:text-3xl">
                24/7
              </h1>
              <p className="text-sm text-center smxl:text-xs">
                Customer support
              </p>
            </div>
          </div>
          <div className="right flex flex-row items-center gap-6  md:flex-col md:gap-1">
            <VerifiedIcon sx={{ fontSize: { xs: 35, sm: 50 } }} />
            <div>
              <h1 className="text-4xl font-semibold  text-center smxl:text-2xl sm:text-3xl">
                <Counter target={500} />
              </h1>
              <p className="text-sm text-center smxl:text-xs">
                Verified profiles
              </p>
            </div>
          </div>
        </div>

        {/*---------- 3 cards - why stick with us -------*/}
        <div className="stickWithUs h-auto w-full p-20 mt-5 mb-14 sm:p-10 sm:mb-7 sm:mt-8">
          <div className="inner flex flex-col justify-center gap-28 sm2xl:w-full sm:gap-16 sm:w-4/5 md:gap-20 m-auto">
            <div>
              <h1 className="ml-7 text-5xl font-semibold text-dark-color sm2xl:text-xl sm2xl:leading-[2rem] smxl:text-2xl smxl:leading-[2.5rem] sm:text-3xl sm:leading-[3rem] md1:text-4xl md1:leading-[3.5rem] lg:ml-0 lg:text-center revealbu">
                People stick with us because
                <AnimateBU />
              </h1>
            </div>

            <div className="cards revealbu flex gap-14 justify-evenly items-start h-auto lg:flex-col lg:items-center">
              <Stickingcards
                icon={
                  <VerifiedUserIcon sx={{ fontSize: { xs: 27, sm: 35 } }} />
                }
                title="Trust who you travel with"
                content="We check reviews, profiles and IDs, so you know who you're travelling with and can book your ride at ease on our secure platform."
              />
              <Stickingcards
                icon={
                  <CurrencyRupeeIcon sx={{ fontSize: { xs: 27, sm: 35 } }} />
                }
                title="Fair fares"
                content="We are here to prove that people can always come to an agreement. Despite traffic or bad weather, the price for a ride remains fair."
              />
              <Stickingcards
                icon={
                  <RocketLaunchIcon sx={{ fontSize: { xs: 27, sm: 35 } }} />
                }
                title="Scroll, click, tap and go!"
                content="Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes."
              />
            </div>
          </div>
        </div>

        {/*-------------- FAQ section ------------- */}
        <div className="faqs bg-dark-color flex items-center ">
          <div className="left min-w-[30%] w-[100%] mx-20 lg:hidden">
            <img src={faqLogo} alt="FAQ's" />
          </div>
          <div className="right flex flex-col items-center gap-10">
            <div className="heading text-white text-5xl font-semibold mt-16 sm2xl:text-2xl sm2xl:mt-10 smxl:text-3xl smxl:mt-14 md:text-4xl">
              FAQ's
            </div>
            <div className="revealbu mb-16 flex justify-center">
              <AccordionUsage />
            </div>
          </div>
        </div>

        {/*----------- Our service feedback ----------*/}
        <div className="feedback w-full h-[600px] bg-light-color m-auto flex flex-col justify-evenly items-center smxl:h-[500px] smxl:pb-10 md:justify-center">
          <div className="heading font-semibold mt-14 smxl:mt-10 md:mt-0">
            <h1 className="text-dark-color m-auto text-5xl sm2xl:text-2xl sm2xl:w-2/3 sm2xl:text-center smxl:text-3xl smxl:w-2/3 smxl:leading-normal smxl:text-center md:text-4xl">
              Our Service Feedback
            </h1>
          </div>
          <div className="w-full">
            <Slidecard />
          </div>
        </div>

        {/*----------- Get started today --------- */}
        <div className="abovefooter w-full h-72 px-36 flex flex-col justify-evenly gap-10 sm:gap-4 sm:h-80 lg:px-0 lg:items-center xl:px-28">
          <div className="heading text-start smxl:ml-0">
            <h1 className="text-dark-color font-semibold text-5xl sm2xl:text-2xl smxl:text-3xl md:text-4xl">
              Get started today !
            </h1>
          </div>
          <div className="buttons flex flex-row justify-center gap-14 sm:flex-col sm:justify-center items-center sm:gap-6 md:gap-10">
            <button className="w-52 border border-medium-color p-3 rounded-full transition-all text-medium-color text-lg active:bg-[#b5e9e4] hover:border-light-color hover:bg-light-color active:duration-50 smxl:w-40 smxl:text-sm">
              Find a Ride
            </button>
            <button className="w-52 border bg-medium-color transition-all text-white border-medium-color p-3 rounded-full text-lg active:bg-[#05a195] active:duration-50 smxl:w-40 smxl:text-sm ">
              Offer a Ride
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
