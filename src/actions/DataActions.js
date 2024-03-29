import { GET_DATA, GET_DATA_FAIL } from "./types";
import * as dataRepo from '../repo/DataRepo';
export const getObjectivesData = (token)=>async dispatch => {
    try {    
      const data = await dataRepo.getObjectivesData(token);    
      dispatch({type: GET_DATA, payload: data});
    } catch (error) {
      dispatch({
        type: GET_DATA_FAIL,
        payload: 'something went wrong',
      });
    }
};
export const cleanError = () => async dispatch => {
  dispatch({type: GET_DATA_FAIL, payload: ''});
};
export const getProvidersData =(token , pageNumber)=>async dispatch =>{

 try {
  //  robinella52@gmail.com
  const data = await dataRepo.getProvidersData(token , pageNumber);
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
export const getProviderData = (token , id)=>async dispatch=>{
  console.log('TCL: values', " i am in action");


 try {
   //  robinella52@gmail.com
   const data = await dataRepo.getProviderData(token,id);
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

export const getCaseData = (token , id)=>async dispatch=>{
   console.log('TCL: values', " i am in action");


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

export const getCauseData = (token , id)=>async dispatch=>{
  console.log('TCL: values', " i am in action");


 try {
   //  robinella52@gmail.com
   const data = await dataRepo.getCauseData(token,id);
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

export const getCasesByName = (token , name)=>async dispatch =>{
  // console.log('TCL: values', token);

  try {
    //  robinella52@gmail.com
    const data = await dataRepo.getCasesByName(token , name);
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
export const getCausesByName = (token , name)=>async dispatch =>{
  // console.log('TCL: values', token);

  try {
    //  robinella52@gmail.com
    const data = await dataRepo.getCausesByName(token , name);
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
export const getProvidersByName = (token , name)=>async dispatch =>{
  // console.log('TCL: values', token);

  try {
    //  robinella52@gmail.com
    const data = await dataRepo.getProvidersByName(token , name);
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
  try {
    const data = await dataRepo.getPrefrencesData(token);   
    dispatch({type: GET_DATA, payload: data});
  } catch (error) {
    dispatch({
      type: GET_DATA_FAIL,
      payload: 'something went wrong',
    });
  }
}
export const updateObjectAndPref = (values, navigation , onSuccess =()=>{} , onErorr=()=>{})=>async dispatch=>{
  try {
    const data = await dataRepo.updateObjectAndPref(values);
    dispatch({type: GET_DATA, payload: data});
    onSuccess();
    navigation.navigate('SignupFrequency');
  } catch (error) {
    dispatch({
      type: GET_DATA_FAIL,
      payload: 'Should select one or more objectives and preferences',
    });
    onErorr();
  }
}
export const getHomeScreenData=(token)=> async dispatch=>{
  try {
    const data = await dataRepo.getHomeScreenData(token);
    dispatch({type: GET_DATA, payload: data});
  } catch (error) {
    console.log('TCL: error', error);
    dispatch({
      type: GET_DATA_FAIL,
      payload: 'something went wrong',
    });
  }
}