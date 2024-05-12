import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { IoMdArrowRoundBack } from "react-icons/io";
import { updateProfile } from "../../../services/operations/SettingsAPI";
import Modal from "./Modal";

function Editdetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [firstName, setFirstName] = useState(
    user?.additionalDetails?.firstName || ""
  );
  const [lastName, setLastName] = useState(
    user?.additionalDetails?.lastName || ""
  );
  const [dateOfBirth, setDateOfBirth] = useState(
    user?.additionalDetails?.dateOfBirth || ""
  );
  const [gender, setGender] = useState(user?.additionalDetails?.gender || "");
  const [contactNumber, setContactNumber] = useState(
    user?.additionalDetails?.contactNumber || ""
  );
  const [editField, setEditField] = useState("");

  const handleEditClick = (field) => {
    setIsModalOpen(true);
    setEditField(field);
  };

  const handleOnChange = (e, field) => {
    switch (field) {
      case "first name":
        setFirstName(e.target.value);
        break;
      case "last name":
        setLastName(e.target.value);
        break;
      case "date of birth":
        setDateOfBirth(e.target.value);
        break;
      case "gender":
        setGender(e.target.value);
        break;
      case "contact number":
        setContactNumber(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = (e, field) => {
    e.preventDefault();
    const updatedData = {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      contactNumber,
    };
    dispatch(updateProfile(token, updatedData));
    setIsModalOpen(false);
    setEditField(field);
  };

  return (
    <div className="container flex justify-center items-center">
      <div className="innerBox flex flex-col justify-center items-center">
        <div className="heading w-[400px] items-center mt-12 flex justify-start gap-24 sm:w-[300px] sm:gap-14 sm2xl:w-[250px] sm2xl:gap-10">
          <IoMdArrowRoundBack
            onClick={() => navigate(-1)}
            className="text-2xl text-dark-color hover:cursor-pointer sm:text-[22px] sm2xl:text-xl"
          />
          <h1 className="text-2xl font-medium text-dark-color sm:text-[22px] sm2xl:text-xl sm2xl:text-lg">
            Personal Details
          </h1>
        </div>
        <div className="editable w-[400px] flex flex-col gap-12 mt-12 sm:w-[300px] sm:mx-auto sm2xl:w-[250px]">
          <div className="firstname flex items-center justify-between">
            <div className="name">
              <h1 className="text-dark-color font-medium">First name</h1>
              <h2 className="text-medium-color">{firstName}</h2>
            </div>
            <div className="edit">
              <button
                onClick={() => handleEditClick("first name")}
                className="bg-dark-color w-16 rounded-full text-sm py-0.5 text-white"
              >
                Edit
              </button>
            </div>
          </div>
          <div className="lastname flex items-center justify-between">
            <div className="name">
              <h1 className="text-dark-color font-medium">Last name</h1>
              <h2 className="text-medium-color">{lastName}</h2>
            </div>
            <div className="edit">
              <button
                onClick={() => handleEditClick("last name")}
                className="bg-dark-color w-16 rounded-full text-sm py-0.5 text-white"
              >
                Edit
              </button>
            </div>
          </div>
          <div className="dateofBirth flex items-center justify-between">
            <div className="name">
              <h1 className="text-dark-color font-medium">Date of birth</h1>
              <h2 className="text-medium-color">{dateOfBirth}</h2>
            </div>
            <div className="edit">
              <button
                onClick={() => handleEditClick("date of birth")}
                className="bg-dark-color w-16 rounded-full text-sm py-0.5 text-white"
              >
                Edit
              </button>
            </div>
          </div>
          <div className="gender flex items-center justify-between">
            <div className="name">
              <h1 className="text-dark-color font-medium">Gender</h1>
              <h2 className="text-medium-color">{gender}</h2>
            </div>
            <div className="edit">
              <button
                onClick={() => handleEditClick("gender")}
                className="bg-dark-color w-16 rounded-full text-sm py-0.5 text-white"
              >
                Edit
              </button>
            </div>
          </div>
          <div className="contactNumber flex items-center justify-between">
            <div className="name">
              <h1 className="text-dark-color font-medium">Contact number</h1>
              <h2 className="text-medium-color">{contactNumber}</h2>
            </div>
            <div className="edit">
              <button
                onClick={() => handleEditClick("contact number")}
                className="bg-dark-color w-16 rounded-full text-sm py-0.5 text-white"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
        <Modal
          isOpen={isModalOpen}
          handleSave={handleOnSubmit}
          handleChange={handleOnChange}
          fieldName={editField}
          fieldValue={
            editField === "first name"
              ? firstName
              : editField === "last name"
              ? lastName
              : editField === "date of birth"
              ? dateOfBirth
              : editField === "gender"
              ? gender
              : editField === "contact number"
              ? contactNumber
              : ""
          }
        />
      </div>
    </div>
  );
}

export default Editdetails;
