import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  counter: counterReducer,
  logged: loggedReducer
});

export default allReducer;
