import React, { useEffect, useState } from "react";
import { PiChatsFill } from "react-icons/pi";
import {
  getInboxMessages,
  getChats,
  deleteInboxMessage,
} from "../../services/operations/ProfileAPI";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Loader";

export default function Inbox() {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);
  const inboxType = urlParams.get("type");
  const [activeTab, setActiveTab] = useState(`${inboxType}`);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(`/dashboard/inbox?type=${tab}`);
  };

  const [loading, setLoading] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(null);
  const [inboxMessages, setInboxMessages] = useState(null);
  const [chats, setChats] = useState(null);

  const inboxId = user?.inbox?._id || user?.user?.inbox?._id;
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const messages = await getInboxMessages(inboxId);
        const chats = await getChats(token);
        setInboxMessages(messages.data);
        setChats(chats.data);
      } catch (error) {
        console.error("Could not fetch notifications!", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [inboxId]);

  const deleteMessage = (msg) => {
    setDeleteLoading(true);
    dispatch(deleteInboxMessage(token, msg));
    setDeleteLoading(false);
  };

  return (
    <>
      <div className="mt-1 flex justify-evenly items-center border-b shadow border-gray-200">
        <div
          className={`text-lg font-semibold w-full pt-4 pb-3 cursor-pointer text-center sm:text-lg smxl:text-base ${
            activeTab === "notifications"
              ? "text-dark-color border-b-2  border-b-medium-color"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("notifications")}
        >
          Notifications
        </div>
        <div className="py-5 border-x border-slate-200"></div>
        <div
          className={`text-lg font-semibold w-full pt-4 pb-3 cursor-pointer text-center sm:text-lg smxl:text-base ${
            activeTab === "chats"
              ? "text-dark-color border-b-2  border-b-medium-color"
              : "text-gray-500"
          }`}
          onClick={() => handleTabClick("chats")}
        >
          Chats
        </div>
      </div>
      <div>
        {activeTab === "notifications" && (
          <div>
            {loading ? (
              <div className="grid min-h-[calc(100vh-100px)] place-items-center">
                <Spinner />
              </div>
            ) : (
              <div>
                {inboxMessages?.message?.length === 0 ? (
                  <div className="text-center mt-10 text-slate-300 text-xl smxl:text-base sm2xl:text-sm">
                    New notifications will appear here!
                  </div>
                ) : (
                  <div>
                    {deleteLoading ? (
                      <div className="grid min-h-[calc(100vh-100px)] place-items-center">
                        <Spinner />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-3 mx-4 justify-center my-5">
                        {inboxMessages?.message
                          ?.slice()
                          .reverse()
                          .map((msg, idx) => (
                            <div
                              key={idx}
                              className="flex items-center w-full max-w-[600px] justify-between gap-2 p-5 border border-slate-300 text-gray-600 rounded-sm sm:p-4 sm:text-sm smxl:text-xs sm2xl:gap-1"
                            >
                              <span>{msg}</span>
                              <RxCross2
                                onClick={() => deleteMessage(msg)}
                                className="text-base cursor-pointer text-dark-color sm:text-sm sm2xl:text-[10px]"
                              />
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        {activeTab === "chats" && (
          <div>
            {loading ? (
              <div className="grid min-h-[calc(100vh-100px)] place-items-center">
                <Spinner />
              </div>
            ) : (
              <div>
                {!chats || chats?.length === 0 ? (
                  <div className="text-center mt-10 text-slate-300 text-xl smxl:text-base sm2xl:text-sm">
                    All new chats will appear here!
                  </div>
                ) : (
                  <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                      <div className="bg-light-color text-center font-medium text-lg text-dark-color w-full p-4 smxl:text-base sm:p-3.5 sm2xl:text-sm">
                        <div className="flex items-center justify-center gap-2">
                          <PiChatsFill className="text-2xl smxl:text-lg sm2xl:text-base" />
                          <span>EcoRide Chats</span>
                        </div>
                      </div>
                      {chats?.map((chat) => (
                        <div
                          key={chat._id}
                          className="flex w-full max-w-[800px] justify-between gap-2 border-b border-slate-300 text-gray-600 rounded-sm"
                        >
                          <div className="w-full text-black text-left sm:text-sm smxl:text-xs">
                            {chat?.user1?._id ===
                            user?.additionalDetails?._id ? (
                              <div className="flex items-center justify-between mx-5 smxl:mx-2">
                                <button
                                  onClick={() => navigate(`${chat.chatLink}`)}
                                  className="p-5 flex-1 font-medium text-lg flex items-center gap-3 sm:p-4 smxl:text-base smxl:gap-2 sm2xl:text-sm"
                                >
                                  <img
                                    src={chat?.user2?.image}
                                    className="rounded-full bg-cover bg-center bg-profile-img h-8 w-8 object-cover smxl:h-7 smxl:w-7 sm2xl:w-6 sm2xl:h-6"
                                  />
                                  <div>
                                    {chat?.user2?.firstName}{" "}
                                    {chat?.user2?.lastName}
                                  </div>
                                </button>
                                <button
                                  onClick={() =>
                                    navigate(`/profile/${chat?.user2?._id}`)
                                  }
                                  className="p-5 underline sm:p-4"
                                >
                                  Profile
                                </button>
                              </div>
                            ) : (
                              <div className="flex items-center justify-between mx-5 smxl:mx-2">
                                <button
                                  onClick={() => navigate(`${chat.chatLink}`)}
                                  className="p-5 flex-1 font-medium text-lg flex items-center gap-3 sm:p-4 smxl:text-base smxl:gap-2 sm2xl:text-sm"
                                >
                                  <img
                                    src={chat?.user1?.image}
                                    alt=""
                                    className="rounded-full bg-cover bg-center bg-profile-img h-8 w-8 object-cover smxl:h-7 smxl:w-7 sm2xl:w-6 sm2xl:h-6"
                                  />
                                  <div>
                                    {chat?.user1?.firstName}{" "}
                                    {chat?.user1?.lastName}
                                  </div>
                                </button>
                                <button
                                  onClick={() =>
                                    navigate(`/profile/${chat?.user1?._id}`)
                                  }
                                  className="p-5 underline sm:p-4"
                                >
                                  Profile
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
