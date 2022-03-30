import { createStore , applyMiddleware , combineReducers } from "redux";
import thunk from "redux-thunk";
import AuthReducer from "./reducers/auth";
import setDataReducer from "./reducers/setDataReducer";


const rootReducer = combineReducers({
     auth : AuthReducer,
     data :setDataReducer
});
 
const store = createStore(rootReducer , applyMiddleware(thunk));
export default store;