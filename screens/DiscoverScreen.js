import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { connect } from 'react-redux';

import SectionHeader from '../components/SectionHeader';
import ListThumbnail from '../components/ListThumbnail';
import RecipeThumbnailView from '../components/RecipeThumbnailView';
import DishesScrollView from '../components/DishesScrollView';

const DiscoverScreen = (props) => {
  let allRecipes = [];
  const randomRecipe = props.recipes[Math.floor(Math.random()*props.recipes.length)].recipe
  let recipeOfTheDay = <RecipeThumbnailView recipe={randomRecipe}/>
  let trending = [];
  for (i=0; i<(props.recipes.length); i++){
    if (props.recipes[i].recipe.info.rate >= 8){
      trending.push(props.recipes[i].recipe)
    }
    allRecipes.push(<RecipeThumbnailView key={i} recipe={props.recipes[i].recipe} marginBottom={30}/>)
  }
  return (
    <View style={styles.bgContainer}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
          <SectionHeader title="Active Lists"/>
          <ListThumbnail isActive={true} title="Weekend's shopping" dishes="7" items="12"/>
          <SectionHeader title="Recipe of the Day"/>
          {recipeOfTheDay}
          <SectionHeader title="Trending"/>
          <DishesScrollView dishes={trending}/>
          <SectionHeader title="All Recipes"/>
          <View style={styles.allRecipesContainer}>
            {allRecipes}
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
