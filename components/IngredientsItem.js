import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CheckBox from './CheckBox'

export default function IngredientsStack(props){
    return (
        <View style={styles.ingredientContainer}>
            <View style={styles.titleContainer}>
                {props.isCheckable && <CheckBox isChecked={false}/>}
                <Text style={props.isCheckable ? [styles.ingredientTitle, {marginLeft: 8}] : styles.ingredientTitle}>{props.title}</Text>
            </View>
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
    titleContainer: {
        flexDirection: "row",
        alignItems: 'center',
    },
    ingredientTitle: {
        fontSize: 18,
        color: 'black',
        fontFamily: "montserrat",
        textAlign: 'left'
    },
    ingredientAmount: {
        fontSize: 18,
        color: 'rgba(0,0,0,0.4)',
        fontFamily: "montserrat"
    },
})