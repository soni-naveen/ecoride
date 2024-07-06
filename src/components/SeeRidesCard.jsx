import React from "react";
import { PiChatsFill } from "react-icons/pi";
import { MdVerified } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Seeridecard({
  rideId,
  profile,
  profileId,
  fromWhere,
  toWhere,
  price,
  leaving,
  reaching,
  firstName,
  lastName,
  image,
  overallRating,
  govtId,
}) {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);
  return (
    <>
      <div className="rideCard flex flex-col justify-between shadow-lg bg-white rounded-2xl border w-fit px-6 pt-6 pb-4 z-0 sm:px-5 sm:pt-5 sm:pb-2 smxl:px-3.5 sm:pb-3">
        <div className="flex justify-between gap-10 sm:gap-5 smxl:flex-col smxl:gap-7">
          <div className="flex gap-4 smxl:gap-2.5">
            {/*========== TIME ========== */}
            <div className="flex flex-col justify-between items-center">
              <h1 className="font-bold text-dark-color sm:text-xs sm2xl:text-[10px]">
                {leaving}
              </h1>
              <h1 className="font-bold text-dark-color sm:text-xs sm2xl:text-[10px]">
                {reaching}
              </h1>
            </div>
            <div className="divider py-1">
              <div className="firstCircle w-2.5 h-2.5 bg-dark-color rounded-full"></div>
              <div className="line bg-medium-color min-h-24 h-[calc(100%-20px)] w-0.5 ml-[4px] sm:min-h-20"></div>
              <div className="secondCircle w-2.5 h-2.5 bg-dark-color rounded-full"></div>
            </div>
            {/*========== PLACES ========== */}
            <div className="text-sm w-80 flex flex-col justify-between sm:text-xs sm:leading-4 sm:w-60 sm2xl:w-48 sm2xl:text-[10px]">
              <h1 className="text-dark-color font-medium">{fromWhere}</h1>
              <h1 className="text-dark-color font-medium">{toWhere}</h1>
            </div>
          </div>
          {/*========== PRICE ========== */}
          <div className="price items-center flex flex-col justify-between smxl:flex-row smxl:justify-around">
            <h1 className="font-bold bg-light-color flex items-center rounded-sm text-xl text-dark-color py-1 px-3 sm:text-sm sm:px-2 sm:py-0.5">
              <FaRupeeSign className="text-dark-color text-base sm:text-xs" />
              {price}/-
            </h1>
            {/*========== BOOK ========== */}
            <button
              onClick={() => navigate(`/bookride/${rideId}`)}
              className="flex items-center border border-dark-color text-sm text-dark-color font-medium px-6 py-1.5 rounded-md hover:bg-medium-color hover:border-medium-color hover:text-white cursor-pointer sm:text-xs sm:py-1 sm:px-4 smxl:px-7"
            >
              Book
            </button>
          </div>
        </div>
        {/*========== BOTTOM PART ========== */}
        <div className="DriverDetails mt-7 border-t pt-3 flex items-center justify-between smxl:mt-5 sm2xl:justify-around">
          {/*========== LEFT PART ========== */}
          <div className="left ml-10 flex items-center gap-3 sm:ml-5 smxl:gap-2 sm2xl:ml-0">
            {/*========== IMAGE ========== */}
            <div className="img">
              <img
                src={image}
                draggable="false"
                className="rounded-full h-10 w-10 object-cover sm:h-9 sm:w-9 sm2xl:h-8 sm2xl:w-8"
              />
            </div>
            {/*========== NAME , VERIFIED OR NOT , RATING ========== */}
            <div className="name flex flex-col gap-0.5">
              <button
                onClick={() => navigate(`/profile/${profile._id}`)}
                className="flex text-dark-color items-center gap-1 hover:underline"
              >
                <div className="sm:text-sm smxl:text-xs">{firstName}</div>
                <div className="sm:text-sm smxl:text-xs">{lastName}</div>
                {/*========== VERIFIED OR NOT ========== */}
                {govtId === null ||
                govtId === "" ||
                govtId === "Pending" ||
                govtId === undefined ? (
                  ""
                ) : (
                  <div>
                    <MdVerified className="text-medium-color text-base sm:text-base smxl:text-sm" />
                  </div>
                )}
              </button>
              {/*========== RATING ========== */}
              <div className="rating flex items-center gap-2 sm:gap-1.5 sm2xl:gap-1">
                <div className="star">
                  <FaStar className="text-sm sm:text-xs smxl:text-[10px] sm2xl:text-[8px]" />
                </div>
                <div className="ratingRecived text-dark-color sm:text-sm smxl:text-xs">
                  {overallRating === 0 ? (
                    <div className="text-[10px] sm2xl:text-[9px]">
                      No ratings yet
                    </div>
                  ) : (
                    overallRating
                  )}
                </div>
              </div>
            </div>
          </div>
          {/*========== RIGHT PART ========== */}
          <div className="right mr-2 sm2xl:mr-0">
            <button
              onClick={() => {
                profileId === user?.additionalDetails?._id
                  ? toast.error("You cannot message yourself!")
                  : navigate(
                      `/chat/${profileId}/${user?.additionalDetails?._id}`
                    );
              }}
              className="flex justify-evenly items-center rounded-full gap-2 px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 border-slate-500 sm:px-2.5 sm:py-0.5 sm:gap-1 duration-200 hover:scale-105"
            >
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
