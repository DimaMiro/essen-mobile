import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ValueItem(props){
    return (
        <View style={styles.valueItem}>
            <Image style={styles.valueImage}></Image>
            <Text style={styles.value}>{props.value} {props.unit}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    valueItem: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: 75,
        height: 56,
    },
    valueImage: {
        width: 22,
        height: 22,
        alignSelf: 'center',
        backgroundColor: 'gray'
    },
    value: {
        marginTop: 5,
        textAlign: 'center',
        fontSize: 15,
        color: 'rgba(0,0,0,0.6)',
    },
})