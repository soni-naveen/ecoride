import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    console.log(message);
    if (message.includes("HELLO") || message.includes("hello") || message.toLowerCase().includes("hi")) {
      actions.handleHello();
    }
    else if((message.toLowerCase().includes('rides') || message.toLowerCase().includes('ride'))) {
      actions.handleRides();
    }
    else if(message.toLowerCase().includes('price') || message.toLowerCase().includes('prices') || message.toLowerCase().includes('rate')) {
      actions.handlePrice();
    }
    else if(message.toLowerCase().includes('book') && (message.toLowerCase().includes('ride') || message.toLowerCase().includes('rides')) ) {
      actions.handleBookRide();
    }
    else if(message.toLowerCase().includes('time')) {
      actions.handleTime();
    }
    else if(message.toLowerCase().includes('payment') || message.toLowerCase().includes('money') || message.toLowerCase().includes('charges')) {
      actions.handleMoney();
    }
    else{
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
