import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Stoppoint() {
  const navigate = useNavigate();
  const [stopPoints, setStopPoints] = useState([]);
  const [maxStopPoints] = useState(3);

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

  return (
    <div className="container h-full pb-10">
      <div className="upper h-40 w-full bg-light-color flex justify-center items-center">
        <h1 className="text-2xl w-2/3 font-medium leading-relaxed text-center text-dark-color md1:text-[20px]  sm:text-[17px] sm:w-[85%] smxl:text-[15px]">
          Become a EcoRide Driver and save on travel costs by sharing your rides
          with passengers.
        </h1>
      </div>
      <IoMdArrowRoundBack
        onClick={() => navigate(-1)}
        className="text-2xl m-5 ml-10 text-dark-color hover:cursor-pointer sm:ml-5"
      />
      <div className="buttonSection flex flex-col items-center gap-8 mt-10 mb-20">
        <button
          onClick={handleAddStopPoint}
          disabled={stopPoints.length >= maxStopPoints}
          className="text-base text-slate-400 px-4 py-2 border border-2 flex gap-3 justify-around items-center rounded-full hover:cursor-pointer"
        >
          <span>
            <IoMdAddCircleOutline className="text-slate-400 text-2xl" />
          </span>
          Add Stop Point
        </button>
        {stopPoints.map((stopPoint, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              placeholder="Enter location"
              value={stopPoint}
              onChange={(e) => handleStopPointChange(index, e.target.value)}
              className="w-[17rem] ml-5 h-[43px] border-2 border-medium-color rounded-md px-2 smxl:w-[15rem]"
            />
            {stopPoints.length > 0 && (
              <button onClick={() => handleRemoveStopPoint(index)}>
                <IoMdRemoveCircleOutline className="text-2xl text-dark-color" />
              </button>
            )}
          </div>
        ))}
        <button className="bg-dark-color text-lg mt-5 text-white flex w-52 py-2 justify-center items-center gap-5 rounded-full">
          Publish Ride
        </button>
      </div>
    </div>
  );
}

export default Stoppoint;
