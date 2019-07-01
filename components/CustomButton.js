import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from '../constants/Colors';

export default function CustomButton(props){
    return (
        <TouchableOpacity onPress={props.onPressAction}>
            <View style={[styles.buttonContainer, props.isPrimary ? styles.primaryStyle : styles.secondaryStyle]}>
                <Text style={props.isPrimary ? styles.primaryButtonTitle : styles.secondaryButtonTitle}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        height: 56,
        borderRadius: 10,
        justifyContent: 'center',
    },
    primaryButtonTitle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 17,
        fontFamily: "typo-grotesk"
    },
    secondaryButtonTitle: {
        color: 'black',
        textAlign: 'center',
        fontSize: 17,
        fontFamily: "typo-grotesk"
    },
    primaryStyle: {
        backgroundColor: Colors.primaryButtonColor,
    },
    secondaryStyle: {
        backgroundColor: 'white',
        borderColor: Colors.tabIconDefault,
        borderWidth: 2,
    },
    
})