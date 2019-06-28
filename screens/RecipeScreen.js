import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Colors from '../constants/Colors';



const RecipeScreen = (props) => {
  return (
    <View style={styles.bgContainer}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
          
      </ScrollView>
    </View>
  );
}

export default RecipeScreen

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