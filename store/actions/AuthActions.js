import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "../../constants";
import {SET_DATA } from "../types";

const API_URL = 'https://mocki.io/v1/48419bdb-1d76-45a1-89cb-3ac3fcc7f6ca';
export const getCitiesData = ()=>{
    try{
        return async dispatch=>{
            const result = await fetch(API_URL , {
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                },
            });

            const json = await result.json();
            if(json){
                dispatch({
                    type:SET_DATA,
                    payload:json
                });
            }else{
                console.log('Unable to fetch!');
            }
        }
    }catch(err){
        console.log(err);
    }
}

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