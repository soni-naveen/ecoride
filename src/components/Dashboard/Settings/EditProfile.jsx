import React from "react";
// import { IoMdArrowRoundBack } from "react-icons/io";

function Editdetails() {
  return (
    <div className="container flex justify-center items-center ">
      <div className="innerBox flex flex-col justify-center items-center">
        <div className="heaidng items-center mt-12 flex justify-evenly">
          <h1 className="text-2xl text-dark-color">Personal Details</h1>
        </div>
        <div className="editable w-[400px] flex flex-col gap-12 mt-12">
          <div className="firstname flex justify-between sm:justify-evenly">
            <div className="name">
              <h1 className="text-dark-color">First Name</h1>
              <h2 className="text-medium-color">Naveen</h2>
            </div>
            <div className="edit">
              <button className="bg-dark-color w-16 rounded-xl text-white">
                Edit
              </button>
            </div>
          </div>
          <div className="lastname flex justify-between sm:justify-evenly">
            <div className="name">
              <h1 className="text-dark-color">Last Name</h1>
              <h2 className="text-medium-color">soni</h2>
            </div>
            <div className="edit">
              <button className="bg-dark-color w-16 rounded-xl text-white">
                Edit
              </button>
            </div>
          </div>
          <div className="dateofBirth flex justify-between sm:justify-evenly">
            <div className="name">
              <h1 className="text-dark-color">Date Of Birth</h1>
              <h2 className="text-medium-color">01/01/2001</h2>
            </div>
            <div className="edit">
              <button className="bg-dark-color w-16 rounded-xl text-white">
                Edit
              </button>
            </div>
          </div>
          <div className="firstname flex justify-between sm:justify-evenly">
            <div className="name">
              <h1 className="text-dark-color">Mobile Number</h1>
              <h2 className="text-medium-color">+91 9876543210</h2>
            </div>
            <div className="edit">
              <button className="bg-dark-color w-16 rounded-xl text-white">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editdetails;
