import * as types from '../actions/types';

const initialState = async () => {
  return {
    data: [],
    error: '',
  };
};
const DataReducer = (state = initialState(), action) => {
    
  switch (action.type) {
    case types.GET_DATA:
      return {...state, data: action.payload};
    case types.GET_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default DataReducer;
