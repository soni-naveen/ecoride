import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./Chatbot/chatbot.css";

import config from "./Chatbot/config";
import MessageParser from "./Chatbot/MessageParser";
import ActionProvider from "./Chatbot/ActionProvider";

// Define mapping of intents/questions to responses
const responses = {
  weather: "The weather today is sunny.",
  greeting: "Hello! How can I assist you today?",
  // Add more intents/questions and responses as needed
};

// Function to get response based on the incoming message
const getResponse = (message) => {
  // Check if the message matches any intent/question in the responses
  for (const intent in responses) {
    if (message.toLowerCase().includes(intent)) {
      return responses[intent];
    }
  }
  // Default response if no match is found
  return "I'm sorry, I don't understand that.";
};

function Helpcenter() {
  const [messages, setMessages] = useState([]);

  // Function to handle new user message
  const handleNewUserMessage = (newMessage) => {
    const response = getResponse(newMessage.message);
    setMessages((prevMessages) => [
      ...prevMessages,
      newMessage,
      { message: response, author: "bot" },
    ]);
  };
  return (
    <div className="h-screen flex flex-col justify-center gap-16 items-center bg-slate-200">
      <div>
        <h1 className=" font-semibold text-xl text-dark-color md:text-sm">
          Chat With Confidence! We have got you covered
        </h1>
      </div>
      <div>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
          // messageHistory={messages}
          // onSendMessage={handleNewUserMessage}
        />
      </div>
    </div>
  );
}

export default Helpcenter;
