import { combineReducers } from "redux";
import standart from "./standart";
import convert from "./convert";
import application from "./application";
import user from "./user";
import history from "./history";
export default combineReducers({
	application,
	standart,
	convert,
	user,
	history,
});
