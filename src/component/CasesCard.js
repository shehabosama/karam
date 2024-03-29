import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

import { Colors, IMAGES_URL } from '../constants';
import gloableStyles from '../styles/gloable'
const CasesCard = ({ iconImage, remainingText, imageUrl, name, round, danger, style }) => {
  
    let btnStyle = { ...Customstyles.container, ...style };
    if (round) {
        btnStyle = { ...btnStyle, ...Customstyles.round }
    }
    if (danger) {
        btnStyle = { ...btnStyle, ...Customstyles.danger }
    }


    
    return (
        <View activeOpacity={0.2} style={round ? Customstyles.round : btnStyle} underlayColor="transparent">
            <ImageBackground
              //  source={require('../assets/maketCardPhoto.png')}
                source={{uri: `${IMAGES_URL+imageUrl}` }}
                style={Customstyles.bgContainer}
                imageStyle={{ borderRadius: 10 }}>

                <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
                    <Text style={{ color: '#fff', flex: 1, textAlign: 'left', marginTop: 5 }}></Text>
                    <Image style={{width:50 , height:60 ,  alignSelf: 'center' }} source={{uri: `${iconImage}` }} />
                    <Text style={{ color: '#fff', textAlign: 'center' }}>Ramaining</Text>
                    <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>{remainingText} EGP</Text>
                </View>

            </ImageBackground>
            <View style={{ flexDirection: 'row', }}>
                <Text style={{ flex: 1, color: '#000', marginTop: 5, fontWeight: 'bold' }}>{name}</Text>
                <Text style={{ color: Colors.primary, textAlign: 'center', marginTop: 5, fontWeight: 'bold' }}>85%</Text>
            </View>

        </View>
    );
};
const Customstyles = StyleSheet.create({
    container: {
        width: 100,
        height: 120,
        
    },
    round: {
        flex:1,
        width: 155,
        borderRadius: 10,
        alignSelf:"center",
        borderColor: '#23596A',
        marginVertical:5,
    },
    bgContainer: {
        width:165,
        height:170,
        flex:1,
       // height: 149,
        // backgroundColor: 'rgba(10, 10, 10, 0.4)',
      //  justifyContent: 'center',
       // borderRadius: 50,
        
        
    },
});

export default CasesCard;