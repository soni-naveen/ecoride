import React, { useEffect, useState } from "react";
import {
  getInboxMessages,
  deleteInboxMessage,
} from "../../services/operations/ProfileAPI";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";

export default function Inbox() {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(null);
  const [inboxMessages, setInboxMessages] = useState(null);

  const inboxId = user?.inbox?._id || user?.user?.inbox?._id;

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const messages = await getInboxMessages(inboxId);
        setInboxMessages(messages.data);
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
      <h1 className="text-dark-color text-center text-3xl mt-7 mb-5 font-semibold sm:text-2xl sm:mt-6">
        Inbox
      </h1>
      <hr />
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
                <div className="flex flex-col items-center gap-3 mx-5 justify-center my-5">
                  {inboxMessages?.message
                    ?.slice()
                    .reverse()
                    .map((msg, idx) => (
                      <div
                        key={idx}
                        className="flex items-center w-full max-w-[600px] justify-between gap-2 p-5 border border-slate-300 rounded-sm sm:p-4 sm:text-sm smxl:text-xs sm2xl:gap-1"
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
    </>
  );
}
