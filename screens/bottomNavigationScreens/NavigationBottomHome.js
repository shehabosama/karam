import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import CutomeVerfy from "../../component/CustomeVerifyInput";
import CustomeButton from "../../component/CustomeButton";
import { Colors } from "../../constants";
import gloable from "../../styles/gloable";
import CasesCard from "../../component/CasesCard";

export const NavigationBottomHome = ({ route, navigation }) => {
    const [donationGoal, setDonationGoal] = useState('');

    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <Text style={styles.Uppertext}>Hello, Salma!</Text>
                <CutomeVerfy style={styles.cusomBord} text="Set Goal" round />
                <View style={{ flexDirection: 'row' }}>
                  
                    <Text style={{
                        flex: 1, fontSize: 17,
                        fontFamily: 'SF-Pro-Rounded-Regular',
                        marginTop: 10,
                        color: '#23596A',
                        fontWeight: 'bold',
                    }}>Causes</Text>
                     <TouchableOpacity onPress={()=>navigation.navigate('Causes')} >
                    <Text style={styles.HintText}>View All</Text>
                        </TouchableOpacity>
                </View>


                <View style={styles.HorizontalContainer}>
                    <Image
                        source={require("../../assets/waterIcon.png")}
                        style={styles.socialImage}
                    />
                    <Image
                        source={require("../../assets/roofIcon.png")}
                        style={styles.socialImage}
                    />
                    <Image
                        source={require("../../assets/educatoinIcon.png")}
                        style={styles.socialImage}
                    />
                    <Image
                        source={require("../../assets/prisonIcon.png")}
                        style={styles.socialImage}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{
                        flex: 1, fontSize: 17,
                        fontFamily: 'SF-Pro-Rounded-Regular',
                        marginTop: 10,
                        color: '#23596A',
                        fontWeight: 'bold',
                    }}>Cases</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Cases')} >
                    <Text style={styles.HintText}>View All</Text>
                        </TouchableOpacity>
                </View>


                <CasesCard style={styles.cusomBord} round />


                <View style={{ flexDirection: 'row'  , marginTop:30}}>
                    <Text style={{
                        flex: 1, fontSize: 17,
                        fontFamily: 'SF-Pro-Rounded-Regular',
                        marginTop: 10,
                        color: '#23596A',
                        fontWeight: 'bold',
                    }}>Providers</Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Cases')} >
                    <Text style={styles.HintText}>View All</Text>
                        </TouchableOpacity>
                </View>


                <CasesCard style={styles.cusomBord} round />
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
    editImage: {

        marginTop: 20,
        width: 25,
        height: 28,
        alignSelf: "flex-start",
        marginEnd: 10,
        marginTop: 50,
        position: 'absolute',
        end: 0,
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
        marginTop:5
    },
    smalBoldText: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        marginTop: 10,
        color: '#23596A',
        fontWeight: 'bold',
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
    cusomBord: {
        backgroundColor: 'rgba(35, 89, 106, 1.0)',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 100,
        elevation: 10,
        flexDirection: 'row'
    },
    HorizontalContainer: {

        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    socialImage: {
        width: 59,
        height: 83,
        marginHorizontal: 20
    },
});

export default NavigationBottomHome;