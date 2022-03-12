import React from "react";
import { useDispatch ,useSelector } from "react-redux";
import { Button, Text, ToastAndroid, View } from "react-native";
import { saveUserToken  , getData,deleteData ,getCitiesData , PerformLogin} from "../store/actions/AuthActions";

const TestScreen =  ()=>{
    const dispatch = useDispatch();
    const person  = useSelector(state=> state.data);
    const CitiesData = useSelector(state=>state.auth)

    // dispatch(setData( ()=>{
    //     ToastAndroid.show(`List created!` , ToastAndroid.LONG);
    //     Keyboard.dismiss();
    //     navigation.navigate('Home'); 
        
    // } , 
    // ()=>{ToastAndroid.show('Somthing went wrong , please try again!' , ToastAndroid.LONG)}
    // ));

    const submgetDataHandler =()=>{
        dispatch(getData());
    };
    const submgetsetDataHandler =()=>{
        dispatch(saveUserToken());
    };
    const deleteDataHandler=()=>{
        dispatch(deleteData());
    }
    const getCitiesDataHandler=()=>{
        dispatch(getCitiesData());
        console.log(CitiesData);
    }

    
   const submiHandler =()=>{
      
        dispatch(saveUserToken( ()=>{
            ToastAndroid.show('List created!' , ToastAndroid.LONG);
          //  Keyboard.dismiss();
         
        } , 
        ()=>{ToastAndroid.show('Somthing went wrong , please try again!' , ToastAndroid.LONG)}
        ));
    };

    const submitLogin =()=>{
        dispatch(PerformLogin({EMAIL:'admin@admin.com' , PASSWORD:'password'}));
    };
    return(
        <View>
            <Button title="press" onPress={()=>{submiHandler();}}/>
            <Button title="getData" onPress={()=>{submgetDataHandler();}}/>
            <Button title="getData" onPress={()=>{deleteDataHandler();}}/>
            <Button title="getData" onPress={()=>{getCitiesDataHandler();}}/>
            <Button title="Login" onPress={()=>{submitLogin();}}/>
            {/* <Text>{person}</Text> */}
        </View>
    );
};
export default TestScreen;