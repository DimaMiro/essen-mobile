import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SectionHeader(props){
    return (
        <Text style={styles.sectionHeader}>{props.title}</Text>
    );
};

const styles = StyleSheet.create({
    sectionHeader: {
        marginTop: 16,
        marginBottom: 16,
        textAlign: 'left',
        fontSize: 17,
        color: 'rgba(0,0,0,0.6)',
        fontFamily: "typo-grotesk"
    },
})