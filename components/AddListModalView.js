import React from 'react';
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import * as listAction from '../actions'

import CustomButton from '../components/CustomButton';
import SectionHeader from '../components/SectionHeader';

import Colors from '../constants/Colors';

import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

const AddListModalView = (props) => {
    return (
        <View style={styles.container}>
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
                <TextInput style = {styles.addInput} autoFocus = {true} placeholder = "Enter new list name" onSubmitEditing={(event)=>handleInputSubmit(props.addList, event.nativeEvent.text, props.hide)}/>
                <CustomButton isPrimary={true} title="Create" onPressAction={() => {}}/>
              </View>  
        </View>
        
    )
}

function handleInputSubmit(addList, text, hide){
    let list = {
        name: text,
    }
    addList(list)
    hide()
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
    container: {
        paddingHorizontal: 21,
        paddingBottom: 50,
    },
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
        fontFamily: "montserrat",
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