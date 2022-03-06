import React from 'react';
import { View, Text, TextInput,Image, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

import { Colors } from '../constants';
import gloableStyles from '../styles/gloable'
const CasesCardInfo = ({ placeholder, text, onTextInputChange, ref, round, focus, icon, iconColor, danger, style }) => {
    let btnStyle = { ...Customstyles.container, ...style };
    if (round) {
        btnStyle = { ...btnStyle, ...Customstyles.round }
    }
    if (danger) {
        btnStyle = { ...btnStyle, ...Customstyles.danger }
    }


    return (
        <View activeOpacity={0.2} style={round ? Customstyles.round : {}} underlayColor="transparent">
            <ImageBackground
                source={require('../assets/maketCardPhoto.png')}
                //source={{ uri: 'www.imageislocatedhere.com }} -------- if it is link
                style={Customstyles.bgContainer}
                imageStyle={{ borderRadius: 10}}
            >
                
                <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10  }}>
                    <Text style={{ color: '#fff', flex: 1, textAlign: 'left', marginTop: 5 }}></Text>
                    <Image style={{alignSelf:'center'}} source={require('../assets/waterVector.png')}/>
                    <Text style={{ color: '#fff', textAlign: 'center' }}>Ramaining</Text>
                    <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>2,858 EGP</Text>
                    
                </View>
               
            </ImageBackground>
           
            
            {/* <View style={btnStyle} >
        
    
        </View> */}

        </View>
    );
};
const Customstyles = StyleSheet.create({
    container: {
        width:100,
        height:120,
        alignItems: 'center',
        justifyContent: 'flex-start',



    },
    text: {
        fontSize: 18,
        fontFamily: 'Poppins-Light',
        color: '#fff',
        fontWeight: 'bold'
    },

    danger: {
        backgroundColor: Colors.danger,
    },
    round: {
        height: 149,
        width:155,
        borderRadius: 10,
        flex:1,
        borderColor: '#23596A',
        marginTop:10,
      
    },
    bgContainer: {
        height:260,
       // backgroundColor: 'rgba(10, 10, 10, 0.4)',
        justifyContent: 'center',
        borderRadius:50,
        flexDirection:'row',
        marginTop:20
    },
});

export default CasesCardInfo;