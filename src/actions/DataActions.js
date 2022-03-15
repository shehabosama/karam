import { GET_DATA, GET_DATA_FAIL } from "./types";
import * as dataRepo from '../repo/DataRepo';
export const getObjectivesData = (token)=>async dispatch => {
    console.log('TCL: values', token);

    try {
      //  robinella52@gmail.com
      const data = await dataRepo.getObjectivesData(token);
      //await notificationRepo.subscribe(user);
    
      dispatch({type: GET_DATA, payload: data});
     // navigation.navigate('HomeTabs');
      //navigation.navigate('Auth');
    } catch (error) {
      console.log('TCL: error', error);
      dispatch({
        type: GET_DATA_FAIL,
        payload: 'something went wrong',
      });
    }
};


export const getPrefrencesData = (token)=>async dispatch => {
  console.log('TCL: values', token);

  try {
    //  robinella52@gmail.com
    const data = await dataRepo.getPrefrencesData(token);
    //await notificationRepo.subscribe(user);
   
    dispatch({type: GET_DATA, payload: data});
   // navigation.navigate('HomeTabs');
    //navigation.navigate('Auth');
  } catch (error) {
    console.log('TCL: error', error);
    dispatch({
      type: GET_DATA_FAIL,
      payload: 'something went wrong',
    });
  }
}