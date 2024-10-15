import { React, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../assets/footer-logo.png";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { MdEmail } from "react-icons/md";

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
    const toastId = toast.loading("Loading...");
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
    <div className="bg-dark-color text-center pt-14 max-w-[1800px] mx-auto lg:pt-10">
      <div className="flex justify-evenly items-start text-white flex-wrap smxl:flex-col lg:justify-center lg:items-center lg:gap-10">
        {/*======================= LEFT PART =================== */}
        <div className="left flex flex-col gap-10 items-start lg:w-full lg:items-center smxl:gap-8">
          {/*==== LOGO === */}
          <div className="w-32">
            <img draggable="false" src={Logo} alt="EcoRide" />
          </div>
          {/*====== JOIN COMMUNITY ===== */}
          <div className="flex flex-col items-start">
            <div className="heading">
              <h1 className="font-light text-sm">Join Community</h1>
            </div>
            <div className="links flex justify-evenly mt-2 gap-5">
              <a
                href="https://www.instagram.com/ecoride.in"
                target="_blank"
                aria-label="instagram"
              >
                <FaInstagram className="text-2xl text-gray-200 hover:text-white" />
              </a>
              <a
                href="https://linkedin.com/company/ecoridein"
                target="_blank"
                aria-label="linkedin"
              >
                <FaLinkedin className="text-2xl text-gray-200 hover:text-white" />
              </a>
              <a
                href="https://twitter.com/ecoride_in"
                target="_blank"
                aria-label="twitter"
              >
                <FaXTwitter className="text-2xl text-gray-200 hover:text-white" />
              </a>
            </div>
          </div>
          {/*====== GET IN TOUCH ===== */}
          <div className="text-start lg:text-center">
            <h1 className="font-light text-sm">Get In Touch</h1>
            <a
              href="mailto:ecoride.in@gmail.com"
              className="font-light pt-2 flex items-end gap-1.5 text-gray-200 text-sm hover:text-white smxl:pt-1 smxl:gap-1"
            >
              <MdEmail className="text-base text-gray-200 mb-[1.5px]" />
              ecoride.in@gmail.com
            </a>
          </div>
        </div>

        {/*======================= CENTER LEFT =================== */}
        <div className="links flex flex-col gap-7 font-light items-start lg:my-5 smxl:my-0 smxl:items-center smxl:gap-5 text-sm">
          <Link to="/aboutus" onClick={scrollToTop}>
            <h1 className="hover:underline">About Us</h1>
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

        {/*======================= CENTER RIGHT =================== */}
        <div className="links flex flex-col gap-7 font-light items-start lg:my-5 smxl:my-0 smxl:items-center smxl:gap-5 text-sm">
          <Link to="/#faq" className="hover:underline">
            FAQ
          </Link>
          <Link to="/helpcenter" onClick={scrollToTop}>
            <h1 className="hover:underline">Help Center</h1>
          </Link>
          <a href="https://e-social.vercel.app" target="_blank">
            <h1 className="hover:underline cursor-pointer">E-Social</h1> 
          </a>
          <Link to="/#cards" className="hover:underline">
            Safety
          </Link>
        </div>

        {/*======================= RIGHT PART =================== */}
        <div className="right flex flex-col gap-8 lg:w-full">
          <div>
            <h1 className="font-light text-sm text-start lg:text-center mb-3">
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
                className="bg-[#24515f] border-gray-400 border outline-none px-2 py-3.5 rounded-sm w-[240px] text-xs smxl:w-[200px] smxl:py-2.5"
              />
              <input
                type="submit"
                value="SUBSCRIBE"
                className="bg-medium-color py-1.5 px-2 tracking-wider mt-4 text-xs transition-all rounded-sm hover:cursor-pointer smxl:text-[10px]"
              />
            </form>
          </div>
        </div>
      </div>
      {/*======================= BOTTOM =================== */}
      <div className="copyright">
        <p className="font-light text-gray-300 text-xs sm:text-[10px] pb-5 pt-12 lg:mt-0">
          Copyright © 2024 EcoRide. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
