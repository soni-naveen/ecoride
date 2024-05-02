import React from "react";
import { useNavigate } from "react-router-dom";

function Completeprofile() {
  const navigate = useNavigate();
  const handleOnSubmit = (e) => {
    navigate("/");
  };
  return (
    <div className="h-full mt-16 flex justify-center items-center">
      <div className="centerBox flex flex-col gap-10">
        <h1 className="font-bold text-3xl text-dark-color smxl:text-2xl">
          Complete Your Profile
        </h1>

        <form
          onSubmit={handleOnSubmit}
          action=""
          className="flex flex-col gap-7 items-center"
        >
          <div className="firstname flex flex-col gap-1.5">
            <label className="text-dark-color font-medium" htmlFor="FirstName">
              First Name :
            </label>
            <input
              type="text"
              placeholder="e.g. Naveen"
              className="outline w-[270px] focus:outline-medium-color outline-1 rounded-sm py-2 px-3 smxl:w-[250px] smxl:py-1.5"
            />
          </div>
          <div className="lastname flex flex-col gap-1.5">
            <label className="text-dark-color font-medium" htmlFor="LastName">
              Last Name :
            </label>
            <input
              type="text"
              placeholder="e.g. Soni"
              className="outline w-[270px] focus:outline-medium-color outline-1 rounded-sm py-2 px-3 smxl:w-[250px] smxl:py-1.5"
            />
          </div>
          <div className="dateofbirth flex flex-col gap-1.5">
            <label
              className="text-dark-color font-medium"
              htmlFor="dateofbirth"
            >
              Date of Birth :
            </label>
            <input
              type="date"
              className="outline w-[270px] focus:outline-medium-color outline-1 rounded-sm py-2 px-3 smxl:w-[250px] smxl:py-1.5"
            />
          </div>
          <div className="firstname flex flex-col gap-1.5">
            <label className="text-dark-color font-medium" htmlFor="FirstName">
              Mobile number :
            </label>
            <input
              type="number"
              placeholder="+91 987654321"
              className="outline w-[270px] focus:outline-medium-color outline-1 rounded-sm py-2 px-3 smxl:w-[250px] smxl:py-1.5"
            />
          </div>
          <button className="bg-dark-color w-[250px] py-2.5 mt-4 rounded-full text-white smxl:py-2">
            Save and Proceed
          </button>
        </form>
      </div>
    </div>
  );
}

export default Completeprofile;
