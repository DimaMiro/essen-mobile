import React from "react";
import { TouchableHighlight, View, Text, Image, StyleSheet } from "react-native";
import { withNavigation } from 'react-navigation';
import Colors from '../constants/Colors';

function ListThumbnail(props){
    let listBg
    if (props.isActive){
      listBg = Colors.cardColors[Math.floor(Math.random()*Colors.cardColors.length)]
    } else {
      listBg = 'white'
    }
    return (
      <TouchableHighlight onPress={() => props.navigation.navigate('SingleList')}>
        <View style={[styles.listContainerOuter, {marginBottom: props.marginBottom}]}>
            <View style={[styles.listContainerInner, {backgroundColor: listBg}]}>
                <View style={styles.listTitleContainer}>
                    <Text style={styles.listTitle}>{props.title}</Text>
                    <Text style={styles.listSubitle}>{props.dishes} dishes · {props.items} items</Text>
                </View>
                
                <View style={styles.dishImageContainer}>
                    <Image style={styles.dishImage}></Image>
                    <Image style={styles.dishImage}></Image>
                    <Image style={styles.dishImage}></Image>
                </View>
            </View>
        </View>
      </TouchableHighlight>
    );
};
export default withNavigation(ListThumbnail)

const styles = StyleSheet.create({
    listContainerOuter: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 20,
    },
    listContainerInner: {
      flexDirection: 'row',
      overflow: 'hidden',
      borderRadius: 20,
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 16,
    },
    listTitleContainer: {
      flexDirection: 'column',
      flexBasis: "45%"
    },
    listTitle: {
      textAlign: 'left',
      fontSize: 18,
      color: 'black',
      fontFamily: "typo-grotesk"
    },
    listSubitle: {
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