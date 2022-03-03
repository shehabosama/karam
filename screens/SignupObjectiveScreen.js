import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView , TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import ObjectiveCard from "../component/ObjectiveCard";
import CutomeButton from "../component/CustomeButton";
import { Colors } from "../constants";

export const SignupObjectives = ({ navigation }) => {
    const [isSelected1, setSelection1] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
    const [isSelected4, setSelection4] = useState(false);

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

                <Text style={styles.Uppertext}>Select Objectives</Text>
                <Text style={styles.Lowertext}>Select as many, or as few, as you’d like</Text>
                
                <ObjectiveCard style={styles.ObjectiveCard} placeholder="Automate your giving" round isSelected={isSelected1}  setSelection={setSelection1}/>
                <ObjectiveCard style={styles.ObjectiveCard} placeholder="Discover cases to support" round isSelected={isSelected2}   setSelection={setSelection2}/>
                <ObjectiveCard style={styles.ObjectiveCard} placeholder="Organize donations in one place" round isSelected={isSelected3}  setSelection={setSelection3} />
                <ObjectiveCard style={styles.ObjectiveCard} placeholder="Get updates on your donations" round isSelected={isSelected4}  setSelection={setSelection4} />

            </ScrollView>
            <CutomeButton style={styles.btn} text="Continue" round  onPress={()=>navigation.navigate('SignupPreferences')} />


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

export default SignupObjectives;