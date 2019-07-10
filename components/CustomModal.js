import React, { useState } from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import CustomButton from '../components/CustomButton';
import SectionHeader from '../components/SectionHeader';
import ListThumbnail from '../components/ListThumbnail';
import KeyboardListener from 'react-native-keyboard-listener';

import AddListModalView from '../components/AddListModalView';
import ModalEmptyStateView from '../components/ModalEmptyStateView';

import Colors from '../constants/Colors';

import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

const CustomModal = (props) => {
  let listArray = []
  // let listArray = ['1', '2', '3']
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isAddInputVisible, setAddInputVisiblity] = useState(false);
  
  let cancelButton;
  if (!isAddInputVisible){
    cancelButton = <CustomButton isPrimary={false} title="Cancel" onPressAction={() => handleCloseModal(setAddInputVisiblity, props.closeModal)}/>
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
                <AddListModalView close={()=>handleToggleAddInput(isAddInputVisible, setAddInputVisiblity)}/>
              </View>
            :
            listArray.length === 0 ?
            <ModalEmptyStateView addList={()=>handleToggleAddInput(isAddInputVisible, setAddInputVisiblity)}/>
            :
            <View style = {styles.listContainer}>
              <View style={styles.modalHeaderContainer}>
                <SectionHeader title='Save to'/>
                {isAddInputVisible ? 
                  <TouchableOpacity onPress={() => handleCloseModal(setAddInputVisiblity, props.closeModal)}>
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
function handleCloseModal(setAddInputVisiblity, closeModalFunction){
  setAddInputVisiblity(false)
  closeModalFunction()
}

function handleToggleAddInput(addInputVisibility, setAddInputVisiblity){
  setAddInputVisiblity(!addInputVisibility);
}
export default(CustomModal)

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
      paragraph: {
        textAlign: 'center',
        fontSize: 17,
        color: 'rgba(0,0,0,0.4)',
      },
      listContainer: {
        maxHeight: '80%',
        width: '100%',
      },
      listScrollView: {
        overflow: 'visible',
      }
})