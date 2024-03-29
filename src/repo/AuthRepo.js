import * as authApi from '../api/AuthApi';
import * as AsyncStorageProvider from '../cache/AsyncStorageProvider';
import {Platform} from 'react-native';
export const login = async ({email, password}) => {
 
  let OS = Platform.OS === 'ios' ? 'IOS' : 'ANDROID';
  let AllDAta = {
    REQ_PARAMS: {
      USER_ID: email,
      PASSWORD: password,
    },
  };
  const user = await authApi.login(AllDAta);
  await AsyncStorageProvider.setItem('currentUser', JSON.stringify(user));
  return user;
};

export const signUp = async ({email, password , fullName , mobileNumber , nationality }) => {
  console.log('TCL: signUp -> {email, password}', {email, password , fullName , mobileNumber , nationality});
  let OS = Platform.OS === 'ios' ? 'IOS' : 'ANDROID';

  let AllDAta = {
    REQ_PARAMS: {
      USER_ID: email,
      PASSWORD: password,
      FULL_NAME: fullName,
      MOBILE_NUMBER:mobileNumber,
      NATIONALITY:nationality,
    },
  };
  const user = await authApi.signUp(AllDAta);
  console.log('TCL: signUp -> user', user);
  await AsyncStorageProvider.setItem('currentUser', JSON.stringify(user));
  return user;
};

export const updateUserInfo = async ({ password , fullName , mobileNumber , nationality }) => {
  console.log('TCL: signUp -> {email, password}', { password , fullName , mobileNumber , nationality});
  let OS = Platform.OS === 'ios' ? 'IOS' : 'ANDROID';

  let AllDAta = {
    REQ_PARAMS: {
      PASSWORD: password,
      FULL_NAME: fullName,
      MOBILE_NUMBER:mobileNumber,
      NATIONALITY:nationality,
    },
  };
  const user = await authApi.updateUserInfo(AllDAta);
  console.log('TCL: signUp -> user', user);
  await AsyncStorageProvider.setItem('currentUser', JSON.stringify(user));
  return user;
};

export const logout = async () => {
  let done = await AsyncStorageProvider.removeItem('currentUser');
  return done;
};

export const forgetPassword = async ({EMAIL, PHONE}) => {
  let allDate = {
    REQ_NAME: 'IC_FORGOT_PASSWORD',
    REQ_PARAMS: {EMAIL, PHONE},
  };
  let result = await authApi.forgetPassword(allDate);
  return result;
};

export const getProfile = async (
  value = {
    REQ_TOKEN,
    REQ_NAME,
  },
) => {
  let result = await authApi.getProfile(value);
  return result;
};

export const EditProfile = async (
  value = {REQ_TOKEN, REQ_NAME, REQ_PARAMS},
) => {
  let result = await authApi.EditProfile(value);
  return result;
};
