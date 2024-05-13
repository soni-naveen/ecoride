import React from "react";
import { IoMdChatboxes } from "react-icons/io";
import two from "../assets/Team/two.jpg";
import one from "../assets/Team/one.jpg";
import three from "../assets/Team/three.jpg";
import four from "../assets/Team/four.jpg";
import { MdVerified } from "react-icons/md";
import { FaStar } from "react-icons/fa";
function Seeridecard(props) {
  return (
    <div className="rideCard flex flex-col justify-between bg-white p-4 rounded-xl shadow-lg mb-4 w-full  max-w-xl h-48 ml-48 lg:max-w-lg md1:max-w-md smxl:max-w-xs z-0">
      <div className="timeSection flex justify-between">
        <div className="time flex gap-3">
          <div className="timeContainer flex flex-col gap-2 items-center">
            <h1 className=" font-bold text-dark-color">{props.startingTime}</h1>
            <h3 className=" font-light text-gray-400 text-xs">
              {props.duration}
            </h3>
            <h1 className=" font-bold text-dark-color">{props.endingTime}</h1>
          </div>
          <div className="divider mt-2">
            <div className="firstCircle w-2 h-2 bg-dark-color rounded-full"></div>
            <div className="line bg-medium-color h-12 w-0.5 ml-[3px]"></div>
            <div className="secondCircle w-2 h-2 bg-dark-color rounded-full"></div>
          </div>
          <div className="destinartion flex flex-col justify-between">
            <h1 className="text-dark-color">{props.staringLocation}</h1>
            <h1 className="text-dark-color">{props.endingLocation}</h1>
          </div>
        </div>
        <div className="price bg-light-color h-fit w-16 items-center flex justify-center">
          <h1>{props.price}</h1>
        </div>
      </div>
      <div className="ratingSection flex justify-around smxl:gap-8">
        <div className="left ml-10 flex gap-2">
          <div className="img">
            <img
              src={props.image}
              alt="naveen"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="name flex flex-col">
            <div className="flex gap-1">
              <div className="name text-dark-color smxl:hidden">
                {props.driverName}
              </div>
              <div className="name text-dark-color hidden smxl:block">
                {props.driverFirstName}
              </div>
              <div>
                <MdVerified className="mt-1 text-medium-color" />
              </div>
            </div>
            <div className="rating flex gap-2">
              <div className="star mt-1">
                <FaStar />
              </div>
              <div className="ratingRecived text-dark-color">
                {props.rating}
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <button className="flex justify-evenly items-center border rounded-md border-medium-color w-44 h-8 smxl:w-24 smxl:justify-center smxl:gap-2">
            <div className="icon mt-1">
              <IoMdChatboxes className="text-dark-color" />
            </div>
            <div className="name text-dark-color ">
              Contact{" "}
              <span className="smxl:hidden">{props.driverFirstName}</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Seeridecard;
