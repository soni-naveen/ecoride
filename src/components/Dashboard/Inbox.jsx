import React, { useEffect, useState } from "react";
import {
  getInboxMessages,
  getChats,
  deleteInboxMessage,
} from "../../services/operations/ProfileAPI";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

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

  console.log(chats);

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
                <div className="spinner"></div>
              </div>
            ) : (
              <div>
                {inboxMessages?.message?.length === 0 ? (
                  <div className="text-center mt-5 text-slate-300 text-xl smxl:text-base sm2xl:text-sm">
                    New notifications will appear here!
                  </div>
                ) : (
                  <div>
                    {deleteLoading ? (
                      <div className="grid min-h-[calc(100vh-100px)] place-items-center">
                        <div className="spinner"></div>
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
                <div className="spinner"></div>
              </div>
            ) : (
              <div>
                {chats?.length === 0 ? (
                  <div className="text-center mt-5 text-slate-300 text-xl smxl:text-base sm2xl:text-sm">
                    All new chats will appear here!
                  </div>
                ) : (
                  <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                      <div className="bg-light-color text-center font-medium text-lg text-dark-color w-full p-4 sm:text-base sm:p-3">
                        EcoRide Chats
                      </div>
                      {chats?.map((chat) => (
                        <div
                          key={chat._id}
                          className="flex items-center w-full max-w-[800px] justify-between gap-2 border-b border-slate-300 text-gray-600 rounded-sm"
                        >
                          <a href={`${chat.chatLink}`}>
                            <button className="p-5 sm:p-4 sm:text-sm smxl:text-xs">
                              Chat
                            </button>
                          </a>
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
