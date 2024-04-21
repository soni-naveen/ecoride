import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botmsg = createChatBotMessage("Hello nice to meet you");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmsg],
    }));
  };

  const handleRides = () => {
    const botmsg = createChatBotMessage("You can search ride in find ride options and your rides in your profile");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages,botmsg],
    }));
  };

  const handlePrice = () => {
    const botmsg = createChatBotMessage("Our prices are lowest in the market and with the verified drivers");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages,botmsg],
    }));
  };
  
  const handleBookRide = () => {
    const botmsg = createChatBotMessage("You can book a ride from find a ride options");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages,botmsg]
    }))
  }
  const handleTime = () => {
    const botmsg = createChatBotMessage("Time depends on your location and the duration of ride. But we will try our best for the least delay");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages,botmsg],
    }));
  }

  const handleMoney = () => {
    const botmsg = createChatBotMessage("For your safety we have made payment after the completion of the journey");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages,botmsg],
    }));
  }

  const handleBye = () => {
    const botmsg = createChatBotMessage("I am happy, I was able to help. Fell free to contact me again");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages,botmsg],
    }));
  }

  const handleDefault = () => {
    const botmsg = createChatBotMessage("Sorry!, I can't understand.");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages,botmsg],
    }));
  };
  
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleRides,
            handlePrice,
            handleDefault,
            handleBookRide,
            handleTime,
            handleMoney,
            handleBye
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
