import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import io from "socket.io-client";
import axios from "axios";
import { useSelector } from "react-redux";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { getFullProfile } from "../services/operations/ProfileAPI";

const ENDPOINT = import.meta.env.VITE_REACT_BASE_URL;

function ChatPage() {
  const { driverId, passengerId } = useParams();
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const messagesEndRef = useRef(null);

  const roomId = `${driverId}_${passengerId}`;

  const isDriver = driverId === user?.additionalDetails?._id ? true : false;

  const [driver, setDriver] = useState(null);
  const [passenger, setPassenger] = useState(null);

  const [isAuthorized, setIsAuthorized] = useState(null);

  useEffect(() => {
    if (user && user.additionalDetails) {
      const isDriver = driverId === user.additionalDetails._id;
      const isPassenger = passengerId === user.additionalDetails._id;

      if (!isDriver && !isPassenger) {
        setIsAuthorized(false);
      } else {
        setIsAuthorized(true);
      }
    }
  }, [user, driverId, passengerId]);

  useEffect(() => {
    if (isAuthorized === false) {
      navigate("/home");
    }
  }, [isAuthorized, navigate]);

  useEffect(() => {
    (async () => {
      try {
        const driverProfile = await getFullProfile(driverId);
        const passengerProfile = await getFullProfile(passengerId);
        setDriver(driverProfile.data);
        setPassenger(passengerProfile.data);
      } catch (error) {
        console.error("Could not fetch User Profile", error);
      }
    })();
  }, [driverId, passengerId]);

  useEffect(() => {
    const newSocket = io(ENDPOINT, {
      transports: ["websocket", "polling"],
      withCredentials: true,
    });

    newSocket.on("connect", () => {
      console.log("Connected to server");
      setSocket(newSocket);
      newSocket.emit("joinRoom", { roomId });
    });

    newSocket.on("connect_error", (error) => {
      console.error("Connection error:", error);
    });
    
    newSocket.on("message", (message) => {
      setMessages((prevMessages) => {
        // Check if the message is already in the array
        if (!prevMessages.some((m) => m._id === message._id)) {
          return [...prevMessages, message];
        }
        return prevMessages;
      });
    });

  }, [roomId]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `${ENDPOINT}/api/v1/messages/${roomId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [roomId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputMessage && socket && inputMessage.trim() !== "") {
      socket.emit("sendMessage", {
        roomId,
        sender: isDriver ? driverId : passengerId,
        receiver: isDriver ? passengerId : driverId,
        content: inputMessage,
      });
      setInputMessage("");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50">
      <div className="flex items-center gap-5 bg-white p-4 shadow">
        <button onClick={() => navigate(-1)} className="text-dark-color">
          <IoMdArrowRoundBack className="text-xl" />
        </button>
        <h1 className="text-xl w-full text-left font-semibold text-dark-color md:text-lg">
          {isDriver
            ? `${passenger?.firstName} ${passenger?.lastName}`
            : `${driver?.firstName} ${driver?.lastName}`}
        </h1>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.sender === (isDriver ? driverId : passengerId)
                ? "text-right"
                : "text-left"
            }`}
          >
            <div
              className={`inline-block text-left px-4 py-2.5 max-w-[80%] rounded-lg sm:px-3.5 sm:py-2 ${
                message.sender === (isDriver ? driverId : passengerId)
                  ? "bg-[#cff5f3] text-dark-color"
                  : "bg-[#2e85a0] text-white"
              }`}
            >
              <p className="break-all sm:text-sm">{message.content}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={sendMessage} className="bg-white p-4">
        <div className="flex gap-3">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message"
            className="flex-1 px-5 border border-slate-300 rounded-full outline-none sm:text-sm"
          />
          <button
            type="submit"
            className="bg-medium-color text-white p-4 rounded-full sm:p-3"
          >
            <IoSend className="text-xl sm:text-lg" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatPage;
