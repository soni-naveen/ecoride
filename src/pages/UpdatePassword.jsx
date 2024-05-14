import { useState, useRef } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Home from "./Home";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { resetPassword } from "../services/operations/AuthAPI";

function UpdatePassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { loading } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { password, confirmPassword } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split("/home").at(-1);
    dispatch(resetPassword(password, confirmPassword, token, navigate));
  };

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
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <div className="text-white flex flex-col">
            <Link
              to={"/home"}
              ref={button}
              className="place-self-end mb-4 sm2xl:place-self-center"
            >
              <button>
                <ClearIcon />
              </button>
            </Link>
            <div className="w-[450px] bg-dark-color p-12 rounded-xl sm:w-[400px] sm:p-11 smxl:w-[330px] smxl:p-9 sm2xl:p-8 sm2xl:w-[300px]">
              <h1 className="text-[1.875rem] font-semibold text-white mb-5 leading-[2.375rem] md:text-[27px] sm:text-[25px] smxl:text-[22px] sm2xl:text-[19px]">
                Choose new password
              </h1>
              <p className="my-5 font-light text-[1rem] leading-[1.625rem] text-gray-300 sm:text-[14px] sm2xl:text-sm">
                Enter your new password and you're all set.
              </p>
              <form onSubmit={handleOnSubmit}>
                <label className="relative">
                  <p className="mb-1 font-medium text-[0.875rem] leading-[1.375rem] text-white sm2xl:text-xs">
                    New Password <sup className="text-pink-200">*</sup>
                  </p>
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={handleOnChange}
                    placeholder="Enter Password"
                    className="w-full mb-3 px-3 py-3.5 text-black rounded-md outline-none text-sm sm:py-2.5"
                  />
                  <span
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-[38px] z-[10] cursor-pointer sm2xl:top-[30px] sm:top-[35px]"
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                    ) : (
                      <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                    )}
                  </span>
                </label>
                <label className="relative mt-3 block">
                  <p className="mb-1 font-medium text-[0.875rem] leading-[1.375rem] text-white sm2xl:text-xs">
                    Confirm New Password <sup className="text-pink-200">*</sup>
                  </p>
                  <input
                    required
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleOnChange}
                    placeholder="Confirm Password"
                    className="w-full mb-5 px-3 py-3.5 text-black rounded-md outline-none text-sm sm:py-2.5"
                  />
                  <span
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-3 top-[38px] z-[10] cursor-pointer sm2xl:top-[30px] sm:top-[35px]"
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
                  className="mt-6 w-full rounded-[8px] bg-medium-color text-white py-[10px] px-[12px] font-medium text-richblack-900 sm:py-[8px] sm2xl:text-sm"
                >
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <Home />
    </>
  );
}

export default UpdatePassword;
