import React from "react";
import { View } from "react-native";
import IngredientsItem from '../components/IngredientsItem';

export default function IngredientsStack(props){
    return (
        <View>
            <IngredientsItem title="Title" amount="85 g"/>
            <IngredientsItem title="Title" amount="85 g"/>
            <IngredientsItem title="Title" amount="85 g"/>
        </View>
    );
};