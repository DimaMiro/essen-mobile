import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

import ValueItem from '../components/ValueItem';
import CustomButton from '../components/CustomButton';
import SectionHeader from '../components/SectionHeader';
import IngredientsStack from '../components/IngredientsStack';
import PrepStack from '../components/PrepStack';

import CustomModal from '../components/CustomModal';

import Colors from '../constants/Colors';

const RecipeScreen = (props) => {
  
  const [isModalVisible, setModalVisiblity] = useState(false);
  const [isLoaded, setImageLoadingState] = useState(false);

  let recipe = props.navigation.state.params.recipe
  return (
    <View style={styles.bgContainer}>
      <CustomModal recipe={recipe} displayModal={isModalVisible} closeModal={()=>handleCloseModal(setModalVisiblity)}/>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
          {/* <Image style={styles.dishImage} source={{uri: recipe["image-url"]}}></Image> */}
          <View style={styles.dishImageBox} >
              <Image
                  style={styles.dishImage}
                  source={{uri: recipe["image-url"]}}
                  onLoad={()=>handleImageOnLoad(setImageLoadingState)} />
              {!isLoaded &&
                  <View style={styles.dishLoadingImageContainer}>
                      <ActivityIndicator size="large" color={Colors.tintColor}/>
                  </View>
              }
          </View>
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
              <CustomButton isPrimary={true} title="Add to Shopping List" onPressAction={()=>handleOpenModal(setModalVisiblity)}/>
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
function handleOpenModal(setModalVisiblity) {
  setModalVisiblity(true);
}

function handleCloseModal(setModalVisiblity) {
  setModalVisiblity(false);
}

function handleImageOnLoad(setImageLoadingState) {
  setImageLoadingState(true)
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
  
  dishImageBox: {
    flex: 1,
    height: 375,
    marginHorizontal: -21,
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
  contentContainer: {
    paddingHorizontal: 21,
  },
  descContainer: {
    flex: 1,
    paddingTop: 16,
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
      fontFamily: "montserrat"
  },
  subitle: {
      marginTop: 4,
      textAlign: 'left',
      fontSize: 13,
      color: 'rgba(0,0,0,0.4)',
  },
});