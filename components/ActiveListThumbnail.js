import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Colors from '../constants/Colors';

export default function ActiveListThumbnail(props){
    return (
        <View style={styles.activeListContainerOuter}>
            <View style={styles.activeListContainerInner}>
                <View style={styles.activeListTitleContainer}>
                    <Text style={styles.activeListTitle}>{props.title}</Text>
                    <Text style={styles.activeListSubitle}>{props.dishes} dishes · {props.items} items</Text>
                </View>
                
                <View style={styles.dishImageContainer}>
                    <Image style={styles.dishImage}></Image>
                    <Image style={styles.dishImage}></Image>
                    <Image style={styles.dishImage}></Image>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    activeListContainerOuter: {
      flex: 1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 20,
    },
    activeListContainerInner: {
      flex: 1,
      flexDirection: 'row',
      overflow: 'hidden',
      borderRadius: 20,
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 16,
      backgroundColor: Colors.cardColors[Math.floor(Math.random()*Colors.cardColors.length)],
    },
    activeListTitleContainer: {
      flexDirection: 'column',
      flexBasis: "45%"
    },
    activeListTitle: {
      textAlign: 'left',
      fontSize: 18,
      color: 'black',
      fontFamily: "typo-grotesk"
    },
    activeListSubitle: {
      marginTop: 4,
      textAlign: 'left',
      fontSize: 13,
      color: 'rgba(0,0,0,0.4)',
    },
    dishImageContainer: {
        flexDirection: 'row',
    },
    dishImage: {
        marginRight: 8,
        borderRadius: 10,
        width: 68,
        height: 68,
        backgroundColor: 'gray',
    },
})