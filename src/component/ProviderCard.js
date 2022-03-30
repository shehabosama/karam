import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

import { Colors } from '../constants';
import gloableStyles from '../styles/gloable'
const ProviderCard = ({   imageUrl,  round, danger, style }) => {
   
    let btnStyle = { ...Customstyles.container, ...style };
    if (round) {
        btnStyle = { ...btnStyle, ...Customstyles.round }
    }
    if (danger) {
        btnStyle = { ...btnStyle, ...Customstyles.danger }
    }


    return (
        <View activeOpacity={0.2} style={round ? Customstyles.round : btnStyle} underlayColor="transparent">
          <Image
                    source={{uri: `http://192.168.1.7/karam/public/storage/${imageUrl}` }}
                    style={{ height: 110 , width:100, }}
                />         

        </View>
    );
};
const Customstyles = StyleSheet.create({
    container: {
        width: 100,
        height: 120,
        alignItems: 'center',

     
      
        
    },
    round: {
        height: 110,
        width: 110,
        borderRadius: 10,
        alignItems:"center",
        borderColor: '#23596A',
        marginVertical: 5,
        marginHorizontal:10,
      
      
    },
    bgContainer: {
        width:100,
        height: 149,
        // backgroundColor: 'rgba(10, 10, 10, 0.4)',
        justifyContent: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        flex: 1,

       
    },
});

export default ProviderCard;