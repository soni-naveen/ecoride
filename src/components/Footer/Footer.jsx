import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../assets/footer-logo.png";
import { toast } from "react-hot-toast";
import { MdEmail } from "react-icons/md";

const Footer = () => {
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
      <div className="flex justify-evenly items-start text-white flex-wrap smxl:flex-col smxl:items-start  sm2xl:pl-6 smxl:pl-10 lg:justify-center lg:items-center lg:gap-10">
        {/*======================= LEFT PART =================== */}
        <div className="left flex flex-col gap-10 smxl:items-start lg:w-full lg:items-center items-start smxl:gap-8">
          {/*==== LOGO === */}
          <div className="w-32">
            <img draggable="false" src={Logo} alt="Ecoride" />
          </div>
          {/*====== JOIN COMMUNITY ===== */}
          <div className="flex flex-col items-start">
            <div className="heading">
              <div className="font-light text-sm">Join Community</div>
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
          <div className="smxl:text-start lg:text-center text-start">
            <div className="font-light text-sm">Get In Touch</div>
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
        <div className="links flex flex-col gap-7 font-light items-start lg:my-5 smxl:my-0 smxl:gap-5 text-sm">
          <a href="/aboutus">
            <div className="hover:underline">About Us</div>
          </a>
          <a href="/howitworks">
            <div className="hover:underline">How It Works</div>
          </a>
          <a href="/contact">
            <div className="hover:underline">Contact Us</div>
          </a>
          <a href="/ourteam">
            <div className="hover:underline">Our Team</div>
          </a>
        </div>

        {/*======================= CENTER RIGHT =================== */}
        <div className="links flex flex-col gap-7 font-light items-start lg:my-5 smxl:my-0 smxl:gap-5 text-sm">
          <a href="/helpcenter">
            <div className="hover:underline">Help Center</div>
          </a>
          <a href="/#faq" className="hover:underline">
            FAQs
          </a>
          <a href="https://e-social.vercel.app" target="_blank">
            <div className="hover:underline cursor-pointer">E-Social</div>
          </a>
          <a href="/#cards" className="hover:underline">
            Safety
          </a>
        </div>

        {/*======================= RIGHT PART =================== */}
        <div className="right flex flex-col smxl:items-start items-center gap-8 lg:w-full">
          <div className="w-fit">
            <div className="font-light text-sm text-start mb-3">
              Stay upto date :
            </div>
            <form
              onSubmit={handleSubmit}
              name="submit-to-google-sheet"
              className="flex flex-col justify-center"
            >
              <input
                required
                autoComplete="off"
                type="text"
                placeholder="Enter your email"
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#24515f] border-gray-400 border outline-none px-3 py-3.5 rounded-sm w-[240px] text-xs smxl:py-3"
              />
              <input
                type="submit"
                value="SUBSCRIBE"
                className="bg-medium-color py-1.5 px-2 tracking-wider mt-4 text-xs transition-all rounded hover:cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>
      {/*======================= BOTTOM =================== */}
      <div className="copyright">
        <p className="font-light text-gray-300 text-xs smxl:text-start sm2xl:pl-6 smxl:pl-10 pb-3 pt-12 lg:mt-0">
          Copyright © {new Date().getFullYear()} Ecoride. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
