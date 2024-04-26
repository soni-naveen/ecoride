import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import BasicMenu from "./Profilemenu";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleClickPageTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const loginPopup = () => {
    setShowLogin(true);
  };

  const signupPopup = () => {
    setShowSignUp(true);
  };
  const handleLogin = () => {
    setIsLoggedIn(true);
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
        <div className="flex gap-20 items-center sm2xl:gap-0 smxl:gap-4 md:gap-5 md1:gap-10 lg:gap-14">
          <div>
            <Link to="/searchride" onClick={handleClickPageTop}>
              <button className="text-dark-color font-medium text-lg flex items-center">
                <SearchIcon className="mr-3 stroke-dark-color smxl:mr-0 sm:mr-0" />
                <div className="sm:hidden md1:text-[16px]">Search ride</div>
              </button>
            </Link>
          </div>
          <div className="navLinks flex justify-between items-center gap-6 sm2xl:gap-0 smxl:gap-4 md1:gap-5">
            {!isLoggedIn && (
              <>
                <Link to="/signup">
                  <button
                    className="text-dark-color py-1 px-6 text-md border-2 font-medium hover:border-dark-color border-dark-color rounded-full sm2xl:border-none smxl:border smxl:px-2.5 smxl:py-1 smxl:text-xs smxl:font-medium sm:px-3.5 md1:text-sm md1:px-4"
                    onClick={signupPopup}
                  >
                    SignUp
                  </button>
                </Link>
                <Link to="/login">
                  <button
                    className="text-white bg-dark-color border-2 border-dark-color font-medium py-[5px] px-8 rounded-full text-md sm2xl:py-[2px] smxl:px-4 smxl:text-xs smxl:font-normal smxl:py-[3px] sm:px-5 md1:text-sm md1:px-[25px]"
                    onClick={loginPopup}
                  >
                    Login
                  </button>
                </Link>
              </>
            )}
            {isLoggedIn && (
              <>
                <button className="text-dark-color text-lg flex items-center">
                  <ControlPointIcon className="mr-3 fill" />
                  Publish Ride
                </button>
                <BasicMenu />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
