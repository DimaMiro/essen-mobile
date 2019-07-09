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
import { green } from 'ansi-colors';
const Icon = createIconSetFromFontello(fontelloConfig);

const CustomModal = (props) => {
  const [listArray, setListArray] = useState([]);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isKeyboardVisible, setKeyboardVisiblity] = useState(false);
  const [isAddInputVisible, setAddInputVisiblity] = useState(false);
  
  let cancelButton;
  if (!isAddInputVisible){
    cancelButton = <CustomButton isPrimary={false} title="Cancel" onPressAction={() => handleCloseModal(setAddInputVisiblity, setKeyboardVisiblity, props.closeModal)}/>
  }

  return (
      <Modal
        visible={props.displayModal}
        transparent={true}
        animationType={'slide'}
        onRequestClose={()=>{console.log('close')}}
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => handleCloseModal(setAddInputVisiblity, setKeyboardVisiblity, props.closeModal)}
        />
        <View style={isKeyboardVisible? [styles.modalBgContainer, {height: 250+keyboardHeight}] : styles.modalBgContainer}>
          <View style={styles.modalContentContainer}>
            <View style={styles.modalHeaderContainer}>
              <SectionHeader title={isAddInputVisible ? 'New shopping list' : 'Save to'}/>
              {isAddInputVisible ? 
                <TouchableOpacity onPress={() => handleCloseModal(setAddInputVisiblity, setKeyboardVisiblity, props.closeModal)}>
                  <Icon
                    style={styles.valueImage}
                    name='close'
                    size={34}
                    color='black'
                  />
                </TouchableOpacity>
                : 
                <TouchableOpacity onPress={()=>handleToggleAddInput(isAddInputVisible, setAddInputVisiblity)}>
                  <Icon
                    style={styles.valueImage}
                    name='add'
                    size={34}
                    color='black'
                  />
                </TouchableOpacity>
                }
            </View>
            
            <View style={[styles.separator, {marginTop: 0}]}></View>
            {isAddInputVisible ?
              <View style = {styles.addInputContainer}>
                <KeyboardListener
                  onWillShow={(e) => {
                    setKeyboardVisiblity(true); 
                    setKeyboardHeight(e.endCoordinates.height)}}
                  onWillHide={() => {
                    setKeyboardVisiblity(false)}}
                />
                <TextInput style = {styles.addInput} autoFocus = {true} placeholder = "Enter new list name" onSubmitEditing={(event)=>handleInputSubmit(props.addList, event.nativeEvent.text, listArray, setListArray, setAddInputVisiblity, setKeyboardVisiblity)}/>
                <CustomButton isPrimary={true} title="Create" onPressAction={() => {}}/>
              </View>  
            :
            listArray.length === 0 ?
            <View style = {styles.emptyStateBox}>
              <View style = {styles.emptyStateImage}></View>
              <Text style = {styles.paragraph}>Seems you haven’t created any lists yet.{"\n"}Let’s add your first one!</Text>
            </View>
            :
            <View style = {styles.listContainer}>
              <ScrollView style = {styles.listScrollView}>
                {listArray.map((item, id) => {
                  return <ListThumbnail key={id} isActive={false} title={item} dishes="7" items="12" marginBottom={16}/>
                })}
              </ScrollView>
            </View>
            }
            {cancelButton}
          </View>
        </View>
      </View>
    </Modal>
  )
}
function handleInputSubmit(addList, text, listArray, setListArray, setAddInputVisiblity, setKeyboardVisiblity){
  // setListArray([...listArray, text])
  let list = {
    name: text,
  }
  console.log(list)
  addList(list)
  setAddInputVisiblity(false)
  setKeyboardVisiblity(false)
}

function handleCloseModal(setAddInputVisiblity, setKeyboardVisiblity, closeModalFunction){
  setAddInputVisiblity(false)
  setKeyboardVisiblity(false)
  closeModalFunction()
}

function handleToggleAddInput(addInputVisibility, setAddInputVisiblity){
  console.log("ADD PRESSED")
  setAddInputVisiblity(!addInputVisibility);
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

export default connect(null, mapDispatchToProps)(CustomModal)

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        flexDirection: 'column',
      },
      modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      modalBgContainer: {
        flex: 0,
        backgroundColor: 'white',
      },
      modalContentContainer: {
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
      emptyStateBox: {
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
      },
      emptyStateImage: {
        width: 160,
        height: 160,
        marginBottom: 20,
        backgroundColor: Colors.tabIconDefault
      },
      paragraph: {
        textAlign: 'center',
        fontSize: 17,
        color: 'rgba(0,0,0,0.4)',
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
      listContainer: {
        maxHeight: '80%',
        width: '100%',
      },
      listScrollView: {
        overflow: 'visible',
      }
})