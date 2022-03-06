import React, { useState, useRef } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import CutomeButton from "../../component/CustomeButton";
import { Colors } from "../../constants";

import Icon from 'react-native-vector-icons/Ionicons';

export const CaseUpdate = ({ route, navigation }) => {



  

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}>
                <Image
                    source={require("../../assets/backButton.png")}
                    style={styles.image}
                    onPress={() => navigation.goBack()} />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.Lowertext}># Water 2312</Text>
                <Text style={styles.Uppertext}>Water Installment for a house</Text>
                
                <View style={styles.verifyFiledContainer}>
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

export default CaseUpdate;