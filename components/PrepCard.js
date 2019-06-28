import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from '../constants/Colors';

export default function PrepCard(props){
    return (
        <View style={styles.prepContainer}>
            <Text style={styles.prepStep}>{props.step}</Text>
            <Text style={styles.prepDesc}>{props.desc}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    prepContainer: {
        flex: 1,
        flexDirection: "row",
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        borderRadius: 20,
        backgroundColor: 'white',
        marginBottom: 20,
      },
      prepStep: {
        flex: 1,
        textAlign: 'left',
        fontSize: 18,
        color: Colors.accentColor,
        fontFamily: "typo-grotesk"
      },
      prepDesc: {
        flex: 8,
        fontSize: 17,
        color: 'black',
      },
})