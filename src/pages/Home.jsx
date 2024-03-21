import React from "react";
import Banner from "../assets/Banner.png";
import Button from "@mui/material/Button";
import Card from '../components/Card.jsx';
import AccordionUsage from "../components/Faq.jsx";
import Stickingcards from "../components/Stickingcards.jsx";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const Home = () => {

  return (
    <>
      <div className="h-[532px]">
        <img
          src={Banner}
          alt="Sharing rides building connections"
          className="w-screen h-auto m-auto"
        />
        <div className="text-7xl font-bold text-dark-color leading-snug w-1/3 relative top-[-350px] left-36">
          <div className="">Sharing rides, building connections</div> 
        </div>
      </div>

      <div className="mapSection bg-light-color h-[600px] w-full flex justify-around items-center">
          <div className="left w-[400px] h-[400px] bg-medium-color">

          </div>
          <div className="right w-[700px] h-[400px] bg-dark-color">

          </div>
      </div>

      <div className="belowBanner h-[150px] w-full bg-dark-color flex justify-around items-center text-white">
          <div className="left flex flex-col items-center">
            <h1 className="text-4xl font-bold">150+</h1>
            <p>Daily Users</p>
          </div>
          <div className="middle flex flex-col items-center">
            <h1 className="text-4xl font-bold">24/7</h1>
            <p>Customer Support</p>
          </div>
          <div className="right flex flex-col items-center">
            <h1 className="text-4xl font-roboto font-bold">500+</h1>
            <p>Verified Drivers</p>
          </div>
      </div>

      <div className="stickWithUs h-auto w-full p-16 mb-16">
        <div className="inner flex flex-col justify-center gap-24">
          <div>
            <h1 className=" ml-8 text-4xl text-dark-color">People stick with us because</h1>
          </div>
          
          <div className="cards flex gap-10 justify-evenly items-center">
            <Stickingcards icon= {<CheckCircleOutlineIcon />} title = "Trust who you travel with" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " />
            <Stickingcards icon ={<MonetizationOnIcon />} title = "Fair fares" content ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ." />
            <Stickingcards icon ={<RocketLaunchIcon />} title = "Scroll, click, tap and go!" content ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"/>
          </div>
        </div>
        
      </div>


      <div className="faqs w-full h-auto bg-dark-color flex flex-col justify-evenly items-center gap-20">
        <div className="heading text-white text-6xl mt-10">FAQ'S</div>
        <div className="list mb-16">
          <AccordionUsage />
        </div>
      </div>

      <div className="feedback w-full h-[500px] bg-light-color m-auto flex flex-col justify-evenly items-center">
        <div className="heading text-4xl">
          <h1 className="text-dark-color">Our Service Feedback</h1>
        </div>
        <div className="cards flex justify-center items-center flex-row">
          <Card />
        </div>
      </div>
      
      
      <div className="abovefooter h-72 w-full">
        <div className="heading m-16 pt-16 pl-16 text-5xl">
          <h1 className="text-dark-color">Get Started Today!</h1>
        </div>
        <div className="buttons flex flex-row justify-center gap-10">
          <Button variant="outlined" style={{width: "220px", height: "60px", color : "#75cac3", borderColor: "#75cac3", borderRadius: "30px"}}>Find a Ride</Button>
          <Button varient="contained" style={{width: "220px", height: "60px", backgroundColor: "#75cac3", color: "white", borderRadius: "30px"}}>Offer a Ride</Button>
        </div>
      </div>
    </>
  );
};

export default Home;
