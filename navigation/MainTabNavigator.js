import React from 'react';
import { View, Text, Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import DiscoverScreen from '../screens/DiscoverScreen';
import ListsScreen from '../screens/ListsScreen';

import CustomHeaderBar from "../components/CustomHeaderBar";

const DiscoverStack = createStackNavigator({
    Discover: DiscoverScreen,
  },
  {
    initialRouteName: 'Discover',
    defaultNavigationOptions: {
      header: <CustomHeaderBar title="Discover" subtitle="Your daily inspirations of recipe" />
    },
  }
);

DiscoverStack.navigationOptions = {
  tabBarLabel: 'Discover',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const ListsStack = createStackNavigator(
  {
    Lists: ListsScreen,
  },
  {
    initialRouteName: 'Lists',
    defaultNavigationOptions: {
      header: <CustomHeaderBar title="Shopping Lists" subtitle="Your daily inspirations of recipe" />
    },
  }
  );

ListsStack.navigationOptions = {
  tabBarLabel: 'Lists',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};


export default createBottomTabNavigator({
  DiscoverStack,
  ListsStack,
});
