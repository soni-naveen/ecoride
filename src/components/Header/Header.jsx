import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import BasicMenu from "./Profilemenu";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

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
      <div className="navBar bg-white sticky h-20 top-0 flex justify-between items-center px-12 ">
        <div className="logo ml-8">
          <img src={Logo} alt="Logo" className=" cursor-pointer w-1/2" />
        </div>
        <div className="flex gap-20 items-center">
          <div>
            <button className="text-dark-color font-normal text-lg flex items-center">
              <SearchIcon className="mr-3 stroke-dark-color " />
              Search ride 
            </button>
          </div>
          <div className="navLinks flex justify-between items-center gap-6">
            {!isLoggedIn && (
              <>
                <Link to="/signup">
                  <button
                    className="text-dark-color py-0.5 px-6 text-md border-solid border-2 border-dark-color rounded-full "
                    onClick={signupPopup}
                  >
                    Sign Up
                  </button>
                </Link>
                <Link to="/login">
                  <button
                    className="text-white bg-dark-color py-1 px-8 rounded-full text-md"
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
      {showLogin && (
        <Login
          onLogin={() => setIsLoggedIn(true)}
        />
      )}
      {showSignUp && <Signup closeModel={() => setShowSignUp(false)} />}
    </>
  );
};

export default Header;
