import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../constants';

const CauseCard = ({ onPress, text, round, icon, iconColor, danger, style }) => {
    let btnStyle = { ...styles.container, ...style };
    if (round) {
        btnStyle = { ...btnStyle, ...styles.round }
    }
    if (danger) {
        btnStyle = { ...btnStyle, ...styles.danger }
    }

    return (
        <View style={{ marginTop: 10, }}>
            <CardView
                style={{ flex: 1, flexDirection: 'row', borderWidth: 2 , padding:10 }}
                cardElevation={6}
                cardMaxElevation={6}
                cornerRadius={10}
                
            >
                <Image
                    source={require("../assets/GreenwaterVector.png")}
                    style={{ height: 44, width: 35, margin: 10 }}
                />
                <View style={{ flexDirection: 'column', flex: 1 , marginTop:10 }}
                >
                    <Text style={{fontSize:17 , fontWeight:'bold' , marginVertical:5}}>Water</Text>
                    <Text style={{color:Colors.placeHolder}}>Providing water for the underserved</Text>
                    
                </View>
                <View style={{ flexDirection: 'column', marginTop:10 , marginHorizontal:5 }}
                >
                    <Text style={{fontSize:25 , fontWeight:'bold'  , alignSelf:'center'}}>20</Text>
                    <Text style={{color:Colors.placeHolder}}>Casee</Text>
                    
                </View>
            </CardView>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        flexDirection: 'row',

    },
    text: {
        fontSize: 18,
        fontFamily: 'Poppins-Light',
        color: '#fff',
        fontWeight: 'bold'
    },
    icon: {
        margin: 5,
    },
    danger: {
        backgroundColor: Colors.danger,
    },
    round: {
        borderRadius: 15,
    },
});

export default CauseCard;