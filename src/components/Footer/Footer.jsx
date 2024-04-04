import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Input from "@mui/material/Input";
import Logo from "../../assets/footer-logo.png";
import { Link } from "react-router-dom";

const ariaLabel = { "aria-label": "description" };

const Footer = () => {
  return (
    <div className="bg-dark-color text-center pt-16 max-w-[1600px] m-auto lg:pt-14 ">
      {/* Container Div */}
      <div className="flex justify-around items-start text-white xl:justify-evenly lg:flex-col lg:justify-center lg:items-center lg:gap-14">
        <div className="left w-[15%] flex flex-col items-center lg:w-full">
          <div className="heading">
            <h1 className="text-xl font-light smxl:text-lg">Follow Us</h1>
          </div>
          <div className="links flex justify-evenly mt-5 gap-2 lg:gap-4">
            <Link><InstagramIcon fontSize="large" /></Link>
            <Link><YouTubeIcon fontSize="large" /></Link>
            <Link><LinkedInIcon fontSize="large" /></Link>
            <Link><TwitterIcon fontSize="large" /></Link>
          </div>
          <div className="mt-20 lg:hidden">
            <img src={Logo} alt="EcoRide" />
          </div>
        </div>

        <div className="center w-[15%] flex flex-col items-center lg:w-full">
          <div className="links flex flex-col gap-8 font-light items-center smxl:gap-7">
            <Link to="/">
              <h1>About Us</h1>
            </Link>
            <Link to="/">
              <h1>Help Center</h1>
            </Link>
            <Link to="/">
              <h1>How It Works</h1>
            </Link>
            <Link to="/">
              <h1>Contact Us</h1>
            </Link>
          </div>
        </div>

        <div className="right w-[15%] text-left lg:flex flex-col justify-center items-center lg:w-full">
          <h1 className="font-light text-lg mb-5 smxl:text-base">Stay upto date :</h1>
          {/* <form action=""> */}
            <Input
              placeholder="Enter your email"
              disableUnderline
              inputProps={
                (ariaLabel,
                {
                  style: {
                    color: "white",
                    fontWeight: 300,
                    width: 240,
                    fontSize: 14,
                    backgroundColor: "#265766",
                    padding: 15,
                  },
                })
              }
            />
            <button className="border py-1 px-4 border-white mt-5 ml-2 text-xs hover:bg-medium-color hover:border-medium-color transition-all rounded-sm">
              Subscribe
            </button>
          {/* </form> */}
        </div>
      </div>
      <div className="copyright">
        <p className="font-light text-white text-xs py-5 lg:mt-10">
          Copyright © 2024. All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
