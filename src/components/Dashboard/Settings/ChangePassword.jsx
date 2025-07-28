import { useState, useRef } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import ClearIcon from "@mui/icons-material/Clear";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { changePassword } from "../../../services/operations/SettingsAPI";
import Myprofile from "../MyProfile";
import Spinner from "../../Loader";

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
      await changePassword(token, formData, navigate);
    } catch (error) {
      console.log("ERROR...");
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
        className="fixed inset-0 bg-black overflow-auto bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50"
      >
        {loading ? (
          <Spinner />
        ) : (
          <div className="text-white flex flex-col">
            <Link
              to={"/dashboard/myprofile?profile=account"}
              ref={button}
              className="place-self-end mb-1 sm2xl:place-self-center"
            >
              <button>
                <ClearIcon />
              </button>
            </Link>
            <div className="w-[450px] bg-slate-200 px-12 py-14 rounded-xl sm:w-[400px] sm:px-11 sm:py-12 smxl:w-[330px] smxl:px-9 smxl:py-10 sm2xl:p-8 sm2xl:w-[300px]">
              <div className="text-[1.875rem] font-semibold text-dark-color leading-[2.375rem] md:text-[27px] sm:text-[25px] smxl:text-[22px] sm2xl:text-[19px]">
                Change Your Password
              </div>
              <p className="mt-2 mb-7 sm:text-sm leading-[1.625rem] text-gray-600 sm2xl:text-xs">
                Create a new strong password.
              </p>
              <form onSubmit={submitPasswordForm}>
                <label className="relative">
                  <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black sm:text-xs">
                    Current Password <sup className="text-red-500">*</sup>
                  </p>
                  <input
                    required
                    autoComplete="off"
                    type={showOldPassword ? "text" : "password"}
                    name="oldPassword"
                    id="oldPassword"
                    placeholder="Enter current password"
                    value={oldPassword}
                    onChange={handleOnChange}
                    className="w-full mb-3 px-3 bg-slate-50 py-3.5 text-black rounded-md outline-none text-sm sm:py-2.5"
                  />
                  <span
                    onClick={() => setShowOldPassword((prev) => !prev)}
                    className="absolute right-3 top-[39px] z-[10] cursor-pointer sm:top-[30px]"
                  >
                    {showOldPassword ? (
                      <AiOutlineEyeInvisible fontSize={21} fill="#AFB2BF" />
                    ) : (
                      <AiOutlineEye fontSize={21} fill="#AFB2BF" />
                    )}
                  </span>
                </label>
                <label className="relative mt-3 block">
                  <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black sm:text-xs">
                    New Password <sup className="text-red-500">*</sup>
                  </p>
                  <input
                    required
                    autoComplete="off"
                    type={showNewPassword ? "text" : "password"}
                    name="newPassword"
                    id="newPassword"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={handleOnChange}
                    className="w-full mb-3 px-3 py-3.5 bg-slate-50 text-black rounded-md outline-none text-sm sm:py-2.5"
                  />
                  <span
                    onClick={() => setShowNewPassword((prev) => !prev)}
                    className="absolute right-3 top-[39px] z-[10] cursor-pointer sm:top-[30px]"
                  >
                    {showNewPassword ? (
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
