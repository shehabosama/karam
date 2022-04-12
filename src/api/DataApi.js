import {
  GET_OBJECTIVE_DATA_URL,
  GET_PREFRENCES_DATA_URL,
  UPDATE_OBJECT_AND_PREF,
  GET_HOME_DATA,
  GET_CASES_DATA,
  GET_CAUSES_DATA,
  GET_PROVIDERS_DATA,
  GET_CASE_DATA,
  GET_PROVIDER_DATA,
  GET_CASES_BY_NAME,
  GET_CAUSES_BY_NAME,
  GET_PROVIDERS_BY_NAME,
  GET_CAUSE_DATA
} from '../constants';

export const getObjectivesData = async (token) => {
  try {
    const result = await fetch(GET_OBJECTIVE_DATA_URL, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    });
    const json = await result.json();
    if (json && result.status == 200) {
    } else {
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
  { REQ_PARAMS: { OBJECITVES_IDS, PREFRENCES_IDS, GOAL, TOKEN }, }
) => {
  try {
    const result = await fetch(`${UPDATE_OBJECT_AND_PREF}?objectives=${OBJECITVES_IDS.join(',')}&preference=${PREFRENCES_IDS.join(',')}&goal=${GOAL}`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + TOKEN,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    });
    const json = await result.json();
    if (json && result.status == 201) {
      
    } else {
      
      throw json;
    }
    return json;
  } catch (error) {
    throw error.message;
  }
};
export const getHomeScreenData = async (token) => {
  try {
    const result = await fetch(GET_HOME_DATA, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    });
    const json = await result.json();
    if (json && result.status == 200) {
    } else {
      console.log('TCL: signUp -> error jsone', json);
      throw json;
    }
    return json;
  } catch (error) {
    throw error.message;
  }
};

export const getProvidersData = async (token , pageNumber) => {
 // console.log('TCL: token', token);
try {
  const result = await fetch(`${GET_PROVIDERS_DATA}?page=${pageNumber}`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },

  });

  const json = await result.json();
  if (json && result.status == 200) {
     // console.log('stutus :' , result.status, json);
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
}


export const getCaseData = async (token,id) => {
//  console.log('TCL: token', token , id);
console.log('TCL: values', " i am in action","with id " , id);

try {
  const result = await fetch(`${GET_CASE_DATA}?id=${id}`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },

  });

  const json = await result.json();
  if (json && result.status == 200) {
    //  console.log('stutus :' , result.status, json);
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
}

export const getCauseData = async (token,id) => {
  //  console.log('TCL: token', token , id);
  console.log('TCL: values', " i am in action","with id " , id);
  
  try {
    const result = await fetch(`${GET_CAUSE_DATA}?id=${id}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
  
    });
  
    const json = await result.json();
    if (json && result.status == 200) {
      //  console.log('stutus :' , result.status, json);
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
  }
  

export const getCausesByName = async (token,name) => {
  //  console.log('TCL: token', token , id);
  console.log('TCL: values', " i am in action","with id " , name);
  
  try {
    const result = await fetch(`${GET_CAUSES_BY_NAME}?name=${name}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
  
    });
  
    const json = await result.json();
    if (json && result.status == 200) {
      //  console.log('stutus :' , result.status, json);
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
  }

  export const getCasesByName = async (token,name) => {
    //  console.log('TCL: token', token , id);
    console.log('TCL: values', " i am in action","with id " , name);
    
    try {
      const result = await fetch(`${GET_CASES_BY_NAME}?name=${name}`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
    
      });
    
      const json = await result.json();
      if (json && result.status == 200) {
        //  console.log('stutus :' , result.status, json);
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
    }
  
    export const getProvidersByName = async (token,name) => {
      //  console.log('TCL: token', token , id);
      console.log('TCL: values', " i am in action","with id " , name);
      
      try {
        const result = await fetch(`${GET_PROVIDERS_BY_NAME}?name=${name}`, {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + token,
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
      
        });
      
        const json = await result.json();
        if (json && result.status == 200) {
           // console.log('stutus :' , result.status, json);
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
      }
    
      
export const getProviderData = async (token,id) => {
  //  console.log('TCL: token', token , id);
  console.log('TCL: values', " i am in action","with id " , id);
  
  try {
    const result = await fetch(`${GET_PROVIDER_DATA}?id=${id}`, {
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
  }
export const getCasesData = async (token , pageNumber) => {
    console.log('TCL: token', token);

  try {
    const result = await fetch(`${GET_CASES_DATA}?page=${pageNumber}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },

    });

    const json = await result.json();
    if (json && result.status == 200) {
       // console.log('stutus :' , result.status, json);
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
}
export const getCausesData = async (token, pageNumber) => {
  //  console.log('TCL: token', token);

  try {
    const result = await fetch(`${GET_CAUSES_DATA}?page=${pageNumber}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },

    });

    const json = await result.json();
    if (json && result.status == 200) {
      //  console.log('stutus :' , result.status, json);
    } else {
      //  console.log('TCL: signUp -> error jsone', json);
      throw json;
    }
    return json;
  } catch (error) {
    // console.log('TCL: signUp -> error', error);
    // console.log('TCL: signUp -> error.response', error.response);
    throw error.message;
  }
}
export const getPrefrencesData = async (token) => {
  try {
    const result = await fetch(GET_PREFRENCES_DATA_URL, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
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
