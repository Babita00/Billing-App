// for combine reducer
import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";

export default combineReducers({
  login: loginReducer,
}); // Compare this line from BillingApp/src/reducer/index.js:
