import { useState, useRef } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { sendOtp } from "../services/operations/AuthAPI";
import { setSignupData } from "../slices/authSlice";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [passAlert, setPassAlert] = useState("");
  const [confirmAlert, setConfirmAlert] = useState("");
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
  };

  const handleOnChange1 = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    if (e.target.value.length >= 1 && e.target.value.length < 8) {
      setPassAlert(
        <div
          style={{
            fontSize: "12px",
          }}
        >
          Password must have at least 8 characters.
        </div>
      );
    } else {
      setPassAlert("");
    }
  };

  const handleOnChange2 = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    if (e.target.value.length >= 1 && e.target.value !== password) {
      setConfirmAlert(
        <div
          style={{
            fontSize: "12px",
          }}
        >
          Password does not match.
        </div>
      );
    } else {
      setConfirmAlert("");
    }
  };

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords does not match");
      return;
    } else if (password.length < 8) {
      toast.error("Password length atleast 8");
      return;
    }
    const signupData = {
      ...formData,
    };

    // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData));
    // Send OTP to user for verification
    dispatch(sendOtp(formData.email, navigate));

    // Reset
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      <div
        ref={modelRef}
        onClick={closeModel}
        className="fixed inset-0 overflow-auto bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50"
      >
        <div className="flex flex-col gap-1 text-white">
          <Link
            to={"/"}
            ref={button}
            className="place-self-end mr-4 sm2xl:place-self-center"
          >
            <button>
              <ClearIcon />
            </button>
          </Link>
          <div className="bg-slate-200 rounded-xl px-16 py-12 flex flex-col gap-5 items-center mx-4 smxl:px-10 sm:px-14">
            <div className="text-3xl text-dark-color font-semibold smxl:text-[26px]">
              Create Account
            </div>
            <p className="text-sm text-gray-700 text-center w-64 mb-3">
              Save money, make friends, help the planet! Sign up to start.
            </p>
            <form
              onSubmit={handleOnSubmit}
              className="flex w-full flex-col gap-y-4"
            >
              {/*============ EMAIL ========== */}
              <label className="w-full">
                <div className="mb-1 text-black text-sm leading-[1.375rem] leading-snug">
                  Email Address <sup className="text-red-600">*</sup>
                </div>
                <input
                  required
                  autoComplete="off"
                  type="text"
                  name="email"
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                  value={email}
                  onChange={handleOnChange}
                  placeholder="Enter your email"
                  className="w-[300px] px-3 py-3 placeholder:text-gray-400 bg-slate-50 text-black rounded-md outline-none text-sm sm:w-[250px] sm:py-2.5"
                />
              </label>
              {/*============ PASSWORD ========== */}
              <label className="relative">
                <div className="mb-1 text-black text-sm leading-[1.375rem]">
                  Create Password <sup className="text-red-600">*</sup>
                </div>
                <input
                  required
                  autoComplete="off"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handleOnChange1}
                  placeholder="Create a password"
                  className="w-[300px] px-3 py-3 placeholder:text-gray-400 bg-slate-50 text-black rounded-md outline-none text-sm sm:w-[250px] sm:py-2.5"
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-[38px] z-[10] cursor-pointer sm:top-[35px]"
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible fontSize={21} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={21} fill="#AFB2BF" />
                  )}
                </span>
                <div className="text-red-500 mt-1 font-light">{passAlert}</div>
              </label>
              {/*============ CONFIRM PASSWORD ========== */}
              <label className="relative">
                <p className="mb-1 text-black text-sm leading-[1.375rem]">
                  Confirm Password <sup className="text-red-600">*</sup>
                </p>
                <input
                  required
                  autoComplete="off"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleOnChange2}
                  placeholder="Confirm your password"
                  className="w-[300px] px-3 py-3 placeholder:text-gray-400 bg-slate-50 text-black rounded-md outline-none text-sm sm:w-[250px] sm:py-2.5"
                />
                <span
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-3 top-[38px] z-[10] cursor-pointer sm:top-[35px]"
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible fontSize={21} fill="#AFB2BF" />
                  ) : (
                    <AiOutlineEye fontSize={21} fill="#AFB2BF" />
                  )}
                </span>
                <div className="text-red-500 mt-1 font-light">
                  {confirmAlert}
                </div>
              </label>

              {/*============ SUBMIT BUTTON ========== */}
              <button
                type="submit"
                className="w-full place-self-center rounded-md text-white mt-5 py-2 bg-medium-color font-normal sm:mt-5 sm:text-sm hover:scale-[1.02] transition-all ease-in-out duration-200"
              >
                SIGN UP
              </button>
              <div className="flex flex-col justify-center items-start">
                <p className="text-xs text-gray-500 font-normal mt-4">
                  Already a member? &nbsp;
                  <Link
                    to="/login"
                    className=" text-blue-500 text-xs underline"
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
