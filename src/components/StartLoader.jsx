import React from "react";
import Lottie from "lottie-react";
import StartAnimation from "../animations/StartAnimation.json";

const StartLoader = () => {
  return (
    <Lottie
      animationData={StartAnimation}
      className="md:h-48 md:w-48 h-60 w-60"
    />
  );
};

export default StartLoader;
