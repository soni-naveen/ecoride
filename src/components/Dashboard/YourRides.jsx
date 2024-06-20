import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";
import {
  deleteRide,
  deleteRideAutomatically,
  getRideDetails,
} from "../../services/operations/RideAPI";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import dayjs from "dayjs";

export default function YourRides() {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("published");
  const [ride, setRide] = useState(null);
  const [loading, setLoading] = useState(true);

  const inputDateString = ride?.date;
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

  const checkAndDeleteRide = () => {
    const currDate = dayjs().format("YYYY-MM-DD");
    const currTime = dayjs().format("HH:mm");

    const rideDate = ride?.date;
    const rideTime = ride?.reachingTime;

    if (
      rideDate != "" &&
      rideTime != "" &&
      rideDate <= currDate &&
      rideTime <= currTime
    ) {
      dispatch(deleteRideAutomatically(token));
      return;
    }
  };

  checkAndDeleteRide();

  useEffect(() => {
    (async () => {
      try {
        const rideDetails = await getRideDetails(user?.ridePublished?._id);
        setRide(rideDetails.data);
      } catch (error) {
        console.error("Could not fetch Ride Details", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [user?.ridePublished?._id]);

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
              {loading ? (
                <div className="grid min-h-[calc(100vh-100px)] place-items-center">
                  <div className="spinner"></div>
                </div>
              ) : (
                <div>
                  {ride?.fromWhere !== "" && ride?.toWhere !== "" ? (
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
                                  {ride?.leavingTime}
                                </h1>
                                <h1 className="font-bold text-dark-color sm:text-xs sm2xl:text-[10px]">
                                  {ride?.reachingTime}
                                </h1>
                              </div>
                              <div className="divider py-1">
                                <div className="firstCircle w-2.5 h-2.5 bg-dark-color rounded-full"></div>
                                <div className="line bg-medium-color min-h-24 h-[calc(100%-20px)] w-0.5 ml-[4px] sm:min-h-20"></div>
                                <div className="secondCircle w-2.5 h-2.5 bg-dark-color rounded-full"></div>
                              </div>
                              <div className="destination text-sm w-full gap-5 flex flex-col justify-between sm:text-xs sm:leading-4 sm2xl:text-[10px]">
                                <h1 className="text-dark-color font-medium">
                                  {ride?.fromWhere}
                                </h1>
                                <div>
                                  {ride?.stopPoint1 === "" &&
                                  ride?.stopPoint2 === "" &&
                                  ride?.stopPoint1 === "" ? (
                                    <div></div>
                                  ) : (
                                    <div className="text-medium-color flex flex-col gap-3">
                                      {ride?.stopPoint1 !== "" ? (
                                        <div>{ride?.stopPoint1}</div>
                                      ) : (
                                        ""
                                      )}
                                      {ride?.stopPoint2 !== "" ? (
                                        <div>{ride?.stopPoint2} </div>
                                      ) : (
                                        ""
                                      )}
                                      {ride?.stopPoint3 !== "" ? (
                                        <div>{ride?.stopPoint3} </div>
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                  )}
                                </div>
                                <h1 className="text-dark-color font-medium">
                                  {ride?.toWhere}
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*============== PRICE, SEATS, DELETE =========== */}
                      <div className="border-y-2 py-3 mb-10 w-full max-w-[600px] mx-auto flex items-center justify-evenly gap-5 sm:mb-7">
                        <div className="text-dark-color font-semibold text-lg sm:text-sm">
                          Seats left : {ride?.noOfSeats}
                        </div>
                        <div className="font-bold w-fit flex items-center rounded-sm text-xl text-dark-color py-1 px-3 sm:text-sm sm:px-2 sm:py-0.5">
                          <FaRupeeSign className="text-dark-color text-base sm:text-xs" />
                          {ride?.price}/-
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
                      <div className="w-full max-w-[600px] mx-auto">
                        <h1 className="text-dark-color text-center underline text-xl my-7 font-semibold sm:text-lg sm:my-6 smxl:my-5">
                          Passengers
                        </h1>
                        {ride?.pendingPassengers?.length !== 0 ? (
                          <div className="flex flex-col gap-5">
                            {ride.pendingPassengers.map((passenger, index) => (
                              <div
                                key={index}
                                className="p-5 border flex items-center justify-between border-dark-color font-normal text-sm rounded-sm sm:text-xs sm:mx-2 sm:p-3 smxl:flex-col smxl:gap-3 sm2xl:text-[10px] sm2xl:p-2"
                              >
                                <button
                                  onClick={() =>
                                    navigate(`/profile/${passenger?._id}`)
                                  }
                                  className="smxl:place-self-start"
                                >
                                  <span className="text-medium-color underline font-medium">
                                    {passenger?.firstName}
                                  </span>{" "}
                                  has requested to book your ride.
                                </button>
                                {/*============= BUTTONS =========== */}
                                <div className="flex gap-5 sm:gap-3 smxl:mr-3 smxl:place-self-end">
                                  <button className="flex gap-1 items-center bg-dark-color text-white border border-dark-color py-1 px-2 rounded-sm smxl:py-0 sm2xl:px-1">
                                    <IoMdCheckmark className="text-base sm:text-sm sm2xl:text-[10px]" />
                                    <p className="sm:text-[10px] sm2xl:text-[8px]">
                                      Confirm
                                    </p>
                                  </button>
                                  <button className="flex gap-1 items-center text-dark-color border border-dark-color py-1 px-2 rounded-sm sm2xl:py-0 sm2xl:px-1">
                                    <RxCross2 className="text-base sm:text-sm sm2xl:text-[10px]" />
                                    <p className="sm:text-[10px] sm2xl:text-[8px]">
                                      Cancel
                                    </p>
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center my-5 text-slate-300 text-xl smxl:text-base sm2xl:text-sm">
                            No passengers yet
                          </div>
                        )}
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
          )}
        </div>
      </div>
    </div>
  );
}
