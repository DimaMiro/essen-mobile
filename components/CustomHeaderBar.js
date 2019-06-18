import React from "react";
import { Header } from "react-navigation";
import { View, Text, Platform, StyleSheet } from "react-native";

export default function CustomHeaderBar(props){
  return (
    <View style={styles.headerView}>
        <Text style={styles.headerTitle}>{props.title}</Text>
        <Text style={styles.headerSubtitle}>{props.subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    headerView: {
        backgroundColor: 'black',
        paddingTop: Platform.OS == "ios" ? 20 + 20 : 20,
        paddingStart: 21,
        paddingBottom: 20,
    },
    headerTitle: {
        color: 'white',
        fontWeight: "500",
        fontSize: 24,
    },
    headerSubtitle:{
        color: 'white',
        opacity: 0.6,
        fontSize: 15,
    }
})