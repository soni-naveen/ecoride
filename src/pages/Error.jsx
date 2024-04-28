import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function Error() {
  const navigate = useNavigate();

  return (
    <div className="mt-20 flex flex-col justify-center items-center flex-1  text-dark-color text-3xl font-medium bg-bg-richblack-800">
      <div className="flex flex-col justify-center items-center gap-6 bg-light-color shadow w-[450px] h-[200px] rounded-xl sm:w-[400px] smxl:w-[300px]">
        <div className="flex items-center justify-center text-center rounded-lg sm:w-[60%0] sm:w-[70%] sm:text-2xl">
          Error 404 - Page Not Found
        </div>
        <button
          className="bg-[#115e59] text-base text-white py-2 px-4 rounded-full flex gap-4 shadow hover:bg-[#40827e] duration-1000"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className=" my-1 text-white" />
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Error;
