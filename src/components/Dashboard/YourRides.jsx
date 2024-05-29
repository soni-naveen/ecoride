import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IoMdChatboxes } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function YourRides() {
  const { user } = useSelector((state) => state.profile);

  const [activeTab, setActiveTab] = useState("published");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto">
      <div className="bg-white">
        <div className="mt-7 flex justify-center border-b shadow border-gray-200 sm:mt-2 md:mt-5">
          <div
            className={`text-lg font-semibold cursor-pointer p-3 w-[300px] text-center md:w-[200px] md1:w-[250px] sm:text-lg smxl:text-base ${
              activeTab === "booked"
                ? "text-dark-color border-b-2 border-b-medium-color"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("booked")}
          >
            Booked
          </div>
          <div className="inline-block border-r-2 border-solid border-medium-color h-[30px] mx-24 mt-4 mb-2 md1:mx-16 sm:mx-8 sm:mb-1 smxl:mx-3"></div>
          <div
            className={`text-xl font-semibold cursor-pointer p-3 w-[300px] text-center md:w-[200px] md1:w-[250px] sm:text-lg smxl:text-base ${
              activeTab === "published"
                ? "text-dark-color border-b-2 border-b-medium-color"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("published")}
          >
            Published
          </div>
        </div>
        <div>
          {activeTab === "booked" && <div></div>}
          {activeTab === "published" && (
            <div className="mt-4 flex items-center justify-evenly">
              <div className="rideCard flex flex-col justify-between bg-white rounded-xl shadow-lg w-full max-w-xl py-10 px-5 lg:max-w-lg md1:max-w-md smxl:max-w-xs z-0">
                <div className="timeSection flex justify-between">
                  <div className="time flex gap-4">
                    <div className="timeContainer flex flex-col justify-between items-center">
                      <h1 className=" font-bold text-dark-color">
                        {user?.ridePublished?.leavingTime}
                      </h1>
                      <h1 className=" font-bold text-dark-color">
                        {user?.ridePublished?.reachingTime}
                      </h1>
                    </div>
                    <div className="divider py-1">
                      <div className="firstCircle w-2.5 h-2.5 bg-dark-color rounded-full"></div>
                      <div className="line bg-medium-color h-20 w-0.5 ml-[4px]"></div>
                      <div className="secondCircle w-2.5 h-2.5 bg-dark-color rounded-full"></div>
                    </div>
                    <div className="destination text-sm w-80 flex flex-col justify-between">
                      <h1 className="text-dark-color">
                        {user?.ridePublished?.fromWhere}
                      </h1>
                      <h1 className="text-dark-color">
                        {user?.ridePublished?.toWhere}
                      </h1>
                    </div>
                  </div>
                  <div className="price items-center flex justify-center">
                    <h1 className="font-bold bg-light-color mr-3 flex items-center rounded-sm text-xl text-dark-color py-1 px-2">
                      <FaRupeeSign className="text-dark-color text-lg" />
                      {user?.ridePublished?.price}/-
                    </h1>
                  </div>
                </div>
              </div>
              <button onClick={()=>{alert("not available yet")}} className="flex items-center bg-light-color text-dark-color font-semibold px-4 py-2 rounded-md hover:bg-[#b5e9e4] duration-200 cursor-pointer">
                <RxCross2 className="mr-2" />
                Delete Ride
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
