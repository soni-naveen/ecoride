import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./Chatbot/chatbot.css";
import Footer from "../components/Footer/Footer";

import config from "./Chatbot/config";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";

function Helpcenter() {
  return (
    <>
      <div className="min-h-full max-w-[1800px] mx-auto flex flex-col justify-center gap-7 py-10 items-center bg-slate-100">
        <div>
          <div className="font-semibold text-lg text-center text-dark-color md:text-sm sm2xl:text-xs">
            Chat With Confidence! We have got you covered.
          </div>
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
