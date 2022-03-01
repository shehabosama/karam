import { createStore , applyMiddleware , combineReducers } from "redux";
import thunk from "redux-thunk";
import AuthReducer from "./reducers/auth";


const rootReducer = combineReducers({
     auth : AuthReducer,
});

const store = createStore(rootReducer , applyMiddleware(thunk));
export default store;