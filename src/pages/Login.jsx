import { useRef, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
import Home from "./Home";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { login } from "../services/operations/AuthAPI";

function Login() {
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
    dispatch(login(email, password));
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
        className="fixed inset-0 overflow-auto bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50"
      >
        <div className="flex flex-col gap-1 text-white">
          <Link
            to={"/"}
            ref={button}
            className=" place-self-end mr-4 sm2xl:place-self-center"
          >
            <button>
              <ClearIcon />
            </button>
          </Link>
          <div className="bg-slate-200 rounded-xl px-16 py-12 flex flex-col gap-5 items-center mx-4 smxl:px-10 sm:px-14">
            <div className="text-3xl text-dark-color font-semibold smxl:text-[26px]">
              Welcome Back
            </div>
            <p className="text-sm text-gray-700 text-center w-64 mb-2">
              So good to see you! Sign in to access your account.
            </p>
            <form
              onSubmit={handleOnSubmit}
              className="flex w-full flex-col gap-y-4"
            >
              {/*============ EMAIL ========== */}
              <label className="w-full">
                <p className="mb-1 text-black text-sm leading-[1.375rem]">
                  Email Address <sup className="text-red-600">*</sup>
                </p>
                <input
                  required
                  autoComplete="off"
                  type="text"
                  name="email"
                  value={email}
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                  onChange={handleOnChange}
                  placeholder="Enter your email"
                  className="w-[300px] placeholder:text-gray-400 px-3 py-3 bg-slate-50 text-black rounded-md outline-none text-sm sm:w-[250px] sm:py-2.5"
                />
              </label>
              {/*============ PASSWORD ========== */}
              <label className="relative">
                <p className="mb-1 text-black text-sm leading-[1.375rem]">
                  Password <sup className="text-red-600">*</sup>
                </p>
                <input
                  required
                  autoComplete="off"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                  placeholder="Enter your password"
                  className="w-[300px] placeholder:text-gray-400 px-3 py-3 bg-slate-50 text-black rounded-md outline-none text-sm sm:w-[250px] sm:py-2.5"
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
              </label>
              {/*============ FORGOT PASSWORD ========== */}
              <Link
                to="/forgot-password"
                className="text-blue-500 place-self-end text-xs underline -mt-2 sm:text-[11px]"
              >
                Forgot Password?
              </Link>
              <button className="w-full place-self-center rounded-md text-white mt-5 py-2 bg-medium-color font-normal sm:mt-5 sm:text-sm hover:bg-[#279d93] transition-all ease-in-out duration-200">
                LOGIN
              </button>
              <div className="gotosignup flex flex-col justify-center items-start">
                <p className="text-xs text-gray-500 font-normal mt-4">
                  Not a member yet? &nbsp;
                  <Link
                    to="/signup"
                    className=" text-blue-500 text-xs underline"
                  >
                    Create account
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
