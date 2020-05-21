import React from "react";
import "./Dialogs.css";
import myPhoto from "./../assets/images/my_photo.png";
import Dialog from "./Dialog";

const Dialogs = (props) => {
  let DialogsList = props.dialogs.map((dialogItem) => (
    <Dialog
      id={dialogItem.id}
      fullName={dialogItem.fullName}
      photo={dialogItem.photo}
      key={dialogItem.id}
    />
  ));

  return (
    <div className="dialogs">
      <div className="dialogs-header">
        <div className="dialogs-header__my-photo">
          <img src={myPhoto} alt="myPhoto" />
        </div>
        <div className="dialogs-header__search">
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>

      <div className="dialogs-body">
        <div className="dialogs-body__title">Chats</div>
        <div className="dialogs-list">{DialogsList}</div>
      </div>
    </div>
  );
};

export default Dialogs;
