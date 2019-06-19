import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function DishScrollItem(props){
    return (
        <View style={styles.dishScrollItemContainerOuter}>
            <View style={styles.dishScrollItemContainerInner}>
                <Image style={styles.dishImage}></Image>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    dishScrollItemContainerOuter: {
        marginRight: 20,
        width: 188,
        borderRadius: 20,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
    },
    dishScrollItemContainerInner: {
        flex: 1,
        overflow: 'hidden',
        borderRadius: 20,
    },
    dishImage: {
        flex: 1,
        height: 188,
        backgroundColor: 'gray',
    },
    titleContainer: {
        height: '30%',
        paddingTop: 6,
        paddingHorizontal: 12,
        paddingBottom: 16,
        overflow: 'hidden',
    },
    title: {
        textAlign: 'left',
        fontSize: 18,
        color: 'black',
        fontFamily: "typo-grotesk"
    },
})