import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";
import { GrNext } from "react-icons/gr";
import { PiChatsFill } from "react-icons/pi";
import { MdVerified } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { toast } from "react-hot-toast";
import Error from "./Error";
import dayjs from "dayjs";
import Swal from "sweetalert2";
import "animate.css";
import {
  getRideDetails,
  sendBookRequest,
} from "../services/operations/RideAPI";

function BookRide() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const [ride, setRide] = useState(null);
  const { rideId } = useParams();

  const [loading, setLoading] = useState(true);
  const [sentLoading, setSentLoading] = useState(false);

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

  const inputDateString = ride?.date;
  const newDate = new Date(inputDateString);
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
  const day = newDate.getDate();
  const month = monthNames[newDate.getMonth()];
  const year = newDate.getFullYear();
  const outputDateString = `${day} ${month} ${year}`;

  const checkRideSendRequest = () => {
    const currTime = dayjs().format("HH:mm");
    const currDate = dayjs().format("YYYY-MM-DD");

    if (ride?.reachingTime <= currTime && ride?.date <= currDate) {
      toast.error("This ride is already arrived!");
      return;
    }
    if (!token || token === null || token === undefined) {
      navigate("/login");
      return;
    }
    if (ride?.profile?._id === user?.additionalDetails?._id) {
      toast.error("You cannot book your own ride");
      return;
    }

    dispatch(sendBookRequest(token, rideId));
    setSentLoading(true);
    if (!sentLoading) {
      Swal.fire({
        icon: "success",
        title: "Booking request sent successfully!",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
    }
  };

  return (
    <>
      {loading ? (
        <div className="grid min-h-[calc(100vh-100px)] place-items-center">
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          {ride?.fromWhere === "" || ride === undefined ? (
            <Error />
          ) : (
            <div>
              <div className="flex flex-col items-center pb-28 bg-slate-50">
                <div className="text-center px-5 flex items-center w-full max-w-[600px] mt-10 text-3xl font-bold text-dark-color sm:mt-7 sm:text-2xl sm2xl:text-xl">
                  <IoMdArrowRoundBack
                    onClick={() => navigate(-1)}
                    className="hover:cursor-pointer"
                  />
                  <div className="text-center w-full">{outputDateString}</div>
                </div>
                <div className="flex items-center justify-evenly">
                  {/*============== RIDE CARD ============== */}
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
                <div className="border-y-2 py-3 mb-2 w-full max-w-[600px] mx-auto flex items-center justify-between gap-5">
                  <div className="font-bold flex items-center w-full mx-5 justify-between rounded-sm text-xl text-dark-color py-1 px-3 sm:text-sm sm:px-2 sm:py-0.5">
                    <div className="font-medium">Price for 1 seat </div>
                    <div className="flex items-center">
                      <FaRupeeSign className="text-dark-color text-base sm:text-xs" />{" "}
                      {ride?.price}/-
                    </div>
                  </div>
                </div>

                {/*============== DRIVER PROFILE =========== */}
                <button
                  onClick={() => navigate(`/profile/${ride.profile._id}`)}
                  className="w-full max-w-[600px] flex items-center justify-between rounded-md px-5 py-3 mb-2 hover:bg-gray-200 duration-200"
                >
                  <div className="flex items-center gap-3 smxl:gap-2">
                    {/*====== IMAGE ====== */}
                    <div className="img">
                      <img
                        src={ride?.profile?.image}
                        className="rounded-full h-10 w-10 object-cover sm:h-8 sm:w-8 smxl:w-7 smxl:h-7 sm2xl:w-6 sm2xl:h-6"
                      />
                    </div>
                    {/*====== NAME ====== */}
                    <div className="name flex flex-col gap-1 smxl:gap-0">
                      <div className="flex text-dark-color items-center gap-1">
                        <div className="sm:text-sm sm2xl:text-xs">
                          {ride?.profile?.firstName}
                        </div>
                        <div className="sm:text-sm sm2xl:text-xs">
                          {ride?.profile?.lastName}
                        </div>
                        {/*========== VERIFIED OR NOT ========== */}
                        {ride?.profile?.govtId === null ||
                        ride?.profile?.govtId === "" ||
                        ride?.profile?.govtId === "Pending" ||
                        ride?.profile?.govtId === undefined ? (
                          <div></div>
                        ) : (
                          <div>
                            <MdVerified className="text-medium-color text-base sm:text-base smxl:text-sm" />
                          </div>
                        )}
                      </div>
                      {/*========== RATING ========== */}
                      <div className="rating flex items-center gap-2 sm:gap-1.5 sm2xl:gap-1">
                        <div className="star">
                          <FaStar className="text-sm sm:text-xs smxl:text-[10px] sm2xl:text-[8px]" />
                        </div>
                        <div className="ratingRecived text-dark-color sm:text-sm sm2xl:text-xs">
                          {ride?.profile?.overallRating === 0 ? (
                            <div className="text-[10px] sm2xl:text-[8px]">
                              No ratings yet
                            </div>
                          ) : (
                            ride?.profile?.overallRating
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <GrNext className="text-dark-color text-xl sm:text-lg sm2xl:text-base" />
                  </div>
                </button>
                <hr className="w-full max-w-[600px]" />
                <div className="w-full max-w-[600px] text-dark-color px-5 py-3 text-lg sm:text-sm sm2xl:text-xs">
                  Seats available :{" "}
                  <span className="font-bold">{ride?.noOfSeats}</span>
                </div>
                <hr className="w-full max-w-[600px]" />
                {/*============ CONTACT ========== */}
                <button
                  onClick={() =>
                    alert(`Contact Number : ${ride?.profile?.contactNumber}`)
                  }
                  className="w-full max-w-[600px] font-semibold px-5 py-4 flex gap-3 text-dark-color hover:bg-gray-200 duration-200"
                >
                  <PiChatsFill className="text-2xl sm:text-xl sm2xl:text-lg" />
                  <div className="sm:text-sm sm2xl:text-xs text-start">
                    Contact {ride?.profile?.firstName} for ride related question
                  </div>
                </button>
                <hr className="w-full max-w-[600px]" />
                <div className="w-full max-w-[600px] text-sm px-5 py-3 text-medium-color flex items-center gap-2 sm:text-xs sm2xl:text-[10px]">
                  <MdOutlineWatchLater className="text-base" />
                  <div>
                    Your booking won't be confirmed until the driver approves
                    your request
                  </div>
                </div>
                <hr className="w-full max-w-[600px]" />
                <div className="w-full max-w-[600px] px-5">
                  <h1 className="text-dark-color py-3 font-medium sm:text-sm sm2xl:text-xs">
                    {" "}
                    Co-travellers
                  </h1>
                  <p className="text-gray-300 sm:text-sm sm2xl:text-xs">
                    Not yet!
                  </p>
                </div>
              </div>
              {/*============ REQUEST TO BOOK BUTTON =========== */}
              <div className="bg-light-color fixed bottom-0 w-full">
                {sentLoading ||
                ride?.pendingPassengers.some(
                  (passenger) => passenger._id === user?.additionalDetails?._id
                ) ? (
                  <button className="mx-auto bg-dark-color my-4 text-lg text-white px-7 py-3 rounded-full flex items-center gap-2 sm:text-sm sm:px-6 sm2xl:text-xs">
                    <MdOutlineWatchLater className="text-lg sm:text-base sm2xl:text-sm" />
                    Requested
                  </button>
                ) : (
                  <button
                    onClick={() => checkRideSendRequest()}
                    className="mx-auto bg-medium-color my-4 text-lg text-white px-7 py-3 rounded-full flex items-center gap-2 sm:text-sm sm:px-6 sm2xl:text-xs"
                  >
                    Request to book
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default BookRide;
