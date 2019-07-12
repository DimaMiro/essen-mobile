import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { connect } from 'react-redux';

import KeyboardListener from 'react-native-keyboard-listener';

import AddListModalView from '../components/AddListModalView';
import ModalEmptyStateView from '../components/ModalEmptyStateView';
import ModalListView from '../components/ModalListView';

import Colors from '../constants/Colors';

import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

const CustomModal = (props) => {
  let listArray = []
  // let listArray = ['1', '2', '3']
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isAddInputVisible, setAddInputVisiblity] = useState(false);

  for (i=0; i<(props.lists.length); i++){
    listArray.push(props.lists[i])
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
          onPress={() => handleCloseModal(setAddInputVisiblity, props.closeModal)}
        />
        <View style={isAddInputVisible? [styles.modalBgContainer, {height: 250+keyboardHeight}] : styles.modalBgContainer}>
          <View style={styles.modalContentContainer}>
            {isAddInputVisible ?
              <View>
                <KeyboardListener
                  onWillShow={(e) => {
                    setKeyboardHeight(e.endCoordinates.height)}}
                />
                <AddListModalView close={() => handleToggleAddInput(isAddInputVisible, setAddInputVisiblity)}/>
              </View>
            :
            listArray.length === 0 ?
            <ModalEmptyStateView addList={()=>handleToggleAddInput(isAddInputVisible, setAddInputVisiblity)} close={() => handleCloseModal(setAddInputVisiblity, props.closeModal)}/>
            :
            <ModalListView lists={listArray} addList={()=>handleToggleAddInput(isAddInputVisible, setAddInputVisiblity)} close={() => handleCloseModal(setAddInputVisiblity, props.closeModal)}/>
            }
          </View>
        </View>
      </View>
    </Modal>
  )
}

function handleCloseModal(setAddInputVisiblity, closeModalFunction){
  setAddInputVisiblity(false)
  closeModalFunction()
}

function handleToggleAddInput(addInputVisibility, setAddInputVisiblity){
  setAddInputVisiblity(!addInputVisibility);
}

const mapStateToProps = (state) => {
  return {
      lists: state.listState
  }
};

export default connect (mapStateToProps) (CustomModal)

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
        maxHeight: '80%',
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
      paragraph: {
        textAlign: 'center',
        fontSize: 17,
        color: 'rgba(0,0,0,0.4)',
      },
})