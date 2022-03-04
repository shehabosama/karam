import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import ObjectiveCard from "../component/ObjectiveCard";
import CutomeButton from "../component/CustomeButton";
import { Colors } from "../constants";
import gloable from "../styles/gloable";
import SwitchSelector from 'react-native-switch-selector';
import { showMessage } from "../utils/HelperFunctions";
export const SignupFrequency = ({ route , navigation }) => {
    const [subscribeAmount , setSubscribeAmount] = useState(''); 
    let isNumber = !isNaN(+subscribeAmount);
    const options = [
        { label: 'Weekly', value: '1' },
        { label: 'Monthly', value: '1.5' },
        { label: 'Yearly', value: '2' }
    ];
    const submiHandler=()=>{
        if(!isNumber){
            showMessage('Please write only numbers');
        }else{
            navigation.navigate('HomeTabs')
        }
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}>
                <Image
                    source={require("../assets/backButton.png")}
                    style={styles.image}
                    onPress={() => navigation.goBack()}
                />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Text style={styles.Uppertext}>Set Frequency</Text>
                <Text style={styles.Lowertext}>We’re going to help you reach your goal</Text>
                <SwitchSelector style={{marginTop:30}} options={options} initial={1}  selectedColor='#fff' buttonColor={Colors.primary}
                onPress={value => console.log(`Call onPress with value: ${value}`)} />


                
                <View style={{ flexDirection: 'row' }}>
                    
                    <TextInput style={styles.input}
                        placeholder="8,000" placeholderTextColor={Colors.placeHolder} onChangeText={(subscribeAmount)=>setSubscribeAmount(subscribeAmount)}/>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Image
                            source={require("../assets/edit.png")}
                            style={styles.editImage}

                        />
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row' ,alignSelf:'center' , marginVertical:10 }}>
                <Text style={styles.BoldHintText}>800 EGP </Text>
                <Text style={styles.HintText}>Left to reach your set target</Text>
                </View>
                <Text style={styles.HintText}>We will not charge you anything untill you subscribe to cases, causes or providers, or make a one time donations</Text>
                <Text style={styles.BoldHintText}>OR </Text>
                <CutomeButton style={styles.btnManualDonation} text="Manual Donation" round onPress={() => navigation.navigate('HomeTabs')} />
                <Text style={styles.HintText}>Make donations case by case and keep track of your target achievement. You’ll get access to all the cases on the platform and updates.</Text>

            </ScrollView>
            <CutomeButton style={styles.btn} text="Confirm" round onPress={() => submiHandler()} />


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
    editImage: {

        marginTop: 20,
        width: 25,
        height: 28,
        alignSelf: "flex-start",
        marginEnd: 10,
        marginTop: 50,
        position: 'absolute',
        end: 0

    },
    selectionImage: {
        alignSelf: "center",
        marginVertical: 5,

    },
    input: {
        borderBottomColor: Colors.primary,
        textAlign: 'center',
        borderStyle: 'solid',
        fontSize: 50,
        borderBottomWidth: 1.0,
        paddingBottom: 15,
        fontWeight: 'bold',
        flex: 1
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
        
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'flex-start',
        color: '#23596a',
        textAlign: 'justify',
        marginTop: 10,
    },
    HintText: {
        fontSize: 15,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'center',
        color: '#23596A',
        textAlign: 'center',
    },
    BoldHintText: {
        fontSize: 15,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'center',
        color: Colors.primary,
        textAlign: 'center',
        fontWeight:'bold'
    },
    ImportanText: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'center',
        color: Colors.importanText,
    },
    btn: {
        marginVertical: 40,
        backgroundColor: 'rgba(35, 89, 106, 1.0)',
        paddingVertical: 15,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 10,

    },
    btnManualDonation:{
        marginTop: 50,
        backgroundColor: 'rgba(35, 89, 106, 1.0)',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 10, 
        padding:5
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
    ObjectiveCard: {
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.primary
    }
});

export default SignupFrequency;