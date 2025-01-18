import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../animations/Loader.json";

const Loader = () => {
  const style = {
    height: 100,
    width: 100,
    margin: "auto",
    display: "block",
  };

  return <Lottie animationData={loadingAnimation} style={style} />;
};

export default Loader;
