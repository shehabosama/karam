import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import CardView from 'react-native-cardview';
import { Colors } from '../constants';
import CheckBox from '@react-native-community/checkbox';
const PreferenceCard = ({ onPress, prefreenceTitle ,setSelection, round, icon, isSelected, danger, style }) => {
    return (
        <View style={{ marginTop: 10, }}>
            <CardView
                //style={{ flex: 1, flexDirection: 'row', borderWidth: 2 , padding:5 , alignItems:"center" }}
                style={styles.card}
                cardElevation={2}
                cardMaxElevation={2}
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
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                    />
                </View>
            </CardView>
        </View>
    );
};

const styles = StyleSheet.create({
    checkbox: {
        alignSelf: "flex-end",
    },
    label: {
        margin: 5,
        flex: 1
    },
    card: {
        flex: 1, 
        flexDirection: 'row',
        backgroundColor: '#fff',
        ...Platform.select({
          android: {
            elevation: 2,
            flex: 1, flexDirection: 'row',  padding:5 , alignItems:"center"
          },
          ios: {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            flex: 1, flexDirection: 'row', padding:5 , alignItems:"center"
          },
        }),
      },
});

export default PreferenceCard;