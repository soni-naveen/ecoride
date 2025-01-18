import React from "react";
import Lottie from "lottie-react";
import FetchPassLoader from "../animations/FetchPassAnimation.json";

const Loader = () => {
  return (
    <Lottie
      animationData={FetchPassLoader}
      className="md:h-60 md:w-60 h-72 w-72"
    />
  );
};

export default Loader;
