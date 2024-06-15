import React, { useState } from "react";
import Swal from "sweetalert2";
import { GrNext } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { RiProgress5Line } from "react-icons/ri";
import { LuPencilLine } from "react-icons/lu";
import { MdAddCircleOutline } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { IoCameraOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/operations/AuthAPI";
import Modal from "./Settings/Modal";
import {
  deleteProfile,
  myProfileAbout,
} from "../../services/operations/SettingsAPI";

function Myprofile() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("about");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editField, setEditField] = useState("");
  const [about, setAbout] = useState(user?.additionalDetails?.about || "");
  const [vehicle, setVehicle] = useState(
    user?.additionalDetails?.vehicle || ""
  );

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleEditClick = (field) => {
    setIsModalOpen(true);
    setEditField(field);
  };

  const handleOnChange = (e, field) => {
    switch (field) {
      case "bio":
        setAbout(e.target.value);
        break;
      case "vehicle":
        setVehicle(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = (e, field) => {
    e.preventDefault();
    const updatedData = {
      about,
      vehicle,
    };
    dispatch(myProfileAbout(token, updatedData));
    setIsModalOpen(false);
    setEditField(field);
  };

  async function handleDeleteAccount() {
    try {
      const confirmDelete = await Swal.fire({
        title: "Are You Sure?",
        text: "DELETE your account is a permanent action.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Confirm",
        focusCancel: true, // Set the default focus to Cancel button
      });

      if (confirmDelete.isConfirmed) {
        dispatch(deleteProfile(token, navigate));
      }
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  }

  return (
    <div className="container mx-auto">
      {/*================ HEADER TAB ================= */}
      <div>
        <div className="mt-1 flex justify-evenly items-center border-b shadow border-gray-200">
          <div
            className={`text-lg font-semibold w-full pt-4 pb-2 cursor-pointer text-center sm:text-lg smxl:text-base ${
              activeTab === "about"
                ? "text-dark-color border-b-2 border-b-medium-color"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("about")}
          >
            About you
          </div>
          <div className="py-5 border-x border-slate-200"></div>
          <div
            className={`text-lg font-semibold w-full pt-4 pb-2 cursor-pointer text-center sm:text-lg smxl:text-base ${
              activeTab === "account"
                ? "text-dark-color border-b-2 border-b-medium-color"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("account")}
          >
            Account
          </div>
        </div>
        <div>
          {/*====================== ABOUT TAB ====================== */}
          {activeTab === "about" && (
            <div className="min-h-auto sm:text-sm">
              <div className="max-w-[700px] mx-auto p-6 sm:p-5 sm:mt-2 sm2xl:p-3">
                <div className="flex mb-5 flex-col">
                  {/*======= VIEW FULL PROFILE ======== */}
                  <button
                    onClick={() =>
                      navigate(`/profile/${user?.additionalDetails?._id}`)
                    }
                  >
                    <div className="flex w-full justify-between items-center hover:bg-gray-100 px-10 py-5 rounded-md smxl:px-2 smxl:py-2 sm:px-5 sm:py-3">
                      {/*======= NAME ======== */}
                      <h1 className="text-3xl text-start font-bold text-dark-color md:text-[28px] sm:text-[26px] smxl:text-2xl sm2xl:text-lg">
                        {user?.additionalDetails?.firstName +
                          " " +
                          user?.additionalDetails?.lastName}
                      </h1>

                      {/*======= IMAGE ======== */}
                      <div className="flex justify-center items-center gap-5 sm2xl:gap-2 smxl:gap-3 sm:gap-4">
                        <img
                          src={user?.additionalDetails?.image}
                          className="rounded-full bg-cover bg-center bg-[url('https://cdn-icons-png.flaticon.com/512/9385/9385289.png')] h-16 w-16 sm:h-14 sm:w-14 smxl:w-10 smxl:h-12 smxl:w-12 sm2xl:h-10 sm2xl:w-10 object-cover"
                        />
                        <GrNext className="text-2xl text-dark-color smxl:text-xl" />
                      </div>
                    </div>
                  </button>

                  {/*======= EDIT PROFILE ======== */}
                  <div className="flex gap-5 sm2xl:gap-4">
                    <button
                      onClick={() => {
                        navigate("/dashboard/updateProfile");
                      }}
                      className="bg-light-color hover:bg-[#aff4ed] ml-10 mt-3 w-48 text-white px-2 py-1 rounded smxl:w-32 smxl:ml-2 sm:mt-5 sm:w-40 sm:ml-5"
                    >
                      <div className="flex justify-center items-center gap-3 sm:gap-2 smxl:gap-2 smxl:text-[12px]">
                        <FaRegEdit className="text-dark-color" />
                        <p className="text-dark-color sm:text-sm smxl:text-[11px]">
                          Edit your details
                        </p>
                      </div>
                    </button>
                    <button
                      onClick={() => {
                        navigate("/dashboard/updatePhoto");
                      }}
                      className="bg-light-color hover:bg-[#aff4ed] mt-3 w-28 text-white px-2 py-1 rounded smxl:w-[85px] sm:mt-5 sm:w-24"
                    >
                      <div className="flex justify-center items-center gap-2 sm:gap-2 smxl:gap-2 smxl:text-[10px]">
                        <IoCameraOutline className="text-dark-color text-xl sm:text-lg smxl:text-base" />
                        <p className="text-dark-color sm:text-sm smxl:text-[11px]">
                          Edit pic
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
                <hr />
                <div className="px-10 py-2 sm:px-5 smxl:px-2">
                  {/*======= VERIFY YOUR PROFILE ======== */}
                  <h2 className="text-lg font-semibold text-dark-color smxl:text-base py-4 mb-2">
                    Verify your profile
                  </h2>
                  <div className="flex flex-col gap-6 rounded-lg">
                    {/*======= GOVT.ID ======== */}
                    <div className="flex items-center text-dark-color hover:cursor-pointer">
                      <div
                        onClick={() => {
                          navigate("/dashboard/verifyProfile");
                        }}
                        className="flex items-center text-medium-color"
                      >
                        {user?.additionalDetails?.govtId === null ||
                        user?.additionalDetails?.govtId === "" ? (
                          <div className="flex items-center">
                            <MdAddCircleOutline className="text-xl text-dark-color smxl:text-base mr-2" />
                            <span className="text-dark-color w-fit smxl:text-sm">
                              Verify your Govt. ID
                            </span>
                          </div>
                        ) : user?.additionalDetails?.govtId === "Pending" ? (
                          <div className="flex items-center">
                            <RiProgress5Line className="text-xl text-dark-color mr-2 smxl:text-sm" />
                            <span className="text-dark-color w-fit smxl:text-sm">
                              Pending verification
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <FaCheckCircle className="text-xl text-medium-color mr-2 smxl:text-sm" />
                            <span className="text-medium-color w-fit smxl:text-sm">
                              Verified govt.Id
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/*======= MAIL ======== */}
                    <div className="flex items-center text-medium-color">
                      <p className="mr-2">
                        <FaCheckCircle className="text-xl smxl:text-sm" />
                      </p>
                      <p>{user?.email}</p>
                    </div>

                    {/*======= MOBILE NUMBER ======== */}
                    <div className="flex items-center text-medium-color">
                      {user?.additionalDetails?.contactNumber === null ||
                      user?.additionalDetails?.contactNumber === undefined ? (
                        <div className="flex items-center mb-3">
                          <FaCircleMinus className="text-xl text-dark-color mr-2 smxl:text-sm" />
                          <span className="text-dark-color w-fit smxl:text-sm">
                            Mobile no. missing
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center mb-3">
                          <FaCheckCircle className="text-xl text-medium-color mr-2 smxl:text-sm" />
                          <span className="text-medium-color w-fit smxl:text-sm">
                            {user?.additionalDetails?.contactNumber}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <hr className="" />

                {/*=========== ABOUT YOU ============= */}
                <div className="px-10 py-2 sm:px-5 smxl:px-2">
                  <h2 className="text-lg font-semibold text-dark-color py-4 mb-2 smxl:text-base">
                    About you
                  </h2>
                  <div className="flex flex-col gap-6 rounded-lg">
                    {/*======= ADD BIO ======== */}
                    <button
                      onClick={() => handleEditClick("bio")}
                      className="flex items-center text-dark-color hover:cursor-pointer"
                    >
                      {user?.additionalDetails?.about?.trim() === "" ||
                      user?.additionalDetails?.about === null ||
                      user?.additionalDetails?.about === undefined ? (
                        <div className="flex items-center gap-2">
                          <MdAddCircleOutline className="text-xl hover:cursor-pointer smxl:text-base" />
                          <span>Add bio</span>
                        </div>
                      ) : (
                        <div className="flex items-center text-start gap-2 text-medium-color">
                          <LuPencilLine className="text-xl smxl:text-sm" />
                          <span>{user?.additionalDetails?.about}</span>
                        </div>
                      )}
                    </button>

                    {/*======= ADD VEHICLE ======== */}
                    <button
                      onClick={() => handleEditClick("vehicle")}
                      className="flex items-center text-dark-color hover:cursor-pointer"
                    >
                      {user?.additionalDetails?.vehicle?.trim() === "" ||
                      user?.additionalDetails?.vehicle === null ||
                      user?.additionalDetails?.vehicle === undefined ? (
                        <div className="flex items-center gap-2">
                          <MdAddCircleOutline className="text-xl hover:cursor-pointer smxl:text-base" />
                          <span>Add vehicle details</span>
                        </div>
                      ) : (
                        <div className="flex items-center text-start gap-2 text-medium-color">
                          <LuPencilLine className="text-xl smxl:text-sm" />
                          <span>{user?.additionalDetails?.vehicle}</span>
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/*====================== ACCOUNT TAB ====================== */}
          {activeTab === "account" && (
            <div className=" min-h-auto">
              <div className="max-w-[700px] mx-auto p-4 my-3 sm:mt-1">
                <div className="rating flex flex-col gap-1">
                  {/*======= RATING RECEIVED ======== */}
                  <button
                    onClick={() => {
                      alert("This feature is not available yet......");
                    }}
                    className="w-full hover:bg-gray-100 p-5 smxl:p-3 sm:p-4"
                  >
                    <div className="flex items-center rounded-md justify-between">
                      <h1 className="text-bold">Rating Received</h1>
                      <GrNext className=" font-bold text-dark-color" />
                    </div>
                  </button>

                  {/*======= RATING GIVEN ======== */}
                  <button
                    onClick={() => {
                      alert("This feature is not available yet......");
                    }}
                    className="w-full hover:bg-gray-100 p-5 smxl:p-3 sm:p-4"
                  >
                    <div className="flex items-center rounded-md justify-between">
                      <h1 className="text-bold">Rating Given</h1>
                      <GrNext className=" font-bold text-dark-color" />
                    </div>
                  </button>
                </div>
                <hr className="mt-3" />
                <div className="details_changing flex flex-col gap-1 mt-3">
                  {/*======= CHANGE PROFILE PHOTO ======== */}
                  <button
                    onClick={() => {
                      navigate("/dashboard/updatePhoto");
                    }}
                    className="w-full hover:bg-gray-100 p-5 smxl:p-3 sm:p-4"
                  >
                    <div className="flex items-center rounded-md justify-between">
                      <h1 className="text-bold">Change Profile Photo</h1>
                      <GrNext className=" font-bold text-dark-color" />
                    </div>
                  </button>

                  {/*======= CHANGE PASSWORD ======== */}
                  <button
                    onClick={() => {
                      navigate("/dashboard/changePassword");
                    }}
                    className="w-full hover:bg-gray-100 p-5 smxl:p-3 sm:p-4"
                  >
                    <div className="flex items-center rounded-md justify-between">
                      <h1 className="text-bold">Change Password</h1>
                      <GrNext className=" font-bold text-dark-color" />
                    </div>
                  </button>

                  {/*======= HELP CENTER ======== */}
                  <Link to="/helpcenter">
                    <button className="w-full hover:bg-gray-100 p-5 smxl:p-3 sm:p-4">
                      <div className="flex items-center rounded-md justify-between">
                        <h1 className="text-bold">Help Center</h1>
                        <GrNext className=" font-bold text-dark-color" />
                      </div>
                    </button>
                  </Link>

                  {/*======= CONTACT US ======== */}
                  <Link to="/contact">
                    <button className="w-full hover:bg-gray-100 p-5 smxl:p-3 sm:p-4">
                      <div className="flex items-center rounded-md justify-between">
                        <h1 className="text-bold">Report an issue</h1>
                        <GrNext className=" font-bold text-dark-color" />
                      </div>
                    </button>
                  </Link>
                </div>
                <hr className="mt-3" />
                <div className="logout_deleteaccount flex flex-col mt-3">
                  {/*======= LOGOUT ======== */}
                  <button>
                    <div
                      onClick={() => {
                        dispatch(logout(navigate));
                      }}
                      className="flex hover:bg-gray-100 rounded-md w-full p-5 smxl:p-3 sm:p-4"
                    >
                      <h1 className="text-bold text-medium-color">Logout</h1>
                    </div>
                  </button>

                  {/*======= DELETE MY ACCOUNT ======== */}
                  <button onClick={handleDeleteAccount}>
                    <div className="flex hover:bg-red-100 rounded-md w-full p-5 smxl:p-3 sm:p-4">
                      <h1 className="text-bold text-rose-700">
                        Delete My Account
                      </h1>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/*======= MODAL ======== */}
        <Modal
          isOpen={isModalOpen}
          handleSave={handleOnSubmit}
          handleChange={handleOnChange}
          fieldName={editField}
          fieldValue={
            editField === "bio" ? about : editField === "vehicle" ? vehicle : ""
          }
        />
      </div>
    </div>
  );
}

export default Myprofile;
