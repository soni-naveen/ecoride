import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteRide } from "../../services/operations/RideAPI";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function YourRides() {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("published");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  async function handleDeleteRide() {
    try {
      const confirmDelete = await Swal.fire({
        title: "Are You Sure?",
        text: "You lost your passengers when you deleted the ride",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Confirm",
        focusCancel: true, // Set the default focus to Cancel button
      });

      if (confirmDelete.isConfirmed) {
        dispatch(deleteRide(token, navigate));
      }
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  }

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
          {activeTab === "booked" && (
            <div className="text-center mt-10 text-slate-300 text-xl smxl:text-base sm2xl:text-sm">
              Ride you booked will appear here!
            </div>
          )}
          {activeTab === "published" && (
            <div>
              {user?.ridePublished?.fromWhere !== "" &&
              user?.ridePublished?.toWhere !== "" ? (
                <div>
                  <div className="mt-5 flex items-center justify-evenly border-b md1:flex-col md1:gap-7">
                    <div className="rideCard flex flex-col justify-between bg-white rounded-md w-fit py-10 px-5 z-0 sm:py-5">
                      <div className="flex justify-between gap-10 sm:gap-5 smxl:flex-col smxl:gap-7">
                        <div className="time flex gap-4">
                          <div className="timeContainer flex flex-col justify-between items-center">
                            <h1 className="font-bold text-dark-color sm:text-xs">
                              {user?.ridePublished?.leavingTime}
                            </h1>
                            <h1 className="font-bold text-dark-color sm:text-xs">
                              {user?.ridePublished?.reachingTime}
                            </h1>
                          </div>
                          <div className="divider py-1">
                            <div className="firstCircle w-2.5 h-2.5 bg-dark-color rounded-full"></div>
                            <div className="line bg-medium-color h-24 w-0.5 ml-[4px] sm:h-16"></div>
                            <div className="secondCircle w-2.5 h-2.5 bg-dark-color rounded-full"></div>
                          </div>
                          <div className="destination text-sm w-80 flex flex-col justify-between sm:text-xs sm:leading-4 sm:w-60 sm2xl:w-48">
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
                          <button
                            onClick={handleDeleteRide}
                            className="flex items-center bg-light-color text-sm text-dark-color font-semibold px-3 py-1.5 rounded-sm hover:bg-[#b5e9e4] duration-200 cursor-pointer sm:text-[10px] sm:py-0.5 sm:px-2"
                          >
                            <RiDeleteBin6Line className="mr-2 sm:mr-1" />
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-dark-color text-center underline text-xl mt-7 mb-5 font-semibold sm:text-lg">
                      Passengers
                    </h1>
                    <div className="text-center mt-10 text-slate-300 text-xl smxl:text-base sm2xl:text-sm">
                      No passengers yet
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center mt-10 text-slate-300 text-xl smxl:text-base sm2xl:text-sm">
                  Ride you published will appear here!
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
