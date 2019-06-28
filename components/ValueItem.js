import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Colors from '../constants/Colors';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

export default function ValueItem(props){
    return (
        <View style={styles.valueItem}>
            <Icon
                style={styles.valueImage}
                name={props.iconName}
                size={34}
                color={props.iconName == "rate" ? "#FFC700" : Colors.tabIconDefault}
            />
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
        alignSelf: 'center',
    },
    value: {
        marginTop: 5,
        textAlign: 'center',
        fontSize: 15,
        color: 'rgba(0,0,0,0.6)',
    },
})