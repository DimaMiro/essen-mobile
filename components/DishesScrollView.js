import React from "react";
import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import DishScrollItem from './DishScrollItem';

export default function DishesScrollView(props){
    dishesArray = []
    for (i=0; i<(props.dishes.length); i++){
      dishesArray.push(<DishScrollItem key={i} dish={props.dishes[i]}/>)
    }
    return (
        <ScrollView 
            showsHorizontalScrollIndicator={false}
            style={styles.dishesScrollView}
            horizontal={true}
          >
            {dishesArray}
          </ScrollView>
    );
};

const styles = StyleSheet.create({
    dishesScrollView: {
        overflow: 'visible',
        marginRight: -21,
        flex: 1,
      },
    
})