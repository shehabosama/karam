import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../constants';
const DonationCard = ({ placeholder, text, onTextInputChange, ref, round, focus, icon, iconColor, danger, style }) => {

    return (
        <View activeOpacity={0.2} style={round ? Customstyles.round : {}} underlayColor="transparent">
            <Image
                source={require('../assets/maketCardPhoto.png')}
                //source={{ uri: 'www.imageislocatedhere.com }} -------- if it is link
                style={Customstyles.bgContainer}
            />
            <View style={{ flexDirection: 'column', marginHorizontal: 10, flex: 1 }}>

                <Text style={{
                    flex: 1,
                    fontSize: 12,
                    fontFamily: 'SF-Pro-Rounded-Regular',
                    marginTop: 1,
                    color: Colors.primary,
                    fontWeight: 'bold',
                }}>Cases#101</Text>


                <Text style={{
                    flex: 1,
                    fontSize: 12,
                    fontFamily: 'SF-Pro-Rounded-Regular',
                    marginTop: 5,
                    color: '#000',
                    fontWeight: 'bold',
                }}>Water Supply Qena</Text>

                <View style={{ flexDirection: 'row', }}>
                    <Text style={{
                        flex: 1,
                        fontSize: 12,
                        fontFamily: 'SF-Pro-Rounded-Regular',
                        marginTop: 5,
                        color: Colors.primary,
                        fontWeight: 'bold',
                    }}>Misr Alkheir</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Cases')} >
                        <Text style={Customstyles.HintText}>View All</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};
const Customstyles = StyleSheet.create({
    
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
        marginHorizontal: 10,
        fontWeight: 'bold'
    },
});

export default DonationCard;