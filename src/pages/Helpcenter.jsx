import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./Chatbot/chatbot.css";

import config from "./Chatbot/config";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";
import Footer from "../components/Footer/Footer";

function Helpcenter() {
  return (
    <>
      <div className="min-h-[calc(100vh-3.3rem)] flex flex-col justify-center gap-10 items-center bg-slate-200">
        <div>
          <h1 className="font-semibold text-lg text-dark-color md:text-sm smxl:text-xs">
            Chat With Confidence! We have got you covered
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
      <Footer />
    </>
  );
}

export default Helpcenter;
