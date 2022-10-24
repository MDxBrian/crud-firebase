import { combineReducers } from "redux";
import { users } from "./userReducer";

const rootReducers = combineReducers({
  users: users,
});

export default rootReducers;
