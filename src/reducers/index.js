import { combineReducers } from "redux";
import standart from "./standart";
import convert from "./convert";
import application from "./application";
export default combineReducers({ application, standart, convert });
