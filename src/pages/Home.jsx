import React from "react";
import Banner from "../assets/Banner.png";

const Home = () => {
  return (
    <>
      <div className="mb-64">
        <img
          src={Banner}
          alt="Sharing rides building connections"
          className="w-screen h-full m-auto"
        />
        <div className="text-7xl font-bold text-dark-color mt-[-380px] ml-36 leading-snug w-1/3">
          Sharing rides, building connections
        </div>
      </div>
    </>
  );
};

export default Home;
