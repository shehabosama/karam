import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from "../../constants";
import DonationCard from "../../component/DonationCard";

export const Donation = ({ route, navigation }) => {
    const [upComingCaseTab, setUpComingCases] = useState(true);
    const [completedCaseTab, setCompletedCaseTab] = useState(false);
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Text style={styles.Uppertext}>Donations</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.Lowertext}>Subscribed Causes</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Causes')} >
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
                    <TouchableOpacity
                        onPress={() => {
                            setUpComingCases(true);
                            setCompletedCaseTab(false);

                        }}>
                        <Text style={upComingCaseTab ? styles.activeTab : styles.nonActiveTab}>
                            Upcoming
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setUpComingCases(false);
                            setCompletedCaseTab(true);

                        }}>
                        <Text style={completedCaseTab ? styles.activeTab : styles.nonActiveTab}>
                            Completed
                        </Text>
                    </TouchableOpacity>
                </View>
                <DonationCard style={styles.cusomBord} round />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
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
        flex: 1, fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        marginTop: 10,
        color: '#23596A',
        fontWeight: 'bold',
    },
    HintText: {
        fontSize: 17,
        fontFamily: 'SF-Pro-Rounded-Regular',
        alignSelf: 'center',
        color: '#23596A',
        textAlign: 'center',
        marginTop: 5
    },

    cusomBord: {
        backgroundColor: 'rgba(35, 89, 106, 1.0)',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
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

export default Donation;