import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import SectionHeader from '../components/SectionHeader';
import ListThumbnail from '../components/ListThumbnail';

export default function ListsScreen() {
  let activeLists = []
  let inactiveLists = []
  return (
    <View style={styles.bgContainer}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <SectionHeader title="Active Lists"/>
        <ListThumbnail isActive={true} title="Weekend's shopping" dishes="7" items="12"/>
        <SectionHeader title="Inactive lists (n)"/>
        <ListThumbnail isActive={false} title="Weekend's shopping" dishes="7" items="12" marginBottom={16}/>
        <ListThumbnail isActive={false} title="Weekend's shopping" dishes="7" items="12" marginBottom={16}/>
        <ListThumbnail isActive={false} title="Weekend's shopping" dishes="7" items="12" marginBottom={16}/>
      </ScrollView>
    </View>
    
  );
}
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
