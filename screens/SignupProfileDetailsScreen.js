import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import CutomeTextInput from "../component/CustomeInput";
import CutomeButton from "../component/CustomeButton";
import { showMessage } from "../utils/HelperFunctions";

export const SignupProfileDetails = ({ route, navigation }) => {
    const [fullName, setFullName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [nationality, setNationality] = useState('');
    const [isSelected, setSelection] = useState(false);
    let isNumber = !isNaN(+mobileNumber);

    const submitHandler = () => {
        if (fullName.trim() == '') {
            showMessage('Full Name is required!');
        } else if (mobileNumber.trim() == '') {
            showMessage('Mobile number is required!');
        } else if (nationality.trim() == '') {
            showMessage('Nationality is required!');
        } else if (!isSelected) {
            showMessage('You have to Agree Terms and Conditions');
        } else if (mobileNumber.length < 11) {
            showMessage('No phone number less than eleven numbers');
        } else if (!isNumber) {
            showMessage('Please write only numbers in phone number');
        } else {
            navigation.navigate('SignupVerifyAccount',
                {
                    email: route.params.email,
                    password: route.params.password,
                    fullName: fullName,
                    mobileNumber: mobileNumber,
                    nationality: nationality,
                    isSelected: isSelected
                });
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

                <Text style={styles.Uppertext}>Complete Profile</Text>
                <Text style={styles.Lowertext}>Lets start by creating your profile!</Text>
                <Text style={styles.Lowertext}>Full Name</Text>
                <CutomeTextInput placeholder="Your name" round onTextInputChange={(fullName) => setFullName(fullName)} />
                <Text style={styles.Lowertext}>Mobile</Text>
                <CutomeTextInput type="numeric" placeholder="Your mobile number" round onTextInputChange={(mobileNumber) => setMobileNumber(mobileNumber)} />
                <Text style={styles.Lowertext}>Nationality</Text>
                <CutomeTextInput placeholder="Your nationality" round onTextInputChange={(nationality) => setNationality(nationality)} />
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                    />
                    <Text style={styles.HintText}>Agree to Terms and Conditions</Text>
                </View>
                <Text style={styles.HintText}>Once you Click on verify email , you will receive an email to activate your account</Text>
                <CutomeButton style={styles.btn} text="Continue" round onPress={submitHandler} />

            </ScrollView>
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
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },

});

export default SignupProfileDetails;