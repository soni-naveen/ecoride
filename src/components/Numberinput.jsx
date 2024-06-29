import React, { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export default function Numberinput({ register, onValueChange }) {
  const [inputQuantity, setInputQuantity] = useState(1);

  const handleIncrement = () => {
    if (inputQuantity < 8) {
      setInputQuantity(inputQuantity + 1);
      onValueChange(inputQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (inputQuantity > 1) {
      setInputQuantity(inputQuantity - 1);
      onValueChange(inputQuantity - 1);
    }
  };
  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setInputQuantity(value);
      onValueChange(value);
    }
  };

  return (
    <div
      className="bg-white text-center h-[2.4rem] w-[9.5rem] flex items-center justify-evenly rounded-[4px]
    sm2xl:w-[14rem] smxl:h-[2.4rem] smxl:w-[16rem] smxl:justify-evenly"
    >
      <div onClick={handleDecrement} className="p-2.5 cursor-pointer">
        <FaMinus className="text-gray-600 text-base border-gray-600 rounded-full" />
      </div>
      <label>
        <input
          value={inputQuantity}
          {...register}
          onChange={handleChange}
          className="text-center border-x-2 outline-none w-16 text-2xl font-bold caret-white smxl:w-24"
        />
      </label>
      <div onClick={handleIncrement} className="p-2.5 cursor-pointer">
        <FaPlus className="text-gray-600 text-base border-gray-600 rounded-full" />
      </div>
    </div>
  );
}
