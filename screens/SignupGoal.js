import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import ObjectiveCard from "../component/ObjectiveCard";
import CutomeButton from "../component/CustomeButton";
import { Colors } from "../constants";
import gloable from "../styles/gloable";
import { showMessage } from "../utils/HelperFunctions";

export const SignupGoal = ({ route, navigation }) => {
    const [donationGoal, setDonationGoal] = useState('');

    let isNumber = !isNaN(+donationGoal);
    const submiHandler = () => {
        if (donationGoal.trim() == '') {
            showMessage('Please Select goal first');
        }else if(!isNumber){
            showMessage('Please Write numbers only');
        } else {
            navigation.navigate('SignupFrequency', {
                userData: route.params.userData,
                userObjective: route.params.userObjective,
                userPrefrences: route.params.userPrefrences,
                donationGoal: donationGoal,
            })
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
                <Text style={styles.Uppertext}>Set Donation Goal</Text>
                <Text style={styles.Lowertext}>We’re going to help you reach your goal</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput style={styles.input}
                        placeholder="8,000" keyboardType="numeric" value={donationGoal} placeholderTextColor={Colors.placeHolder} onChangeText={(donationGoal) => setDonationGoal(donationGoal)} />
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}>
                        <Image
                            source={require("../assets/edit.png")}
                            style={styles.editImage}

                        />
                    </TouchableOpacity>

                </View>

                <Text style={styles.HintText}>Studies shows that committing to donating money ahead of time, can increase the amount you give by 32%</Text>
            </ScrollView>
            <CutomeButton style={styles.btn} text="Set Goal" round onPress={() => submiHandler()} />


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
        textAlign: 'center',
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
    ObjectiveCard: {
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.primary
    }
});

export default SignupGoal;