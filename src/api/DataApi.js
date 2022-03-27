import { GET_OBJECTIVE_DATA_URL  , GET_PREFRENCES_DATA_URL, UPDATE_OBJECT_AND_PREF} from '../constants';
import * as errors from '../utils/Errors';

export const getObjectivesData = async (token) => {
    console.log('TCL: token', token);
  
    try {
      const result = await fetch(GET_OBJECTIVE_DATA_URL , {
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
  
  export const updateObjectAndPref = async (
   { REQ_PARAMS: { OBJECITVES_IDS, PREFRENCES_IDS, GOAL,TOKEN },}
    )=>{
    console.log('TCL: REQ_PARAMS', OBJECITVES_IDS.join(',') ,PREFRENCES_IDS.join(',') );

 
    try {
      const result = await fetch(`${UPDATE_OBJECT_AND_PREF}?objectives=${OBJECITVES_IDS.join(',')}&preference=${PREFRENCES_IDS.join(',')}&goal=${GOAL}` , {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + TOKEN,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify({
        //   preference,
         
        // })
      });
  
      const json = await result.json();
      if (json && result.status == 201) {
        console.log('stutus :' , result.status, json);
      } else {
        console.log('TCL: updateObjectAndPref -> error jsone', json);
        throw json;
      }
      return json;
    } catch (error) {
      console.log('TCL: updateObjectAndPref -> error', error);
      console.log('TCL: updateObjectAndPref -> error.response', error.response);
      throw error.message;
    }
  };

  export const getPrefrencesData = async (token) => {
    console.log('TCL: token', token);
  
    try {
      const result = await fetch(GET_PREFRENCES_DATA_URL , {
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
  