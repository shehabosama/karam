import { Get_DATA_URL } from '../constants';
import * as errors from '../utils/Errors';
export const getObjectivesData = async (token) => {
    console.log('TCL: token', token);
  
    try {
      const result = await fetch(Get_DATA_URL , {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
  
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
  