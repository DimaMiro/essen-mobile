import React, { useState } from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

export default function CheckBox (props) {
    const [isChecked, setCheck] = useState(props.isChecked);
    return(
        <TouchableOpacity style={styles.checkboxContainer} onPress={()=>toggleCheckbox(props.handler, isChecked, setCheck)}>
            {isChecked?
            <View style={styles.checked}>
                <Icon
                  name='checkmark'
                  size={20}
                  color='white'
              />
            </View>
            :
            <View style={styles.unchecked}></View>
            }
        </TouchableOpacity>
    )
}
function toggleCheckbox(handler, isChecked, setCheck){
    setCheck(!isChecked)
    handler(!isChecked)
}

const styles = StyleSheet.create({
    checkboxContainer: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checked: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: Colors.primaryButtonColor,
    },
    unchecked: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'gray',
    }
})