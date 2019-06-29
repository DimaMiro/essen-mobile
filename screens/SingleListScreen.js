import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import SectionHeader from '../components/SectionHeader';

export default function SingleListScreen() {
  return (
    <View style={styles.bgContainer}>
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}>
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
