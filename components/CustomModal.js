import React, { useState } from 'react';
import {
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

// import { connect } from 'react-redux';
// import store from './store';
// import { Provider } from 'react-redux';
// import ACTION_TYPES from './constants/ActionTypes';

import CustomButton from '../components/CustomButton';
import SectionHeader from '../components/SectionHeader';

import Colors from '../constants/Colors';

import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

const CustomModal = (props) => {
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
            onPress={() => props.closeModal()}
          />
          <View style={styles.modalBgContainer}>
            <View style={styles.modalContentContainer}>
              <View style={styles.modalHeaderContainer}>
                <SectionHeader title="Save to"/>
                <TouchableOpacity onPress={() => {console.log('add')}}>
                  <Icon
                    style={styles.valueImage}
                    name='add'
                    size={34}
                    color='black'
                  />
                </TouchableOpacity>
              </View>
              
              <View style={[styles.separator, {marginTop: 0}]}></View>
              <View style = {styles.emptyStateBox}>
                <View style = {styles.emptyStateImage}></View>
                <Text style = {styles.paragraph}>Seems you haven’t created any lists yet.{"\n"}Let’s add your first one!</Text>
              </View>
              <CustomButton isPrimary={false} title="Cancel" onPressAction={() => props.closeModal()}/>
            </View>
          </View>
        </View>
      </Modal>
    )
}

export default CustomModal

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
        height: 457,
        backgroundColor: 'white',
      },
      modalContentContainer: {
        flex: 1,
        paddingHorizontal: 21,
      },
      modalHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
  
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
      }
})