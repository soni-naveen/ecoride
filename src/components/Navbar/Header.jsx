import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import Profilemenu from "./Profilemenu";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const handleClickPageTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <>
      <div className="navBar max-w-[1800px] m-auto bg-white sticky h-[70px] top-0 shadow-md flex justify-between items-center px-8 z-10 w-full smxl:pl-0 smxl:h-[60px] smxl:pr-3 sm:pr-4 sm:px-0 md:pl-0 md:pr-4 md1:pl-0 md1:pr-4 lg:pl-2 lg:pr-6">
        <div className="logo smxl:ml-0 md:ml-2 md1:ml-6">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="cursor-pointer min-w-[6.5rem] w-[200px] smxl:w-[140px] sm:w-[150px] md:w-[170px] md1:w-[170px]"
            />
          </Link>
        </div>
        <div className="flex gap-20 items-center sm2xl:gap-0 smxl:gap-4 md:gap-8 md1:gap-10 lg:gap-14">
          <div>
            <Link to="/searchride" onClick={handleClickPageTop}>
              <button className="text-dark-color font-medium text-lg flex items-center">
                <SearchIcon className="mr-3 stroke-dark-color sm:mr-2" />
                <div className="smxl:hidden md1:text-[16px]">
                  Search <span className="md:hidden"> Ride</span>
                </div>
              </button>
            </Link>
          </div>
          <div className="navLinks flex justify-between items-center gap-6 sm2xl:gap-0 smxl:gap-4 md1:gap-5">
            {token === null && (
              <Link to="/signup">
                <button className="text-dark-color py-1 px-6 text-md border-2 font-medium hover:border-dark-color border-dark-color rounded-full sm2xl:border-none smxl:border smxl:px-2.5 smxl:py-1 smxl:text-xs smxl:font-medium sm:px-3.5 md1:text-sm md1:px-4">
                  SignUp
                </button>
              </Link>
            )}
            {token === null && (
              <Link to="/login">
                <button className="text-white bg-dark-color border-2 border-dark-color font-medium py-[5px] px-8 rounded-full text-md sm2xl:py-[2px] smxl:px-4 smxl:text-xs smxl:font-normal smxl:py-[3px] sm:px-5 md1:text-sm md1:px-[25px]">
                  Login
                </button>
              </Link>
            )}
            {user && (
              <button className="text-dark-color text-lg flex items-center mr-7 md1:mr-3 md:mr-3">
                <ControlPointIcon className="mr-3 sm:mr-2" />
                <div className="smxl:hidden md1:text-[16px]">
                  Publish <span className="md:hidden">Ride</span>
                </div>
              </button>
            )}
            {token !== null && <Profilemenu />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
