//import axios from 'axios';
//import {API_ENDPOINT_GATEWAY, API_ENDPOINT_DLETA} from '../utils/Config';
import * as errors from '../utils/Errors';
import { LOGIN_URL, SIGNUP_URL, UPDATE_USER_INFO_URL } from '../constants';

export const login = async ({
  REQ_PARAMS: { USER_ID, PASSWORD, },
}) => {
  try {
    const result = await fetch(LOGIN_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: USER_ID,
        password: PASSWORD
      })
    });
    const json = await result.json();
    if (json && result.status == 200) {
    } else {
      throw json;
    }
    return json;
  } catch (error) {
    throw error.message;
  }
};
export const signUp = async ({
  REQ_PARAMS: { USER_ID, PASSWORD, FULL_NAME, MOBILE_NUMBER, NATIONALITY },
}) => {
  console.log('TCL: USER_ID', USER_ID, PASSWORD, FULL_NAME, MOBILE_NUMBER, NATIONALITY);
  try {
    const result = await fetch(SIGNUP_URL, {
      method: 'POST',
      headers: {
       // 'Authorization': 'Bearer ' + TOKEN,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: USER_ID,
        password: PASSWORD,
        name: FULL_NAME,
        mobile: MOBILE_NUMBER,
        nationality: NATIONALITY

      })
    });

    const json = await result.json();
    if (json && result.status == 201) {
      console.log('stutus :' , result.status, json);
    } else {
      console.log('TCL: signUp -> error jsone', json);
      throw json;
    }
    return json;
  } catch (error) {
    console.log('TCL: signUp -> error', error);
    console.log('TCL: signUp -> error.response', error.response);
    throw error.message;
  }
};


export const updateUserInfo = async ({
  REQ_PARAMS: {  PASSWORD, FULL_NAME, MOBILE_NUMBER, NATIONALITY },
}) => {
  console.log('TCL: USER_ID', PASSWORD, FULL_NAME, MOBILE_NUMBER, NATIONALITY);
  try {
    const result = await fetch(UPDATE_USER_INFO_URL, {
      method: 'POST',
      headers: {
       // 'Authorization': 'Bearer ' + TOKEN,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      
        password: PASSWORD,
        name: FULL_NAME,
        mobile: MOBILE_NUMBER,
        nationality: NATIONALITY

      })
    });

    const json = await result.json();
    if (json && result.status == 200) {
      console.log('stutus :' , result.status, json);
    } else {
      console.log('TCL: signUp -> error jsone', json);
      throw json;
    }
    return json;
  } catch (error) {
    console.log('TCL: signUp -> error', error);
    console.log('TCL: signUp -> error.response', error.response);
    throw error.message;
  }
};

const forgetPassword = async ({ REQ_NAME, REQ_PARAMS: { EMAIL, PHONE } }) => {
  try {
    const res = await axios.post(`${API_ENDPOINT_DLETA}`, {
      REQ_NAME,
      REQ_PARAMS: { EMAIL, PHONE },
    });
    return res;
  } catch (error) {
    console.log('TCL: login -> error', error);
    console.log('TCL: login -> error.response', error.response);
    throw error;
  }
};

export const getProfile = async ({ REQ_NAME, REQ_TOKEN }) => {
  try {
    const res = await axios.post(`${API_ENDPOINT_DLETA}`, {
      REQ_NAME,
      REQ_TOKEN,
    });
    return res.data;
  } catch (error) {
    console.log('TCL: getProfile -> error', error);
    console.log('TCL: getProfile -> error.response', error.response);
    throw errors.INVALID_USER;
  }
};

export const EditProfile = async ({ REQ_TOKEN, REQ_NAME, REQ_PARAMS }) => {
  try {
    const res = await axios.post(`${API_ENDPOINT_DLETA}`, {
      REQ_NAME,
      REQ_TOKEN,
      REQ_PARAMS,
    });
    return res.data;
  } catch (error) {
    console.log('TCL: getProfile -> error', error);
    console.log('TCL: getProfile -> error.response', error.response);
    throw errors.INVALID_USER;
  }
};
