import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../constants';
const CutomeButton = ({ onPress, text, round, icon, iconColor, danger, style }) => {
    let btnStyle = { ...styles.container, ...style };
    if (round) {
        btnStyle = { ...btnStyle, ...styles.round }
    }
    if (danger) {
        btnStyle = { ...btnStyle, ...styles.danger }
    }

    return (
        <TouchableHighlight onPress={onPress} activeOpacity={0.8} style={round ? styles.round : {}} underlayColor="transparent">
            <View style={btnStyle}>
                {icon && <Icon name={icon} size={24} color={iconColor} style={styles.icon} />}
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableHighlight>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        flexDirection: 'row',

    },
    text: {
        fontSize: 18,
        fontFamily: 'Poppins-Light',
        color: '#fff',
        fontWeight: 'bold'
    },
    icon: {
        margin: 5,
    },
    danger: {
        backgroundColor: Colors.danger,
    },
    round: {
        borderRadius: 18,
    },
});

export default CutomeButton;