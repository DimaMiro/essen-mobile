import React from "react";
import { withNavigation } from 'react-navigation';
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";

function DishScrollItem(props){
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('Recipe', {recipe: props.dish})}>
            <View style={styles.dishScrollItemContainerOuter}>
                <View style={styles.dishScrollItemContainerInner}>
                    <Image style={styles.dishImage} source={{uri: props.dish["image-url"]}}></Image>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{props.dish.name}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        
    );
};

export default withNavigation(DishScrollItem)

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
        flex: 1,
        height: 65,
        paddingTop: 6,
        paddingHorizontal: 12,
        paddingBottom: 16,
    },
    title: {
        textAlign: 'left',
        fontSize: 18,
        color: 'black',
        fontFamily: "montserrat"
    },
})