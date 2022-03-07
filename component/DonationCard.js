import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

import { Colors } from '../constants';
import gloableStyles from '../styles/gloable'
const DonationCard = ({ placeholder, text, onTextInputChange, ref, round, focus, icon, iconColor, danger, style }) => {
    let btnStyle = { ...Customstyles.container, ...style };
    if (round) {
        btnStyle = { ...btnStyle, ...Customstyles.round }
    }
    if (danger) {
        btnStyle = { ...btnStyle, ...Customstyles.danger }
    }


    return (
        <View activeOpacity={0.2} style={round ? Customstyles.round : {}} underlayColor="transparent">
            <Image
                source={require('../assets/maketCardPhoto.png')}
                //source={{ uri: 'www.imageislocatedhere.com }} -------- if it is link
                style={Customstyles.bgContainer}
            />
            <View style={{ flexDirection: 'column', marginHorizontal:10,flex:1 }}>

            <Text style={{
                        flex:1,
                        fontSize: 12,
                        fontFamily: 'SF-Pro-Rounded-Regular',
                        marginTop: 1,
                        color: '#23596A',
                        fontWeight: 'bold',
                    }}>Cases#101</Text>


                     <Text style={{
                        flex:1,
                        fontSize: 12,
                        fontFamily: 'SF-Pro-Rounded-Regular',
                        marginTop: 5,
                        color: '#000',
                        fontWeight: 'bold',
                    }}>Water Supply Qena</Text>

                <View style={{ flexDirection: 'row' ,}}>
                    <Text style={{
                        flex:1,
                        fontSize: 12,
                        fontFamily: 'SF-Pro-Rounded-Regular',
                        marginTop: 5,
                        color: '#23596A',
                        fontWeight: 'bold',
                    }}>Misr Alkheir</Text>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('Cases')} >
                        <Text style={Customstyles.HintText}>View All</Text>
                    </TouchableOpacity>
                </View>
            </View>


            {/* <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10  }}>
                    <Text style={{ color: '#fff', flex: 1, textAlign: 'left', marginTop: 5 }}></Text>
                    <Image style={{alignSelf:'center'}} source={require('../assets/waterVector.png')}/>
                    <Text style={{ color: '#fff', textAlign: 'center' }}>Ramaining</Text>
                    <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>2,858 EGP</Text>
                    
                </View> */}

            {/*            
            <View style={{flexDirection:'row', }}>
            <Text style={{flex:1, color: '#000', marginTop: 5 , fontWeight:'bold' }}>Water to Aswan</Text>
            <Text style={{ color: Colors.primary, textAlign: 'center', marginTop: 5 ,fontWeight:'bold'}}>85%</Text>
            </View> */}

            {/* <View style={btnStyle} >
        
    
        </View> */}

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
        borderRadius: 10,
        borderColor: '#23596A',
        marginTop: 10,
        flexDirection: 'row'
    },
    bgContainer: {
        height: 69,
        width: 76,
        // backgroundColor: 'rgba(10, 10, 10, 0.4)',
        borderRadius: 10,
    },
    HintText: {
        fontSize: 12,
        fontFamily: 'SF-Pro-Rounded-Regular',
        color: '#000',
        marginTop: 10,
        marginHorizontal:10,
        fontWeight:'bold'
    },
});

export default DonationCard;