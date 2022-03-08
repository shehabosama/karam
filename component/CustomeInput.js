import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../constants';
import gloableStyles from '../styles/gloable'
const CutomeTextInput = ({ placeholder, onTextInputChange, text, type, round, secure, icon, iconColor, danger, style }) => {

    let btnStyle = { ...styles.container, ...style };
    if (round) {
        btnStyle = { ...btnStyle, ...styles.round }
    }
    if (danger) {
        btnStyle = { ...btnStyle, ...styles.danger }
    }

    return (
        <View activeOpacity={0.2} style={round ? styles.round : {}} underlayColor="transparent">
            <View style={btnStyle}>
                {icon && <Icon name={icon} size={24} color={iconColor} style={styles.icon} />}

                <TextInput secureTextEntry={secure ? true : false} keyboardType={type} style={gloableStyles.input} value={text} onChangeText={onTextInputChange}
                    placeholder={placeholder} placeholderTextColor={Colors.placeHolder} />

            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        flexDirection: 'row',
    },
    icon: {
        margin: 5,
    },
    danger: {
        backgroundColor: Colors.danger,
    },
    round: {
        borderRadius: 15,
        borderWidth: 0.9,
        borderColor: Colors.primary
    },
});

export default CutomeTextInput;