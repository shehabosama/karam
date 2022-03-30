import {SET_DATA } from '../types';
const initialState = {
      data: null,
      error: null,
  };
  const setDataReducer = (state = initialState, action) => {
    switch (action.type) {
     
        case SET_DATA:
        return{
          ...state,
          data:action.payload ,
        };
      
      default:
        return state;
    }
  };
  export default setDataReducer;