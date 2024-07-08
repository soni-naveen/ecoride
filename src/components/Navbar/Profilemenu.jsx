import { useRef, useState, useEffect } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { PiCarProfile } from "react-icons/pi";
import { MdHelpOutline } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { logout } from "../../services/operations/AuthAPI";

export default function ProfileDropdown() {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const handleClickPageTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  useOnClickOutside(ref, () => setOpen(false));

  if (!token) return null;

  return (
    <button className="relative" onClick={() => setOpen(true)}>
      {user?.inbox?.message?.length !== 0 &&
      user?.inbox?.message?.length !== undefined ? (
        <div className="w-3 h-3 border rounded-full bg-red-600 absolute md:w-2 md:h-2"></div>
      ) : (
        ""
      )}

      <div className="flex items-center gap-x-1">
        <img
          src={user?.additionalDetails?.image}
          alt="U"
          draggable="false"
          className="aspect-square bg-cover bg-center bg-profile-img w-[35px] rounded-full object-cover md:w-[30px]"
        />
        <AiOutlineCaretDown className="text-sm text-dark-color" />
      </div>
      {open && (
        <div className="animate-dropdown-animation absolute top-[130%] right-0">
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute top-[130%] right-0 z-[1000] overflow-hidden rounded-sm shadow-lg triangle-border"
            ref={ref}
          >
            <Link
              to="/dashboard/myprofile?profile=about"
              onClick={() => {
                setOpen(false), handleClickPageTop();
              }}
            >
              <div className="flex w-[200px] bg-white border-b items-center gap-x-5 py-[14px] px-[20px] text-base hover:bg-gray-100 text-dark-color">
                <FiUser className="text-2xl" />
                Profile
              </div>
            </Link>
            <Link
              to="dashboard/inbox?type=notifications"
              onClick={() => {
                setOpen(false), handleClickPageTop();
              }}
            >
              <div className="flex w-[200px] bg-white border-b items-center gap-x-5 py-[14px] px-[20px] text-base hover:bg-gray-100 text-dark-color">
                {user?.inbox?.message?.length !== 0 ? (
                  <div className="w-3 h-3 border rounded-full bg-red-600 absolute top-[65px] md:w-2 md:h-2"></div>
                ) : (
                  ""
                )}
                <BiMessageDetail className="text-2xl" />
                Inbox
              </div>
            </Link>
            <Link
              to="dashboard/yourRides?type=booked"
              onClick={() => {
                setOpen(false), handleClickPageTop();
              }}
            >
              <div className="flex w-[200px] bg-white border-b items-center gap-x-5 py-[14px] px-[20px] text-base hover:bg-gray-100 text-dark-color">
                <PiCarProfile className="text-2xl" />
                Your rides
              </div>
            </Link>
            <Link
              to="/helpcenter"
              onClick={() => {
                setOpen(false), handleClickPageTop();
              }}
            >
              <div className="flex w-[200px] bg-white border-b items-center gap-x-5 py-[14px] px-[20px] text-base hover:bg-gray-100 text-dark-color">
                <MdHelpOutline className="text-2xl" />
                Help Center
              </div>
            </Link>
            <div
              onClick={() => {
                dispatch(logout(navigate));
                setOpen(false);
              }}
              className="flex w-[200px] bg-white items-center gap-x-5 py-[14px] px-[20px] text-base hover:bg-gray-100 text-dark-color"
            >
              <MdLogout className="text-2xl" />
              Logout
            </div>
          </div>
        </div>
      )}
    </button>
  );
}
