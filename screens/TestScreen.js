import React from "react";
import { useDispatch ,useSelector } from "react-redux";
import { Button, Text, ToastAndroid, View } from "react-native";
import { setData  , getData,deleteData} from "../store/actions/AuthActions";

const TestScreen =  ()=>{

    const dispatch = useDispatch();
    const person  = useSelector(state=> state.data);
   

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
    const deleteDataHandler=()=>{
        dispatch(deleteData());
    }
   const submiHandler =()=>{
      
        dispatch(setData( ()=>{
            ToastAndroid.show('List created!' , ToastAndroid.LONG);
          //  Keyboard.dismiss();
         
        } , 
        ()=>{ToastAndroid.show('Somthing went wrong , please try again!' , ToastAndroid.LONG)}
        ));
    };
    return(
        <View>
            <Button title="press" onPress={()=>{submiHandler();}}/>
            <Button title="getData" onPress={()=>{submgetDataHandler();}}/>
            <Button title="getData" onPress={()=>{deleteDataHandler();}}/>
            {/* <Text>{person}</Text> */}
        </View>
    );
};
export default TestScreen;