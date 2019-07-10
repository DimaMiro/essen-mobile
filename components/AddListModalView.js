import React, { useState } from 'react';
import {
  TextInput,
  Keyboard,
  Image,
  Modal,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import ACTION_TYPES from '../constants/ActionTypes';
import * as listAction from '../actions'

import CustomButton from '../components/CustomButton';
import SectionHeader from '../components/SectionHeader';
import ListThumbnail from '../components/ListThumbnail';
import KeyboardListener from 'react-native-keyboard-listener';

import Colors from '../constants/Colors';

import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

const AddListModalView = (props) => {
    const [isAddInputVisible, setAddInputVisiblity] = useState(false);
    const [isKeyboardVisible, setKeyboardVisiblity] = useState(false);
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    return (
        <View>
            <View style={styles.modalHeaderContainer}>
                <SectionHeader title='New shopping list'/>
                <TouchableOpacity onPress={() => props.close()}>
                    <Icon
                    style={styles.valueImage}
                    name='close'
                    size={34}
                    color='black'
                    />
                </TouchableOpacity>
            </View>
            
            <View style={[styles.separator, {marginTop: 0}]}></View>

            <View style = {styles.addInputContainer}>
                <TextInput style = {styles.addInput} autoFocus = {true} placeholder = "Enter new list name" onSubmitEditing={(event)=>handleInputSubmit(props.addList, event.nativeEvent.text, props.close, setKeyboardVisiblity)}/>
                <CustomButton isPrimary={true} title="Create" onPressAction={() => {}}/>
              </View>  
        </View>
        
    )
}

function handleInputSubmit(addList, text, closeView, setKeyboardVisiblity){
    // setListArray([...listArray, text])
    let list = {
        name: text,
    }
    console.log(list)
    addList(list)
    setKeyboardVisiblity(false)
    closeView()
}

const mapStateToProps = (state) => {
    return {
        lists: state.listState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addList: list => dispatch(listAction.addList(list))
    }
};
  
export default connect(null, mapDispatchToProps)(AddListModalView)

const styles = StyleSheet.create({
    modalHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 1000,
    },
    separator: {
        marginVertical: 20,
        backgroundColor: Colors.tabIconDefault,
        height: 1,
    },
    addInputContainer: {
        width: '100%',
        paddingVertical: 20,
        justifyContent: 'center',
    },
    addInput: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: "typo-grotesk",
        width: '100%',
        height: 64,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        borderRadius: 20,
        backgroundColor: 'white',
        marginBottom: 20,
    },
})