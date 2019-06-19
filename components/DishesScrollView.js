import React from "react";
import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import DishScrollItem from './DishScrollItem';

export default function DishesScrollView(props){
    return (
        <ScrollView 
            style={styles.dishesScrollView}
            horizontal={true}
          >
            <DishScrollItem title="Zucchini And Corn Frittata"/>
            <DishScrollItem title="Pizza Sticks 3-Ways"/>
            <DishScrollItem title="Shredded Teriyaki Chicken Salad"/>
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