import React, { useState, useRef } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import CutomeButton from "../component/CustomeButton";
import { Colors } from "../constants";

import Icon from 'react-native-vector-icons/Ionicons';
import gloable from "../styles/gloable";
import { showMessage } from "../utils/HelperFunctions";
export const SignupVerifyAccount = ({ route, navigation }) => {

    const inputRef2 = useRef();
    const inputRef3 = useRef();
    const inputRef4 = useRef();
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');

    let isNumber = !isNaN(+input1 + input2 + input3 + input4);

    const submitHandler = () => {
        if (input1.trim() == '' || input2.trim() == '' || input3.trim() == '' || input4.trim() == '') {
            showMessage('Please fill all verification fields');
        } else if (!isNumber) {
            showMessage('Please write only numbers');
        } else {
            navigation.navigate('SignupObjectives', route.params);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}>
                <Image
                    source={require("../assets/backButton.png")}
                    style={styles.image}
                    onPress={() => navigation.goBack()} />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.Uppertext}>Verify Account</Text>
                <Text style={styles.Lowertext}>Enter 4 digits code received on your email</Text>
                <View style={styles.verifyFiledContainer}>
                    <View activeOpacity={0.2} style={styles.round} underlayColor="transparent">
                        <View >
                            <TextInput
                                autoFocus={true}
                                keyboardType={'numeric'}
                                style={gloable.input}
                                maxLength={1}
                                // value={}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                numberOfLines={1}
                                //returnKeyType="next"
                                onChangeText={(input1) => {
                                    inputRef2.current.focus();
                                    setInput1(input1);
                                }}
                            />
                        </View>
                    </View>

                    <Text style={styles.spreatedDash}>_</Text>
                    <View activeOpacity={0.2} style={styles.round} underlayColor="transparent">
                        <View >
                            <TextInput
                                keyboardType={'numeric'}
                                style={gloable.input}
                                maxLength={1}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                numberOfLines={1}
                                // returnKeyType="next"
                                onChangeText={(input2) => {
                                    inputRef3.current.focus();
                                    setInput2(input2);
                                }}
                                ref={inputRef2}
                            />
                        </View>
                    </View>
                    <Text style={styles.spreatedDash}>_</Text>
                    <View activeOpacity={0.2} style={styles.round} underlayColor="transparent">
                        <View >
                            <TextInput
                                keyboardType={'numeric'}
                                style={gloable.input}
                                maxLength={1}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                numberOfLines={1}
                                // returnKeyType="next"
                                onChangeText={(input3) => {
                                    inputRef4.current.focus();
                                    setInput3(input3);
                                }}
                                ref={inputRef3}
                            />
                        </View>
                    </View>
                    <Text style={styles.spreatedDash}>_</Text>
                    <View activeOpacity={0.2} style={styles.round} underlayColor="transparent">
                        <View >
                            <TextInput
                                keyboardType={'numeric'}
                                style={gloable.input}
                                maxLength={1}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                numberOfLines={1}
                                // returnKeyType="next"
                                onChangeText={(input4) => {
                                    setInput4(input4);
                                }}
                                ref={inputRef4}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.HorizontalContainer}>
                    <Icon name="reload" size={15} color={Colors.primary} style={{ marginTop: 19 }} />
                    <Text style={styles.HintText}>Resend Code</Text>
                </View>
            </ScrollView>
            <CutomeButton style={styles.btn} text="Verify" round onPress={() => { submitHandler() }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.height,
        marginHorizontal: 15,
        marginTop: 20



    },
    verifyFiledContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 80,
    },

    Uppertext: {
        fontSize: 34,
        fontFamily: 'SFProDisplay-Regular',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        color: Colors.primary,
        marginTop: 5,

    },
    spreatedDash: {
        fontSize: 20,
        fontFamily: 'SFProDisplay-Regular',
        alignSelf: 'flex-start',
        color: '#23596a',
        marginTop: 5,
        marginHorizontal: 1,
        fontWeight: 'bold'
    },
    Lowertext: {

        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'flex-start',
        color: Colors.primary,
        textAlign: 'justify',
        marginTop: 10,

    },
    HintText: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'flex-end',
        color: Colors.primary,
        marginHorizontal: 5,
        marginVertical: 10,

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
        justifyContent: 'flex-end',
        marginHorizontal: 25,
    },
    round: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#23596A',
        marginHorizontal: 10,
        paddingHorizontal: 10
    }
});

export default SignupVerifyAccount;