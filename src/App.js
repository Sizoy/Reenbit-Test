import React from "react";
import "./App.css";
import Messages from "./components/Messages/Messages";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route } from "react-router-dom";
import MessagesContainer from "./components/Messages/MessagesContainer";

const App = () => {
  return (
    <div className="app-container">
      <DialogsContainer />
      <Route path="/:userId?" render={() => <MessagesContainer />} />
    </div>
  );
};

export default App;
