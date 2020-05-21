import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { DialogsReducer } from "./DialogsReducer";

let reducers = combineReducers({
  Dialogs: DialogsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
