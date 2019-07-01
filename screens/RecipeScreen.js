import React, { useState } from 'react';
import {
  Image,
  Modal,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';
import ValueItem from '../components/ValueItem';
import CustomButton from '../components/CustomButton';
import SectionHeader from '../components/SectionHeader';
import IngredientsStack from '../components/IngredientsStack';
import PrepStack from '../components/PrepStack';

import Colors from '../constants/Colors';

import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

const RecipeScreen = (props) => {
  
  const [isModalVisible, setModalVisiblity] = useState(false);

  let recipe = props.navigation.state.params.recipe
  return (
    <View style={styles.bgContainer}>
      <Modal
          visible={isModalVisible}
          transparent={true}
          animationType={'slide'}
          onRequestClose={() => handleCloseModal(setModalVisiblity)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.modalOverlay}
            onPress={() => handleCloseModal(setModalVisiblity)}
          />
          <View style={styles.modalBgContainer}>
            <View style={styles.modalContentContainer}>
              <View style={styles.modalHeaderContainer}>
                <SectionHeader title="Save to"/>
                <TouchableOpacity onPress={() => {console.log('ADD PRESSED')}}>
                  <Icon
                    style={styles.valueImage}
                    name='add'
                    size={34}
                    color='black'
                  />
                </TouchableOpacity>
              </View>
              
              <View style={[styles.separator, {marginTop: 0}]}></View>
              <View style = {styles.emptyStateBox}>
                <View style = {styles.emptyStateImage}></View>
                <Text style = {styles.paragraph}>Seems you haven’t created any lists yet.{"\n"}Let’s add your first one!</Text>
              </View>
              <CustomButton isPrimary={false} title="Cancel" onPressAction={()=>handleCloseModal(setModalVisiblity)}/>
            </View>
          </View>
        </View>
      </Modal>
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
        fontFamily: "typo-grotesk"
    },
    subitle: {
        marginTop: 4,
        textAlign: 'left',
        fontSize: 13,
        color: 'rgba(0,0,0,0.4)',
    },
    modalContainer: {
      flex: 1,
      flexDirection: 'column',
    },
    modalOverlay: {
      flex: 1,
      // height: '50%',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalBgContainer: {
      // height: '50%',
      height: 457,
      backgroundColor: 'white',
    },
    modalContentContainer: {
      flex: 1,
      paddingHorizontal: 21,
    },
    modalHeaderContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',

    },
    emptyStateBox: {
      width: '90%',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 40,
    },
    emptyStateImage: {
      width: 160,
      height: 160,
      marginBottom: 20,
      backgroundColor: Colors.tabIconDefault
    },
    paragraph: {
      textAlign: 'center',
      fontSize: 17,
      color: 'rgba(0,0,0,0.4)',
    }
  });