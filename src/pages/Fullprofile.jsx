import React from "react";
import two from "../assets/Team/two.jpg";
import { FaStar } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaRocketchat } from "react-icons/fa";
function Fullprofile() {
  return (
    <div className="flex flex-col items-center mx-auto max-w-md p-4 bg-white mt-10 w-full">
      <div className="flex items-center mb-4 gap-32 md:gap-5 sm:gap-5">
        <div>
          <h2 className="text-2xl font-semibold text-dark-color sm:text-xl">
            Naveen Soni
          </h2>
          <p className="text-medium-color">21 y/o</p>
        </div>
        <div className="image">
          <img
            src={two}
            alt="Naveen"
            width={60}
            height={60}
            className=" rounded-full"
          ></img>
        </div>
      </div>

      <div className="mb-4 items-start mr-28 md:mr-0">
        <div className="flex items-center mb-2 ">
          <FaStar className="text-dark-color mt-1 mr-2" />
          <span className="text-dark-color w-fit">4.8/5 - 23 ratings</span>
        </div>
        <div className="flex items-center">
          <FaCar className="text-dark-color mr-2" />
          <span className="text-dark-color w-fit">
            4.9/5 - Good driving skills
          </span>
        </div>
      </div>
      <div className="bickWalaBorder border-b-2 w-full border-light-color"></div>
      <div className="mb-4 mr-28 mt-5 md:mr-0">
        <div className="flex items-center mb-2">
          <RiVerifiedBadgeFill className="text-dark-color mr-2" />
          <span className="text-medium-color w-fit">Verified Govt. ID</span>
        </div>
        <div className="flex items-center mb-2">
          <RiVerifiedBadgeFill className="text-dark-color mr-2" />
          <span className="text-medium-color">Confirmed email</span>
        </div>
        <div className="flex items-center">
          <RiVerifiedBadgeFill className="text-dark-color mr-2" />
          <span className="text-medium-color">Confirmed phone number</span>
        </div>
      </div>
      <div className="bickWalaBorder border-b-2 w-full border-light-color"></div>
      <div className="mb-4 mt-5 mr-12 md:mr-0">
        <h3 className="text-lg font-semibold mb-2 text-dark-color">
          About Naveen
        </h3>
        <div className="flex items-center mb-2">
          <FaRocketchat className="text-dark-color mr-2" />
          <span className="text-dark-color">
            I'm chatty when I feel comfortable
          </span>
        </div>
        <div className="flex items-center">
          <FaCar className="text-dark-color mr-2" />
          <span className="text-dark-color">Hyundai i20 - HR01CK1000</span>
        </div>
      </div>
      <div className="bickWalaBorder border-b-2 w-full border-light-color"></div>
      <div className="text-medium-color mt-4">32 rides published</div>
      <div className="text-medium-color mt-4">Member since 2023</div>
    </div>
  );
}

export default Fullprofile;
