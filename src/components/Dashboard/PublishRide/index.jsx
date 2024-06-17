import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import Numberinput from "../../../components/Numberinput.jsx";
import Autocomplete from "../../../components/Autocomplete.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";
import { useForm } from "react-hook-form";
import { setPublishRideData } from "../../../slices/rideSlice.js";

export default function Publishride() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile);

  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    setMinDate(formattedDate);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
    setValue,
  } = useForm();

  //handle submit
  const onSubmit = async (data) => {
    if (
      user?.ridePublished?.fromWhere !== "" &&
      user?.ridePublished?.toWhere !== ""
    ) {
      toast.error("Before publishing a new ride,\n delete the old one.");
      return;
    }

    const formData = new FormData();
    formData.append("fromWhere", data.fromWhere);
    formData.append("toWhere", data.toWhere);
    formData.append("date", data.date);
    formData.append("leavingTime", data.leavingTime);
    formData.append("reachingTime", data.reachingTime);
    formData.append("noOfSeats", data.noOfSeats);
    formData.append("price", data.price);
    const formDataObj = {};
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });

    // console.log(formDataObj);

    dispatch(setPublishRideData(formDataObj));
    navigate("addStopPoint");
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        fromWhere: "",
        toWhere: "",
        date: "",
        leavingTime: "",
        reachingTime: "",
        price: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div className="container h-full mb-24">
      <div className="upper h-40 w-full bg-light-color flex justify-center items-center">
        <h1 className="text-2xl w-2/3 font-medium leading-relaxed text-center text-dark-color md1:text-[20px]  sm:text-[17px] sm:w-[85%] smxl:text-[15px]">
          Become a EcoRide Driver and save on travel costs by sharing your rides
          with passengers.
        </h1>
      </div>
      <div className="form mt-14 sm:w-[80%] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form_container flex flex-col items-center">
            <div className="firstLine flex gap-16 mb-10 md1:flex-col md1:gap-10">
              <div className="fromWhere flex flex-col">
                <label
                  htmlFor="FromWhere"
                  className=" text-dark-color text-sm mb-1"
                >
                  From where :
                </label>
                <div className="border-2 border-medium-color rounded-md relative">
                  <div className="h-[10px] w-[10px] bg-medium-color rounded-full absolute top-[19px] left-[10px] z-10  smxl:h-2 smxl:w-2 smxl:top-[17px] smxl:left-3"></div>
                  <Autocomplete
                    callback={(data) => console.log("Selected option: ", data)}
                    options={{ placeholder: "Starting location" }}
                    register={register("fromWhere")}
                    onValueChange={(value) => setValue("fromWhere", value)}
                  />
                </div>
              </div>
              <div className="toWhere flex flex-col">
                <label
                  htmlFor="toWhere"
                  className="text-sm text-dark-color mb-1"
                >
                  To where :
                </label>
                <div className="border-2 border-medium-color rounded-md relative">
                  <div className="h-[10px] w-[10px] bg-medium-color rounded-full absolute top-[19px] left-[10px] z-10  smxl:h-2 smxl:w-2 smxl:top-[17px] smxl:left-3"></div>
                  <Autocomplete
                    callback={(data) => console.log("Selected option: ", data)}
                    options={{ placeholder: "Destination" }}
                    register={register("toWhere")}
                    onValueChange={(value) => setValue("toWhere", value)}
                  />
                </div>
              </div>
            </div>
            <div className="secondLine flex items-center gap-16 mb-12 md1:flex-col md1:gap-10">
              <div className="date flex flex-col">
                <label htmlFor="Date" className="text-sm mb-1 text-dark-color">
                  When are you going :
                </label>
                <input
                  id="date"
                  type="date"
                  {...register("date", { required: true })}
                  min={minDate}
                  className="border border-2 border-medium-color rounded-md w-[16rem] h-[48px] px-4 bg-white rounded-[4px] sm2xl:w-[14rem] smxl:w-[16rem] md1:w-[22rem]"
                />
                {errors.date && (
                  <span className="ml-1 text-xs tracking-wide text-red-400">
                    Required!
                  </span>
                )}
              </div>
              <div className="leavingTime flex flex-col">
                <label
                  htmlFor="leavingTime"
                  className="text-sm text-dark-color mb-1"
                >
                  Leaving time :
                </label>
                <input
                  id="leavingTime"
                  type="time"
                  {...register("leavingTime", { required: true })}
                  className="w-[12rem] h-[48px] border-2 border-medium-color rounded-md px-4 sm2xl:w-[14rem]  smxl:w-[16rem] md1:w-[22rem]"
                />
                {errors.leavingTime && (
                  <span className="ml-1 text-xs tracking-wide text-red-400">
                    Required!
                  </span>
                )}
              </div>
              <div className="reachingTime flex flex-col">
                <label
                  htmlFor="reachingTime"
                  className="mb-1 text-sm text-dark-color"
                >
                  Reaching time :
                </label>
                <input
                  id="reachingTime"
                  type="time"
                  {...register("reachingTime", { required: true })}
                  className="h-[48px] w-[12rem] border-medium-color border-2 rounded-md px-4 sm2xl:w-[14rem] smxl:w-[16rem] md1:w-[22rem]"
                />
                {errors.reachingTime && (
                  <span className="ml-1 text-xs tracking-wide text-red-400">
                    Required!
                  </span>
                )}
              </div>
            </div>
            <div className="thirdLine flex flex-wrap justify-center gap-20 mb-16 md1:gap-14 smxl:flex-col sm:gap-10">
              <div className="noOfSeats flex flex-col">
                <label
                  htmlFor="NumberOfSeates"
                  className="mb-1 text-sm text-dark-color"
                >
                  No. of seats :
                </label>
                <div className="border border-2 border-medium-color rounded-md">
                  <Numberinput
                    register={register("noOfSeats", {
                      valueAsNumber: true,
                    })}
                    onValueChange={(value) => setValue("noOfSeats", value)}
                  />
                </div>
              </div>

              <div className="pricePerSeat flex flex-col">
                <label
                  htmlFor="PricePerSeat"
                  className="mb-1 text-sm text-dark-color"
                >
                  Price of 1 Seat :
                </label>
                <input
                  id="price"
                  type="number"
                  min="0"
                  max="5000"
                  placeholder="In Rupees"
                  {...register("price", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  className="px-2 h-[44px] w-[12rem] border-medium-color border-2 rounded-md sm2xl:w-[14rem]  smxl:w-[16rem] md1:w-[12rem]"
                />
                {errors.price && (
                  <span className="ml-1 text-xs tracking-wide text-red-400">
                    Required
                  </span>
                )}
              </div>
            </div>
            <button className="bg-dark-color text-lg text-white flex w-52 py-2 justify-center items-center gap-5 rounded-full cursor-pointer">
              Proceed
              <span>
                <GrFormNextLink className="text-3xl" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
