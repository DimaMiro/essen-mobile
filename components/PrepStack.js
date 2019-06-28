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
            {/* <PrepCard step="1" desc="Make the teriyaki sauce: In a liquid measuring cup or medium bowl, combine the brown sugar, soy sauce, lemon juice, sesame seeds, ginger, and garlic. Whisk to combine and dissolve the sugar."/>
            <PrepCard step="1" desc="Make the teriyaki sauce: In a liquid measuring cup or medium bowl, combine the brown sugar, soy sauce, lemon juice, sesame seeds, ginger, and garlic. Whisk to combine and dissolve the sugar."/>
            <PrepCard step="1" desc="Make the teriyaki sauce: In a liquid measuring cup or medium bowl, combine the brown sugar, soy sauce, lemon juice, sesame seeds, ginger, and garlic. Whisk to combine and dissolve the sugar."/> */}
        </View>
    );
};