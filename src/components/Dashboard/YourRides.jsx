import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  deleteRide,
  deleteRideAutomatically,
} from "../../services/operations/RideAPI";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import dayjs from "dayjs";

export default function YourRides() {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("published");

  const inputDateString = user?.ridePublished?.date;
  const date = new Date(inputDateString);
  const monthNames = [
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
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const outputDateString = `${day} ${month} ${year}`;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  async function handleDeleteRide() {
    try {
      const confirmDelete = await Swal.fire({
        title: "Are You Sure?",
        text: "You lost your passengers when you delete this ride",
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

  useEffect(() => {
    const checkAndDeleteRide = () => {
      const currDate = dayjs().format("YYYY-MM-DD");
      const currTime = dayjs().format("HH:mm");

      const rideDate = user?.ridePublished?.date;
      const rideTime = user?.ridePublished?.leavingTime;

      if (rideDate === currDate && rideTime === currTime) {
        dispatch(deleteRideAutomatically(token));
      }
    };

    const intervalId = setInterval(checkAndDeleteRide, 30000);

    return () => clearInterval(intervalId);
  }, [dispatch, token, user?.ridePublished]);

  return (
    <div className="container mx-auto">
      <div className="bg-white">
        <div className="mt-7 flex justify-center border-b shadow border-gray-200 sm:mt-2 md:mt-5">
          <button
            className={`text-lg font-semibold p-3 w-[300px] text-center md:w-[200px] md1:w-[250px] sm:text-lg smxl:text-base ${
              activeTab === "booked"
                ? "text-dark-color border-b-2 border-b-medium-color"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("booked")}
          >
            Booked
          </button>
          <div className="inline-block border-r-2 border-solid border-medium-color h-[30px] mx-24 mt-4 mb-2 md1:mx-16 sm:mx-8 sm:mb-1 smxl:mx-3"></div>
          <button
            className={`text-xl font-semibold p-3 w-[300px] text-center md:w-[200px] md1:w-[250px] sm:text-lg smxl:text-base ${
              activeTab === "published"
                ? "text-dark-color border-b-2 border-b-medium-color"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("published")}
          >
            Published
          </button>
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
                  <div className="flex items-center justify-evenly mt-3 border-b md1:flex-col md1:gap-7">
                    <div className="rideCard flex flex-col justify-between bg-white rounded-md w-fit py-10 px-5 z-0 sm:py-5">
                      <div className="flex justify-between gap-10 mb-7 sm:gap-5 smxl:flex-col smxl:gap-7">
                        <div className="time flex gap-4">
                          <div className="timeContainer flex flex-col justify-between items-center">
                            <h1 className="font-bold text-dark-color sm:text-xs">
                              {user?.ridePublished?.leavingTime}
                            </h1>
                            <h1 className="font-bold text-dark-color sm:text-xs">
                              {user?.ridePublished?.reachingTime}
                            </h1>
                          </div>
                          <div className="divider py-2 sm:py-1">
                            <div className="firstCircle w-2.5 h-2.5 bg-dark-color rounded-full"></div>
                            <div className="line bg-medium-color h-24 w-0.5 ml-[4px] sm:h-[75px]"></div>
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
                            className="flex items-center text-sm border border-red-400 text-red-500 font-medium px-3 py-1.5 rounded-sm duration-200 hover:bg-red-100 hover:border-red-100 sm:text-[10px] sm:py-0.5 sm:px-2"
                          >
                            <RiDeleteBin6Line className="mr-2 sm:mr-1" />
                            Delete
                          </button>
                        </div>
                      </div>
                      <div className="RideDetails max-w-[500px] text-sm sm:text-xs">
                        <h1 className="text-lg font-medium underline text-medium-color sm:text-sm">
                          Ride details
                        </h1>
                        <div className="mt-2">
                          <span className="font-medium">Date : </span>
                          {outputDateString}
                        </div>
                        <div>
                          <span className="font-medium">Seats :</span>{" "}
                          {user?.ridePublished?.noOfSeats}
                        </div>
                        {user?.ridePublished?.stopPoint1 === "" &&
                        user?.ridePublished?.stopPoint2 === "" &&
                        user?.ridePublished?.stopPoint1 === "" ? (
                          <div>
                            <div className="font-semibold">Stop Points :</div>
                            <div>No stop point added!</div>
                          </div>
                        ) : (
                          <div>
                            <span className="font-semibold">Stop Points :</span>{" "}
                            <div>
                              {user?.ridePublished?.stopPoint1 !== "" ? (
                                <div>{user?.ridePublished?.stopPoint1}</div>
                              ) : (
                                <div></div>
                              )}
                              {user?.ridePublished?.stopPoint2 !== "" ? (
                                <div>{user?.ridePublished?.stopPoint2} </div>
                              ) : (
                                <div></div>
                              )}
                              {user?.ridePublished?.stopPoint3 !== "" ? (
                                <div>{user?.ridePublished?.stopPoint3} </div>
                              ) : (
                                <div></div>
                              )}
                            </div>
                          </div>
                        )}
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
