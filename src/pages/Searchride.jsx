import React from "react";
import Map from "../components/Map.jsx";
import Calender from "../components/Calender.jsx";
import Numberinput from "../components/Numberinput.jsx";
import AnimateLR from "../animations/AnimationLR.jsx";
import Autocomplete from "../components/Autocomplete.jsx";
import Autocomplete2 from "../components/Autocomplete2.jsx";

function Searchride() {
  return (
    <>
    <div className="absolute h-[300px] w-full bg-light-color">
    </div>
    <div
      className="mapSection flex flex-col justify-center items-center gap-10 h-auto md:h-[600px] md1:h-[1300px]
          xl:flex-col xl:h-[1300px] xl:items-center mb-4"
    >
      <div className="left mt-10 flex flex-col justify-center items-center ">
        <p className="text-dark-color ml-3 mb-3 text-2xl smxl:text-[1rem] smxl:ml-3 z-10">
          Request a ride and go
        </p>
        <div className="w-[28rem] h-[27rem] relative flex flex-col items-center p-14 rounded-2xl bg-dark-color sm2xl:w-[17rem] smxl:w-[20rem] sm2xl:p-10 smxl:h-[27rem] smxl:p-10">
          <form
            action="/"
            id="form"
            className="locations text-center flex flex-col gap-10"
          >
            <Autocomplete id="starting location"></Autocomplete>
            <Autocomplete2 id="destination"></Autocomplete2>

            <div className="connectinglines flex flex-col items-center absolute top-[4.7rem] left-[3.6rem] sm2xl:top-[3.5rem] sm2xl:left-[2.2rem] smxl:left-[2.7rem] smxl:top-[3.5rem]">
              <div className="bg-medium-color h-2.5 w-2.5 rounded-lg"></div>
              <div className="bg-medium-color h-[5rem] w-0.5 sm2xl:h-[4.5rem] smxl:h-[4.4rem]"></div>
              <div className="bg-medium-color h-2.5 w-2.5 rounded-lg"></div>
            </div>
            {/* calender and number input */}
            <div className="flex justify-between mt-4 items-center smxl:flex-col smxl:gap-8 smxl:mt-0">
              <Calender />
              <Numberinput />
            </div>

            {/* See rides and map button */}
            <div className="mt-4 flex justify-between sm2xl:mt-0 smxl:mt-1">
              <button className="bg-medium-color active:bg-[#05a195] py-3 text-white tracking-[1px] w-[45%] font-medium rounded-full sm2xl:text-xs sm2xl:py-2 smxl:text-sm smxl:py-3">
                SEE RIDES
              </button>
              <a
                href="../fullmap.html"
                target="_blank"
                className="bg-dark-color border py-3 text-white tracking-[1px] w-[45%] font-light rounded-full hover:cursor-pointer sm2xl:text-xs sm2xl:tracking-normal sm2xl:py-2 smxl:text-sm smxl:py-3"
              >
                View <span className="smxl:hidden">full</span> map
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="right z-0">
        <div className="right w-[800px] h-[550px] bg-light-color rounded-md md:hidden 2xl:w-[700px]">
          <Map />
        </div>
      </div>
    </div>
    </>
  );
}

export default Searchride;
