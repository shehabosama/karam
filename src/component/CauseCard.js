import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../constants';
import gloable from '../styles/gloable';

const CauseCard = ({ onPress, name, imageUrl, description, id }) => {
 

    return (
        <View style={{ marginTop: 0, }}>
            <CardView
                //style={{ flex: 1, flexDirection: 'row', borderWidth: 2 , padding:10 }}
                style={gloable.card}
                cardElevation={6}
                cardMaxElevation={6}
                cornerRadius={10}>
                <Image
                    source={{uri: `${imageUrl}` }}
                    style={{ height: 44, width: 35, margin: 10 }}
                />
                <View style={{ flexDirection: 'column', flex: 1 , marginTop:10 }}
                >
                    <Text style={{fontSize:17 , fontWeight:'bold' , marginVertical:5}}>{name}</Text>
                    <Text style={{color:Colors.placeHolder}}>{description}</Text>
                    
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


export default CauseCard;