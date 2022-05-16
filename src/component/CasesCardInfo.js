import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

import { Colors } from '../constants';
import gloableStyles from '../styles/gloable'
const CasesCardInfo = ({ imageUrl, text, onTextInputChange, ref, round, focus, icon, iconColor, danger, style }) => {
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
                //source={require('../../assets/maketCardPhoto.png')}
                source={{ uri: imageUrl }}
                style={Customstyles.bgContainer}
                imageStyle={{ borderRadius: 10 }}>

                <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
                    <Text style={{ color: '#fff', flex: 1, textAlign: 'left', marginTop: 5 }}></Text>
                    <Image style={{ alignSelf: 'center' ,flex:1 , width:100, resizeMode:'contain'}} source={{uri:icon}} />
                    <Text style={{ color: '#fff', textAlign: 'center' , fontSize:20 , fontWeight:'bold'}}>Ramaining</Text>
                    <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center',fontSize:30 , fontWeight:'800' }}>{text} EGP</Text>

                </View>

            </ImageBackground>

        </View>
    );
};
const Customstyles = StyleSheet.create({

    round: {
        height: 149,
        width: 155,
        borderRadius: 10,
        flex: 1,
        borderColor: '#23596A',
        marginTop: 10,

    },
    bgContainer: {
        height: 260,
        // backgroundColor: 'rgba(10, 10, 10, 0.4)',
        justifyContent: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        marginTop: 20
    },
});

export default CasesCardInfo;