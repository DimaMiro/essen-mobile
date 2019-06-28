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
import IngredientsStack from '../components/IngredientsStack';
import PrepStack from '../components/PrepStack';

import Colors from '../constants/Colors';

const RecipeScreen = (props) => {
  // console.log(props.navigation.state.params.recipe)
  let recipe = props.navigation.state.params.recipe
  return (
    <View style={styles.bgContainer}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
          <Image style={styles.dishImage} source={{uri: recipe["image-url"]}}></Image>
          <View style={styles.descContainer}>
              <View style={styles.valuesContainer}>
                <ValueItem iconName="time" value={recipe.info["cook-time"]} unit="min"/>
                <ValueItem iconName="rate" value={recipe.info.rate} unit="rate"/>
                <ValueItem iconName="nutrition" value={recipe.info.calories} unit="kcal"/>
              </View>
              <View style={styles.separator}></View>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{recipe.name}</Text>
                <Text style={styles.subitle}>{recipe.author}</Text>
              </View>
              <View style={styles.separator}></View>
              <CustomButton title="Add to Shopping List"/>
              <View style={styles.separator}></View>
              <SectionHeader title="Ingredients"/>
              <IngredientsStack ingredients={recipe.ingredients}/>
              <View style={styles.separator}></View>
              <SectionHeader title="Preparation"/>
              <PrepStack preparation={recipe.preparation}/>
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
  });