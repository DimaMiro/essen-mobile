import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text, ActivityIndicator, StyleSheet } from "react-native";
import { withNavigation } from 'react-navigation';
import ValueItem from './ValueItem';
import Colors from '../constants/Colors'
import CacheImage from '../components/CacheImage';

function RecipeThumbnailView(props){
    const [isLoaded, setImageLoadingState] = useState(false);

    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('Recipe', {recipe: props.recipe})}>
            <View style={[styles.recipeContainerOuter, {marginBottom: props.marginBottom}]}>
                <View style={styles.recipeContainerInner}>
                    <View style={styles.dishImageBox} >
                        <CacheImage
                            style={styles.dishImage}
                            source={{uri: props.recipe["image-url"]}}
                            onLoad={()=>handleImageOnLoad(setImageLoadingState)} />
                        {!isLoaded &&
                            <View style={styles.dishLoadingImageContainer}>
                                <ActivityIndicator size="large" color={Colors.tintColor}/>
                            </View>
                        }
                    </View>
                    
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
function handleImageOnLoad(setImageLoadingState) {
    setImageLoadingState(true)
}
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
    dishImageBox: {
        flex: 1,
        height: 333,
    },
    dishImage: {
        flex: 1,
    },
    dishLoadingImageContainer: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
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