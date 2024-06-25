import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import dayjs from "dayjs";
import DateFormatter from "../Dateformatter";
import {
  deleteRide,
  autoDeleteRide,
  cancelBookedRide,
  getRideDetails,
} from "../../services/operations/RideAPI";

export default function YourRides() {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const urlParams = new URLSearchParams(window.location.search);

  const yourRidesType = urlParams.get("type");

  const [activeTab, setActiveTab] = useState(`${yourRidesType}`);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`/dashboard/yourRides?type=${tab}`);
  };

  const [loading, setLoading] = useState(true);
  const [ride, setRide] = useState(null);

  const rideId = user?.ridePublished._id;

  useEffect(() => {
    (async () => {
      try {
        const rideDetails = await getRideDetails(rideId);
        setRide(rideDetails.data);
      } catch (error) {
        console.error("Could not fetch Ride Details", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [rideId]);

  async function handleCancelBookedRide() {
    try {
      const confirmDelete = await Swal.fire({
        title: "Cancel this ride?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Confirm",
        focusCancel: true, // Set the default focus to Cancel button
      });

      if (confirmDelete.isConfirmed) {
        dispatch(
          cancelBookedRide(token, user?.rideBooked?.ride?._id, navigate)
        );
      }
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  }

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

  async function handleConfirmPassenger() {
    try {
      try {
        dispatch(confirmPassengerBooking(token));
      } catch (error) {
        console.log("ERROR MESSAGE - ", error.message);
      }
    } catch (error) {}
  }

  async function handleCancelConfirmedPassenger() {
    try {
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
          dispatch(cancelConfirmedPassengerBooking(token));
        }
      } catch (error) {
        console.log("ERROR MESSAGE - ", error.message);
      }
    } catch (error) {}
  }

  async function handleCancelPendingPassenger() {
    try {
      try {
        dispatch(cancelPendingPassengerBooking(token));
      } catch (error) {
        console.log("ERROR MESSAGE - ", error.message);
      }
    } catch (error) {}
  }

  useEffect(() => {
    const checkAndDeleteRide = () => {
      const currDate = dayjs().format("YYYY-MM-DD");
      const currTime = dayjs().format("HH:mm");

      const rideDate = user?.ridePublished?.date;
      const rideTime = user?.ridePublished?.reachingTime;

      if (
        rideDate !== "" &&
        rideTime !== "" &&
        rideDate <= currDate &&
        rideTime <= currTime
      ) {
        dispatch(autoDeleteRide(token));
      }
    };
    checkAndDeleteRide();
  }, [user, dispatch, token]);

  return (
    <div className="container mx-auto mb-10">
      <div>
        <div className="mt-1 flex justify-evenly items-center border-b shadow border-gray-200">
          <div
            className={`text-lg font-semibold w-full pt-4 pb-3 cursor-pointer text-center sm:text-lg smxl:text-base ${
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
            className={`text-lg font-semibold w-full pt-4 pb-3 cursor-pointer text-center sm:text-lg smxl:text-base ${
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
            <div>
              {user?.rideBooked?.ride?.fromWhere === "" ||
              user?.rideBooked?.ride?.fromWhere === null ||
              user?.rideBooked?.ride?.fromWhere === undefined ? (
                <div className="text-center mt-10 text-slate-300 text-xl smxl:text-base sm2xl:text-sm">
                  Ride you booked will appear here!
                </div>
              ) : (
                <div>
                  <div
                    onClick={() =>
                      navigate(`/bookride/${user?.rideBooked?.ride?._id}`)
                    }
                    className="mt-7 rounded-t-sm border cursor-pointer max-w-[600px] mx-auto sm:mt-5 sm:mx-3"
                  >
                    {/*============== DATE =========== */}
                    <div className="text-center pt-4 text-3xl font-bold text-dark-color sm:text-2xl sm2xl:text-xl">
                      <DateFormatter
                        inputDateString={user?.rideBooked?.ride?.date}
                      />
                    </div>
                    <div className="flex items-center justify-evenly">
                      {/*============== RIDE CARD ============ */}
                      <div className="flex flex-col max-w-[500px] justify-between rounded-md py-10 px-5 z-0 sm:py-5">
                        <div className="flex justify-between gap-10 sm:gap-5 smxl:flex-col smxl:gap-7">
                          <div className="time flex gap-4">
                            <div className="timeContainer flex flex-col justify-between items-center">
                              <h1 className="font-bold text-dark-color sm:text-xs sm2xl:text-[10px]">
                                {user?.rideBooked?.ride?.leavingTime}
                              </h1>
                              <h1 className="font-bold text-dark-color sm:text-xs sm2xl:text-[10px]">
                                {user?.rideBooked?.ride?.reachingTime}
                              </h1>
                            </div>
                            <div className="divider py-1">
                              <div className="firstCircle w-2.5 h-2.5 bg-dark-color rounded-full"></div>
                              <div className="line bg-medium-color min-h-24 h-[calc(100%-20px)] w-0.5 ml-[4px] sm:min-h-20"></div>
                              <div className="secondCircle w-2.5 h-2.5 bg-dark-color rounded-full"></div>
                            </div>
                            <div className="destination text-sm w-full gap-5 flex flex-col justify-between sm:text-xs sm:leading-4 sm2xl:text-[10px]">
                              <h1 className="text-dark-color font-medium">
                                {user?.rideBooked?.ride?.fromWhere}
                              </h1>
                              <div>
                                {user?.rideBooked?.ride?.stopPoint1 === "" &&
                                user?.rideBooked?.ride?.stopPoint2 === "" &&
                                user?.rideBooked?.ride?.stopPoint1 === "" ? (
                                  <div></div>
                                ) : (
                                  <div className="text-medium-color flex flex-col gap-3">
                                    {user?.rideBooked?.ride?.stopPoint1 !==
                                    "" ? (
                                      <div>
                                        {user?.rideBooked?.ride?.stopPoint1}
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    {user?.rideBooked?.ride?.stopPoint2 !==
                                    "" ? (
                                      <div>
                                        {user?.rideBooked?.ride?.stopPoint2}{" "}
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    {user?.rideBooked?.ride?.stopPoint3 !==
                                    "" ? (
                                      <div>
                                        {user?.rideBooked?.ride?.stopPoint3}{" "}
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                )}
                              </div>
                              <h1 className="text-dark-color font-medium">
                                {user?.rideBooked?.ride?.toWhere}
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*============== PROFILE, STATUS, PRICE , CANCEL =========== */}
                  <div className="border-b border-x border-slate-200 bg-slate-100 py-3 mb-10 max-w-[600px] mx-auto flex items-center justify-evenly gap-5 sm:mb-7 sm:mx-3 sm2xl:flex-col sm2xl:gap-3">
                    <button
                      onClick={() =>
                        navigate(`/profile/${user?.rideBooked?.profile?._id}`)
                      }
                      className="flex items-center gap-1 text-base sm:text-xs"
                    >
                      <img
                        src={user?.rideBooked?.profile?.image}
                        alt="pic"
                        className="aspect-square bg-cover bg-center bg-[url('https://cdn-icons-png.flaticon.com/512/9385/9385289.png')] w-[30px] rounded-full object-cover sm:w-[20px]"
                      />
                      <p>{user?.rideBooked?.profile?.firstName}</p>
                    </button>
                    <div className="flex items-center gap-1 text-dark-color font-semibold text-lg sm:text-sm">
                      <MdOutlineWatchLater /> {user?.rideBooked?.rideStatus}
                    </div>
                    <div className="font-bold w-fit flex items-center rounded-sm text-xl text-dark-color py-1 px-3 sm:text-sm sm:px-2 sm:py-0.5">
                      <FaRupeeSign className="text-dark-color text-base sm:text-xs" />
                      {user?.rideBooked?.ride?.price}/-
                    </div>
                  </div>
                  <div className="flex justify-center w-full max-w-[600px] mx-auto">
                    <button
                      onClick={handleCancelBookedRide}
                      className="flex items-center text-dark-color gap-2 px-3 py-1 border border-dark-color rounded-full hover:bg-dark-color hover:text-white sm:text-sm"
                    >
                      <RxCross2 /> Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
          {activeTab === "published" && (
            <div>
              {user?.ridePublished?.fromWhere !== "" &&
              user?.ridePublished?.toWhere !== "" ? (
                <div>
                  <div className="bg-[#efffff] mt-7 rounded-t-sm max-w-[600px] mx-auto sm:mt-5 sm:mx-3">
                    {/*============== DATE =========== */}
                    <div className="text-center pt-4 text-3xl font-bold text-dark-color sm:text-2xl sm2xl:text-xl">
                      <DateFormatter
                        inputDateString={user?.ridePublished?.date}
                      />
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
                                      <div>
                                        {user?.ridePublished?.stopPoint1}
                                      </div>
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
                  </div>
                  {/*============== PRICE, SEATS, DELETE =========== */}
                  <div className="bg-light-color py-3 mb-10 max-w-[600px] mx-auto flex items-center justify-evenly gap-5 sm:mx-3 sm:mb-7 sm2xl:flex-col sm2xl:gap-3">
                    <div className="text-dark-color font-semibold text-lg sm:text-sm">
                      Seats left : {user?.ridePublished?.noOfSeats}
                    </div>
                    <div className="font-bold w-fit flex items-center rounded-sm text-xl text-dark-color py-1 px-3 sm:text-sm sm:px-2 sm:py-0.5">
                      <FaRupeeSign className="text-dark-color text-base sm:text-xs" />
                      {user?.ridePublished?.price}/-
                    </div>
                    <button
                      onClick={handleDeleteRide}
                      className="flex items-center text-sm font-medium px-2.5 py-1.5 rounded-sm duration-200  text-red-400 hover:text-red-500 bg-red-100 sm:text-[10px] sm:py-0.5 sm:px-1.5"
                    >
                      <AiFillDelete className="mr-1 sm:mr-1" />
                      Delete
                    </button>
                  </div>

                  {/*============== PASSENGERS =========== */}
                  <div className="w-full max-w-[600px] mx-auto">
                    <h1 className="text-dark-color text-center underline text-xl my-7 font-semibold sm:text-lg sm:my-6 smxl:my-5">
                      Passengers
                    </h1>
                    {loading ? (
                      <div className="grid min-h-[calc(100vh-100px)] place-items-center">
                        <div className="spinner"></div>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-5">
                        {ride?.confirmedPassengers?.length !== 0 ? (
                          <div className="flex flex-col gap-5">
                            {ride?.confirmedPassengers?.map(
                              (passenger, index) => (
                                <div
                                  key={index}
                                  className="p-5 flex items-center justify-between font-normal text-sm bg-slate-100 rounded-sm sm:text-xs sm:mx-2 sm:p-3 smxl:flex-col smxl:gap-3 sm2xl:text-[10px] sm2xl:p-2"
                                >
                                  <div className="flex items-center gap-3">
                                    <IoMdCheckmark className="text-base text-medium-color sm:text-sm sm2xl:text-[10px]" />
                                    <div className="smxl:place-self-start">
                                      <button
                                        onClick={() =>
                                          navigate(`/profile/${passenger?._id}`)
                                        }
                                        className="text-medium-color underline font-medium"
                                      >
                                        {passenger?.firstName}
                                      </button>{" "}
                                      is now traveling with you.
                                    </div>
                                  </div>
                                  <button>
                                    <RxCross2 className="text-base text-dark-color sm:text-sm sm2xl:text-[10px]" />
                                  </button>
                                </div>
                              )
                            )}
                          </div>
                        ) : (
                          ""
                        )}
                        {ride?.pendingPassengers?.length !== 0 ? (
                          <div className="flex flex-col gap-5">
                            {ride?.pendingPassengers?.map(
                              (passenger, index) => (
                                <div
                                  key={index}
                                  className="p-5 flex items-center justify-between border border-slate-300 font-normal text-sm rounded-sm sm:text-xs sm:mx-2 sm:p-3 smxl:flex-col smxl:gap-3 sm2xl:text-[10px] sm2xl:p-2"
                                >
                                  <div className="smxl:place-self-start">
                                    <button
                                      onClick={() =>
                                        navigate(`/profile/${passenger?._id}`)
                                      }
                                      className="text-medium-color underline font-medium"
                                    >
                                      {passenger?.firstName}
                                    </button>{" "}
                                    has requested to book your ride.
                                  </div>
                                  {/*============= BUTTONS =========== */}
                                  <div className="flex gap-5 sm:gap-3 smxl:mr-3 smxl:place-self-end">
                                    <button
                                      onClick={handleConfirmPassenger}
                                      className="flex gap-1 items-center bg-dark-color text-white border border-dark-color py-1 px-2 rounded-sm smxl:py-0 sm2xl:px-1"
                                    >
                                      <IoMdCheckmark className="text-base sm:text-sm sm2xl:text-[10px]" />
                                      <p className="sm:text-[10px] sm2xl:text-[8px]">
                                        Confirm
                                      </p>
                                    </button>
                                    <button
                                      onClick={handleCancelPendingPassenger}
                                      className="flex gap-1 items-center text-dark-color border border-dark-color py-1 px-2 rounded-sm sm2xl:py-0 sm2xl:px-1"
                                    >
                                      <RxCross2 className="text-base sm:text-sm sm2xl:text-[10px]" />
                                      <p className="sm:text-[10px] sm2xl:text-[8px]">
                                        Cancel
                                      </p>
                                    </button>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        ) : (
                          <div className="text-center my-5 text-slate-300 text-xl smxl:text-base sm2xl:text-sm">
                            No passengers yet
                          </div>
                        )}
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
      </div>
    </div>
  );
}
