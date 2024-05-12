import React from "react";

function Modal({ isOpen, handleSave, handleChange, fieldName, fieldValue }) {
  const inputType =
    fieldName === "date of birth"
      ? "date"
      : fieldName === "contact number"
      ? "number"
      : "text";
  return (
    <div
      className={`modal ${
        isOpen ? "show" : "hidden"
      } fixed z-10 inset-0 overflow-y-auto`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="modal-overlay absolute w-full h-full bg-black bg-opacity-85"></div>
        <div className="modal-container bg-dark-color w-96 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto smxl:w-80 sm2xl:w-64">
          <div className="modal-content py-10 text-left px-10 sm2xl:px-7">
            <div className="flex justify-between items-center pb-3">
              <p className="text-xl font-normal text-white sm2xl:text-sm smxl:text-lg">
                What's your {fieldName}?
              </p>
            </div>
            <form onSubmit={(e) => handleSave(e, fieldName)}>
              <input
                required
                maxLength={100}
                type={inputType}
                value={fieldValue}
                onChange={(e) => handleChange(e, fieldName)}
                className="w-full px-3 py-2 outline-none rounded smxl:text-sm sm2xl:py-1.5"
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
