import React from 'react';
import { View, Text,TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../constants';
import gloableStyles from '../styles/gloable'
const CutomeVerifyInput = ({placeholder , text,onTextInputChange , ref,round ,focus , icon , iconColor , danger , style})=>{
    let btnStyle = {...styles.container , ...style};
    if(round){
        btnStyle={...btnStyle , ...styles.round}
    }
    if(danger) {
        btnStyle= {...btnStyle , ...styles.danger}
    }


    return(
        <View activeOpacity={0.2} style={round ? Customstyles.round : {}} underlayColor="transparent">
        <View style={btnStyle}>
         
        </View>
      </View>
    );
};
    const Customstyles = StyleSheet.create({
        container:{
            
            alignItems:'center',
            justifyContent:'flex-start',
            padding:10,
            flexDirection:'row',
        },
        text:{
            fontSize : 18,
            fontFamily: 'Poppins-Light',
            color:'#fff',
            fontWeight:'bold'
        },
        icon:{
            margin:5,
        },
        danger:{
            backgroundColor:Colors.danger,
        },
        round:{
            borderRadius:10,
            borderWidth:0.9,
            borderColor:'#23596A'
        },
    });

export default CutomeVerifyInput;