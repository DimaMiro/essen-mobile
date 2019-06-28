import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from '../constants/Colors';

export default function CustomButton(props){
    return (
        <TouchableOpacity>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonTitle}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        backgroundColor: Colors.primaryButtonColor,
        height: 56,
        borderRadius: 10,
        justifyContent: 'center',
    },
        buttonTitle: {
        textAlign: 'center',
        fontSize: 17,
        color: 'white',
        fontFamily: "typo-grotesk"
    }
})