import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../constants';
import gloableStyles from '../styles/gloable'
import CheckBox from '@react-native-community/checkbox';

const CutomeTextInput = ({ placeholder, isSelected, setSelection, round, icon, iconColor, danger, style }) => {
    console.log(placeholder , isSelected);
    let btnStyle = { ...styles.container, ...style };

    if (danger) {
        btnStyle = { ...btnStyle, ...styles.danger }
    }

    return (
        <View activeOpacity={0.2} underlayColor="transparent">
            <View style={btnStyle}>
                <View style={styles.checkboxContainer}>

                    <Text style={styles.label}>{placeholder}</Text>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                    />
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    danger: {
        backgroundColor: Colors.danger,
    },
    checkboxContainer: {
        flexDirection: "row",
        padding: 10
    },
    checkbox: {
        alignSelf: "flex-end",
    },
    label: {
        margin: 5,
        flex: 1
    },
});

export default CutomeTextInput;