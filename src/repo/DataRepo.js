
import * as dataApi from '../api/DataApi';

export const getObjectivesData = async (token)=>{
    const data = await dataApi.getObjectivesData(token);
    console.log('TCL: objectives -> data', data);
    return data;
  };

  export const getPrefrencesData = async (token)=>{
    const data = await dataApi.getPrefrencesData(token);
    console.log('TCL: objectives -> data', data);
    return data;
  };
  export const updateObjectAndPref = async ({objecIds , prefIds ,goal, token})=>{
    
    let AllDAta = {
      REQ_PARAMS: {
        OBJECITVES_IDS: objecIds,
        PREFRENCES_IDS: prefIds,
        TOKEN:token,
        GOAL:goal
      },
    };
    console.log('TCL: objectives -> AllDAta', AllDAta);
    const data = await dataApi.updateObjectAndPref(AllDAta);
    console.log('TCL: objectives -> data', data);
    return data;
  }