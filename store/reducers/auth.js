import { LOGIN_SUCCESS,LOGIN_FAIL,LOGIN_RESET_ERROR,LOGOUT } from '../types';
const initialState = async () => {
    return {
      currentUser: null,
      error: null,
    };
  };
  const AuthReducer = (state = initialState(), action) => {
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