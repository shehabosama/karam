import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../constants';

const PreferenceCard = ({ onPress, prefreenceTitle , round, icon, iconColor, danger, style }) => {
   

    return (
        <View style={{ marginTop: 10, }}>
            <CardView
                style={{ flex: 1, flexDirection: 'row', borderWidth: 2 , padding:10 }}
                cardElevation={6}
                cardMaxElevation={6}
                cornerRadius={10}>
                <Image
                    source={require("../../assets/GreenwaterVector.png")}
                    style={{ height: 44, width: 35, margin: 10 }}
                />
                <View style={{ flexDirection: 'column', flex: 1 , marginTop:10 }}
                >
                    <Text style={{fontSize:17 , fontWeight:'bold' , marginVertical:5}}>{prefreenceTitle}</Text>
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


export default PreferenceCard;