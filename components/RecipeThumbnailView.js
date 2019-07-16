import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { withNavigation } from 'react-navigation';
import ValueItem from './ValueItem';

function RecipeThumbnailView(props){
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('Recipe', {recipe: props.recipe})}>
            <View style={[styles.recipeContainerOuter, {marginBottom: props.marginBottom}]}>
                <View style={styles.recipeContainerInner}>
                    <Image style={styles.dishImage} source={{uri: props.recipe["image-url"]}}></Image>
                    <View style={styles.descContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{props.recipe.name}</Text>
                            <Text style={styles.subitle}>{props.recipe.author}</Text>
                        </View>
                        <View style={styles.valuesContainer}>
                            <ValueItem iconName="time" value={props.recipe.info["cook-time"]} unit="min"/>
                            <ValueItem iconName="rate" value={props.recipe.info.rate} unit="rate"/>
                            <ValueItem iconName="nutrition" value={props.recipe.info.calories} unit="kcal"/>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        
    );
};
export default withNavigation(RecipeThumbnailView)

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
        fontFamily: "montserrat"
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