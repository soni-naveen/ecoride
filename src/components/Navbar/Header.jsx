import React from "react";
import Logo from "../../assets/Logo.png";
import SmallLogo from "../../assets/smallLogo.png";
import Profilemenu from "./Profilemenu";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { token } = useSelector((state) => state.auth);

  const handleClickPageTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <>
      <div className="navBar max-w-[1800px] m-auto bg-white sticky h-[70px] top-0 shadow-md flex justify-between items-center px-8 z-20 w-full smxl:pl-0 sm:h-[60px] smxl:pr-3 sm:pr-4 sm:px-0 md:pl-0 md:pr-4 md1:pl-0 md1:pr-4 lg:pl-2 lg:pr-6">
        <div className="logo smxl:ml-0 md:ml-2 md1:ml-6">
          <Link to="/" onClick={handleClickPageTop}>
            <img
              src={Logo}
              alt="Logo"
              className="cursor-pointer sm2xl:hidden min-w-[6.5rem] w-[200px] smxl:w-[140px] sm:w-[150px] md:w-[170px] md1:w-[170px]"
            />
            <div className="border ml-5 p-1.5 sm2xl:flex hidden rounded-md border-light-color bg-light-color">
              <img
                src={SmallLogo}
                alt="Logo"
                className="cursor-pointer w-6 sm2xl:flex hidden mix-blend-multiply"
              />
            </div>
          </Link>
        </div>
        <div className="flex gap-16 items-center smxl:gap-5 md:gap-7 md1:gap-10 lg:gap-14">
          <div>
            <Link to="/searchride" onClick={handleClickPageTop}>
              <button className="text-dark-color hover:font-bold font-medium text-lg flex items-center sm:text-sm">
                <FaSearch className="mr-2 stroke-dark-color md1:text-base sm:mr-1.5 smxl:text-xl" />
                <div className="smxl:hidden md1:text-base">
                  Search <span className="md:hidden"> Ride</span>
                </div>
              </button>
            </Link>
          </div>
          <div className="navLinks flex justify-between items-center gap-6 md1:gap-5 smxl:gap-3">
            {token === null && (
              <Link to="/signup">
                <button className="text-dark-color py-1 px-6 border-2 font-medium hover:border-dark-color border-dark-color rounded-full sm:px-2.5 sm:text-xs smxl:border md1:text-sm md1:px-4">
                  SignUp
                </button>
              </Link>
            )}
            {token === null && (
              <Link to="/login">
                <button className="text-white bg-dark-color border-2 border-dark-color py-1 px-8 rounded-full sm:px-4 sm:text-xs sm:py-1 smxl:border md1:text-sm md1:px-[24px]">
                  Login
                </button>
              </Link>
            )}
            {token !== null && (
              <Link to="/dashboard/publishride">
                <button className="text-dark-color text-lg flex items-center mr-7 md1:mr-3 smxl:mr-2">
                  <IoMdAddCircleOutline
                    className="text-2xl mr-2 sm:mr-1.5 md1:text-xl smxl:text-[28px]"
                  />
                  <div className="hover:font-bold font-medium smxl:hidden md1:text-base">
                    Publish <span className="md:hidden">Ride</span>
                  </div>
                </button>
              </Link>
            )}
            {token !== null && <Profilemenu />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
