import { useEffect, useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { updateDisplayPicture } from "../../../services/operations/SettingsAPI";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function ChangeProfilePicture() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [previewSource, setPreviewSource] = useState(null);

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // console.log(file)
    if (file) {
      setImageFile(file);
      previewFile(file);
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleFileUpload = () => {
    try {
      // console.log("uploading...");
      setLoading(true);
      const formData = new FormData();
      formData.append("displayPicture", imageFile);
      // console.log("formdata", formData)
      dispatch(updateDisplayPicture(token, formData, navigate)).then(() => {
        setLoading(false);
      });
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  };

  useEffect(() => {
    if (imageFile) {
      previewFile(imageFile);
    }
  }, [imageFile]);
  return (
    <>
      <div className="upper flex justify-center items-center gap-5 h-36 w-full bg-light-color sm:h-32">
        <h1 className="text-2xl w-[73%] flex justify-center items-start gap-10 font-medium leading-relaxed text-center text-dark-color md1:text-[20px] sm:text-[17px] sm:gap-3 sm:w-[85%] smxl:text-[15px]">
          <IoMdArrowRoundBack
            onClick={() => navigate(-1)}
            className="text-3xl mt-1 text-dark-color hover:cursor-pointer sm:mt-0"
          />
          Don't wear sunglasses, look straight ahead and make sure you're alone
        </h1>
      </div>
      <div className="my-16 flex items-center justify-center rounded-md">
        <div className="flex flex-col items-center gap-y-10">
          <img
            src={previewSource || user?.additionalDetails?.image}
            alt={`profile-${user?.firstName}`}
            className="rounded-full mx-auto h-32 w-32 sm:h-28 sm:w-28 smxl:w-24 smxl:h-24 object-cover"
          />
          <div className="space-y-2">
            <p className="text-center mb-5">Change Profile Picture</p>
            <div className="flex flex-row gap-3">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/png, image/gif, image/jpeg"
              />
              <button
                onClick={handleClick}
                disabled={loading}
                className="cursor-pointer text-dark-color bg-light-color rounded-full py-2 px-5 font-semibold"
              >
                Select
              </button>
              <button
                className="flex items-center gap-2 bg-dark-color rounded-full px-4 text-white"
                onClick={handleFileUpload}
              >
                {!loading && <FiUpload className="text-lg" />}
                {loading ? "Uploading..." : "Upload"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
