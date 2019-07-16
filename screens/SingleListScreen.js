import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import SectionHeader from '../components/SectionHeader';
import DishesScrollView from '../components/DishesScrollView';
import IngredientsStack from '../components/IngredientsStack';

export default function SingleListScreen(props) {
  let list = props.navigation.state.params.list
    return (
        <View style={styles.bgContainer}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                <SectionHeader title={`Dishes (${list.dishes.length})`}/>
                <DishesScrollView dishes={list.dishes}/>
                <SectionHeader title={`Ingredients (${Object.keys(list.ingredients).length})`}/>
                <IngredientsStack ingredients={list.ingredients}/>
            </ScrollView>
        </View>
        
        
    );
}
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
