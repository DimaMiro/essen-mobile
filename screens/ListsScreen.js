import React, {useState} from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import * as listAction from '../actions/actions'

import SectionHeader from '../components/SectionHeader';
import ListThumbnail from '../components/ListThumbnail';
import CustomModal from '../components/CustomModal';
import CustomButton from '../components/CustomButton';

const ListsScreen = (props) => {
  let listArray = []

  const [isModalVisible, setModalVisiblity] = useState(false);

  for (i=0; i<(props.lists.length); i++){
    listArray.push(props.lists[i])
  }

  const displayedLists = listArray.map(list => {
    return <ListThumbnail key={list.id} isSwipeDisable={false} isActive={false} list={list} delete={() => handleDeleteList(props.deleteList, list.id)} marginBottom={16}/>
  })

  return (
    <View style={styles.bgContainer}>
      <CustomModal displayModal={isModalVisible} isEnterFromAddList={true} closeModal={()=>handleCloseModal(setModalVisiblity)}/>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <CustomButton isPrimary={true} title="Add new List" onPressAction={()=>handleOpenModal(setModalVisiblity)}/>
        <SectionHeader title={`All lists (${listArray.length})`}/>
        {displayedLists}
      </ScrollView>
    </View>
    
  );
}

function handleOpenModal(setModalVisiblity) {
  setModalVisiblity(true);
}

function handleCloseModal(setModalVisiblity) {
  setModalVisiblity(false);
}

function handleDeleteList(deleteList,id) {
  deleteList(id)
}

const mapDispatchToProps = (dispatch) => {
  return {
      deleteList: id => dispatch(listAction.deleteList(id))
  }
};

const mapStateToProps = (state) => {
  return {
      lists: state.listState
  }
};

export default connect (mapStateToProps,mapDispatchToProps) (ListsScreen)

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    paddingTop: 21,
    paddingHorizontal: 21,
  },
});
