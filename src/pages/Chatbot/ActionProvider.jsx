import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botmsg = createChatBotMessage("Hello nice to meet you!");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmsg],
    }));
  };

  const handleRides = () => {
    const botmsg = createChatBotMessage(
      "Enter your starting location, destination, date when you go, no.of seat required then click 'See rides'."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmsg],
    }));
  };

  const handlePrice = () => {
    const botmsg = createChatBotMessage(
      "Price of a ride is set by the driver. You can contact driver for further details."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmsg],
    }));
  };

  const handleBookRide = () => {
    const botmsg = createChatBotMessage(
      "After searching, choose your ride and click on 'Book' to book ride, to get more info of ride contact driver."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmsg],
    }));
  };

  const handleTime = () => {
    const botmsg = createChatBotMessage(
      "Time depends on your location and the duration of ride. But we will try our best for the least delay"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmsg],
    }));
  };

  const handleMoney = () => {
    const botmsg = createChatBotMessage(
      "For your safety, always pay to driver after or during your journey."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmsg],
    }));
  };

  const handleBye = () => {
    const botmsg = createChatBotMessage(
      "I am happy, I was able to help. Fell free to contact me again."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmsg],
    }));
  };

  const handleOfferRide = () => {
    const botmsg = createChatBotMessage(
      "Just fill the details of your ride on 'Publish Ride' page to publish your ride."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmsg],
    }));
  };

  const handleStopPoint = () => {
    const botmsg = createChatBotMessage(
      "Stop points are the locations that lie between your starting location and final destination."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmsg],
    }));
  };

  const handleContactUs = () => {
    const botmsg = createChatBotMessage(
      "You can contact our team via 'Contact Us' page or you can mail us: ecoride.in@gmail.com"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmsg],
    }));
  };

  const handleChangePassword = () => {
    const botmsg = createChatBotMessage(
      "Go to Profile, under Account section you can change your password."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmsg],
    }));
  };

  const handleForgotPassword = () => {
    const botmsg = createChatBotMessage(
      "You can reset your password by just clicking on 'forgot password' on login page."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmsg],
    }));
  };

  const handleDeleteAccount = () => {
    const botmsg = createChatBotMessage(
      "Go to Profile, under the Account tab, you find the 'Delete your Account' option."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmsg],
    }));
  };

  //------> need to change!
  const handleSeeYourRides = () => {
    const botmsg = createChatBotMessage(
      "This feature is not available yet...."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmsg],
    }));
  };

  const handleDefault = () => {
    const botmsg = createChatBotMessage(
      "Sorry! I can't understand. Submit your query to 'Contact us' page."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botmsg],
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
            handleBookRide,
            handleOfferRide,
            handleStopPoint,
            handleTime,
            handleMoney,
            handleChangePassword,
            handleForgotPassword,
            handleDeleteAccount,
            handleSeeYourRides,
            handleContactUs,
            handleBye,
            handleDefault,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
