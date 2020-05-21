import React from "react";
import "./Messages.css";
import { connect } from "react-redux";
import Messages from "./Messages";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

class MessagesContainer extends React.Component {
  render() {
    return (
      <Messages
        dialogs={this.props.dialogs}
        currentUser={this.props.match.params.userId}
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
  connect(mapStateToProps, {}),
  withRouter
)(MessagesContainer);
