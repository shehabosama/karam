import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "../../constants";
export const saveData =(id , email , password ,nationality , mobileNumber, {donationPrefrences} , {objectivesSelection}  , onSuccess=()=>{} , onError=()=>{})=>{
    return async dispatch=>{
        try{
            const newList={
                name , 
                id:`list-${new Date().getTime()}`,
            };

            const {lists} = store.getState().list;
            const listsCopy = [...lists];
            listsCopy.push(newList);
            await AsyncStorage.setItem(STORAGE_KEYS.lists , JSON.stringify(listsCopy));

            dispatch({
                type:SET_LISTS,
                payload : listsCopy,
            }); 
            onSuccess();
        }catch(err){
            console.log(err);
            onError();
        }
    };
};