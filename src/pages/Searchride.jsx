import React from "react";
import Map from "../components/Map.jsx";
import Calender from "../components/Calender.jsx";
import Numberinput from "../components/Numberinput.jsx";
import Autocomplete from "../components/Autocomplete.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import carpooling from "../assets/Carpooling.jpg";

function Searchride() {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();

  //handle submit
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("fromWhere", data.fromWhere);
    formData.append("toWhere", data.toWhere);
    formData.append("date", data.date);
    formData.append("noOfSeats", data.noOfSeats);

    navigate(
      `/search?st=${data.fromWhere}&dt=${data.toWhere}&date=${data.date}&seats=${data.noOfSeats}`
    );

    // console.log(formData.get("fromWhere"));
    // for (const [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }
  };

  return (
    <div className="max-w-[1800px] mx-auto">
      <div className="absolute h-[350px] w-full max-w-[1800px] bg-light-color"></div>
      <div
        className="mapSection flex flex-col justify-center items-center gap-10 mb-4 h-auto
          md:gap-1 md:mb-1 xl:flex-col xl:items-center"
      >
        <div className="left mt-20 flex flex-col ">
          <p className="text-dark-color font-medium ml-3 mb-3 text-xl smxl:text-[1.1rem] smxl:mb-3 smxl:ml-3 z-[2]">
            Find your ride and go!
          </p>
          <div className="mb-10 relative flex gap-20 items-center p-10 rounded-xl bg-dark-color xl:gap-16 lg:p-12 smxl:p-9 sm2xl:p-7">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="locations text-center flex flex-col pl-5 gap-10 smxl:gap-8 lg:pl-0"
            >
              <Autocomplete
                callback={(data) => console.log("Selected option: ", data)}
                options={{ placeholder: "Starting location" }}
                register={register("fromWhere")}
                onValueChange={(value) => setValue("fromWhere", value)}
              />
              <Autocomplete
                callback={(data) => console.log("Selected option: ", data)}
                options={{ placeholder: "Destination" }}
                register={register("toWhere")}
                onValueChange={(value) => setValue("toWhere", value)}
              />

              <div className="connectinglines flex flex-col items-center absolute top-[5rem] left-[4.5rem] sm2xl:top-[2.8rem] sm2xl:left-[2.4rem] smxl:left-[2.9rem] smxl:top-[3.3rem] lg:left-[3.7rem] lg:top-[4.2rem]">
                <div className="bg-medium-color h-2.5 w-2.5 rounded-lg"></div>
                <div className="bg-medium-color h-[4.7rem] w-0.5 smxl:h-[3.9rem]"></div>
                <div className="bg-medium-color h-2.5 w-2.5 rounded-lg"></div>
              </div>
              {/* calender and number input */}
              <div className="flex justify-between items-center smxl:flex-col smxl:gap-5 smxl:mt-0">
                <div className="flex flex-col items-start text-xs">
                  <p className="text-white mb-1 ml-1">Select date :</p>
                  <Calender
                    register={register}
                    onValueChange={(value) => setValue("date", value)}
                  />
                </div>
                <div className="flex flex-col items-start text-xs">
                  <p className="text-white mb-1 ml-1">No. of seats :</p>
                  <Numberinput
                    register={register("noOfSeats", {
                      valueAsNumber: true,
                    })}
                    onValueChange={(value) => setValue("noOfSeats", value)}
                  />
                </div>
              </div>

              {/* See rides and map button */}
              <div className="mt-4 flex justify-between sm2xl:mt-0 smxl:mt-1">
                <button className="bg-medium-color active:bg-[#05a195] py-3 text-white w-[45%] font-medium rounded-full sm2xl:text-xs smxl:text-sm smxl:py-3">
                  SEE RIDES
                </button>
                <a
                  href="https://www.google.com/maps/dir///"
                  target="_blank"
                  className="bg-dark-color border py-3 text-white w-[45%] rounded-full hover:cursor-pointer sm2xl:text-xs smxl:text-sm smxl:py-3"
                >
                  View <span className="smxl:hidden">full</span> map
                </a>
              </div>
            </form>
            <img
              draggable="false"
              src={carpooling}
              alt="Carpooling"
              className="h-[380px] w-[470px] object-contain bg-white rounded-md xl:w-[400px] lg:hidden"
            />
          </div>
        </div>
        <div className="right z-0 mb-10">
          <p className="text-dark-color mb-3 text-xl md:hidden">
            ► Search on map to see full route
          </p>
          <div className="right w-[800px] h-[550px] bg-light-color rounded-md md:hidden 2xl:w-[700px]">
            <Map />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Searchride;
