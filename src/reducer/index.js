// for combine reducer
import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { registerReducer } from "./registerReducer";
import productItemsReducer from "./posReducer";
export default combineReducers({
  login: loginReducer,
  register: registerReducer,
  products: productItemsReducer,
}); // Compare this line from BillingApp/src/reducer/index.js:
