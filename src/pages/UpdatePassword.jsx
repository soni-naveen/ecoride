import { useState, useRef } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Home from "./Home";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../services/operations/AuthAPI";
import Spinner from "../components/Loader";

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
    const token = location.pathname.split("/").at(-1);
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
        className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-20"
      >
        {loading ? (
          <Spinner />
        ) : (
          <div className="text-white flex flex-col">
            <Link
              to={"/"}
              ref={button}
              className="place-self-end mb-1 sm2xl:place-self-center"
            >
              <button>
                <ClearIcon />
              </button>
            </Link>
            <div className="w-[450px] bg-slate-200 p-12 rounded-xl sm:w-[400px] sm:p-11 smxl:w-[330px] smxl:p-9 sm2xl:p-8 sm2xl:w-[300px]">
              <div className="text-[1.875rem] font-semibold text-dark-color text-center leading-[2.375rem] md:text-[27px] sm:text-[25px] smxl:text-[22px] sm2xl:text-[19px]">
                Choose new password
              </div>
              <p className="mt-2 mb-7 font-light text-center text-lg sm:text-base leading-[1.625rem] text-black smxl:text-sm">
                Reset your password
              </p>
              <form onSubmit={handleOnSubmit}>
                <label className="relative">
                  <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black sm:text-xs">
                    New Password <sup className="text-red-600">*</sup>
                  </p>
                  <input
                    required
                    autoComplete="off"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={handleOnChange}
                    placeholder="Enter Password"
                    className="w-full mb-3 px-3 py-3.5 bg-slate-50 text-black rounded-md outline-none text-sm sm:py-2.5"
                  />
                  <span
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-[39px] z-[10] cursor-pointer sm:top-[30px]"
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible fontSize={21} fill="#AFB2BF" />
                    ) : (
                      <AiOutlineEye fontSize={21} fill="#AFB2BF" />
                    )}
                  </span>
                </label>
                <label className="relative mt-3 block">
                  <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black sm:text-xs">
                    Confirm New Password <sup className="text-red-600">*</sup>
                  </p>
                  <input
                    required
                    autoComplete="off"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleOnChange}
                    placeholder="Confirm Password"
                    className="w-full mb-5 px-3 py-3.5 bg-slate-50 text-black rounded-md outline-none text-sm sm:py-2.5"
                  />
                  <span
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                    className="absolute right-3 top-[39px] z-[10] cursor-pointer sm:top-[30px]"
                  >
                    {showConfirmPassword ? (
                      <AiOutlineEyeInvisible fontSize={21} fill="#AFB2BF" />
                    ) : (
                      <AiOutlineEye fontSize={21} fill="#AFB2BF" />
                    )}
                  </span>
                </label>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-[5px] bg-medium-color text-white py-[10px] px-[12px] sm:py-[8px] smxl:text-sm"
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
