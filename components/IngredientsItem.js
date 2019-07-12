import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function IngredientsStack(props){
    return (
        <View style={styles.ingredientContainer}>
            <Text style={styles.ingredientTitle}>{props.title}</Text>
            <Text style={styles.ingredientAmount}>{props.amount}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    ingredientContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
    },
    ingredientTitle: {
        fontSize: 18,
        color: 'black',
        fontFamily: "montserrat"
    },
    ingredientAmount: {
        fontSize: 18,
        color: 'rgba(0,0,0,0.4)',
        fontFamily: "montserrat"
    },
})