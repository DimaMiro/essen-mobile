import React from "react";
import { Header } from "react-navigation";
import { withNavigation } from 'react-navigation';
import { View, Button, Text, TouchableOpacity, Platform, StyleSheet } from "react-native";
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

 function CustomHeaderBar(props){
     let backButton;
     if (!props.isRoot){
        backButton = <TouchableOpacity onPress={() => {props.navigation.goBack()}}>
             <Icon
                style = {styles.backButton}
                name="back"
                size={30}
                color="white"
            />
         </TouchableOpacity>
     }
    return (
        <View style={styles.headerView}>
            {backButton}
            <View>
                <Text style={styles.headerTitle}>{props.title}</Text>
                <Text style={styles.headerSubtitle}>{props.subtitle}</Text>
            </View>
        </View> 
    );
};

export default withNavigation(CustomHeaderBar)

const styles = StyleSheet.create({
    headerView: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black',
        paddingTop: Platform.OS == "ios" ? 20 + 30 : 20,
        paddingStart: 21,
        paddingBottom: 20,
    },
    backButton: {
        marginRight: 14,
    },
    headerTitle: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'montserrat'
    },
    headerSubtitle:{
        color: 'white',
        opacity: 0.6,
        fontSize: 15,
    }
})