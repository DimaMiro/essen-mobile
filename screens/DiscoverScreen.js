import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// import {store} from '../store';
import { connect } from 'react-redux';

import SectionHeader from '../components/SectionHeader';
import ActiveListThumbnail from '../components/ActiveListThumbnail';
import RecipeThumbnailView from '../components/RecipeThumbnailView';
import DishesScrollView from '../components/DishesScrollView';

import Colors from '../constants/Colors';



const DiscoverScreen = (props) => {
  let allRecipes = []
  for (i=0; i<props.recipes; i++){
    allRecipes.push(<RecipeThumbnailView key={i} title={props.recipes[i].recipe.name} subtitle="by Rie McClenny" marginBottom={{marginBottom: 30}}/>)
    console.log(i)
  }
  return (
    <View style={styles.bgContainer}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
          <SectionHeader title="Active Lists"/>
          <ActiveListThumbnail title="Weekend's shopping" dishes="7" items="12"/>
          <SectionHeader title="Recipe of the Day"/>
          <RecipeThumbnailView title="Zucchini And Corn Frittata" subtitle="by Rie McClenny"/>
          <SectionHeader title="Trending"/>
          <DishesScrollView />
          <SectionHeader title="All Recipes"/>
          <View style={styles.allRecipesContainer}>
            {console.log(props.recipes[0].recipe)}
          </View>
      </ScrollView>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipeState
  }
}

export default connect(mapStateToProps)(DiscoverScreen)

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
  contentContainer: {
    paddingHorizontal: 21,
  },
  allRecipesContainer: {

  },

  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  discoverScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
