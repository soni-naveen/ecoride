import React from "react";
import Lottie from "lottie-react";
import StartAnimation from "../animations/StartAnimation.json";

const StartLoader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Lottie
        animationData={StartAnimation}
        className="md:h-48 md:w-48 h-80 w-80"
      />
    </div>
  );
};

export default StartLoader;
