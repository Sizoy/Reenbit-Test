import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { DialogsReducer } from "./DialogsReducer";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  Dialogs: DialogsReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
