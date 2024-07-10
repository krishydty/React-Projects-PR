import React from "react";

const DUMMY_DATA = [
  {
    senderId: "Perborgen",
    text: "Hey, how you doing",
  },
  {
    senderId: "Manmohan",
    text: "Great, how are you doing",
  },
  {
    senderId: "Perborgen",
    text: "Good, thanks for asking",
  },
  {
    senderId: "Manmohan",
    text: "Hey, wanna hang? I'm free",
  },
];
const MessageList = () => {
  return (
    <div>
      {DUMMY_DATA.map((message, index) => {
        return (
          <div key={index}>
            <p>
              {message.senderId}: {message.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
