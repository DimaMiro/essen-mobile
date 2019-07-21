import React from "react";
import { View } from "react-native";
import IngredientsItem from '../components/IngredientsItem';

export default function IngredientsStack(props){
    let ingredients = []
    Object.entries(props.ingredients).map(([key, value], index) => 
        ingredients.push(<IngredientsItem key={index} title={key} amount={value.unit ? `${value.amount} ${value.unit}`: value.amount} isChecked={value.isChecked} isCheckboxVisible={props.isCheckable} handler={(value) => toggleHandler(props.handler, props.ingredients, key, value)}/>)
    )
    return (
        <View>
            {ingredients}
        </View>
    );
};

function toggleHandler(handler, ingredients, searchedKey, newValue){
    Object.keys(ingredients).map(function(key) {
        if (key === searchedKey){
            ingredients[key] = {...ingredients[key], isChecked: newValue};
        }
    });
    handler(ingredients)
    
}