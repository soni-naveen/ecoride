import React, { useState, useRef } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import GoogleIcon from "@mui/icons-material/Google";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { useDispatch } from "react-redux";
// import { toast } from "react-hot-toast";
// import { sendOtp } from "../../../services/operations/authAPI";
// import { setSignupData } from "../../../slices/authSlice";

function Signup() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const [passAlert, setPassAlert] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { email, password, confirmPassword } = formData;

  // Closing Pop on clicking outside of the popup explanation in the login page as both of them use same funcanality

  const modelRef = useRef();
  const button = useRef();

  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      button.current.click();
    }
  };

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    // if(e.target.name === "password" && e.target.value.length<8) {
    //   setPassAlert("Must be 8");
    // }
  };

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault();
    //const password = {password};
    if (password.length < 8) {
      setPassAlert("Password must be of at least eight characters");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match");
      return;
    }
    const signupData = {
      ...formData,
      accountType,
    };

    // Setting signup data to state
    // To be used after otp verification
    // dispatch(setSignupData(signupData));
    // Send OTP to user for verification
    // dispatch(sendOtp(formData.email, navigate));

    // Reset
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
    });
    setAccountType(ACCOUNT_TYPE.STUDENT);
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
            className="place-self-end mr-4 sm2xl:place-self-center"
          >
            <button>
              <ClearIcon />
            </button>
          </Link>
          <div className=" bg-dark-color rounded-xl px-24 py-8 flex flex-col gap-5 items-center mx-4 smxl:py-8 smxl:px-10 sm:px-14 ">
            <h1 className=" text-3xl font-semibold mb-5 sm:mb-3 smxl:text-2xl smxl:mb-1">
              Sign Up
            </h1>
            <button className="gap-2 flex items-center justify-center w-full rounded-md px-6 py-2.5 text-white mb-3 bg-[#225260] hover:bg-[#214d5b] sm:w-[250px] sm:mb-1">
              Continue with <GoogleIcon fontSize="small" />{" "}
              <ArrowForwardIcon fontSize="small" />
            </button>
            <div className="flex items-center justify-between my-1">
              <div className=" bg-white w-[120px] h-[0.5px] sm:w-[90px]"></div>
              <p className="text-sm px-5">or</p>
              <div className=" bg-white w-[120px] h-[0.5px] sm:w-[90px]"></div>
            </div>
            {/* Form */}
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
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                  value={email}
                  onChange={handleOnChange}
                  placeholder="Enter email address"
                  className=" w-[300px] px-3 py-3 text-black rounded-md outline-none text-sm sm:w-[250px] sm:py-2.5"
                />
              </label>
              <label className="relative">
                <p className="mb-1 text-xs leading-[1.375rem] text-richblack-5">
                  Create Password <sup className="text-pink-200">*</sup>
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
                <p className="text-pink-100 mt-1 ">{passAlert}</p>
              </label>
              <label className="relative">
                <p className="mb-1 text-xs leading-[1.375rem] text-richblack-5">
                  Confirm Password <sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleOnChange}
                  placeholder="Confirm Password"
                  className=" w-[300px] px-3 py-3 text-black rounded-md outline-none text-sm sm:w-[250px] sm:py-2.5"
                />
                <span
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                  )}
                </span>
              </label>

              <button
                type="submit"
                className="w-[55%] place-self-center rounded-md bg-medium-color mt-7 py-1.5  text-white shadow-md font-normal sm:mt-5 sm:text-sm"
              >
                <Link to="/verification">Create Account</Link>
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
}

export default Signup;
