import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";

function Dialog(props) {
  let lastMessage = "No messages";
  let lastMessageDate = "";
  if (props.lastMessage) {
    lastMessage = props.lastMessage.message;
    lastMessageDate = props.lastMessage.date;
  }
  return (
    <NavLink to={"/" + props.id} className="dialogs-list-item">
      <div className="dialogs-list-item__photo">
        <img src={props.photo} alt="userface" />
      </div>
      <div className="dialogs-list-item__name">
        {props.fullName} <br />{" "}
        <span className="dialogs-list-item__last-message">{lastMessage}</span>
      </div>

      <div className="dialogs-list-item__date">{lastMessageDate}</div>
    </NavLink>
  );
}
export default Dialog;
