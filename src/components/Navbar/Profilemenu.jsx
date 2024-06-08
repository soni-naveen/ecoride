import { useRef, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { IoHelpBuoy } from "react-icons/io5";
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
      <div className="flex items-center gap-x-1">
        <img
          src={user?.image}
          className="aspect-square bg-cover bg-center bg-[url('https://cdn-icons-png.flaticon.com/512/9385/9385289.png')] w-[35px] rounded-full object-cover md:w-[30px] sm:w-[30px]"
        />
        <AiOutlineCaretDown className="text-sm text-dark-color" />
      </div>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-[120%] right-0 z-[1000] divide-gray-300 overflow-hidden rounded-sm border-[1px]"
          ref={ref}
        >
          <Link
            to="/dashboard/myprofile"
            onClick={() => {
              setOpen(false), handleClickPageTop();
            }}
          >
            <div className="flex w-[200px] bg-white border-b items-center gap-x-5 py-[14px] px-[20px] text-base hover:bg-gray-100 text-dark-color">
              <MdAccountCircle className="text-2xl" />
              Profile
            </div>
          </Link>
          <Link
            to="dashboard/inbox"
            onClick={() => {
              setOpen(false), handleClickPageTop();
            }}
          >
            <div className="flex w-[200px] bg-white border-b items-center gap-x-5 py-[14px] px-[20px] text-base hover:bg-gray-100 text-dark-color">
              <MdOutlineMarkUnreadChatAlt className="text-2xl" />
              Inbox
            </div>
          </Link>
          <Link
            to="dashboard/yourRides"
            onClick={() => {
              setOpen(false), handleClickPageTop();
            }}
          >
            <div className="flex w-[200px] bg-white border-b items-center gap-x-5 py-[14px] px-[20px] text-base hover:bg-gray-100 text-dark-color">
              <FaCarSide className="text-2xl" />
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
              <IoHelpBuoy className="text-2xl" />
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
      )}
    </button>
  );
}
