import { useState, React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeProfile } from "../services/operations/SettingsAPI";
import { useNavigate } from "react-router-dom";

function Completeprofile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    contactNumber: "",
  });

  const { firstName, lastName, gender, dateOfBirth, contactNumber } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(completeProfile(token, formData, navigate));
  };

  return (
    <div className="fixed overflow-auto inset-0 h-full bg-white z-20">
      <div className="flex justify-center my-14">
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
              <label
                className="text-dark-color font-medium"
                htmlFor="firstName"
              >
                First Name :
              </label>
              <input
                required
                autoComplete="off"
                name="firstName"
                type="text"
                value={firstName}
                pattern="^[A-Za-z]{3,16}$"
                onChange={handleOnChange}
                placeholder="e.g. Naveen"
                className="outline w-[270px] focus:outline-medium-color outline-1 rounded-sm py-2 px-3 smxl:w-[250px] smxl:py-1.5"
              />
            </div>
            <div className="lastname flex flex-col gap-1.5">
              <label className="text-dark-color font-medium" htmlFor="LastName">
                Last Name :
              </label>
              <input
                required
                autoComplete="off"
                name="lastName"
                type="text"
                value={lastName}
                pattern="^[A-Za-z]{3,16}$"
                onChange={handleOnChange}
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
                required
                autoComplete="off"
                type="date"
                id="validDate"
                name="dateOfBirth"
                max="2010-01-01"
                value={dateOfBirth}
                onChange={handleOnChange}
                className="outline w-[270px] focus:outline-medium-color outline-1 rounded-sm py-2 px-3 smxl:w-[250px] smxl:py-1.5"
              />
            </div>
            <div className="gender flex flex-col gap-1.5">
              <label className="text-dark-color font-medium" htmlFor="gender">
                Gender
              </label>
              <select
                type="text"
                required
                name="gender"
                value={gender}
                onChange={handleOnChange}
                placeholder="e.g. Soni"
                className="outline w-[270px] focus:outline-medium-color outline-1 rounded-sm py-2 px-3 smxl:w-[250px] smxl:py-1.5"
              >
                <option value="">---- Select ----</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="contactnumber flex flex-col gap-1.5">
              <label
                className="text-dark-color font-medium"
                htmlFor="contactNumber"
              >
                Contact number :
              </label>
              <input
                required
                type="text"
                autoComplete="off"
                name="contactNumber"
                pattern="[6-9]{1}[0-9]{9}"
                value={contactNumber}
                onChange={handleOnChange}
                placeholder="9876543210"
                className="outline w-[270px] focus:outline-medium-color outline-1 rounded-sm py-2 px-3 smxl:w-[250px] smxl:py-1.5"
              />
            </div>
            <button className="bg-dark-color w-[250px] py-2.5 my-4 rounded-full text-white smxl:py-2 smxl:w-[220px]">
              Save and Proceed
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Completeprofile;
