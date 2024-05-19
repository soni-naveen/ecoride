import React, { useState, useEffect } from "react";
import Numberinput from "../../../components/Numberinput.jsx";
import { GrFormNextLink } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

function Publishride() {
  const navigate = useNavigate();
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setMinDate(formattedDate);
  }, []);
  return (
    <div className="container h-full pb-10">
      <div className="upper h-40 w-full bg-light-color flex justify-center items-center">
        <h1 className="text-2xl w-2/3 font-medium leading-relaxed text-center text-dark-color md1:text-[20px]  sm:text-[17px] sm:w-[85%] smxl:text-[15px]">
          Become a EcoRide Driver and save on travel costs by sharing your rides
          with passengers.
        </h1>
      </div>
      <div className="form mt-14 sm:w-[80%] mx-auto">
        {/* <form> */}
        <div className="form_container flex flex-col items-center justify-center">
          <div className="firstLine flex gap-32 mb-10 md1:gap-20 sm:flex-col sm:gap-10">
            <div className="fromWhere flex flex-col">
              <label
                htmlFor="FromWhere"
                className=" text-dark-color text-sm mb-1"
              >
                From where
              </label>
              <input
                type="text"
                placeholder="e.g. Delhi"
                className="w-[17rem] h-[43px] border-medium-color border-2 rounded-md px-2 sm2xl:w-[15rem]"
              />
            </div>
            <div className="toWhere flex flex-col">
              <label htmlFor="toWhere" className="text-sm text-dark-color mb-1">
                To where
              </label>
              <input
                type="text"
                placeholder="e.g. Chandigarh"
                className=" px-2 w-[17rem] h-[43px] border-medium-color border-2 rounded-md sm2xl:w-[15rem]"
              />
            </div>
          </div>
          <div className="secondLine flex gap-32 mb-14 md1:gap-20 sm:flex-col sm:gap-10">
            <div className="date flex flex-col">
              <label htmlFor="Date" className="text-sm mb-1 text-dark-color">
                When are you going :
              </label>
              <input
                type="date"
                min={minDate}
                className="border border-2 border-medium-color rounded-md w-[17rem] h-[43px] px-4 bg-white rounded-[4px] sm2xl:w-[15rem] sm2xl:w-[243px]"
              />
            </div>
            <div className="departureTime flex flex-col">
              <label
                htmlFor="departureTime"
                className="text-sm text-dark-color mb-1"
              >
                Leaving time :
              </label>
              <input
                type="time"
                value="07:30"
                className="w-[17rem] h-[43px] border-2 border-medium-color rounded-md px-4 sm2xl:w-[15rem]"
              />
            </div>
          </div>
          <div className="thirdLine flex flex-wrap justify-center gap-20 mb-16 md1:gap-14 smxl:flex-col sm:gap-10">
            <div className="noOfSeats flex flex-col">
              <label
                htmlFor="NumberOfSeates"
                className="mb-1 text-sm text-dark-color"
              >
                No. of seats
              </label>
              <div className="border border-2 border-medium-color rounded-md">
                <Numberinput />
              </div>
            </div>
            <div className="journeyTime flex flex-col">
              <label
                htmlFor="journeyTime"
                className="mb-1 text-sm text-dark-color"
              >
                Journey Time
              </label>
              <input
                type="text"
                placeholder="e.g. 4h 22m"
                className="px-2 h-[42px] w-[9.5rem] border-medium-color border-2 rounded-md sm2xl:w-[14rem] smxl:w-[16rem]"
              />
            </div>
            <div className="pricePerSeat flex flex-col">
              <label
                htmlFor="PricePerSeat"
                className="mb-1 text-sm text-dark-color"
              >
                Price of 1 Seat
              </label>
              <input
                type="number"
                placeholder="e.g. Rs. 580/-"
                className="px-2 h-[42px] w-[9.5rem] border-medium-color border-2 rounded-md sm2xl:w-[14rem]  smxl:w-[16rem]"
              />
            </div>
          </div>
          <button
            onClick={() => navigate("addStopPoint")}
            className="bg-dark-color text-lg text-white flex w-52 py-2 justify-center items-center gap-5 rounded-full"
          >
            Proceed
            <span>
              <GrFormNextLink className="text-3xl" />
            </span>
          </button>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
}

export default Publishride;
