import React from "react";
import { reduxForm, Field } from "redux-form";
import "./Messages.css";
import sendButton from "./../assets/images/send.svg";

const requiredField = (value) => {
  if (value) {
    return undefined;
  }
  return "Field is required";
};

let MessageForm = (props) => {
  return (
    <form className="messages__input" onSubmit={props.handleSubmit}>
      <Field
        component="textarea"
        name="typedMessageText"
        placeholder="Type your message"
        validate={[requiredField]}
      />
      <button type="submit" className="messages__send-button">
        <img src={sendButton} alt="send" />
      </button>
    </form>
  );
};

const MessageReduxForm = reduxForm({ form: "messageForm" })(MessageForm);

export default MessageReduxForm;
