import React from 'react';
import {
  Image,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ValueItem from '../components/ValueItem';
import CustomButton from '../components/CustomButton';
import SectionHeader from '../components/SectionHeader';

import Colors from '../constants/Colors';



const RecipeScreen = (props) => {
  return (
    <View style={styles.bgContainer}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
          <Image style={styles.dishImage}></Image>
          <View style={styles.descContainer}>
              <View style={styles.valuesContainer}>
                  <ValueItem iconName="time" value="20" unit="min"/>
                  <ValueItem iconName="rate" value="20" unit="rate"/>
                  <ValueItem iconName="nutrition" value="20" unit="kcal"/>
              </View>
              <View style={styles.separator}></View>
              <View style={styles.titleContainer}>
                  <Text style={styles.title}>Title</Text>
                  <Text style={styles.subitle}>Author</Text>
              </View>
              <View style={styles.separator}></View>
              <CustomButton title="Add to Shopping List"/>
              <View style={styles.separator}></View>
              <SectionHeader title="Ingredients"/>
              <View style={styles.separator}></View>
              <SectionHeader title="Preparation"/>
          </View>
      </ScrollView>
    </View>
  );
}

export default RecipeScreen

const styles = StyleSheet.create({
    bgContainer: {
      flex: 1,
      backgroundColor: 'black',
    },
    container: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      flex: 1,
      backgroundColor: 'white',
    },
    dishImage: {
      flex: 1,
      height: 375,
      backgroundColor: 'gray',
      marginHorizontal: -21,
    },
    contentContainer: {
      paddingHorizontal: 21,
    },
    descContainer: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 16,
    },
    valuesContainer: {
      flex: 1,
      flexDirection: "row",
      marginTop: 10,
      paddingHorizontal: 5,
      justifyContent: "space-between"
    },
    separator: {
      marginVertical: 20,
      flex: 1,
      backgroundColor: Colors.tabIconDefault,
      height: 1,
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
    buttonContainer: {
      flex: 1,
      backgroundColor: Colors.primaryButtonColor,
      height: 56,
      borderRadius: 10,
      justifyContent: 'center',
    },
    buttonTitle: {
      textAlign: 'center',
      fontSize: 17,
      color: 'white',
      fontFamily: "typo-grotesk"
    }
  });