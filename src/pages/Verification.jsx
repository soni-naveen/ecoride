import { useRef, useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import ClearIcon from "@mui/icons-material/Clear";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, signUp } from "../services/operations/AuthAPI";

function Verification() {
  const [otp, setOtp] = useState("");
  const { signupData, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modelRef = useRef();
  const button = useRef();

  const CloseModel = (e) => {
    if (modelRef.current === e.target) {
      button.current.click();
    }
  };

  useEffect(() => {
    // Only allow access of this route when user has filled the signup form
    if (!signupData) {
      navigate("/signup");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = signupData;

    dispatch(signUp(email, password, confirmPassword, otp, navigate));
  };

  return (
    <>
      <div
        ref={modelRef}
        onClick={CloseModel}
        className="fixed inset-0 bg-black bg-opacity-85 backdrop-blur-sm flex justify-center items-center z-20"
      >
        {loading ? (
          <div>
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 text-white">
            <Link to={"/"} ref={button} className=" place-self-end sm2xl:place-self-center">
              <button>
                <ClearIcon />
              </button>
            </Link>
            <div className="bg-dark-color rounded-xl py-10 flex flex-col gap-5 justify-center items-center sm2xl:w-[300px] smxl:w-[330px]  sm:w-[400px]">
              <h1 className="font-medium text-center text-[1.875rem] leading-[2.375rem] sm:text-2xl">
                Verify Email
              </h1>
              <p className="w-[70%] text-lg text-center leading-8 font-light mb-5 text-white sm2xl:leading-6  sm:text-base sm:leading-6 sm:text-[15px] sm:w-[80%]">
                A verification code has been sent to you. Enter the code below
              </p>
              <form
                onSubmit={handleVerifyAndSignup}
                className="flex flex-col items-center"
              >
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  renderInput={(props) => (
                    <input
                      {...props}
                      placeholder="-"
                      style={{
                        boxShadow:
                          "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                        marginInline: 10,
                      }}
                      className="w-[43px] text-xl mb-5 border-0 bg-richblack-800 rounded-[0.5rem] text-black aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
                    />
                  )}
                  containerStyle={{
                    justifyContent: "space-between",
                    gap: "0 6px",
                  }}
                />
                <button
                  type="submit"
                  className="w-[90%] bg-medium-color py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 sm:text-sm sm:py-[10px]"
                >
                  Verify Email
                </button>
              </form>
              <div className="mt-3 w-[230px] text-[15px] flex justify-between">
                <Link to="/signup">
                  <p className="text-richblack-5 flex items-center gap-x-2 sm:text-[0.9rem]">
                    <BiArrowBack /> Back
                  </p>
                </Link>
                <button
                  className="flex items-center text-blue-100 gap-x-2 sm:text-[0.9rem]"
                  onClick={() => dispatch(sendOtp(signupData.email, navigate))}
                >
                  <RxCountdownTimer />
                  Resend it
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Home />
    </>
  );
}

export default Verification;
