import { combineReducers } from "redux";
import standart from "./standart";
import convert from "./convert";
import user from "./user";
import history from "./history";
export default combineReducers({
  standart,
  convert,
  user,
  history,
});
