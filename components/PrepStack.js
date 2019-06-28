import React from "react";
import { View } from "react-native";
import PrepCard from './PrepCard';

export default function PrepStack(props){
    let preparationSteps = []
    Object.entries(props.preparation).map(([key, value], index) => 
        preparationSteps.push(<PrepCard key={index} step={key} desc={value}/>)
    )
    return (
        <View>
            {preparationSteps}
        </View>
    );
};