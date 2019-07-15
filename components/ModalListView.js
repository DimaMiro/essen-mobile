import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import * as listAction from '../actions'

import CustomButton from '../components/CustomButton';
import SectionHeader from '../components/SectionHeader';
import ListThumbnail from '../components/ListThumbnail';

import Colors from '../constants/Colors';

import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

const ModalListView = (props) => {
    return(
        <View style = {styles.listContainer}>
          <View style={styles.modalHeaderContainer}>
            <SectionHeader title='Save to'/>
                <TouchableOpacity onPress={() => props.addList()}>
                <Icon
                    style={styles.valueImage}
                    name='add'
                    size={34}
                    color='black'
                />
                </TouchableOpacity>
            </View>
            
          <View style={[styles.separator, {marginTop: 0}]}></View>

          <ScrollView style = {styles.listScrollView}>
            {props.lists.map((list) => {
              // console.log(list)
              return <ListThumbnail key={list.id} onPressAction={()=>handleSelectList(props.recipe, list, props.updateList, props.close)} isActive={false} list={list} marginBottom={16}/>
            })}
          </ScrollView>
          <View style = {styles.buttonContainer}>
            <CustomButton isPrimary={false} title="Cancel" onPressAction={() => props.close()}/>
          </View>
        </View>
    )
}

function handleSelectList(recipe, list, updateList, close){
  console.log(list)
  list.dishes.push(recipe)
  list.ingredients = Object.assign(recipe.ingredients, list.ingredients)
  // console.log(list)
  updateList(list)
  close()
}

const mapDispatchToProps = (dispatch) => {
  return {
      updateList: list => dispatch(listAction.updateList(list))
  }
};

export default connect (null, mapDispatchToProps) (ModalListView)

const styles = StyleSheet.create({
    modalHeaderContainer: {
        paddingHorizontal: 21,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 1000,
    },
    separator: {
        marginHorizontal: 21,
        marginTop: 20,
        backgroundColor: Colors.tabIconDefault,
        height: 1,
    },
    listContainer: {
        paddingBottom: 50,
        width: '100%',
    },
    listScrollView: {
        maxHeight: '80%',
        paddingVertical: 20,
        paddingHorizontal: 21,
    },
    buttonContainer: {
      marginTop: 20,
      paddingHorizontal: 21,
    }
})