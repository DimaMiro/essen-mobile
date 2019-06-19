import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import ValueItem from './ValueItem';

export default function RecipeThumbnailView(props){
    return (
        <View style={styles.recipeContainerOuter}>
            <View style={styles.recipeContainerInner}>
                <Image style={styles.dishImage}></Image>
                <View style={styles.descContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Zucchini And Corn Frittata</Text>
                        <Text style={styles.subitle}>by Rie McClenny</Text>
                    </View>
                    <View style={styles.valuesContainer}>
                        <ValueItem value="45" unit="min"/>
                        <ValueItem value="8,5" unit="rate"/>
                        <ValueItem value="462" unit="kcal"/>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    recipeContainerOuter: {
        flex: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
    },
    recipeContainerInner: {
        flex: 1,
        overflow: 'hidden',
        borderRadius: 20,
        
        backgroundColor: 'white',
    },
    dishImage: {
        flex: 1,
        height: 333,
        backgroundColor: 'gray',
    },
    descContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 16,
    },
    titleContainer: {
        flex: 1,
    },
    title: {
        textAlign: 'left',
        fontSize: 18,
        color: 'black',
        fontFamily: "typo-grotesk"
    },
    subitle: {
        marginTop: 4,
        textAlign: 'left',
        fontSize: 13,
        color: 'rgba(0,0,0,0.4)',
    },
    valuesContainer: {
        flex: 1,
        flexDirection: "row",
        marginTop: 10,
        paddingHorizontal: 5,
        justifyContent: "space-between"
    },
    
})