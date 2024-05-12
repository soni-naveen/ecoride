import React, { useState } from "react";
import Swal from "sweetalert2";
import { GrNext } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../services/operations/AuthAPI";
import {
  deleteProfile,
  myProfileAbout,
} from "../../services/operations/SettingsAPI";
import Modal from "./Settings/Modal";

function Myprofile() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("about");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const fullProfileVisit = () => {
    navigate(`/fullprofile/${user?._id}`);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [about, setAbout] = useState(user?.additionalDetails?.about || "");

  const [vehicle, setVehicle] = useState(
    user?.additionalDetails?.vehicle || ""
  );

  const [editField, setEditField] = useState("");

  const handleEditClick = (field) => {
    setIsModalOpen(true);
    setEditField(field);
  };

  const handleOnChange = (e, field) => {
    switch (field) {
      case "about":
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
      <div className="bg-white">
        <div className="mt-7 flex justify-center border-b shadow border-gray-200 sm:mt-2 md:mt-5">
          <div
            className={`text-lg font-semibold cursor-pointer p-3 w-[300px] text-center md:w-[200px] md1:w-[250px] sm:text-lg smxl:text-base ${
              activeTab === "about"
                ? "text-dark-color border-b-2 border-b-medium-color"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("about")}
          >
            About you
          </div>
          <div className="inline-block border-r-2 border-solid border-medium-color h-[30px] mx-24 mt-4 mb-2 md1:mx-16 sm:mx-8 sm:mb-1 smxl:mx-3"></div>
          <div
            className={`text-xl font-semibold cursor-pointer p-3 w-[300px] text-center md:w-[200px] md1:w-[250px] sm:text-lg smxl:text-base ${
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
          {activeTab === "about" && (
            <div className="min-h-auto sm:text-sm">
              <div className="max-w-[700px] mx-auto p-6 mt-3 sm:p-5 sm2xl:p-3">
                <div className="flex mb-4 flex-col">
                  <div onClick={fullProfileVisit}>
                    <div className="name_profile flex justify-between items-center hover:bg-gray-100 px-10 py-5 rounded-md smxl:px-2 smxl:py-2 sm:px-5 sm:py-3">
                      <h1 className="text-3xl font-bold text-dark-color md:text-[28px] sm:text-[26px] smxl:text-2xl sm2xl:text-xl">
                        {user?.additionalDetails?.firstName +
                          " " +
                          user?.additionalDetails?.lastName}
                      </h1>
                      <div className="flex justify-center items-center gap-5 sm2xl:gap-2 smxl:gap-3 sm:gap-4">
                        <img
                          src={user?.image}
                          alt={user?.additionalDetails?.firstName.slice(0, 1)}
                          className="rounded-full h-16 w-16 sm:h-14 sm:w-14 smxl:w-10 smxl:h-10 sm2xl:h-8 sm2xl:w-8"
                        />
                        <GrNext className="text-2xl text-dark-color smxl:text-xl" />
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      navigate("/dashboard/updateProfile");
                    }}
                    className="bg-light-color hover:bg-[#c8edea] ml-10 mt-2 w-48 text-white px-2 py-1 rounded smxl:w-32 smxl:ml-2 sm:w-40 sm:ml-5"
                  >
                    <div className="flex justify-center items-center gap-3 sm:gap-2 smxl:gap-2 smxl:text-[10px]">
                      <FaRegEdit className="text-dark-color" />
                      <p className="text-dark-color sm:text-sm smxl:text-[11px]">
                        Edit your details
                      </p>
                    </div>
                  </button>
                </div>
                <hr />
                <div className="px-10 py-5 sm:px-5 smxl:px-2">
                  <h2 className="text-lg font-semibold text-dark-color py-3 mb-3">
                    Verify your profile
                  </h2>
                  <div className="p-2 flex flex-col gap-7 rounded-lg">
                    <div className="flex items-center text-dark-color hover:cursor-pointer">
                      <p className="mr-2">
                        <IoAddCircleOutline className="text-[22px]" />
                      </p>
                      <p
                        onClick={() => {
                          alert("Coming soon...");
                        }}
                      >
                        Verify your Govt. ID
                      </p>
                    </div>
                    <div className="flex items-center text-medium-color">
                      <p className="mr-2">
                        <FaCheckCircle className="text-xl" />
                      </p>
                      <p>{user?.email}</p>
                    </div>
                    <div className="flex items-center text-medium-color">
                      <p className="mr-2">
                        <FaCheckCircle className="text-xl" />
                      </p>
                      <p>{user?.additionalDetails?.contactNumber}</p>
                    </div>
                  </div>
                </div>
                <hr className=" bg-dark-color" />
                <div className="px-10 py-5 sm:px-5 smxl:px-2">
                  <h2 className="text-lg font-semibold py-3 mb-3 text-dark-color">
                    About you
                  </h2>
                  <div className="p-2 flex flex-col gap-7 rounded-lg">
                    <button
                      onClick={() => handleEditClick("about")}
                      className="flex items-center text-dark-color hover:cursor-pointer"
                    >
                      <p className="mr-3">
                        {user?.additionalDetails?.about === "" ? (
                          <IoAddCircleOutline className="text-[22px] hover:cursor-pointer" />
                        ) : (
                          <LuPencilLine className="text-xl text-medium-color" />
                        )}
                      </p>

                      {user?.additionalDetails?.about === "" ? (
                        "Add bio"
                      ) : (
                        <p className="text-medium-color text-left flex items-center gap-2">
                          {user?.additionalDetails?.about}
                        </p>
                      )}
                    </button>
                    <button
                      onClick={() => handleEditClick("vehicle")}
                      className="flex items-center text-dark-color hover:cursor-pointer"
                    >
                      <p className="mr-3">
                        {user?.additionalDetails?.vehicle === "" ? (
                          <IoAddCircleOutline className="text-[22px] hover:cursor-pointer" />
                        ) : (
                          <LuPencilLine className="text-xl text-medium-color" />
                        )}
                      </p>

                      {user?.additionalDetails?.vehicle === "" ? (
                        "Add vehicle details"
                      ) : (
                        <p className="text-medium-color text-left flex items-center gap-2">
                          {user?.additionalDetails?.vehicle}
                        </p>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "account" && (
            <div className=" min-h-auto">
              <div className="max-w-[700px] mx-auto py-10">
                <div className="rating flex flex-col gap-1">
                  <button
                    onClick={() => {
                      alert("Coming soon...");
                    }}
                    className="w-full hover:bg-gray-100 p-5 smxl:p-3 sm:p-4"
                  >
                    <div className="flex items-center rounded-md justify-between">
                      <h1 className="text-bold">Rating Received</h1>
                      <GrNext className=" font-bold text-dark-color" />
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      alert("Coming soon...");
                    }}
                    className="w-full hover:bg-gray-100 p-5 smxl:p-3 sm:p-4"
                  >
                    <div className="flex items-center rounded-md justify-between">
                      <h1 className="text-bold">Rating Given</h1>
                      <GrNext className=" font-bold text-dark-color" />
                    </div>
                  </button>
                </div>
                <hr className="mt-5" />
                <div className="details_changing flex flex-col gap-1 mt-5">
                  <button
                    onClick={() => {
                      alert("Coming soon...");
                    }}
                    className="w-full hover:bg-gray-100 p-5 smxl:p-3 sm:p-4"
                  >
                    <div className="flex items-center rounded-md justify-between">
                      <h1 className="text-bold">Add/Change Profile Photo</h1>
                      <GrNext className=" font-bold text-dark-color" />
                    </div>
                  </button>
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
                  <Link to="/helpcenter">
                    <button className="w-full hover:bg-gray-100 p-5 smxl:p-3 sm:p-4">
                      <div className="flex items-center rounded-md justify-between">
                        <h1 className="text-bold">Help Center</h1>
                        <GrNext className=" font-bold text-dark-color" />
                      </div>
                    </button>
                  </Link>
                </div>
                <hr className="mt-5" />
                <div className="logout_deleteaccount flex flex-col gap-1 mt-5">
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
                  <button onClick={handleDeleteAccount}>
                    <div className="flex hover:bg-gray-100 rounded-md w-full p-5 smxl:p-3 sm:p-4">
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
        <Modal
          isOpen={isModalOpen}
          handleSave={handleOnSubmit}
          handleChange={handleOnChange}
          fieldName={editField}
          fieldValue={
            editField === "about"
              ? about
              : editField === "vehicle"
              ? vehicle
              : ""
          }
        />
      </div>
    </div>
  );
}

export default Myprofile;
