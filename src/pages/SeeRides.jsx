import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";
import { getSearchedRides } from "../services/operations/RideAPI";
import RideFilter from "../components/RideFilter";
import seeridesimage from "../assets/seeridesimage.jpg";
import Seeridecard from "../components/SeeRidesCard";
import DateFormatter from "../components/Dateformatter";
import Spinner from "../components/Loader";

function Seerides() {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);

  const st = urlParams.get("st");
  const dt = urlParams.get("dt");
  const date = urlParams.get("date");
  const seats = urlParams.get("seats");

  // Function to validate date format
  const isValidDate = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) {
      return false;
    }
    const dateObj = new Date(dateString);
    return dateObj instanceof Date && !isNaN(dateObj);
  };

  useEffect(() => {
    if (
      st == null ||
      dt == null ||
      date == null ||
      seats == null ||
      seats == 0 ||
      st.trim() == "" ||
      dt.trim() == "" ||
      date == "" ||
      seats.trim() == "" ||
      !isValidDate(date)
    ) {
      navigate("/searchride");
    }
  });

  const [rides, setRides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const findRides = await getSearchedRides(st, dt, date, seats);
        setRides(findRides.data);
      } catch (error) {
        console.error("Could not fetch Rides", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [st, dt, date, seats]);

  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [departureTimeFilters, setDepartureTimeFilters] = useState([]);
  const [verifiedProfile, setVerifiedProfile] = useState(false);
  const [isRideFilterVisible, setIsRideFilterVisible] = useState(false);

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

  const handleFilter = () => {
    setIsRideFilterVisible(true);
  };

  const handleClose = () => {
    setIsRideFilterVisible(false);
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
    <div className="max-w-[1800px] mx-auto">
      {/*=============== HEADER PART ==================*/}
      <div className="header h-20 w-full max-w-[1800px] flex justify-center items-center z-10 fixed top-19 gap-5 lg:gap-3 bg-dark-color md:flex-col md:gap-2 md:h-28 smxl:h-24">
        <div className="text-white text-xl flex items-center justify-around gap-3 w-fit lg:text-lg md:justify-between md:w-[73%] sm:justify-between sm:w-[82%] md:text-[16px] smxl:text-sm">
          <span>Showing rides for :</span>
          <button
            onClick={handleFilter}
            className="hidden md:flex gap-2 px-3 py-1.5 sm:py-1 rounded-full items-center bg-[#306f82]"
          >
            <span className="text-sm sm:text-xs">Filter</span>{" "}
            <TbAdjustmentsHorizontal className="text-xl text-white sm:text-lg" />
          </button>
        </div>
        <div className="flex justify-center gap-5 items-center md:w-[75%] sm:w-[85%]">
          <button
            onClick={() => navigate("/searchride")}
            className="resultRide rounded-md w-fit px-10 bg-white flex justify-center items-center h-12 md:w-full lg:px-8 md:px-5 smxl:flex-col smxl:items-start sm:px-2 smxl:h-10"
          >
            <div className="mr-2 font-bold text-sm smxl:ml-2 smxl:text-xs">
              <DateFormatter inputDateString={date} />
            </div>
            <div className="flex items-center text-sm gap-2 smxl:ml-2 smxl:gap-1 smxl:text-xs">
              <div className="max-w-48 truncate lg:max-w-32 sm2xl:max-w-24">
                {st}
              </div>
              <FaArrowRightLong className="text-xl md:text-xl sm:text-base" />
              <div className="max-w-48 truncate lg:max-w-32 sm2xl:max-w-24">
                {dt}
              </div>
            </div>
          </button>
          <button
            onClick={handleFilter}
            className="hidden xl:flex md:hidden gap-2 px-3 py-2 rounded-full items-center bg-[#306f82]"
          >
            <span className="text-sm text-white">Filter</span>{" "}
            <TbAdjustmentsHorizontal className="text-xl text-white" />
          </button>
        </div>
      </div>

      {/*=============== BOTTOM PART =================*/}
      {loading ? (
        <div className="grid min-h-[calc(100vh-100px)] place-items-center">
          <Spinner />
        </div>
      ) : rides.length === 0 ? (
        <div className="grid min-h-[calc(100vh-100px)] place-items-center">
          <div className="flex items-center flex-col text-slate-400 text-3xl sm:text-2xl smxl:text-xl sm2xl:text-base">
            <img
              draggable="false"
              src={seeridesimage}
              className="opacity-40 max-w-xl sm:max-w-md smxl:max-w-xs sm2xl:max-w-60"
            />
            No rides for this search!
          </div>
        </div>
      ) : (
        <div className="bottom w-full h-fit flex">
          <div className="flex w-[80%] justify-around 2xl:w-[85%] xl:w-full xl:justify-center lg:justify-around">
            {/*=========== LEFT SIDE ==========*/}
            <div className="leftSide h-fit sticky top-36 left-5 overflow-scroll px-10 py-5 border-r-2 mt-20 gap-4 flex flex-col xl:hidden">
              <div className="filterHeading">
                <div className="font-bold text-lg text-center text-dark-color">
                  Add Filters
                </div>
              </div>
              {/*-------------------------------------- Sort By section */}
              <div className="sortBy flex flex-col items-center justify-between bg-light-color w-[320px] h-[120px] p-4 xl:w-[270px] lg:w-[240px]">
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
              <div className="departureTime bg-light-color w-[320px] h-[185px] p-4 xl:w-[270px] lg:w-[240px]">
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
                      <label
                        htmlFor="after6pm"
                        className="text-dark-color text-sm"
                      >
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
              <div className="trustSafety bg-light-color w-[320px] h-[90px] p-4 xl:w-[270px] lg:w-[240px]">
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
                <button
                  onClick={() => {
                    alert("This feature is not available yet...");
                  }}
                  className="bg-dark-color text-white w-1/2 py-2 rounded-full mt-3"
                >
                  Apply
                </button>
              </div>
            </div>

            {/*========== RIGHT SIDE ==========*/}
            <div className="rightSide mt-28 mb-14 md:mt-36 smxl:mt-32 flex flex-col gap-8 items-center">
              {rides.map((ride) => (
                <Seeridecard
                  key={ride._id}
                  rideId={ride._id}
                  profile={ride.profile}
                  profileId={ride.profile._id}
                  fromWhere={ride.fromWhere}
                  toWhere={ride.toWhere}
                  leaving={ride.leavingTime}
                  reaching={ride.reachingTime}
                  price={ride.price}
                  firstName={ride.profile.firstName}
                  lastName={ride.profile.lastName}
                  image={ride.profile.image}
                  overallRating={ride.profile.overallRating}
                  govtId={ride.profile.govtId}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {isRideFilterVisible && <RideFilter onClose={handleClose} />}
    </div>
  );
}

export default Seerides;
