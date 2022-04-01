
import * as dataApi from '../api/DataApi';

export const getObjectivesData = async (token)=>{
    const data = await dataApi.getObjectivesData(token);
 //   console.log('TCL: objectives -> data', data);
    return data;
  };
  
  export const getProvidersData = async (token , pageNumber) =>{
   

    const data = await dataApi.getProvidersData(token , pageNumber);
    //  console.log('TCL: objectives -> data', data);
      return data;
  };
  getCauseData
  export const getCaseData = async (token ,id) =>{
    console.log('TCL: values', " i am in repo");
    const data = await dataApi.getCaseData(token,id);
    //  console.log('TCL: objectives -> data', data);
      return data;
  };
  export const getCauseData = async (token ,id) =>{
    console.log('TCL: values', " i am in repo");
    const data = await dataApi.getCauseData(token,id);
    //  console.log('TCL: objectives -> data', data);
      return data;
  };
  export const getCasesByName = async (token ,name) =>{
    console.log('TCL: values', " i am in repo");
    const data = await dataApi.getCasesByName(token,name);
    //  console.log('TCL: objectives -> data', data);
      return data;
  };
  export const getCausesByName = async (token ,name) =>{
    console.log('TCL: values', " i am in repo");
    const data = await dataApi.getCausesByName(token,name);
    //  console.log('TCL: objectives -> data', data);
      return data;
  };
  export const getProvidersByName = async (token ,name) =>{
    console.log('TCL: values', " i am in repo");
    const data = await dataApi.getProvidersByName(token,name);
    //  console.log('TCL: objectives -> data', data);
      return data;
  };
  getProviderData
  export const getProviderData = async (token , pageNumber) =>{
    const data = await dataApi.getProviderData(token , pageNumber);
    //  console.log('TCL: objectives -> data', data);
      return data;
  };
  export const getCasesData = async (token , pageNumber) =>{
    const data = await dataApi.getCasesData(token , pageNumber);
    //  console.log('TCL: objectives -> data', data);
      return data;
  };
  export const getCausesData = async (token, pageNumber) =>{
    const data = await dataApi.getCausesData(token, pageNumber);
      console.log('TCL: objectives -> data', data);
      return data;
  };
  export const getPrefrencesData = async (token)=>{
    const data = await dataApi.getPrefrencesData(token);
  //  console.log('TCL: objectives -> data', data);
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
    //console.log('TCL: objectives -> AllDAta', AllDAta);
    const data = await dataApi.updateObjectAndPref(AllDAta);
  //  console.log('TCL: objectives -> data', data);
    return data;
  }
  export const getHomeScreenData = async(token)=>{
    console.log('TCL: getHomeScreenData -> token',"" );
    const data = await dataApi.getHomeScreenData(token);
    //console.log('TCL: getHomeScreenData -> data', data);
    return data;
  }