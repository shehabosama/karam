import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import { Colors } from '../constants';


const CutomeVerifyInput = ({ placeholder, text, onTextInputChange, ref, round, focus, icon, iconColor, danger, style }) => {
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
                source={require('../../assets/shadowImage.png')}
                style={Customstyles.bgContainer}
                imageStyle={{ borderRadius: 20 }}
            >
                <View style={{ flex: 1, flexDirection: 'column', marginStart: 10 }}>
                    <Text style={{ color: '#fff', textAlign: 'left', marginTop: 10 }}>Donation Meter</Text>
                    <Text style={{ color: '#fff', fontWeight: 'bold', flex: 1, textAlign: 'left', fontSize: 20, marginTop: 10 }}>2,858 EGP</Text>
                    <Text style={{ color: '#fff', flex: 1, textAlign: 'left' }}>Total Donatoins</Text>
                </View>
                <View style={{ flexDirection: 'column', marginHorizontal: 10 , marginEnd:20 }}>
                    <Text style={{ color: '#fff', flex: 1, textAlign: 'left', marginTop: 10 }}>Goal 8k</Text>
                    <Text style={{ color: '#fff', fontWeight: 'bold', flex: 1, textAlign: 'left', fontSize: 20 }}>20 %</Text>
                    <Text style={{ color: '#fff', flex: 1, textAlign: 'left' }}>of Target</Text>
                </View>
            </ImageBackground>

        </View>
    );
};
const Customstyles = StyleSheet.create({
    container: {

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
        borderRadius: 16,
        borderWidth: 0.9,
        borderColor: '#23596A',
        backgroundColor: Colors.primary,
        marginTop: 20,
        height: 100,
        flexDirection: 'row',
        marginHorizontal:5,

    },
    bgContainer: {
        flex: 1,
        backgroundColor: 'rgba(10, 10, 10, 0.4)',
        alignItems: 'stretch',
        justifyContent: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        paddingStart:5,
    },
});

export default CutomeVerifyInput;