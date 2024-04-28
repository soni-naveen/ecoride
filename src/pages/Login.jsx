import React, { useRef, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link, useNavigate } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import Home from "./Home";
import GoogleIcon from "@mui/icons-material/Google";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { login } from "../services/operations/AuthAPI";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };

  // Redirect to home after clicking outside the model
  // we just maintained two useRef one for container and other for the cross button as soon as the use
  // clicked the parent div outside the pop up window it will trigger the cross button to be clicked and the pop up window will be closed

  const modelRef = useRef();
  const button = useRef();

  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      button.current.click();
    }
  };
  return (
    <>
      <div
        ref={modelRef}
        onClick={closeModel}
        className="fixed inset-0 bg-black bg-opacity-85 backdrop-blur-sm flex justify-center items-center z-20"
      >
        <div className="flex flex-col gap-3 text-white">
          <Link
            to={"/home"}
            ref={button}
            className=" place-self-end mr-4 sm2xl:place-self-center"
          >
            <button>
              <ClearIcon />
            </button>
          </Link>
          <div className=" bg-dark-color rounded-xl px-24 py-8 flex flex-col gap-5 items-center mx-4 smxl:py-8 smxl:px-10 sm:px-14">
            <h1 className=" text-3xl font-semibold mb-5 sm:mb-3 smxl:text-2xl smxl:mb-1">
              Login
            </h1>
            <button className="gap-2 flex items-center justify-center w-full rounded-md px-6 py-2.5 text-white mb-3 bg-[#225260] hover:bg-[#214d5b] sm:w-[250px] sm:mb-1">
              Continue with <GoogleIcon fontSize="small" />{" "}
              <ArrowForwardIcon fontSize="small" />
            </button>
            <div className="--or-- flex items-center justify-between my-1">
              <div className=" bg-white w-[120px] h-[0.5px] sm:w-[90px]"></div>
              <p className="text-sm px-5">or</p>
              <div className=" bg-white w-[120px] h-[0.5px] sm:w-[90px]"></div>
            </div>
            <form
              onSubmit={handleOnSubmit}
              className="flex w-full flex-col gap-y-4"
            >
              <label className="w-full">
                <p className="mb-1 text-xs leading-[1.375rem] text-richblack-5">
                  Email Address <sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                  placeholder="Enter email address"
                  className=" w-[300px] px-3 py-3 text-black rounded-md outline-none text-sm sm:w-[250px] sm:py-2.5"
                />
              </label>
              <label className="relative">
                <p className="mb-1 text-xs leading-[1.375rem] text-richblack-5">
                  Password <sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                  placeholder="Enter Password"
                  className=" w-[300px] px-3 py-3 text-black rounded-md outline-none text-sm sm:w-[250px] sm:py-2.5"
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </label>
              <Link
                to="/forgot-password"
                className=" font-light place-self-end text-xs underline -mt-3"
              >
                Forgot Password?
              </Link>
              <button className="w-[40%] place-self-center rounded-md bg-medium-color mt-5 py-1.5 text-white shadow-md font-semibold sm:mt-4">
                LOGIN
              </button>
              <div className="gotosignup flex flex-col justify-center items-start">
                <p className="text-xs font-normal mt-4">
                  Not a member yet? &nbsp;
                  <Link
                    to="/signup"
                    className=" text-medium-color text-xs underline"
                  >
                    Sign Up
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
}

export default Login;
