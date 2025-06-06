import Lottie from "lottie-react";
import loadingAnimation from "../animations/LoadAnimation.json";

const Loader = () => {
  return <Lottie animationData={loadingAnimation} />;
};

export default Loader;
