import React, { useState, useEffect } from "react";
import copy from "copy-to-clipboard";
import { FaStar } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { PiSteeringWheelFill } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { RiProgress5Line } from "react-icons/ri";
import { FaCircleMinus } from "react-icons/fa6";
import { BsChatDotsFill } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { getFullProfile } from "../services/operations/ProfileAPI";
import Error from "./Error";
import Spinner from "../components/Loader";

function Fullprofile() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const { profileId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const fullProfile = await getFullProfile(profileId);
        setProfile(fullProfile.data);
      } catch (error) {
        console.error("Could not fetch User Profile", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [profileId]);

  const birthDate = new Date(profile?.dateOfBirth);
  const today = new Date(Date.now());
  let age = today.getFullYear() - birthDate.getFullYear();
  let month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  const dateJoined = new Date(profile?.dateJoined);
  const yearJoined = dateJoined.getFullYear();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = months[dateJoined.getMonth()];

  const handleShare = () => {
    copy(window.location.href);
    toast.success("Link copied to clipboard");
    setTimeout(() => {
      window.open(`whatsapp://send?text=${window.location.href}`);
    }, 1000);
  };

  return (
    <div>
      {loading ? (
        <div className="grid min-h-[calc(100vh-100px)] place-items-center">
          <Spinner />
        </div>
      ) : (
        <div>
          {profile ? (
            <div className="flex flex-col items-center mx-auto bg-white mt-2 mb-10 w-full max-w-[450px] smxl:px-10 sm2xl:px-5">
              <div className="w-full">
                <div className="flex justify-between items-center mb-5 h-16 border-b">
                  {/*====== BACK BUTTON ======*/}
                  <div>
                    <IoMdArrowRoundBack
                      onClick={() => navigate(-1)}
                      className="text-2xl text-dark-color hover:cursor-pointer"
                    />
                  </div>
                  {/*====== SHARE ======*/}
                  <button
                    onClick={handleShare}
                    className="flex text-dark-color gap-1 bg-light-color rounded-md px-2 py-1 smxl:text-sm"
                  >
                    <IoIosShareAlt className="text-2xl smxl:text-xl" /> Share
                  </button>
                </div>

                {/*====== NAME , AGE, GENDER, IMAGE ======*/}
                <div className="flex items-center justify-between mb-4 w-full">
                  <div>
                    <h2 className="text-2xl font-semibold text-dark-color smxl:text-xl sm2xl:text-lg">
                      {profile?.firstName + " " + profile?.lastName}
                    </h2>
                    <p className="text-medium-color smxl:text-sm">
                      {profile?.dateOfBirth === null ||
                      profile?.dateOfBirth === undefined ||
                      profile?.dateOfBirth === ""
                        ? "-- "
                        : age}
                      y/o -&nbsp;
                      {profile?.gender}
                    </p>
                  </div>
                  <div className="image mr-2">
                    <img
                      draggable="false"
                      src={profile?.image}
                      className="rounded-full bg-cover bg-center bg-profile-img h-16 w-16 sm:h-14 sm:w-14 smxl:h-12 smxl:w-12 sm2xl:h-10 sm2xl:w-10 object-cover"
                    />
                  </div>
                </div>
                {/*====== RATING ======*/}
                <div className="mb-4 items-start">
                  <div className="flex items-center mb-3 sm2xl:mb-2">
                    <FaStar className="text-dark-color mr-3 text-lg smxl:text-sm" />
                    <span className="text-dark-color w-fit smxl:text-sm">
                      {profile?.overallRating === 0 ? (
                        <p>No overall ratings yet</p>
                      ) : (
                        <p>{profile?.overallRating} - Overall Rating</p>
                      )}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <PiSteeringWheelFill className="text-dark-color mr-3 text-lg smxl:text-sm" />
                    <span className="text-dark-color w-fit smxl:text-sm">
                      {profile?.overallRating === 0 ? (
                        <p>No driving ratings yet</p>
                      ) : (
                        <p>{profile?.overallRating} - Driving ratings</p>
                      )}
                    </span>
                  </div>
                </div>
                <div className="border-b-4 w-full border-light-color"></div>
                <div className="mb-4 mt-5">
                  {/*====== GOVT.ID ======*/}
                  <div className="flex items-center mb-3">
                    {profile?.govtId === null ||
                    profile?.govtId === "" ||
                    profile?.govtId === "Pending" ? (
                      <div className="flex items-center">
                        <FaCircleMinus className="text-lg text-dark-color mr-2 smxl:text-sm" />
                        <span className="text-dark-color w-fit smxl:text-sm">
                          Non-verified
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <FaCheckCircle className="text-lg text-medium-color mr-2 smxl:text-sm" />
                        <span className="text-medium-color w-fit smxl:text-sm">
                          Verified govt.Id
                        </span>
                      </div>
                    )}
                  </div>
                  {/*====== MAIL ======*/}
                  <div className="flex items-center mb-3">
                    <FaCheckCircle className="text-lg text-medium-color mr-2 smxl:text-sm" />
                    <span className="text-medium-color smxl:text-sm">
                      Confirmed email
                    </span>
                  </div>
                  {/*====== CONTACT NUMBER ======*/}
                  <div className="flex items-center">
                    {profile?.contactNumber === null ||
                    profile?.contactNumber === undefined ? (
                      <div className="flex items-center mb-3">
                        <FaCircleMinus className="text-lg text-dark-color mr-2 smxl:text-sm" />
                        <span className="text-dark-color w-fit smxl:text-sm">
                          Mobile no. missing
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center mb-2">
                        <FaCheckCircle className="text-lg text-medium-color mr-2 smxl:text-sm" />
                        <span className="text-medium-color w-fit smxl:text-sm">
                          Confirmed mobile number
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="border-b-4 w-full border-light-color"></div>
                {/*====== ABOUT ======*/}
                <div className="mb-5 mt-5 w-[95%]">
                  <h3 className="text-lg font-semibold mb-3 text-dark-color smxl:text-base">
                    About {profile?.firstName}
                  </h3>
                  <div className="flex items-center mb-3 smxl:text-sm">
                    <span>
                      {profile?.about?.trim() === "" ||
                      profile?.about === null ||
                      profile?.about === undefined ? (
                        <p className="text-dark-color flex items-center">
                          <BsChatDotsFill className="text-dark-color mr-2 text-base" />
                          -----
                        </p>
                      ) : (
                        <p className="text-medium-color flex items-center">
                          <BsChatDotsFill className="text-medium-color mr-2 text-base" />
                          {profile?.about}
                        </p>
                      )}
                    </span>
                  </div>
                  <div className="flex items-center smxl:text-sm">
                    <span className="text-medium-color">
                      <span>
                        {profile?.vehicle?.trim() === "" ||
                        profile?.vehicle === null ||
                        profile?.vehicle === undefined ? (
                          <p className="text-dark-color flex items-center">
                            <FaCarSide className="text-dark-color mr-2 text-lg" />
                            -----
                          </p>
                        ) : (
                          <p className="text-medium-color flex items-center">
                            <FaCarSide className="text-medium-color mr-2 text-lg" />
                            {profile?.vehicle}
                          </p>
                        )}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="border-b-4 w-full border-light-color"></div>
                <div className="text-medium-color mt-4 smxl:text-sm">
                  {profile?.noOfRidesPublished} rides published
                </div>
                <div className="text-medium-color mt-4 smxl:text-sm">
                  Member since {monthName} {yearJoined}
                </div>
              </div>
            </div>
          ) : (
            <Error />
          )}
        </div>
      )}
    </div>
  );
}

export default Fullprofile;
