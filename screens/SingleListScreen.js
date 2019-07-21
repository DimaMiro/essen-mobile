import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import * as listAction from '../actions/actions'

import SectionHeader from '../components/SectionHeader';
import DishesScrollView from '../components/DishesScrollView';
import IngredientsStack from '../components/IngredientsStack';

function SingleListScreen(props) {
  let list = props.navigation.state.params.list
    return (
        <View style={styles.bgContainer}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                <SectionHeader title={`Dishes (${list.dishes.length})`}/>
                <DishesScrollView dishes={list.dishes}/>
                <SectionHeader title={`Ingredients (${Object.keys(list.ingredients).length})`}/>
                <IngredientsStack ingredients={list.ingredients} isCheckable={true} handler={(newIngredients) => handleIngredientsUpdate(list, newIngredients, props.updateList)}/>
            </ScrollView>
        </View>
        
        
    );
}

function handleIngredientsUpdate(list, newIngredients, updateList){
  newList = {...list, ingredients: newIngredients}
  updateList(newList)
}

const mapDispatchToProps = (dispatch) => {
  return {
      updateList: list => dispatch(listAction.updateList(list))
  }
};

export default connect (null, mapDispatchToProps) (SingleListScreen)

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
});
