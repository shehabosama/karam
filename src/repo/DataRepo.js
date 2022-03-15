
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