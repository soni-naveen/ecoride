import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
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
      const rideTime = user?.ridePublished?.reachingTime;

      if (rideDate <= currDate && rideTime <= currTime) {
        dispatch(deleteRideAutomatically(token));
        return;
      }
    };

    const intervalId = setInterval(checkAndDeleteRide, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container mx-auto mb-10">
      <div>
        <div className="mt-1 flex justify-evenly items-center border-b shadow border-gray-200">
          <div
            className={`text-lg font-semibold w-full pt-4 pb-2 cursor-pointer text-center sm:text-lg smxl:text-base ${
              activeTab === "booked"
                ? "text-dark-color border-b-2  border-b-medium-color"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("booked")}
          >
            Booked
          </div>
          <div className="py-5 border-x border-slate-200"></div>
          <div
            className={`text-lg font-semibold w-full pt-4 pb-2 cursor-pointer text-center sm:text-lg smxl:text-base ${
              activeTab === "published"
                ? "text-dark-color border-b-2  border-b-medium-color"
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
                  {/*============== DATE =========== */}
                  <div className="text-center mt-7 text-3xl font-bold text-dark-color sm:text-2xl sm2xl:text-xl">
                    {outputDateString}
                  </div>
                  <div className="flex items-center justify-evenly">
                    {/*============== RIDE CARD ============ */}
                    <div className="flex flex-col max-w-[500px] justify-between rounded-md py-10 px-5 z-0 sm:py-5">
                      <div className="flex justify-between gap-10 sm:gap-5 smxl:flex-col smxl:gap-7">
                        <div className="time flex gap-4">
                          <div className="timeContainer flex flex-col justify-between items-center">
                            <h1 className="font-bold text-dark-color sm:text-xs sm2xl:text-[10px]">
                              {user?.ridePublished?.leavingTime}
                            </h1>
                            <h1 className="font-bold text-dark-color sm:text-xs sm2xl:text-[10px]">
                              {user?.ridePublished?.reachingTime}
                            </h1>
                          </div>
                          <div className="divider py-1">
                            <div className="firstCircle w-2.5 h-2.5 bg-dark-color rounded-full"></div>
                            <div className="line bg-medium-color min-h-24 h-[calc(100%-20px)] w-0.5 ml-[4px] sm:min-h-20"></div>
                            <div className="secondCircle w-2.5 h-2.5 bg-dark-color rounded-full"></div>
                          </div>
                          <div className="destination text-sm w-full gap-5 flex flex-col justify-between sm:text-xs sm:leading-4 sm2xl:text-[10px]">
                            <h1 className="text-dark-color font-medium">
                              {user?.ridePublished?.fromWhere}
                            </h1>
                            <div>
                              {user?.ridePublished?.stopPoint1 === "" &&
                              user?.ridePublished?.stopPoint2 === "" &&
                              user?.ridePublished?.stopPoint1 === "" ? (
                                <div></div>
                              ) : (
                                <div className="text-medium-color flex flex-col gap-3">
                                  {user?.ridePublished?.stopPoint1 !== "" ? (
                                    <div>{user?.ridePublished?.stopPoint1}</div>
                                  ) : (
                                    ""
                                  )}
                                  {user?.ridePublished?.stopPoint2 !== "" ? (
                                    <div>
                                      {user?.ridePublished?.stopPoint2}{" "}
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  {user?.ridePublished?.stopPoint3 !== "" ? (
                                    <div>
                                      {user?.ridePublished?.stopPoint3}{" "}
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              )}
                            </div>
                            <h1 className="text-dark-color font-medium">
                              {user?.ridePublished?.toWhere}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*============== PRICE, SEATS, DELETE =========== */}
                  <div className="border-y-2 py-3 mb-10 w-full max-w-[600px] mx-auto flex items-center justify-evenly gap-5">
                    <div className="text-dark-color font-semibold text-lg sm:text-sm">
                      Seats left : {user?.ridePublished?.noOfSeats}
                    </div>
                    <div className="font-bold w-fit flex items-center rounded-sm text-xl text-dark-color py-1 px-3 sm:text-sm sm:px-2 sm:py-0.5">
                      <FaRupeeSign className="text-dark-color text-base sm:text-xs" />
                      {user?.ridePublished?.price}/-
                    </div>
                    <button
                      onClick={handleDeleteRide}
                      className="flex items-center text-sm border border-red-400 text-red-500 font-medium px-3 py-1.5 rounded-sm duration-200 hover:bg-red-100 hover:border-red-100 sm:text-[10px] sm:py-0.5 sm:px-2"
                    >
                      <AiFillDelete className="mr-2 sm:mr-1" />
                      Delete
                    </button>
                  </div>

                  {/*============== PASSENGERS =========== */}
                  <div>
                    <h1 className="text-dark-color text-center underline text-xl mt-7 mb-5 font-semibold sm:text-lg">
                      Passengers
                    </h1>
                    <div className="text-center my-5 text-slate-300 text-xl smxl:text-base sm2xl:text-sm">
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
