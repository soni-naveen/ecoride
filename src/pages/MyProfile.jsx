import React, { useState } from "react";
import two from "../assets/Team/two.jpg";
import { GrNext } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCarRear } from "react-icons/fa6";
function Myprofile() {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const userName = "Naveen Soni";
  const email = "username@gmail.com";
  const phoneNumber = "+91 9876543210";
  return (
    <div className="container mx-auto my-8">
      <div className="bg-white">
        <div className="flex justify-center border-b border-gray-200">
          <div
            className={`text-lg font-semibold cursor-pointer  p-5 w-[250px] text-center ${
              activeTab === "about"
                ? "text-dark-color border-b-2 border-b-medium-color"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("about")}
          >
            About you
          </div>
          <div className="inline-block border-r-2 border-solid border-medium-color h-[30px] ml-32 mr-32 mt-5 md1:ml-16 md1:mr-16 sm:ml-5 sm:mr-5"></div>
          <div
            className={`text-xl font-semibold cursor-pointer  p-5 w-[250px] text-center ${
              activeTab === "account"
                ? "text-dark-color border-b-2 border-b-medium-color"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("account")}
          >
            Account
          </div>
        </div>
        <div className="px-6 py-4">
          {activeTab === "about" && (
            <div className=" min-h-screen sm:text-sm">
              <div className="max-w-xl mx-auto p-6 mt-8">
                <div className="flex mb-4 flex-col">
                  <button>
                    <div className="name_profile flex justify-between sm:gap-4">
                      <h1 className="text-2xl font-bold text-dark-color">
                        {userName}
                      </h1>
                      <div className="flex justify-center items-center gap-5">
                        <img
                          src={two}
                          alt="N"
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                        <GrNext className=" font-bold text-dark-color" />
                      </div>
                    </div>
                  </button>

                  <button className="bg-light-color text-white px-4 py-2 rounded w-1/2">
                    <div className="flex gap-5 sm:gap-2 smxl:gap-2 smxl:text-[10pxpx]">
                      <FaRegEdit className="mt-1 text-dark-color sm:mt-0 " />
                      <span className="text-dark-color sm:text-sm smxl:text-[8px]">
                        Edit Your Details
                      </span>
                    </div>
                  </button>
                </div>
                <hr />
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-2 text-dark-color mt-5">
                    Verify your profile
                  </h2>
                  <div className=" p-4 rounded-lg">
                    <div className="flex items-center mb-2 text-medium-color">
                      <span className="mr-2">
                        <IoAddCircleOutline />
                      </span>
                      <span>Verify your Govt. ID</span>
                    </div>
                    <div className="flex items-center mb-2 text-medium-color">
                      <span className="mr-2">
                        <HiOutlineMail />
                      </span>
                      <span>{email}</span>
                    </div>
                    <div className="flex items-center text-medium-color">
                      <span className="mr-2">
                        <FaPhoneAlt />
                      </span>
                      <span>{phoneNumber}</span>
                    </div>
                  </div>
                </div>
                <hr className=" bg-dark-color" />
                <div>
                  <h2 className="text-lg font-semibold mb-2 mt-5 text-dark-color">
                    About you
                  </h2>
                  <div className="flex items-center mb-2 text-dark-color">
                    <span className="mr-2">
                      <IoAddCircleOutline className=" text-xl" />
                    </span>
                    <button className="bg-light-color text-dark-color px-4 py-2 rounded">
                      Add bio
                    </button>
                  </div>
                  <div className="flex items-center text-dark-color">
                    <span className="mr-2">
                      <FaCarRear />
                    </span>
                    <button className="bg-light-color text-dark-color px-4 py-2 rounded">
                      Add vehicle
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "account" && (
            <div className=" min-h-screen">
              <div className="max-w-xl mx-auto p-6 mt-8">
                <div className="rating flex flex-col gap-5">
                  <button className="w-full">
                    <div className="flex justify-between">
                      <h1 className="text-bold">Rating Recived</h1>
                      <GrNext className=" font-bold text-dark-color" />
                    </div>
                  </button>
                  <button className="w-full">
                    <div className="flex justify-between">
                      <h1 className="text-bold">Rating Given</h1>
                      <GrNext className=" font-bold text-dark-color" />
                    </div>
                  </button>
                </div>
                <hr className="mt-5" />
                <div className="details_changing flex flex-col gap-5 mt-5">
                  <button className="w-full">
                    <div className="flex justify-between">
                      <h1 className="text-bold">Add/Change Profile Photo</h1>
                      <GrNext className=" font-bold text-dark-color" />
                    </div>
                  </button>
                  <button className="w-full">
                    <div className="flex justify-between">
                      <h1 className="text-bold">Change Password</h1>
                      <GrNext className=" font-bold text-dark-color" />
                    </div>
                  </button>
                  <button className="w-full">
                    <div className="flex justify-between">
                      <h1 className="text-bold">Help Center</h1>
                      <GrNext className=" font-bold text-dark-color" />
                    </div>
                  </button>
                </div>
                <hr className="mt-5" />
                <div className="logout_deleteaccount flex flex-col gap-5 mt-5">
                  <button>
                    <div className="flex w-full">
                      <h1 className="text-bold text-medium-color">Logout</h1>
                    </div>
                  </button>
                  <button>
                    <div className="flex w-full">
                      <h1 className="text-bold text-rose-700">
                        Delete My Account
                      </h1>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Myprofile;
