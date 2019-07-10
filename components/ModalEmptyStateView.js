import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import CustomButton from '../components/CustomButton';
import SectionHeader from '../components/SectionHeader';

import Colors from '../constants/Colors';

import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

const ModalEmptyStateView = (props) => {
    return(
        <View>
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

            <View style = {styles.emptyStateBox}>
            <View style = {styles.emptyStateImage}></View>
            <Text style = {styles.paragraph}>Seems you haven’t created any lists yet.{"\n"}Let’s add your first one!</Text>
            </View>
        </View>
    )
}
export default ModalEmptyStateView

const styles = StyleSheet.create({
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
})

