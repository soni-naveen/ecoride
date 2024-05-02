import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import Home from "./Home";
import { Link } from "react-router-dom";

import { getPasswordResetToken } from "../services/operations/AuthAPI";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email, setEmailSent));
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
        className="fixed inset-0 bg-black bg-opacity-85 backdrop-blur-sm flex justify-center items-center z-20"
        ref={modelRef}
        onClick={closeModel}
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
            <div className="max-w-[500px] bg-dark-color p-12 rounded-xl sm:p-10 sm:max-w-[320px]">
              <h1 className="text-[1.875rem] font-semibold text-white mb-5 leading-[2.375rem] text-richblack-5 sm:text-[22px]">
                {!emailSent ? "Reset your password" : "Check email"}
              </h1>
              <p className="my-5 font-light text-[1rem] leading-[1.625rem] text-gray-300 sm:text-[14px]">
                {!emailSent
                  ? "We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
                  : `We have sent the reset email to ${email}`}
              </p>
              <form onSubmit={handleOnSubmit}>
                {!emailSent && (
                  <label className="w-full">
                    <p className="mb-1 font-medium text-[0.875rem] leading-[1.375rem] text-white">
                      Email Address <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                      required
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email address"
                      className="w-full px-3 py-3.5 text-black rounded-md outline-none text-sm sm:py-2.5"
                    />
                  </label>
                )}
                <button
                  type="submit"
                  className="mt-6 w-full rounded-[8px] bg-medium-color text-white py-[10px] px-[12px] font-medium text-richblack-900 sm:py-[8px]"
                >
                  {!emailSent ? "Submit" : "Resend Email"}
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

export default ForgotPassword;
