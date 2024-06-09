import React from "react";
import { PiChatsFill } from "react-icons/pi";
import { MdVerified } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { useSelector } from "react-redux";

function Seeridecard() {
  const { user } = useSelector((state) => state.profile);

  return (
    <>
      <div className="rideCard flex flex-col justify-between shadow-lg bg-white rounded-2xl border w-fit px-6 pt-6 pb-3 z-0 sm:px-5 sm:pt-5 sm:pb-2 smxl:px-3.5 sm:pb-3">
        <div className="flex justify-between gap-10 sm:gap-5 smxl:flex-col smxl:gap-7">
          <div className="time flex gap-4 smxl:gap-2.5">
            <div className="timeContainer flex flex-col justify-between items-center">
              <h1 className="font-bold text-dark-color sm:text-xs sm2xl:text-[10px]">
                {user?.ridePublished?.leavingTime}
              </h1>
              <h1 className="font-bold text-dark-color sm:text-xs sm2xl:text-[10px]">
                {user?.ridePublished?.reachingTime}
              </h1>
            </div>
            <div className="divider py-2 sm:py-1">
              <div className="firstCircle w-2.5 h-2.5 bg-dark-color rounded-full"></div>
              <div className="line bg-medium-color h-24 w-0.5 ml-[4px] sm:h-[75px]"></div>
              <div className="secondCircle w-2.5 h-2.5 bg-dark-color rounded-full"></div>
            </div>
            <div className="destination text-sm w-80 flex flex-col justify-between sm:text-xs sm:leading-4 sm:w-60 sm2xl:w-48 sm2xl:text-[10px]">
              <h1 className="text-dark-color">
                {user?.ridePublished?.fromWhere}
              </h1>
              <h1 className="text-dark-color">
                {user?.ridePublished?.toWhere}
              </h1>
            </div>
          </div>
          <div className="price items-center flex flex-col justify-between smxl:flex-row smxl:justify-around">
            <h1 className="font-bold bg-light-color flex items-center rounded-sm text-xl text-dark-color py-1 px-3 sm:text-sm sm:px-2 sm:py-0.5">
              <FaRupeeSign className="text-dark-color text-base sm:text-xs" />
              {user?.ridePublished?.price}/-
            </h1>
            <button className="flex items-center border border-dark-color text-sm text-dark-color font-medium px-6 py-1.5 rounded-sm hover:bg-light-color hover:border-light-color duration-200 cursor-pointer sm:text-xs sm:py-1 sm:px-4 smxl:px-7">
              Book
            </button>
          </div>
        </div>
        <div className="DriverDetails mt-7 border-t pt-3 flex items-center justify-between smxl:mt-5 sm2xl:justify-around">
          <div className="left ml-10 flex items-center gap-3 sm:ml-5 smxl:gap-2 sm2xl:ml-0">
            <div className="img">
              <img
                src={user?.image}
                className="rounded-full h-10 w-10 object-cover sm:h-8 sm:w-8 smxl:w-7 smxl:h-7 sm2xl:w-6 sm2xl:h-6"
              />
            </div>
            <div className="name flex flex-col">
              <div className="flex items-center gap-1">
                <div className="name text-dark-color sm:text-sm smxl:text-xs">
                  {user?.additionalDetails?.firstName}
                </div>
                <div className="name text-dark-color sm:text-sm smxl:text-xs">
                  {user?.additionalDetails?.lastName}
                </div>
                {user?.additionalDetails?.govtId === null ||
                user?.additionalDetails?.govtId === "" ||
                user?.additionalDetails?.govtId === "Pending" ||
                user?.additionalDetails?.govtId === undefined ? (
                  <div></div>
                ) : (
                  <div>
                    <MdVerified className="text-medium-color text-lg sm:text-base smxl:text-sm" />
                  </div>
                )}
              </div>
              <div className="rating flex items-center gap-2">
                <div className="star">
                  <FaStar className="text-base sm:text-sm smxl:text-xs" />
                </div>
                <div className="ratingRecived text-dark-color sm:text-sm smxl:text-xs">
                  {user?.additionalDetails?.overallRating}
                </div>
              </div>
            </div>
          </div>
          <div className="right mr-2 sm2xl:mr-0">
            <button className="flex justify-evenly items-center border rounded-full gap-2 px-3 py-1 border-slate-500 sm:px-2 sm:py-0 sm:gap-1 duration-200 hover:scale-105">
              <div className="icon">
                <PiChatsFill className="text-slate-500 text-base sm:text-xs" />
              </div>
              <div className="name text-sm text-slate-500 sm:text-[10px]">
                Contact
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Seeridecard;
