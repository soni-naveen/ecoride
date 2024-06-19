import { React, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import Logo from "../../assets/footer-logo.png";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzpv6oZbknZtL4nnlwJMWFuQIQ6X5rOrnp5XgZlR542KYD-8oUbYbhaaPr9rbwbRzeclg/exec";
    const formData = new FormData();
    formData.append("email", email);
    const toastId = toast.loading("Subscribing...");
    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        // console.log("Success!", response);
        setEmail("");
        toast.success("Subscribed Successfully");
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("Error!", error.message);
    }
    toast.dismiss(toastId);
  };

  return (
    <div className="bg-dark-color text-center pt-14 max-w-[1800px] m-auto">
      {/* Container Div */}
      <div className="flex justify-around items-start text-white lg:flex-col lg:justify-center lg:items-center lg:gap-10">
        <div className="left w-[15%] flex flex-col gap-10 mb-10 items-center lg:mb-5 lg:w-full">
          <div>
            <div className="heading">
              <h1 className="text-lg font-light md:text-base">
                Join Community
              </h1>
            </div>
            <div className="links flex justify-evenly mt-5 gap-4 lg:gap-4">
              <a href="https://www.instagram.com/ecoride.in" target="_blank">
                <InstagramIcon fontSize="large" />
              </a>
              <a href="https://linkedin.com/company/ecoridein" target="_blank">
                <LinkedInIcon fontSize="large" />
              </a>
              <a href="https://twitter.com/ecoride_in" target="_blank">
                <XIcon fontSize="large" />
              </a>
            </div>
          </div>
          <div className="lg:hidden">
            <img src={Logo} alt="EcoRide" />
          </div>
        </div>

        <div className="center w-[15%] flex flex-col items-center lg:w-full">
          <div className="links flex flex-col gap-7 mb-5 font-light items-center smxl:gap-7">
            <Link to="/aboutus" onClick={scrollToTop}>
              <h1 className="hover:underline">About Us</h1>
            </Link>
            <Link to="/helpcenter" onClick={scrollToTop}>
              <h1 className="hover:underline">Help Center</h1>
            </Link>
            <Link to="/howitworks" onClick={scrollToTop}>
              <h1 className="hover:underline">How It Works</h1>
            </Link>
            <Link to="/contact" onClick={scrollToTop}>
              <h1 className="hover:underline">Contact Us</h1>
            </Link>
            <Link to="/ourteam" onClick={scrollToTop}>
              <h1 className="hover:underline">Our Team</h1>
            </Link>
          </div>
        </div>

        <div className="right w-[15%] flex flex-col items-start lg:flex lg:flex-col lg:items-center lg:w-full">
          <h1 className="font-light text-lg mb-5 smxl:text-base">
            Stay upto date :
          </h1>
          <form
            onSubmit={handleSubmit}
            name="submit-to-google-sheet"
            className="flex flex-col items-start lg:items-center justify-center"
          >
            <input
              required
              autoComplete="off"
              type="text"
              placeholder="Enter your email"
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#24515f] border-gray-400 border outline-none p-3.5 rounded-sm w-[240px] text-sm"
            />
            <input
              type="submit"
              value="Subscribe"
              className="bg-medium-color py-1.5 px-5 mt-5 text-xs hover:bg-medium-color hover:border-medium-color transition-all rounded-sm hover:cursor-pointer"
            />
          </form>
        </div>
      </div>
      <div className="copyright">
        <p className="font-light text-white text-[10px] py-5 lg:mt-10">
          Copyright © 2024. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
