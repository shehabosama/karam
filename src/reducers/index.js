import { combineReducers } from "redux";
import auth from "./auth";
import dataReducer from "./DataReducer";
export default combineReducers({ auth ,dataReducer });
