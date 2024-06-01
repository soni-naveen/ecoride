import React from "react";
import Signup from "../assets/Howitworks/Signup.png";
import Completeprofile from "../assets/Howitworks/Completeprofile.png";
import Findride from "../assets/Howitworks/Findride.png";
import Offerride from "../assets/Howitworks/Offerride.png";
import Footer from "../components/Footer/Footer.jsx";

function Howitworks() {
  return (
    <>
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-dark-color sm:text-[26px] smxl:text-[23px] sm2xl:text-xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gray-500 mx-auto sm:text-sm sm:w-[75%] sm2xl:text-xs">
              Discover the easy steps to get started with our web app.
            </p>
          </div>

          <div className="my-10 sm:mt-12 lg:mt-16 grid grid-cols-2 gap-8 sm:grid-cols-1 lg:grid-cols-2">
            <div className="bg-white shadow-md rounded-lg overflow-hidden relative p-6">
              <img
                src={Signup}
                alt="Signup"
                className="object-cover h-auto rounded-lg md1:h-60 md:h-52 sm:h-60 smxl:h-48 sm2xl:h-40"
              ></img>
              <div className="p-6">
                <span className="absolute top-0 left-0 mt-4 ml-4 bg-medium-color text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  1
                </span>
                <h3 className="text-xl font-bold text-dark-color mb-2 smxl:text-lg">
                  Creating an account
                </h3>
                <p className="text-gray-500 smxl:text-sm">
                  Signing up on EcoRide is completely free! Sign up with your
                  email and password.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden relative p-6">
              <img
                src={Completeprofile}
                alt="Complete your profile"
                className="object-cover h-auto border border-gray-200 rounded-lg md1:h-60 md:h-52 sm:h-60 smxl:h-48 sm2xl:h-40"
              ></img>
              <div className="p-6">
                <span className="absolute top-0 left-0 mt-4 ml-4 bg-medium-color text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  2
                </span>
                <h3 className="text-xl font-bold text-dark-color mb-2 smxl:text-lg">
                  Complete your profile
                </h3>
                <p className="text-gray-500 smxl:text-sm">
                  After you sign up, we'll need a bit more info before you can
                  book a carpool, so make sure to complete your profile.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden relative p-6">
              <img
                src={Findride}
                alt="Find a ride"
                className="object-cover h-auto border border-gray-200 rounded-lg md1:h-60 md:h-52 sm:h-60 smxl:h-48 sm2xl:h-40"
              ></img>
              <div className="p-6">
                <span className="absolute top-0 left-0 mt-4 ml-4 bg-medium-color text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  3
                </span>
                <h3 className="text-xl font-bold text-dark-color mb-2 smxl:text-lg">
                  Find a ride
                </h3>
                <p className="text-gray-500 smxl:text-sm">
                  Enter your starting location, destination, travel date, and
                  number of seats you need, then choose a car owner going your
                  way. If you have a question, you can ask the car owner before
                  booking.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden relative p-6">
              <img
                src={Offerride}
                alt="Offer a ride"
                className="object-cover h-auto border border-gray-200 rounded-lg md1:h-60 md:h-52 sm:h-60 smxl:h-48 sm2xl:h-40"
              ></img>
              <div className="p-6">
                <span className="absolute top-0 left-0 mt-4 ml-4 bg-medium-color text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  4
                </span>
                <h3 className="text-xl font-bold text-dark-color mb-2 smxl:text-lg">
                  Offer a ride
                </h3>
                <p className="text-gray-500 smxl:text-sm">
                  Enter the pick-up and drop-off points, date and time, number
                  of seat available and your price per co-traveller. Give
                  specific pick-up and stop points, like a street or a station.
                  It'll help you get more passengers!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Howitworks;
