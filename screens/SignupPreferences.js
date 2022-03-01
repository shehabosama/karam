import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView , TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import ObjectiveCard from "../component/ObjectiveCard";
import CutomeButton from "../component/CustomeButton";
import { Colors } from "../constants";

export const SignupPreferences = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={styles.container}>
         <TouchableOpacity 
                onPress={()=>navigation.goBack()}>
            <Image
                source={require("../assets/backButton.png")}
                style={styles.image}
                onPress={()=>navigation.goBack()}
            />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Text style={styles.Uppertext}>Donation Preference</Text>
                <Text style={styles.Lowertext}>Select all of causes you want</Text>
                <View style={{flexDirection:'row',flex:1}}>
                    <View style={{flex:1 ,paddingLeft:20}}>
                    <Image
            source={require("../assets/water.png")}
            style={styles.selectionImage}
          />
                 <Image
            source={require("../assets/roofs.png")}
            style={styles.selectionImage}
          />
                 <Image
            source={require("../assets/spacial_needs.png")}
            style={styles.selectionImage}
          />
                    </View>

                    <View style={{flex:1,paddingRight:20}}>
                    <Image
            source={require("../assets/education.png")}
            style={styles.selectionImage}
          />
                 <Image
            source={require("../assets/prison.png")}
            style={styles.selectionImage}
          />
                 <Image
            source={require("../assets/orphans.png")}
            style={styles.selectionImage}
          />
                    </View>
                    
                </View>
            </ScrollView>
            <CutomeButton style={styles.btn} text="Continue" round  onPress={()=>navigation.navigate('SignupGoal')} />


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
    },
    image: {

        marginTop: 20,
        width: 25,
        height: 18,
        alignSelf: "flex-start",

    },
    selectionImage:{
        alignSelf: "center",
        marginVertical:5,
        
    },
    Uppertext: {
        fontSize: 34,
        fontFamily: 'SFProDisplay-Regular',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        color: '#23596a',
        marginTop: 15,

    },
    Lowertext: {
        width: 275,
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'flex-start',
        color: '#23596a',
        textAlign: 'justify',
        marginTop: 10,
    },
    HintText: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'center',
        color: '#23596A',
    },
    ImportanText: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'center',
        color: Colors.importanText,
    },
    btn: {
        marginVertical: 50,
        backgroundColor: 'rgba(35, 89, 106, 1.0)',
        paddingVertical: 15,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 10,

    },
    HorizontalContainer: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    socialImage: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        flex: 1,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },
    ObjectiveCard:{
       marginTop:10 ,
       borderRadius:10,
       borderWidth:2,
       borderColor:Colors.primary
    }
});

export default SignupPreferences;