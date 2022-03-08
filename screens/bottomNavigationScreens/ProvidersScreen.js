import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from "../../constants";
import CasesCard from "../../component/CasesCard";
import CardView from 'react-native-cardview'

export const ProvidersScreen = ({ route, navigation }) => {
    const [activeCaseTab, setActiveCases] = useState(true);
    const [subscribeCaseTab, setSubscribeCaseTab] = useState(false);
    const [prevCaseTab, setPrevCaseTab] = useState(false);
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <CardView
                        style={{ flex: 1, flexDirection: 'row', paddingVertical: 20, paddingHorizontal: 20 }}
                        cardElevation={6}
                        cardMaxElevation={6}
                        cornerRadius={20} >
                        <View style={{ flex: 1, flexDirection: 'column', marginStart: 10 }}>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}>
                                <Image
                                    source={require("../../assets/backButton.png")}
                                    style={styles.image}
                                    onPress={() => navigation.goBack()}
                                />
                            </TouchableOpacity>
                            <Text style={styles.Uppertext}>Misr El Kheir Foudation</Text>
                            <Text style={styles.Lowertext}>Registration :415-208-907 </Text>
                        </View>

                        <View style={{ flexDirection: 'column', marginEnd: 30 }}>
                            <Image source={require('../../assets/providerImage.png')} style={{ marginTop: 50, }} />
                            <Text style={styles.smalBoldText}>Info +</Text>
                        </View>
                    </CardView>
                </View>

                <View style={{ flex: 1, marginHorizontal: 30, }}>
                    <View style={{ flexDirection: 'row', borderBottomWidth: 0.8, borderBottomColor: Colors.placeHolder }}>
                        <TouchableOpacity
                            onPress={() => {
                                setActiveCases(true);
                                setSubscribeCaseTab(false);
                                setPrevCaseTab(false)
                            }}>
                            <Text style={activeCaseTab ? styles.activeTab : styles.nonActiveTab}>Active Cases</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setActiveCases(false);
                                setSubscribeCaseTab(true);
                                setPrevCaseTab(false)
                            }}>
                            <Text style={subscribeCaseTab ? styles.activeTab : styles.nonActiveTab}>Subscribed </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setActiveCases(false);
                                setSubscribeCaseTab(false);
                                setPrevCaseTab(true)
                            }}>
                            <Text style={prevCaseTab ? styles.activeTab : styles.nonActiveTab}>Previous Cases </Text>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('AboutCase')}>
                        <CasesCard style={styles.cusomBord} round />
                    </TouchableOpacity>

                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 0,
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

    smalBoldText: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        marginTop: 10,
        color: '#23596A',
        fontWeight: 'bold',
        textAlign: 'center',
        marginEnd: 10
    },
    activeTab: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        marginTop: 10,
        color: '#23596A',
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 8,
    },
    nonActiveTab: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        marginTop: 10,
        color: Colors.placeHolder,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 8,
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
});

export default ProvidersScreen;