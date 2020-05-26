import React from "react";
import "./Messages.css";
import Message from "./Message";

import MessageReduxForm from "./MessagesForm";

const Messages = (props) => {
  let currentUserMessagesList = props.user.MessagesData.map((message) => {
    return (
      <Message
        message={message.message}
        date={message.date}
        time={message.time}
        photo={props.user.photo}
        sender={message.sender}
        key={message.id}
      />
    );
  });

  function addMessage(value) {
    let userId = props.user.id;
    props.sendMessage(value.typedMessageText, userId);
    props.getJoke(userId);
  }

  return (
    <div className="messages">
      <div className="messages-header">
        <div className="messages-header__photo">
          <img src={props.user.photo} alt="currUser" />
        </div>
        <div className="messages-header__name">{props.user.fullName}</div>
      </div>

      <div className="messages-body">
        {currentUserMessagesList.length !== 0 ? (
          currentUserMessagesList
        ) : (
          <div className="messages-body__no-message">No messages</div>
        )}
      </div>

      <MessageReduxForm onSubmit={addMessage} />
    </div>
  );
};

export default Messages;
