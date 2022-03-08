import React, { useState, useRef } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { Colors } from "../../constants";
import Icon from 'react-native-vector-icons/Ionicons';
import CasesCardInfo from "../../component/CasesCardInfo";
export const AboutCase = ({ route, navigation }) => {
    const [aboutCaseTab, setAboutCases] = useState(true);
    const [updatesCaseTab, setUpdatesCaseTab] = useState(false);

    return (
        <View style={styles.container}>

            <TouchableOpacity
                onPress={() => navigation.goBack()}>
                <Image
                    source={require("../../assets/backButton.png")}
                    style={styles.image}
                    onPress={() => navigation.goBack()} />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Text style={styles.Lowertext}># Water 2312</Text>
                <Text style={styles.Uppertext}>Water Installment for a house</Text>

                <View style={{ flex: 1, }}>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => {
                                setAboutCases(true);
                                setUpdatesCaseTab(false);
                            }}>
                            <Text style={aboutCaseTab ? styles.activeTab : styles.nonActiveTab}>
                                ABOUT
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                setAboutCases(false);
                                setUpdatesCaseTab(true);
                            }}>
                            <Text style={updatesCaseTab ? styles.activeTab : styles.nonActiveTab}>
                                UPDATES
                            </Text>
                        </TouchableOpacity>

                    </View>

                    {aboutCaseTab ? <View style={{ flex: 1 }}>
                        <CasesCardInfo />

                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="home-outline" size={20} style={{ marginTop: 10 }} />
                            <Text style={styles.NormalBoldText}>
                                Gameyet Lagnet Zakah Al Hussainiya
                            </Text>

                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="location" size={20} style={{ marginTop: 3 }} />
                            <Text style={styles.NormalText}>
                                Fayoum , Egypt
                            </Text>

                        </View>

                        <View style={{ marginTop: 10, borderRadius: 10, backgroundColor: '#E5E5E5', flexDirection: 'row', marginHorizontal: 30 }}>
                            <View style={{ backgroundColor: '#335D5B', padding: 5, borderRadius: 10 }}>
                                <Text style={{
                                    fontSize: 15,
                                    fontFamily: 'SF-Pro-Rounded-Regular',
                                    alignSelf: 'flex-end',
                                    color: Colors.whiteText,
                                    marginHorizontal: 5,
                                    marginVertical: 0,
                                    fontWeight: 'bold',
                                    paddingHorizontal: 10
                                }}>58,580 EGP</Text>
                                <Text style={styles.SmallText}>Collected</Text>
                            </View>

                            <Text style={{ flex: 4 }}></Text>
                            <View style={{ padding: 5 }}>
                                <Text style={{
                                    fontSize: 15,
                                    fontFamily: 'SF-Pro-Rounded-Regular',
                                    alignSelf: 'flex-end',
                                    color: Colors.blackText,
                                    marginHorizontal: 5,
                                    marginVertical: 0,
                                    fontWeight: 'bold'
                                }}>58,580 EGP</Text>
                                <Text style={{
                                    fontSize: 10,
                                    fontFamily: 'SF-Pro-Rounded-Regular',
                                    alignSelf: 'flex-end',
                                    color: Colors.blackText,
                                    marginHorizontal: 5,
                                    marginVertical: 0,
                                    fontWeight: 'bold'
                                }}>Collected</Text>
                            </View>
                            <Text style={{ flex: 1 }}></Text>
                        </View>


                        <Text style={{ marginHorizontal: 30, marginTop: 20 }}>
                            <Text style={{ fontWeight: "bold", color: Colors.primary }}>
                                House #3456
                            </Text>
                            <Text>
                                belongs to “Asmaa mohamed” a mother of 4 orphans, the eldest is 8 years old. Asmaa does not have a stable income and sews clothes for a living. The house needs both a water installment and water meter.
                            </Text>
                        </Text>
                        <Text style={{ marginHorizontal: 30, marginVertical: 10 }}>
                            <Text style={{ fontWeight: "bold", color: Colors.primary }}>Cost: </Text>
                            <Text>water installment pipe (12 meters in length): 650 LE
                                Water meter: 2625 LE
                                Total needed: 3275 LE
                                Expected implementation date: 2 weeks from receiving donation.
                            </Text>
                        </Text>

                    </View> :
                        <View style={{ flex: 1 }}>

                            <View style={{ flexDirection: 'row', marginHorizontal: 5 }}>
                                <Icon name="ios-checkmark-circle" color={Colors.primary} size={20} style={{ marginTop: 5, marginEnd: 0 }} />
                                <Text style={{ borderBottomColor: Colors.placeHolder, borderBottomWidth: 1, flex: 1, marginBottom: 20 }}></Text>
                                <Icon name="ios-checkmark-circle" color={Colors.primary} size={20} style={{ marginTop: 5, marginEnd: 0 }} />
                                <Text style={{ borderBottomColor: Colors.placeHolder, borderBottomWidth: 1, flex: 1, marginBottom: 20 }}></Text>
                                <Icon name="ios-checkmark-circle-outline" color={Colors.placeHolder} size={20} style={{ marginTop: 5, marginEnd: 0 }} />
                            </View>
                            <View style={{ flexDirection: 'row', marginHorizontal: 5 }}>
                                <Text style={{ marginBottom: 20 }}>Collected</Text>
                                <Text style={{ marginBottom: 20, marginStart: 100, marginEnd: 70 }}>Started</Text>
                                <Text style={{ marginBottom: 20, marginStart: 20 }}>Completed</Text>
                            </View>

                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'SF-Pro-Rounded-Regular',
                                alignSelf: 'flex-start',
                                color: Colors.blackText,
                                marginHorizontal: 5,
                                marginVertical: 5,
                                fontWeight: 'bold'
                            }}>Project Images</Text>

                            <Image source={require('../../assets/maketCardPhoto.png')} style={{}} />
                            <Text style={{
                                fontSize: 15,
                                fontFamily: 'SF-Pro-Rounded-Regular',
                                alignSelf: 'flex-start',
                                color: Colors.blackText,
                                marginHorizontal: 5,
                                marginVertical: 10,
                                fontWeight: 'bold'
                            }}>Supporting Documents</Text>
                            <View style={{ flexDirection: 'row' }}>

                                <Text style={{
                                    flex: 1,
                                    fontSize: 15,
                                    fontFamily: 'SF-Pro-Rounded-Regular',
                                    alignSelf: 'flex-start',
                                    color: Colors.blackText,
                                    marginHorizontal: 5,
                                    marginVertical: 5,

                                }}>Water Pipes Receipt.jpg</Text>
                                <Icon name="ios-eye-outline" size={20} style={{ marginTop: 5, marginEnd: 20 }} />

                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{
                                    flex: 1,
                                    fontSize: 15,
                                    fontFamily: 'SF-Pro-Rounded-Regular',
                                    alignSelf: 'flex-start',
                                    color: Colors.blackText,
                                    marginHorizontal: 5,
                                    marginVertical: 5,

                                }}>Daily labor.pdf</Text>
                                <Icon name="ios-eye-outline" size={20} style={{ marginTop: 5, marginEnd: 20 }} />

                            </View>
                        </View>
                    }

                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.height,
        marginHorizontal: 18,
        marginTop: 20
    },
    Uppertext: {
        fontSize: 34,
        fontFamily: 'SFProDisplay-Regular',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        color: Colors.primary,
        marginTop: 5,
    },
    Lowertext: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'flex-start',
        color: Colors.primary,
        textAlign: 'justify',
        marginTop: 10,
    },
    NormalBoldText: {
        fontSize: 15,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'flex-end',
        color: Colors.blackText,
        marginHorizontal: 5,
        marginVertical: 0,
        fontWeight: 'bold'
    },

    NormalText: {
        fontSize: 15,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'flex-end',
        color: Colors.blackText,
        marginHorizontal: 2,
    },
    SmallText: {
        fontSize: 10,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'flex-end',
        color: Colors.whiteText,

    },
    activeTab: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        marginTop: 10,
        color: '#23596A',
        fontWeight: 'bold',
        marginEnd: 15,
    },
    nonActiveTab: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        marginTop: 10,
        color: Colors.placeHolder,
        fontWeight: 'bold',

        marginEnd: 15,

    },
});

export default AboutCase;