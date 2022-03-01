import React, { useState } from 'react';
import { View, Text,TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../constants';
import gloableStyles from '../styles/gloable'
import CheckBox from '@react-native-community/checkbox';

const CutomeTextInput = ({placeholder , text , round , icon , iconColor , danger , style})=>{
    const [isSelected , setSelection] = useState(false);
    let btnStyle = {...styles.container , ...style};
    if(round){
        btnStyle={...btnStyle , ...styles.round}
    }
    if(danger) {
        btnStyle= {...btnStyle , ...styles.danger}
    }

    return(
        <View style={styles.container} activeOpacity={0.2} style={round ? styles.round : {}} underlayColor="transparent">
        <View style={btnStyle}>
        <View style={styles.checkboxContainer}>
                   
                    <Text style={styles.label}>{placeholder}</Text>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                    />
                </View>
        </View>
      </View>
    );
};
    const styles = StyleSheet.create({
        container:{
            
            alignItems:'center',
            justifyContent:'flex-start',
           
            flexDirection:'row',
           
        },
        text:{
            fontSize : 18,
            fontFamily: 'Poppins-Light',
            color:'#fff',
            fontWeight:'bold'
        },
       
        danger:{
            backgroundColor:Colors.danger,
        },
        round:{
            
            
        },

        checkboxContainer: {
            flexDirection: "row",
            padding:10
        },
        checkbox: {
            alignSelf: "flex-end",
            
        },
        label: {
            margin: 5,
            flex:1
        },
    });

export default CutomeTextInput;