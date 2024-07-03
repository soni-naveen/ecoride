import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (
      message.toLowerCase() === "hello" ||
      message.toLowerCase() === "hi" ||
      message.toLowerCase() === "hlo"
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
      message.toLowerCase().includes("book ") &&
      (message.toLowerCase().includes("ride") ||
        message.toLowerCase().includes("rides"))
    ) {
      actions.handleBookRide();
    } else if (
      message.toLowerCase().includes("publish a ride") ||
      message.toLowerCase().includes("to publish ride") ||
      message.toLowerCase().includes("offer ride") ||
      message.toLowerCase().includes("offer a ride")
    ) {
      actions.handleOfferRide();
    } else if (
      message.toLowerCase().includes("stop point") ||
      message.toLowerCase().includes("add stop points")
    ) {
      actions.handleStopPoint();
    } else if (message.toLowerCase().includes("time")) {
      actions.handleTime();
    } else if (
      message.toLowerCase().includes("payment") ||
      message.toLowerCase().includes("money") ||
      message.toLowerCase().includes("charges")
    ) {
      actions.handleMoney();
    } else if (
      message.toLowerCase() === "bye" ||
      message.toLowerCase() === "by" ||
      message.toLowerCase().includes("thanks") ||
      message.toLowerCase().includes("thank you") ||
      message.toLowerCase().includes("thankyou") ||
      message.toLowerCase() === "ok"
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
      message.toLowerCase().includes("my booked rides") ||
      message.toLowerCase().includes("my booked ride") ||
      message.toLowerCase().includes("published ride") ||
      message.toLowerCase().includes("my rides") ||
      message.toLowerCase().includes("my ride")
    ) {
      actions.handleSeeYourRides();
    } else if (
      message.toLowerCase().includes("more seats") ||
      message.toLowerCase().includes("more than 1 seat") ||
      message.toLowerCase().includes("multiple seats")
    ) {
      actions.handleNoOfSeats();
    } else if (
      message.toLowerCase().includes("cancel booked ride") ||
      message.toLowerCase().includes("cancel my ride") ||
      message.toLowerCase().includes("cancel ride")
    ) {
      actions.handleCancelBookedRide();
    } else if (
      message.toLowerCase().includes("get verified") ||
      message.toLowerCase().includes("verify profile") ||
      message.toLowerCase().includes("verify my profile") ||
      message.toLowerCase().includes("verified user") ||
      message.toLowerCase().includes("verified driver")
    ) {
      actions.handleVerify();
    } else if (
      message.toLowerCase().includes("delete account") ||
      message.toLowerCase().includes("delete my account") ||
      message.toLowerCase().includes("delete my profile") ||
      message.toLowerCase().includes("delete profile")
    ) {
      actions.handleDeleteAccount();
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
