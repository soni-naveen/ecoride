import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import Input from "@mui/material/Input";
import Logo from "../../assets/footer-logo.png";

const ariaLabel = { "aria-label": "description" };

const Footer = () => {
  return (
    <div className="bg-dark-color text-center pt-16 ">
      <div className="flex justify-around items-start text-white">
        <div className="left w-[15%]">
          <div className="heading">
            <h1 className="text-xl font-light">Follow Us</h1>
          </div>
          <div className="links flex justify-evenly mt-5 ">
            <InstagramIcon fontSize="large" />
            <YouTubeIcon fontSize="large" />
            <LinkedInIcon fontSize="large" />
            <TwitterIcon fontSize="large" />
          </div>
          <div className="mt-20">
            <img src={Logo} alt="EcoRide" />
          </div>
        </div>

        <div className="center w-[15%] flex flex-col items-center ">
          <div className="links flex flex-col gap-8 font-light items-center">
            <h1>About Us</h1>
            <h1>Help Center</h1>
            <h1>How It Works</h1>
            <h1>Contact Us</h1>
          </div>
        </div>

        <div className="right w-[15%] text-left">
          <h1 className="font-light text-lg mb-5">Stay upto date :</h1>
          <Input
            placeholder="Enter your email"
            disableUnderline
            inputProps={
              (ariaLabel,
              {
                style: {
                  color: "white",
                  fontWeight: 300,
                  width: 250,
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
        </div>
      </div>
      <div className="copyright">
        <p className="font-light text-white text-xs py-3">
          Copyright © 2024. All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
