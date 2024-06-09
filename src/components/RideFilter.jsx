import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

// RideFilter Component
export default function RideFilter({ onClose }) {
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
    <div className="xl:flex hidden fixed overflow-auto inset-0 z-50 pt-16 flex justify-center items-center bg-black bg-opacity-80">
      <div className="bg-dark-color p-5 rounded-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-xl">Filters</h2>
          <button
            onClick={onClose}
            className="text-white font-semibold text-lg"
          >
            <RxCross1 />
          </button>
        </div>
        <div>
          {/*-------------------------------------- Sort By section */}
          <div className="sortBy flex flex-col items-center justify-between rounded-t-sm bg-light-color w-[320px] h-[120px] p-4 sm:w-[270px] sm2xl:w-[250px]">
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

          {/*-------------------------------------- Departure Time section */}
          <div className="departureTime bg-light-color w-[320px] h-[185px] p-4 sm:w-[270px] sm2xl:w-[250px]">
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

          {/*-------------------------------------- Trust and Safety section */}
          <div className="trustSafety bg-light-color w-[320px] rounded-b-sm h-[90px] p-4 sm:w-[270px] sm2xl:w-[250px]">
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
            <button className="border border-white mt-7 text-white w-1/2 py-1.5 rounded-full">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
