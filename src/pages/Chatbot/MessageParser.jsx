import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    console.log(message);
    if (
      message.toLowerCase().startsWith("hello") ||
      message.toLowerCase().startsWith("hi") ||
      message.toLowerCase().startsWith("hlo")
    ) {
      actions.handleHello();
    } else if (
      message.toLowerCase().includes("find rides") ||
      message.toLowerCase().includes("find ride") ||
      message.toLowerCase().includes("search rides") ||
      message.toLowerCase().includes("search ride")
    ) {
      actions.handleRides();
    } else if (
      message.toLowerCase().includes("price") ||
      message.toLowerCase().includes("prices") ||
      message.toLowerCase().includes("rate")
    ) {
      actions.handlePrice();
    } else if (
      message.toLowerCase().includes("book") &&
      (message.toLowerCase().includes("ride") ||
        message.toLowerCase().includes("rides"))
    ) {
      actions.handleBookRide();
    } else if (
      message.toLowerCase().includes("publish") ||
      message.toLowerCase().includes("offer ride") ||
      message.toLowerCase().includes("offer a ride")
    ) {
      actions.handleOfferRide();
    } else if (message.toLowerCase().includes("time")) {
      actions.handleTime();
    } else if (
      message.toLowerCase().includes("payment") ||
      message.toLowerCase().includes("money") ||
      message.toLowerCase().includes("charges")
    ) {
      actions.handleMoney();
    } else if (
      message.toLowerCase().includes("bye") ||
      message.toLowerCase().includes("thanks") ||
      message.toLowerCase().includes("thank you") ||
      message.toLowerCase().includes("thankyou") ||
      message.toLowerCase().includes("ok")
    ) {
      actions.handleBye();
    } else if (
      message.toLowerCase().includes("contact you") ||
      message.toLowerCase().includes("contact ecoride") ||
      message.toLowerCase().includes("contact team")
    ) {
      actions.handleContactUs();
    } else if (
      message.toLowerCase().includes("forgot password") ||
      message.toLowerCase().includes("reset password") ||
      message.toLowerCase().includes("reset my password") ||
      message.toLowerCase().includes("forgot my password")
    ) {
      actions.handleForgotPassword();
    } else if (
      message.toLowerCase().includes("change password") ||
      message.toLowerCase().includes("update password")
    ) {
      actions.handleChangePassword();
    } else if (
      message.toLowerCase().includes("booked") ||
      message.toLowerCase().includes("published") ||
      message.toLowerCase().includes("my rides")
    ) {
      actions.handleSeeYourRides();
    } else {
      actions.handleDefault();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
