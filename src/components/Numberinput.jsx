import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

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
      <RemoveIcon
        onClick={handleDecrement}
        fontSize="small"
        className="text-gray-600 border-gray-600 rounded-full cursor-pointer"
      />
      <input
        value={inputQuantity}
        {...register}
        onChange={handleChange}
        className="text-center border-x-2 outline-none w-16 text-2xl font-bold caret-white smxl:w-24"
      />
      <AddIcon
        onClick={handleIncrement}
        fontSize="small"
        className="text-gray-600 border-gray-600 rounded-full cursor-pointer"
      />
    </div>
  );
}
