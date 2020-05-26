import React from "react";
import "./Messages.css";

const Message = ({ message, date, time, photo, sender }) => {
  return (
    <>
      {sender === "user" ? (
        <div className="message">
          <div className="message__photo">
            <img src={photo} alt="user" />
          </div>
          <div className="message__body">
            <div className="message__text">{message}</div>
            <div className="message__date">
              {date}, {time}
            </div>
          </div>
        </div>
      ) : (
        <div className="message message--my">
          <div className="message__body message__body--my">
            <div className="message__text message__text--my">{message}</div>
            <div className="message__date message__date--my">
              {date}, {time}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
