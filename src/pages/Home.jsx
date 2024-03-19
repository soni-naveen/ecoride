import React from "react";
import Banner from "../assets/Banner.jpg";

const Home = () => {
  return (
    <>
      <div className="mb-64">
        <img
          src={Banner}
          alt="Sharing rides building connections"
          className="w-full h-1/2 m-auto"
        />
        <div className="text-7xl font-bold text-dark-color mt-[-400px] ml-28 leading-snug w-1/3">
          Sharing rides, building connections
        </div>
      </div>
    </>
  );
};

export default Home;
