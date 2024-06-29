import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

function Modal({
  isOpen,
  handleSave,
  handleChange,
  fieldName,
  fieldValue,
  setIsOpen,
}) {
  const inputType = fieldName === "date of birth" ? "date" : "text";
  const patternType =
    fieldName === "contact number"
      ? "[7-9]{1}[0-9]{9}"
      : fieldName === "first name"
      ? "^[A-Za-z]{3,16}$"
      : fieldName === "last name"
      ? "^[A-Za-z]{3,16}$"
      : fieldName === "gender"
      ? "^[A-Za-z]{3,16}$"
      : ".+";

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`modal ${
        isOpen ? "show" : "hidden"
      } fixed z-50 inset-0 overflow-y-auto`}
    >
      <div className="flex items-center justify-center min-h-full">
        <div className="modal-overlay absolute w-full min-h-full bg-black bg-opacity-85"></div>
        <div className="modal-container w-96 mx-auto z-50 smxl:w-80 sm2xl:w-64">
          <button
            onClick={handleClose}
            className="flex justify-end w-full mb-2"
          >
            <ClearIcon className="text-white" />
          </button>
          <div className="modal-content bg-dark-color rounded-xl shadow-lg py-10 text-left px-10 smxl:p-8 sm2xl:px-7">
            <div className="flex justify-between items-center pb-5">
              <p className="text-xl font-normal text-white sm2xl:text-sm smxl:text-lg">
                {fieldName === "vehicle"
                  ? "Add your vehicle model and number *"
                  : `What's your ${fieldName}?`}
              </p>
            </div>
            <form onSubmit={(e) => handleSave(e, fieldName)}>
              <input
                required
                autoComplete="off"
                maxLength={50}
                type={inputType}
                value={fieldValue}
                pattern={patternType}
                onChange={(e) => handleChange(e, fieldName)}
                className="w-full p-3 outline-none rounded smxl:text-sm sm2xl:py-1.5"
              />
              <div className="flex justify-center pt-8">
                <button
                  type="submit"
                  className="px-7 py-1.5 font-medium bg-medium-color text-white rounded hover:bg-[#39a198] focus:outline-none smxl:text-sm sm2xl:text-xs"
                >
                  SAVE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
