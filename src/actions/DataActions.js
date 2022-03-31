import { GET_DATA, GET_DATA_FAIL } from "./types";
import * as dataRepo from '../repo/DataRepo';
export const getObjectivesData = (token)=>async dispatch => {
   // console.log('TCL: values', token);

    try {
      //  robinella52@gmail.com
      const data = await dataRepo.getObjectivesData(token);
      //await notificationRepo.subscribe(user);
    
      dispatch({type: GET_DATA, payload: data});
     // navigation.navigate('HomeTabs');
      //navigation.navigate('Auth');
    } catch (error) {
     // console.log('TCL: error', error);
      dispatch({
        type: GET_DATA_FAIL,
        payload: 'something went wrong',
      });
    }
};

export const getProvidersData =(token)=>async dispatch =>{
 // console.log('TCL: values', token);

 try {
  //  robinella52@gmail.com
  const data = await dataRepo.getProvidersData(token);
  //await notificationRepo.subscribe(user);
 
  dispatch({type: GET_DATA, payload: data});
 // navigation.navigate('HomeTabs');
  //navigation.navigate('Auth');
} catch (error) {
//  console.log('TCL: error', error);
  dispatch({
    type: GET_DATA_FAIL,
    payload: 'something went wrong',
  });
}
};
export const getCaseData = (token , id)=>async dispatch=>{
   console.log('TCL: values', token);

  try {
    //  robinella52@gmail.com
    const data = await dataRepo.getCaseData(token,id);
    //await notificationRepo.subscribe(user);
   
    dispatch({type: GET_DATA, payload: data});
   // navigation.navigate('HomeTabs');
    //navigation.navigate('Auth');
  } catch (error) {
  //  console.log('TCL: error', error);
    dispatch({
      type: GET_DATA_FAIL,
      payload: 'something went wrong',
    });
  }
}
export const getCasesData = (token , pageNumber)=>async dispatch =>{
  // console.log('TCL: values', token);

  try {
    //  robinella52@gmail.com
    const data = await dataRepo.getCasesData(token , pageNumber);
    //await notificationRepo.subscribe(user);
   
    dispatch({type: GET_DATA, payload: data});
   // navigation.navigate('HomeTabs');
    //navigation.navigate('Auth');
  } catch (error) {
  //  console.log('TCL: error', error);
    dispatch({
      type: GET_DATA_FAIL,
      payload: 'something went wrong',
    });
  }
};

export const getCausesData = (token, pageNumber,onSuccess=()=>{},onError=()=>{})=>async dispatch =>{
   console.log('TCL: values',  " i am inside the get Causes Data");

  try {
    //  robinella52@gmail.com
    const data = await dataRepo.getCausesData(token, pageNumber);
    //await notificationRepo.subscribe(user);
   
    dispatch({type: GET_DATA, payload: data});
    onSuccess();
   // navigation.navigate('HomeTabs');
    //navigation.navigate('Auth');
  } catch (error) {
  //  console.log('TCL: error', error);
    dispatch({
      type: GET_DATA_FAIL,
      payload: 'something went wrong',
    });
    onError();
  }
};
export const getPrefrencesData = (token)=>async dispatch => {
 // console.log('TCL: values', token);

  try {
    //  robinella52@gmail.com
    const data = await dataRepo.getPrefrencesData(token);
    //await notificationRepo.subscribe(user);
   
    dispatch({type: GET_DATA, payload: data});
   // navigation.navigate('HomeTabs');
    //navigation.navigate('Auth');
  } catch (error) {
  //  console.log('TCL: error', error);
    dispatch({
      type: GET_DATA_FAIL,
      payload: 'something went wrong',
    });
  }
}
export const updateObjectAndPref = (values, navigation)=>async dispatch=>{
 // console.log('TCL: values', values);

  try {
    //  robinella52@gmail.com
    const data = await dataRepo.updateObjectAndPref(values);
    //await notificationRepo.subscribe(user);
   
    dispatch({type: GET_DATA, payload: data});
    navigation.navigate('SignupFrequency');
    //navigation.navigate('Auth');
  } catch (error) {
   // console.log('TCL: error', error);
    dispatch({
      type: GET_DATA_FAIL,
      payload: 'something went wrong',
    });
  }
}
export const getHomeScreenData=(token)=> async dispatch=>{
 // console.log('TCL: values', token);

  try {
    //  robinella52@gmail.com
    const data = await dataRepo.getHomeScreenData(token);
    //await notificationRepo.subscribe(user);
   
    dispatch({type: GET_DATA, payload: data});
    navigation.navigate('SignupFrequency');
    //navigation.navigate('Auth');
  } catch (error) {
    console.log('TCL: error', error);
    dispatch({
      type: GET_DATA_FAIL,
      payload: 'something went wrong',
    });
  }
}