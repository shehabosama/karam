 import {LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from './types';
 import * as authRepo from '../repo/AuthRepo';
export const signIn = (values, navigation , onSuccess = ()=>{} , onErorr=()=>{}) => async dispatch => {
   var user ='';
  try {
     user = await authRepo.login(values);
    //await notificationRepo.subscribe(user);
    dispatch({type: LOGIN_SUCCESS, payload: user});
    onSuccess();
    navigation.navigate('HomeTabs');
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error,
    });
    onErorr();
  }
};
export const signUp = (values, navigation) => async dispatch => {
  console.log('TCL: values', values);

 try {
   //  robinella52@gmail.com
   const user = await authRepo.signUp(values);
   //await notificationRepo.subscribe(user);
   dispatch({type: LOGIN_SUCCESS, payload: user});
  // navigation.navigate('HomeTabs');
   //navigation.navigate('Auth');
 } catch (error) {
   console.log('TCL: error', error);
   dispatch({
     type: LOGIN_FAIL,
     payload: 'Error in Email or UserName',
   });
 }
};


export const autoLogin = user => async dispatch => {
  // try {
  //   await notificationRepo.subscribe(user);
  //   dispatch({type: LOGIN_SUCCESS, payload: user});
  // } catch (error) {
  //   console.log('AutoLoginError', error);
  // }
};
export const cleanError = () => async dispatch => {
  dispatch({type: LOGIN_FAIL, payload: ''});
};

export const logout =  ()  => async dispatch => {
  
  try {
  //  notificationRepo.unSubscribe(token);
    const done = await authRepo.logout();
    console.log('test' , done);
    dispatch({type: LOGOUT});
  } catch (error) {
    console.log('AuthLogoutError', error);
  }
};
