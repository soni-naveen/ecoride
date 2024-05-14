import React from "react";
import { FaStar } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { PiSteeringWheelFill } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { FaRocketchat } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Fullprofile() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);

  const birthDate = new Date(user?.additionalDetails?.dateOfBirth);
  const today = new Date(Date.now());
  let age = today.getFullYear() - birthDate.getFullYear();
  let month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  const dateJoinedString = user?.additionalDetails?.dateJoined;
  const dateJoined = new Date(dateJoinedString);
  const yearJoined = dateJoined.getFullYear();
  const monthJoined = dateJoined.getMonth();
  let monthName = "";

  switch (monthJoined) {
    case 1:
      monthName = "January";
      break;
    case 2:
      monthName = "February";
      break;
    case 3:
      monthName = "March";
      break;
    case 4:
      monthName = "April";
      break;
    case 5:
      monthName = "May";
      break;
    case 6:
      monthName = "June";
      break;
    case 7:
      monthName = "July";
      break;
    case 8:
      monthName = "August";
      break;
    case 9:
      monthName = "September";
      break;
    case 10:
      monthName = "October";
      break;
    case 11:
      monthName = "November";
      break;
    case 12:
      monthName = "December";
      break;
  }

  return (
    <div className="flex flex-col items-center mx-auto p-4 bg-white mt-5 w-full sm2xl:mt-5">
      <div>
        <IoMdArrowRoundBack
          onClick={() => navigate(-1)}
          className="text-2xl mb-5 text-dark-color hover:cursor-pointer"
        />
        <div className="flex items-center justify-between mb-4 gap-60 sm2xl:gap-16 smxl:gap-24 sm:gap-32 md1:gap-48">
          <div>
            <h2 className="text-2xl font-semibold text-dark-color sm:text-xl">
              {user?.additionalDetails.firstName +
                " " +
                user?.additionalDetails?.lastName}
            </h2>
            <p className="text-medium-color smxl:text-sm">
              {age} y/o - {user?.additionalDetails?.gender}
            </p>
          </div>
          <div className="image">
            <img
              src={user?.image}
              alt={`profile-${user?.additionalDetails?.firstName}`}
              className="rounded-full h-16 w-16 sm:h-14 sm:w-14 smxl:w-10 smxl:h-10 object-cover"
            ></img>
          </div>
        </div>
        <div className="mb-4 items-start mr-28 md:mr-0">
          <div className="flex items-center mb-3">
            <FaStar className="text-dark-color mr-3 text-lg smxl:text-sm" />
            <span className="text-dark-color w-fit smxl:text-sm">
              {user?.additionalDetails?.overallRating === 0 ? (
                <p>No overall ratings yet</p>
              ) : (
                <p>{user?.additionalDetails?.overallRating} - Overall Rating</p>
              )}
            </span>
          </div>
          <div className="flex items-center">
            <PiSteeringWheelFill className="text-dark-color mr-3 text-lg smxl:text-sm" />
            <span className="text-dark-color w-fit smxl:text-sm">
              {user?.additionalDetails?.overallRating === 0 ? (
                <p>No driving ratings yet</p>
              ) : (
                <p>
                  {user?.additionalDetails?.overallRating} - Driving ratings
                </p>
              )}
            </span>
          </div>
        </div>
        <div className="bickWalaBorder border-b-4 w-full border-light-color"></div>
        <div className="mb-4 mr-28 mt-5 md:mr-0">
          <div className="flex items-center">
            {user?.additionalDetails?.govtId === null ||
            user?.additionalDetails?.govtId === undefined ? (
              <div className="flex items-center mb-3">
                <FaCircleMinus className="text-lg text-dark-color mr-2 smxl:text-sm" />
                <span className="text-dark-color w-fit smxl:text-sm">
                  Non-verified govt.Id
                </span>
              </div>
            ) : (
              <div className="flex items-center mb-3">
                <FaCheckCircle className="text-lg text-medium-color mr-2 smxl:text-sm" />
                <span className="text-medium-color w-fit smxl:text-sm">
                  Verified govt.Id
                </span>
              </div>
            )}
          </div>
          <div className="flex items-center mb-3">
            <FaCheckCircle className="text-lg text-medium-color mr-2 smxl:text-sm" />
            <span className="text-medium-color smxl:text-sm">
              Confirmed email
            </span>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-lg text-medium-color mr-2 smxl:text-sm" />
            <span className="text-medium-color smxl:text-sm">
              Confirmed contact number
            </span>
          </div>
        </div>
        <div className="bickWalaBorder border-b-4 w-full border-light-color"></div>
        <div className="mb-5 mt-5 mr-12 md:mr-0">
          <h3 className="text-lg font-semibold mb-3 text-dark-color smxl:text-base">
            About {user?.additionalDetails?.firstName}
          </h3>
          <div className="flex items-center mb-3 smxl:text-sm">
            <span>
              {user?.additionalDetails?.about === "" ? (
                <p className="text-dark-color flex items-center">
                  <FaRocketchat className="text-dark-color mr-2 text-lg" />
                  bio not added
                </p>
              ) : (
                <p className="text-medium-color flex items-center">
                  <FaRocketchat className="text-medium-color mr-2 text-lg" />
                  {user?.additionalDetails?.about}
                </p>
              )}
            </span>
          </div>
          <div className="flex items-center smxl:text-sm">
            <span className="text-medium-color">
              <span>
                {user?.additionalDetails?.vehicle === "" ? (
                  <p className="text-dark-color flex items-center">
                    <FaCarSide className="text-dark-color mr-2 text-lg" />
                    vehicle details not added
                  </p>
                ) : (
                  <p className="text-medium-color flex items-center">
                    <FaCarSide className="text-medium-color mr-2 text-lg" />
                    {user?.additionalDetails?.vehicle}
                  </p>
                )}
              </span>
            </span>
          </div>
        </div>
        <div className="bickWalaBorder border-b-4 w-full border-light-color"></div>
        <div className="text-medium-color mt-4 smxl:text-sm">
          {user?.additionalDetails?.noOfRidesPublished} rides published
        </div>
        <div className="text-medium-color mt-4 smxl:text-sm">
          Member since {monthName} {yearJoined}
        </div>
      </div>
    </div>
  );
}

export default Fullprofile;
