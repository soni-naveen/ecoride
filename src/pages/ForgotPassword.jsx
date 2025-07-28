import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import Home from "./Home";
import { Link } from "react-router-dom";
import { getPasswordResetToken } from "../services/operations/AuthAPI";
import Spinner from "../components/Loader";

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
        className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-20"
        ref={modelRef}
        onClick={closeModel}
      >
        {loading ? (
          <Spinner />
        ) : (
          <div className="text-white flex flex-col">
            <Link
              to={"/"}
              ref={button}
              className="place-self-end mb-1 sm2xl:place-self-center mr-3"
            >
              <button>
                <ClearIcon />
              </button>
            </Link>
            <div className="max-w-[500px] bg-slate-200 p-12 rounded-xl sm2xl:px-8 sm2xl:py-10 sm:p-10 sm:max-w-[370px] mx-3">
              <div className="text-3xl font-semibold text-dark-color mb-3 sm:text-2xl">
                {!emailSent ? "Forgot Password" : "Check Your Email"}
              </div>
              <p className="mb-7 text-gray-700 text-sm">
                {!emailSent
                  ? "Enter your email address and we'll send you a link to reset your password"
                  : `If your email is registered, we’ve sent a reset link to ${email}`}
              </p>
              <form onSubmit={handleOnSubmit}>
                {!emailSent && (
                  <label className="w-full">
                    <p className="mb-1 text-sm leading-[1.375rem] text-black">
                      Email Address <sup className="text-red-600">*</sup>
                    </p>
                    <input
                      required
                      autoComplete="off"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email address"
                      className="w-full px-3 py-3.5 text-black bg-slate-50 placeholder:text-gray-400 rounded-md outline-none text-sm sm:py-2.5"
                    />
                  </label>
                )}
                <button
                  type="submit"
                  className="mt-6 w-full rounded-[5px] bg-medium-color text-white py-[10px] px-[12px] sm:py-[8px] smxl:text-sm"
                >
                  {!emailSent ? "Send Reset Link" : "Resend Link"}
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
