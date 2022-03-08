import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Colors } from "../../constants";
import Icon from 'react-native-vector-icons/Ionicons';
import CardView from 'react-native-cardview'
import CauseCard from "../../component/CauseCard";
export const Causes = ({ route, navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Text style={styles.Uppertext}>Causes</Text>
                <View style={{ flexDirection: 'row' }}>
                    <CardView
                        style={{ flex: 1, flexDirection: 'row', borderWidth: 2 }}
                        cardElevation={6}
                        cardMaxElevation={6}
                        cornerRadius={50}
                    >
                        <Icon name='search' size={24} color={Colors.placeHolder} style={styles.icon} onPress={() => { navigation.navigate('Login') }} />
                        <TextInput placeholder="Search cases , causes & providers" style={
                            {
                                flex: 1,
                                // borderBottomColor:Colors.placeHolder,
                            }
                        } />
                        <Icon name='menu' size={24} color={Colors.placeHolder} style={styles.icon} />
                    </CardView>
                </View>
                <CauseCard style={styles.cusomBord} round />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
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
    cusomBord: {
        backgroundColor: 'rgba(35, 89, 106, 1.0)',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 100,
        elevation: 10,
        flexDirection: 'row'
    },
    icon: {
        marginTop: 10,
    },
});

export default Causes;