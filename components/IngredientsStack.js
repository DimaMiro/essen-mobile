import React from "react";
import { View } from "react-native";
import IngredientsItem from '../components/IngredientsItem';

export default function IngredientsStack(props){
    let ingredients = []
    Object.entries(props.ingredients).map(([key, value], index) => 
        ingredients.push(<IngredientsItem key={index} title={key} amount={value.unit ? `${value.amount} ${value.unit}`: value.amount}/>)
    )
    return (
        <View>
            {ingredients}
        </View>
    );
};