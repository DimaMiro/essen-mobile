import React, { useState } from "react";
import { withNavigation } from 'react-navigation';
import { View, TouchableOpacity, Text, Image, ActivityIndicator, StyleSheet } from "react-native";
import Colors from '../constants/Colors'
import CacheImage from '../components/CacheImage';

function DishScrollItem(props){
    const [isLoaded, setImageLoadingState] = useState(false);
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('Recipe', {recipe: props.dish})}>
            <View style={styles.dishScrollItemContainerOuter}>
                <View style={styles.dishScrollItemContainerInner}>
                    <View style={styles.dishImageBox} > 
                        <CacheImage 
                            style={styles.dishImage} 
                            source={{uri: props.dish["image-url"]}}
                            onLoad={()=>handleImageOnLoad(setImageLoadingState)} />
                        {!isLoaded &&
                            <View style={styles.dishLoadingImageContainer}>
                                <ActivityIndicator size="large" color={Colors.tintColor}/>
                            </View>
                        }
                    </View>
                    
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{props.dish.name}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        
    );
};
function handleImageOnLoad(setImageLoadingState) {
    setImageLoadingState(true)
}
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
    dishImageBox: {
        flex: 1,
        height: 188,
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