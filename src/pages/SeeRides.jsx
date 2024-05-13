import React, { useState } from "react";
import Seeridecard from "../components/SeeRidesCard";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import two from "../assets/Team/two.jpg";
import one from "../assets/Team/one.jpg";
import three from "../assets/Team/three.jpg";
import four from "../assets/Team/four.jpg";

function Seerides() {
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [departureTimeFilters, setDepartureTimeFilters] = useState([]);
  const [verifiedProfile, setVerifiedProfile] = useState(false);

  const handleSortOptionChange = (event) => {
    setSelectedSortOption(event.target.value);
  };

  const handleDepartureTimeFilterChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setDepartureTimeFilters([...departureTimeFilters, value]);
    } else {
      setDepartureTimeFilters(
        departureTimeFilters.filter((filter) => filter !== value)
      );
    }
  };

  const handleVerifiedProfileChange = (event) => {
    setVerifiedProfile(event.target.checked);
  };

  const clearFilters = (filterType) => {
    if (filterType === "sortBy") {
      setSelectedSortOption("");
    } else if (filterType === "departureTime") {
      setDepartureTimeFilters([]);
    } else if (filterType === "trustAndSafety") {
      setVerifiedProfile(false);
    }
  };

  return (
    <div className="min-h-screen w-full">
      {/* Header Section */}
      <div className="header h-24 w-full flex justify-center items-center fixed top-19 bg-dark-color  sm:flex-col sm:justify-around z-5 md:flex-col sm:gap-0 gap-5 md:h-32">
        <span className="text-white mr-4 flex md:w-full justify-evenly sm:justify-around sm2xl:text-sm">
          Showing results for :
          <TbAdjustmentsHorizontal className="hidden md:block text-2xl text-white mx-5 sm:ml-4 sm2xl:text-xl" />
        </span>
        <div className="flex items-center sm:w-[90%]">
          <div className="resultRide w-[500px] bg-light-color flex justify-center items-center h-12 sm:w-full">
            <span className="text-dark-color mr-2 font-bold smxl:text-sm sm2xl:text-xs">
              Tomorrow :
            </span>
            <span className="smxl:text-sm sm2xl:text-xs">
              Starting <span className="smxl:hidden">----</span>-&gt;
              destination
            </span>
            <span className="text-dark-color ml-2 font-bold smxl:text-sm sm2xl:text-xs">
              &#40;___km&#41;
            </span>
          </div>
        </div>
      </div>

      <div className="bottom flex h-screen">
        <div className="leftSide w-1/4 fixed top-[10rem] left-0 gap-5 flex flex-col p-4 border-r border-medium-color lg:w-[300px] md:hidden">
          {/* ... (remaining code for left side filters) */}
          <div className="filterHeading">
            <h1 className="font-bold text-xl text-center text-dark-color">
              Add Filters
            </h1>
          </div>
          {/* Sort By section */}
          {/* Code for Sort By section */}
          <div className="sortBy flex flex-col items-center justify-between bg-light-color w-[320px] h-[120px] p-4 2xl:w-[240px]">
            <div className="head w-full">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-dark-color font-semibold">Sort By</h2>
                <button
                  className="text-dark-color font-semibold text-xs"
                  onClick={() => clearFilters("sortBy")}
                >
                  Clear all
                </button>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="lowestPrice"
                    className="text-dark-color text-sm"
                  >
                    Lowest Price
                  </label>
                  <input
                    type="radio"
                    id="lowestPrice"
                    name="sortOption"
                    value="lowestPrice"
                    checked={selectedSortOption === "lowestPrice"}
                    onChange={handleSortOptionChange}
                    className="form-radio text-dark-color"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="shortestRide"
                    className="text-dark-color text-sm"
                  >
                    Shortest Ride
                  </label>
                  <input
                    type="radio"
                    id="shortestRide"
                    name="sortOption"
                    value="shortestRide"
                    checked={selectedSortOption === "shortestRide"}
                    onChange={handleSortOptionChange}
                    className="form-radio text-dark-color"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Departure Time section */}
          {/* Code for Departure Time section */}
          <div className="departureTime bg-light-color w-[320px] h-[185px] p-4 2xl:w-[240px]">
            <div className="head w-full">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-dark-color font-semibold">
                  Departure Time
                </h2>
                <button
                  className="text-dark-color font-semibold text-xs"
                  onClick={() => clearFilters("departureTime")}
                >
                  Clear all
                </button>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="before6am"
                    className="text-dark-color text-sm"
                  >
                    Before 6:00am
                  </label>
                  <input
                    type="checkbox"
                    id="before6am"
                    name="departureTimeFilters"
                    value="before6am"
                    checked={departureTimeFilters.includes("before6am")}
                    onChange={handleDepartureTimeFilterChange}
                    className="form-checkbox text-dark-color"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="6amTo12pm"
                    className="text-dark-color text-sm"
                  >
                    6:00am-12:00pm
                  </label>
                  <input
                    type="checkbox"
                    id="6amTo12pm"
                    name="departureTimeFilters"
                    value="6amTo12pm"
                    checked={departureTimeFilters.includes("6amTo12pm")}
                    onChange={handleDepartureTimeFilterChange}
                    className="form-checkbox text-dark-color"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="12pmTo6pm"
                    className="text-dark-color text-sm"
                  >
                    12:01pm-6:00pm
                  </label>
                  <input
                    type="checkbox"
                    id="12pmTo6pm"
                    name="departureTimeFilters"
                    value="12pmTo6pm"
                    checked={departureTimeFilters.includes("12pmTo6pm")}
                    onChange={handleDepartureTimeFilterChange}
                    className="form-checkbox text-dark-color"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="after6pm" className="text-dark-color text-sm">
                    After 06:00pm
                  </label>
                  <input
                    type="checkbox"
                    id="after6pm"
                    name="departureTimeFilters"
                    value="after6pm"
                    checked={departureTimeFilters.includes("after6pm")}
                    onChange={handleDepartureTimeFilterChange}
                    className="form-checkbox text-dark-color"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Trust and Safety section */}
          <div className="trustSafety bg-light-color w-[320px] h-[90px] p-4 2xl:w-[240px]">
            <div className="head w-full">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-dark-color font-semibold">
                  Trust And Safety
                </h2>
                <button
                  className="text-dark-color font-semibold text-xs"
                  onClick={() => clearFilters("trustAndSafety")}
                >
                  Clear all
                </button>
              </div>

              <div className="flex items-center justify-between">
                <label
                  htmlFor="verifiedProfile"
                  className="text-dark-color text-sm"
                >
                  Verified Profiles
                </label>
                <input
                  type="checkbox"
                  id="verifiedProfile"
                  name="verifiedProfile"
                  checked={verifiedProfile}
                  onChange={handleVerifiedProfileChange}
                  className="form-checkbox text-blue-500"
                />
              </div>
            </div>
          </div>
          <div className="div flex justify-center items-center">
            <button className="bg-dark-color text-white px-4 py-2 rounded-full mt-3 w-1/2">
              Apply
            </button>
          </div>
        </div>

        <div className="rightSide w-3/4 mt-36 h-fit flex flex-col items-center ml-36 overflow-y-auto md:w-[800px] md:ml-[-200px] -z-10 ">
          {/* Ride cards will be rendered here */}
          <Seeridecard
            startingTime="05:30am"
            duration="4h50m"
            endingTime="10:30pm"
            staringLocation="Delhi"
            endingLocation="Chandigarh"
            price="₹ 540/-"
            driverName="Naveen Soni"
            rating="4.8"
            driverFirstName="Naveen"
            image={two}
          />
          <Seeridecard
            startingTime="07:30am"
            duration="2h10m"
            endingTime="9:40pm"
            staringLocation="Chitkara University"
            endingLocation="Meerut"
            price="₹ 300/-"
            driverName="Mukul Kumar"
            rating="4.5"
            driverFirstName="Mukul"
            image={one}
          />
          <Seeridecard
            startingTime="12:00pm"
            duration="1h20m"
            endingTime="01:20pm"
            staringLocation="Chitkara University"
            endingLocation="Chandigarh"
            price="₹ 150/-"
            driverName="Manav Gupta"
            rating="4.6"
            driverFirstName="Manav"
            image={four}
          />
          <Seeridecard
            startingTime="05:30pm"
            duration="0h30m"
            endingTime="06:00pm"
            staringLocation="Patiala"
            endingLocation="Rajpura"
            price="₹ 50/-"
            driverName="Muskan Verma"
            rating="4.2"
            driverFirstName="Muskan"
            image={three}
          />
        </div>
      </div>
    </div>
  );
}

export default Seerides;
