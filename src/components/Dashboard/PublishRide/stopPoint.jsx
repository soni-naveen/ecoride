import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdAddCircleOutline, IoMdArrowRoundBack } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import Autocomplete from "../../Autocomplete";
import { useForm, Controller } from "react-hook-form";
import { createRide } from "../../../services/operations/RideAPI.js";

export default function stopPoint() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { publishRideData, loading } = useSelector((state) => state.ride);

  const handleClickPageTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const [stopPoints, setStopPoints] = useState([]);
  const maxStopPoints = 3;

  const { register, handleSubmit, control, setValue } = useForm();

  const handleAddStopPoint = () => {
    if (stopPoints.length < maxStopPoints) {
      setStopPoints([...stopPoints, ""]);
    }
  };

  const handleRemoveStopPoint = (index) => {
    const newStopPoints = stopPoints.filter((_, i) => i !== index);
    setStopPoints(newStopPoints);
  };

  const handleStopPointChange = (index, value) => {
    const newStopPoints = [...stopPoints];
    newStopPoints[index] = value;
    setStopPoints(newStopPoints);
  };

  useEffect(() => {
    // Only allow access of this route when user has filled the publish ride form
    if (!publishRideData) {
      navigate("/dashboard/publishride");
    }
  }, []);

  //handle submit
  const onSubmit = async () => {
    const stopPointData = new FormData();

    stopPoints.forEach((stopPoint, index) => {
      stopPointData.append(`stopPoint${index + 1}`, stopPoint);
    });

    const stopPointDataObj = {};
    stopPointData.forEach((value, key) => {
      stopPointDataObj[key] = value;
    });

    // console.log(stopPointDataObj);

    dispatch(createRide(publishRideData, stopPointDataObj, token, navigate));
  };

  return (
    <div>
      {loading ? (
        <div className="grid min-h-[calc(100vh-100px)] place-items-center">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="container h-[calc(100vh-130px)] mb-5">
          <div className="upper h-40 w-full bg-light-color flex justify-center items-center">
            <h1 className="text-2xl w-2/3 font-medium leading-relaxed text-center text-dark-color md1:text-[20px] sm:text-[17px] sm:w-[85%] smxl:text-[15px]">
              Adding stop locations allows you to attract more passengers on the
              route you travel.
            </h1>
          </div>
          <div className="flex items-center">
            <IoMdArrowRoundBack
              onClick={() => navigate(-1)}
              className="text-2xl mt-5 mb-3 ml-10 text-dark-color hover:cursor-pointer sm:ml-5"
            />
          </div>
          <p className="text-center smxl:text-sm">
            You can add up to 3 stop points
          </p>
          <div className="buttonSection flex flex-col items-center gap-8 mt-5">
            <button
              onClick={handleAddStopPoint}
              disabled={stopPoints.length >= maxStopPoints}
              className="text-base text-slate-400 px-4 py-2 border border-2 flex gap-3 justify-around items-center rounded-full hover:cursor-pointer hover:bg-slate-100 active:border-slate-200 active:bg-slate-200 hover:border-slate-100 duration-300"
            >
              <span>
                <IoMdAddCircleOutline className="text-slate-400 text-2xl" />
              </span>
              Add Stop Point
            </button>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center"
            >
              {stopPoints.map((stopPoint, index) => (
                <div key={index} className="flex gap-2 mb-6 ml-7">
                  <div className="border-2 border-medium-color rounded-md relative">
                    <div className="h-[10px] w-[10px] bg-medium-color rounded-full absolute top-[19px] left-[10px] z-10 smxl:h-2 smxl:w-2 smxl:top-[17px] smxl:left-3"></div>
                    <Controller
                      name={`stopPoint${index + 1}`}
                      control={control}
                      render={() => (
                        <Autocomplete
                          options={{ placeholder: "Enter location" }}
                          callback={(data) =>
                            console.log("Selected option: ", data)
                          }
                          onValueChange={(value) => {
                            setValue(`stopPoint${index + 1}`, value);
                            handleStopPointChange(index, value);
                          }}
                          register={register(`stopPoint${index + 1}`)}
                          value={stopPoint}
                        />
                      )}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveStopPoint(index)}
                  >
                    <TiDelete className="text-3xl text-red-400" />
                  </button>
                </div>
              ))}
              <button
                type="submit"
                className="bg-dark-color text-lg mt-5 text-white flex w-52 py-2 justify-center items-center gap-5 rounded-full"
              >
                Publish
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
