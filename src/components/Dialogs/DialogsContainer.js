import "./Dialogs.css";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogs: state.Dialogs.DialogsData,
  };
};

export default connect(mapStateToProps, {})(Dialogs);
