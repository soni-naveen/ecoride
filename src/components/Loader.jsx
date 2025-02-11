import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../animations/LoadAnimation.json";

const Loader = () => {
  return (
    <Lottie
      animationData={loadingAnimation}
      className="md:h-48 md:w-48 h-60 w-60"
    />
  );
};

export default Loader;
