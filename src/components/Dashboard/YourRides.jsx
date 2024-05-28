import React, { useState } from "react";

export default function YourRides() {
  const [activeTab, setActiveTab] = useState("booked");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto">
      <div className="bg-white">
        <div className="mt-7 flex justify-center border-b shadow border-gray-200 sm:mt-2 md:mt-5">
          <div
            className={`text-lg font-semibold cursor-pointer p-3 w-[300px] text-center md:w-[200px] md1:w-[250px] sm:text-lg smxl:text-base ${
              activeTab === "booked"
                ? "text-dark-color border-b-2 border-b-medium-color"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("booked")}
          >
            Booked
          </div>
          <div className="inline-block border-r-2 border-solid border-medium-color h-[30px] mx-24 mt-4 mb-2 md1:mx-16 sm:mx-8 sm:mb-1 smxl:mx-3"></div>
          <div
            className={`text-xl font-semibold cursor-pointer p-3 w-[300px] text-center md:w-[200px] md1:w-[250px] sm:text-lg smxl:text-base ${
              activeTab === "published"
                ? "text-dark-color border-b-2 border-b-medium-color"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("published")}
          >
            Published
          </div>
        </div>
        <div>
          {activeTab === "booked" && <div></div>}
          {activeTab === "published" && <div></div>}
        </div>
      </div>
    </div>
  );
}
