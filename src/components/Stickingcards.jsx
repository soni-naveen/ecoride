import React from "react";

function Stickingcards(props) {
  return (
    <div className="bg-light-color h-[300px] w-[400px] p-7 rounded-lg flex flex-col gap-5 xl:h-[350px]">
      <div className="text-dark-color">{props.icon}</div>
      <div className="text-dark-color font-roboto font-bold text-2xl max-1329: text-nowrap xl:text-xl">
        {props.title}
      </div>
      <div className="text-dark-color">{props.content}</div>
    </div>
  );
}

export default Stickingcards;
