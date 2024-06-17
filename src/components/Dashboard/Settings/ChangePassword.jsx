import React, { useState, useRef } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import ClearIcon from "@mui/icons-material/Clear";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { changePassword } from "../../../services/operations/SettingsAPI";
import Myprofile from "../MyProfile";
import { toast } from "react-hot-toast";

function ChangePassword() {
  const navigate = useNavigate();
  const { token, loading } = useSelector((state) => state.auth);

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const { oldPassword, newPassword } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitPasswordForm = async (e) => {
    try {
      e.preventDefault();
      if (newPassword.length < 8) {
        toast.error("Password length atleast 8!");
        return;
      }
      if (oldPassword == newPassword) {
        toast.error("Please enter a new password!");
        return;
      }
      await changePassword(token, formData, navigate);
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
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
        className="fixed inset-0 bg-black overflow-auto bg-opacity-85 backdrop-blur-sm flex justify-center items-center z-50"
      >
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <div className="text-white flex flex-col">
            <Link
              to={"/dashboard/myprofile"}
              ref={button}
              className="place-self-end mb-4 sm2xl:place-self-center"
            >
              <button>
                <ClearIcon />
              </button>
            </Link>
            <div className="w-[450px] bg-dark-color p-12 rounded-xl sm:w-[400px] sm:p-11 smxl:w-[330px] smxl:p-9 sm2xl:p-8 sm2xl:w-[300px]">
              <h1 className="text-[1.875rem] font-semibold text-white mb-5 leading-[2.375rem] md:text-[27px] sm:text-[25px] smxl:text-[22px] sm2xl:text-[19px]">
                Change your password
              </h1>
              <p className="my-5 font-light text-[1rem] leading-[1.625rem] text-gray-300 sm:text-[14px]">
                First enter your old password.
              </p>
              <form onSubmit={submitPasswordForm}>
                <label className="relative">
                  <p className="mb-1 font-medium text-[0.875rem] leading-[1.375rem] text-white sm2xl:text-xs">
                    Old Password <sup className="text-pink-200">*</sup>
                  </p>
                  <input
                    required
                    autoComplete="off"
                    type={showOldPassword ? "text" : "password"}
                    name="oldPassword"
                    id="oldPassword"
                    placeholder="Enter Password"
                    value={oldPassword}
                    onChange={handleOnChange}
                    className="w-full mb-3 px-3 py-3.5 text-black rounded-md outline-none text-sm sm:py-2.5"
                  />
                  <span
                    onClick={() => setShowOldPassword((prev) => !prev)}
                    className="absolute right-3 top-[38px] z-[10] cursor-pointer sm2xl:top-[30px] sm:top-[35px]"
                  >
                    {showOldPassword ? (
                      <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                    ) : (
                      <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                    )}
                  </span>
                </label>
                <label className="relative mt-3 block">
                  <p className="mb-1 font-medium text-[0.875rem] leading-[1.375rem] text-white sm2xl:text-xs">
                    Enter New Password <sup className="text-pink-200">*</sup>
                  </p>
                  <input
                    required
                    autoComplete="off"
                    type={showNewPassword ? "text" : "password"}
                    name="newPassword"
                    id="newPassword"
                    placeholder="Confirm Password"
                    value={newPassword}
                    onChange={handleOnChange}
                    className="w-full mb-5 px-3 py-3.5 text-black rounded-md outline-none text-sm sm:py-2.5"
                  />
                  <span
                    onClick={() => setShowNewPassword((prev) => !prev)}
                    className="absolute right-3 top-[38px] z-[10] cursor-pointer sm:top-[35px]"
                  >
                    {showNewPassword ? (
                      <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                    ) : (
                      <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                    )}
                  </span>
                </label>
                <button
                  type="submit"
                  className="mt-6 w-full rounded-[8px] bg-medium-color text-white py-[10px] px-[12px] font-medium sm:py-[8px] sm2xl:text-sm"
                >
                  Change Password
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <Myprofile />
    </>
  );
}

export default ChangePassword;
