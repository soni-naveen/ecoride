import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./Chatbot/chatbot.css";

import config from "./Chatbot/config";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";

function Helpcenter() {
  return (
    <>
      <div className="min-h-[calc(100vh-4.3rem)] flex flex-col justify-center gap-7 items-center bg-slate-200">
        <div>
          <h1 className="font-semibold text-lg text-center text-dark-color md:text-sm sm2xl:text-xs">
            Chat With Confidence! We have got you covered.
          </h1>
        </div>
        <div>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      </div>
    </>
  );
}

export default Helpcenter;
