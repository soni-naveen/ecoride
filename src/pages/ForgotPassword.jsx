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
              to={"/home"}
              ref={button}
              className="place-self-end mb-4 sm2xl:place-self-center mr-3"
            >
              <button>
                <ClearIcon />
              </button>
            </Link>
            <div className="max-w-[500px] bg-slate-200 p-12 rounded-xl sm:p-10 sm:max-w-[370px] mx-3">
              <h1 className="text-3xl font-semibold text-dark-color mb-5 sm:text-2xl leading-[2.375rem] smxl:text-xl sm2xl:text-lg">
                {!emailSent ? "Reset your password" : "Check email"}
              </h1>
              <p className="my-5 font-light text-[1rem] leading-[1.625rem] text-black sm:text-sm smxl:text-xs">
                {!emailSent
                  ? "We'll email you instructions to reset your password. If you don't have access to your email we can try account recovery."
                  : `We have sent the reset email to ${email}`}
              </p>
              <form onSubmit={handleOnSubmit}>
                {!emailSent && (
                  <label className="w-full">
                    <p className="mb-1 text-xs leading-[1.375rem] text-black smxl:text-[10px]">
                      Email Address <sup className="text-red-600">*</sup>
                    </p>
                    <input
                      required
                      autoComplete="off"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. jonedoe@example.com"
                      className="w-full px-3 py-3.5 text-black bg-slate-50 placeholder:text-gray-400 rounded-md outline-none text-sm sm:py-2.5 smxl:text-xs"
                    />
                  </label>
                )}
                <button
                  type="submit"
                  className="mt-6 w-full rounded-[5px] bg-medium-color text-white py-[10px] px-[12px] font-medium sm:py-[8px] smxl:text-xs"
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
