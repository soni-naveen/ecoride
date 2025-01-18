import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../animations/LoadAnimation.json";

const Loader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Lottie
        animationData={loadingAnimation}
        className="md:h-72 md:w-72 h-96 w-96"
      />
    </div>
  );
};

export default Loader;
