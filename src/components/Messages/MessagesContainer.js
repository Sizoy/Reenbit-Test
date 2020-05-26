import React from "react";
import "./Messages.css";
import { connect } from "react-redux";
import Messages from "./Messages";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { SendMessage, getJoke } from "../../redux/DialogsReducer";

class MessagesContainer extends React.Component {
  getUser = () => {
    let currentUserId = +this.props.match.params.userId;
    if (!currentUserId) currentUserId = 1;
    return this.props.dialogs.filter((user) => {
      if (user.id === currentUserId) {
        return user;
      }
    });
  };

  render() {
    return (
      <Messages
        sendMessage={this.props.SendMessage}
        user={this.getUser()[0]}
        getJoke={this.props.getJoke}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    dialogs: state.Dialogs.DialogsData,
  };
};

export default compose(
  connect(mapStateToProps, { SendMessage, getJoke }),
  withRouter
)(MessagesContainer);
