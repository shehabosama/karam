import { LOGIN_SUCCESS,LOGIN_FAIL,LOGIN_RESET_ERROR,LOGOUT } from '../types';
const initialState ={
      currentUser: null,
      error: null,
   
  };
  const AuthReducer = (state = initialState, action) => {
  //  console.log('typeee ---------- >'+action.type , 'dataaaaaaaaa -----------------> test',{ currentUser: action.payload});
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {...state, currentUser: action.payload};
      case LOGIN_FAIL:
        return {
          ...state,
          error: action.payload,
        };
      case LOGIN_RESET_ERROR:
        return {
          ...state,
          error: null,
        };
      case LOGOUT:
        return {...state, currentUser: null};
  
      default:
        return state;
    }
  };









  export default AuthReducer;