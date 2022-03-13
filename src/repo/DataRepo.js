
import * as dataApi from '../api/DataApi';

export const getObjectivesData = async (token)=>{
    const data = await dataApi.getObjectivesData(token);
    console.log('TCL: objectives -> data', data);
    return data;
  };