import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "../../constants";
import {SET_DATA } from "../types";
export const saveData =(id , email , password ,nationality , mobileNumber, {donationPrefrences} , {objectivesSelection}  , onSuccess=()=>{} , onError=()=>{})=>{
    return async dispatch=>{
        // try{
        //     const newList={
        //         name , 
        //         id:`list-${new Date().getTime()}`,
        //     };

        //     const {lists} = store.getState().list;
        //     const listsCopy = [...lists];
        //     listsCopy.push(newList);
        //     await AsyncStorage.setItem(STORAGE_KEYS.lists , JSON.stringify(listsCopy));

        //     dispatch({
        //         type:SET_LISTS,
        //         payload : listsCopy,
        //     }); 
        //     onSuccess();
        // }catch(err){
        //     console.log(err);
        //     onError();
        // }

       
    };
};

export const setData = (onSuccess=()=>{} , onError=()=>{})=>{
    return async dispatch=>{try{
        await AsyncStorage.setItem('person', JSON.stringify({age: 36 }));
        await AsyncStorage.mergeItem('person', JSON.stringify({name: 'Chris'}));
        await AsyncStorage.mergeItem('person', JSON.stringify({nationality: 'satestlam'}));
        dispatch({
            type:SET_DATA,
            payload : 'test',
        }); 
        onSuccess();
        
    }catch(err){console.log(err); onError();}
}
};

export const deleteData=()=>{
    return async dispatch=>{
        try{
            await AsyncStorage.removeItem('person');
            dispatch(
                {
                    type:SET_DATA,
                    payload: 'done',
                }
            );
        }catch(err){console.log(err);}
    }
};
export const getData=()=>{
    return async dispatch=> {try{

    }catch(err){}let person = await AsyncStorage.getItem('person');

   const personJson = person ? JSON.parse(person) : {};
    console.log("---------------------------------");
    console.log(personJson);
    dispatch(
        {
            type:SET_DATA,
            payload: personJson,
        }
    );
    }
};