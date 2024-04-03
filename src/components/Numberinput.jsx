import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export default function Numberinput() {
  const [inputQuantity, setInputQuantity] = useState(1);

  const handleIncrement = () => {
    if (inputQuantity < 8) {
      setInputQuantity(inputQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (inputQuantity > 1) {
      setInputQuantity(inputQuantity - 1);
    }
  };
  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setInputQuantity(value);
    }
  };

  return (
    <div
      className="bg-white text-center h-[3.4rem] w-32 flex items-center justify-center rounded-[4px]
    sm2xl:w-[13rem] smxl:h-[2.5rem] smxl:w-[14rem] smxl:justify-around"
    >
      <RemoveIcon
        onClick={handleDecrement}
        fontSize="small"
        className="text-gray-600 border-2 border-gray-600 rounded-full"
      />
      <input
        value={inputQuantity}
        onChange={handleChange}
        className="text-center outline-none w-16 text-2xl font-bold caret-white"
      />
      <AddIcon
        onClick={handleIncrement}
        fontSize="small"
        className="text-gray-600 border-2 border-gray-600 rounded-full"
      />
    </div>
  );
}
