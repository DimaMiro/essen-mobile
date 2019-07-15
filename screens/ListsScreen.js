import React, {useState} from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import SectionHeader from '../components/SectionHeader';
import ListThumbnail from '../components/ListThumbnail';
import CustomModal from '../components/CustomModal';
import CustomButton from '../components/CustomButton';

const ListsScreen = (props) => {
  // let activeLists = []
  let listArray = []

  const [isModalVisible, setModalVisiblity] = useState(false);

  for (i=0; i<(props.lists.length); i++){
    listArray.push(props.lists[i])
  }

  const displayedLists = listArray.map(list => {
    return <ListThumbnail key={list.id} isActive={false} list={list} marginBottom={16}/>
  })

  return (
    <View style={styles.bgContainer}>
      <CustomModal displayModal={isModalVisible} closeModal={()=>handleCloseModal(setModalVisiblity)}/>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <CustomButton isPrimary={true} title="Add new List" onPressAction={()=>handleOpenModal(setModalVisiblity)}/>
        <SectionHeader title="Active Lists"/>
        {/* <ListThumbnail isActive={true} title="Weekend's shopping" dishes="7" items="12"/> */}
        <SectionHeader title={`Inactive lists (${listArray.length})`}/>
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

const mapStateToProps = (state) => {
  return {
      lists: state.listState
  }
};

export default connect (mapStateToProps) (ListsScreen)

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
    paddingHorizontal: 21,
  },
});
