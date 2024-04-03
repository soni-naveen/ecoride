import React from "react";

function Stickingcards(props) {
  return (
    <div className="bg-light-color h-auto min-h-[300px] w-[400px] rounded-lg flex flex-col p-7 gap-5 sm2xl:w-[250px] smxl:min-h-[230px] sm:gap-3 sm:p-5 sm:w-[300px] 2xl:gap-4 lg:min-h-[270px]">
      <div className="text-dark-color">{props.icon}</div>
      <div className="text-dark-color font-roboto font-bold text-2xl sm:text-xl">
        {props.title}
      </div>
      <div className="text-dark-color smxl:text-sm sm:text-base">{props.content}</div>
    </div>
  );
}

export default Stickingcards;
