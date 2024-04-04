import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import Home from "./Home";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";

const Signup = (onSignup) => {
  const [showPassword1, setShowPassword1] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);

  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-10">
        <div className="flex flex-col gap-3 text-white">
          <Link to={"/home"} className="place-self-end mr-4 sm2xl:place-self-center">
            <button>
              <ClearIcon />
            </button>
          </Link>
          <div className=" bg-dark-color rounded-xl px-24 py-8 flex flex-col gap-5 items-center mx-4 smxl:py-6 smxl:px-8 sm:px-14 ">
            <h1 className=" text-3xl font-semibold mb-5 sm:mb-3 smxl:text-2xl smxl:mb-1">Sign Up</h1>
            <button className="gap-2 flex items-center justify-center w-full rounded-md px-6 py-2.5 text-white mb-3 bg-[#225260] hover:bg-[#214d5b] sm:w-[250px] sm:mb-1">
              Continue with <GoogleIcon fontSize="small" />{" "}
              <ArrowForwardIcon fontSize="small" />
            </button>
            <div className="flex items-center justify-between my-1">
              <div className=" bg-white w-[120px] h-[0.5px] sm:w-[90px]"></div>
              <p className="text-sm px-5">or</p>
              <div className=" bg-white w-[120px] h-[0.5px] sm:w-[90px]"></div>
            </div>
            <form className=" flex flex-col gap-5">
              <div className="email flex flex-col gap-1">
                <h6 className="text-sm font-light">Email</h6>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className=" w-[300px] px-3 py-3 text-black rounded-md outline-none text-sm sm:w-[250px] sm:py-2.5"
                />
              </div>
              <div className="password flex flex-col gap-1">
                <h6 className="text-sm font-light">Password</h6>
                <Input
                  disableUnderline
                  placeholder="password"
                  required="true"
                  sx={{
                    fontSize: 15,
                  }}
                  className="w-full px-3 py-1.5 text-black rounded-md outline-none bg-white sm:py-1"
                  type={showPassword1 ? "text" : "password"}
                  endAdornment={
                    <InputAdornment className="mr-2">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword1}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword1 ? (
                          <VisibilityOff fontSize="small" />
                        ) : (
                          <Visibility fontSize="small" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </div>
              <div className="confirm password flex flex-col gap-1">
                <h6 className="text-sm font-light">Confirm password</h6>
                <Input
                  disableUnderline
                  placeholder="confirm password"
                  required="true"
                  sx={{
                    fontSize: 15,
                  }}
                  className="w-full px-3 py-1.5 text-black rounded-md outline-none bg-white sm:py-1"
                  type={showPassword2 ? "text" : "password"}
                  endAdornment={
                    <InputAdornment className="mr-2">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword2}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword2 ? (
                          <VisibilityOff fontSize="small" />
                        ) : (
                          <Visibility fontSize="small" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </div>
              <button className="w-[40%] place-self-center rounded-md bg-medium-color mt-7 py-1.5  text-white shadow-md font-semibold rounded-md sm:mt-5">
                <Link to="/verification" className="tracking-[1px]">
                  SIGNUP
                </Link>
              </button>
              <div className="flex flex-col justify-center items-start">
                <p className="text-xs font-normal mt-4">
                  Already a member? &nbsp;
                  <Link
                    to="/login"
                    className=" text-medium-color text-xs underline"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Home />
    </>
  );
};
export default Signup;
