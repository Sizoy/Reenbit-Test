import React, { useState, useEffect } from "react";
import "./Dialogs.css";
import myPhoto from "./../assets/images/my_photo.png";
import Dialog from "./Dialog";

const Dialogs = (props) => {
  /*-----SEARCH-----*/
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchMode, toggleSearchMode] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = props.dialogs.filter((person) => {
      for (let i = 0; i < person.MessagesData.length; i++) {
        let message = person.MessagesData[i].message.toLowerCase();
        if (message.includes(searchTerm)) {
          return person;
        }
      }
    });
    setSearchResults(results);
  }, [searchTerm]);

  let SearchDialogsList = searchResults.map((dialogItem) => {
    return (
      <Dialog
        id={dialogItem.id}
        fullName={dialogItem.fullName}
        photo={dialogItem.photo}
        key={dialogItem.id}
        lastMessage={
          dialogItem.MessagesData[dialogItem.MessagesData.length - 1]
        }
      />
    );
  });

  /*-----END SEARCH-----*/

  let DialogsList = props.dialogs.map((dialogItem) => (
    <Dialog
      id={dialogItem.id}
      fullName={dialogItem.fullName}
      photo={dialogItem.photo}
      key={dialogItem.id}
      lastMessage={dialogItem.MessagesData[dialogItem.MessagesData.length - 1]}
    />
  ));

  return (
    <div className="dialogs">
      <div className="dialogs-header">
        <div className="dialogs-header__my-photo">
          <img src={myPhoto} alt="myPhoto" />
        </div>
        <div className="dialogs-header__search">
          <input
            type="text"
            placeholder="Search or start new chat"
            onChange={handleChange}
            onFocus={() => toggleSearchMode(true)}
            onBlur={() => toggleSearchMode(false)}
          />
        </div>
      </div>

      <div className="dialogs-body">
        <div className="dialogs-body__title">Chats</div>
        {searchMode ? (
          <div className="dialogs-list">{SearchDialogsList}</div>
        ) : (
          <div className="dialogs-list">{DialogsList}</div>
        )}
      </div>
    </div>
  );
};

export default Dialogs;
