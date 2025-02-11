import React from "react";
import Lottie from "lottie-react";
import StartAnimation from "../animations/StartAnimation.json";

const StartLoader = () => {
  return (
    <Lottie
      animationData={StartAnimation}
      className="md:h-60 md:w-60 h-80 w-80"
    />
  );
};

export default StartLoader;
