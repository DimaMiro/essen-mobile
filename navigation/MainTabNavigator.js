import React from 'react';
import { View, Text, Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import DiscoverScreen from '../screens/DiscoverScreen';
import RecipeScreen from '../screens/RecipeScreen';
import ListsScreen from '../screens/ListsScreen';

import CustomHeaderBar from "../components/CustomHeaderBar";
import Colors from '../constants/Colors';
import { defaultProps } from 'recompose';

const DiscoverStack = createStackNavigator({
    Discover: {
      screen: DiscoverScreen,
      navigationOptions: {
        header: props => <CustomHeaderBar isRoot={true} title="Discover" subtitle="Your daily inspirations of recipe"/>
        // header: props => <CustomHeaderBar {...props}/>
      }
    },
    Recipe: {
      screen: RecipeScreen,
      navigationOptions: {
        header: props => <CustomHeaderBar isRoot={false} title="Recipe" subtitle="Your daily inspirations of recipe"/>
      }
    },
  },
  {
    initialRouteName: 'Discover',
    // defaultNavigationOptions: {
    //   header: <CustomHeaderBar title="Discover" subtitle="Your daily inspirations of recipe" />
    // },
  }
);

DiscoverStack.navigationOptions = {
  tabBarLabel: 'Discover',
  tabBarOptions: {
    activeTintColor: Colors.tintColor,
    inactiveTintColor: Colors.tabIconDefault
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='discover'
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
  tabBarOptions: {
    activeTintColor: Colors.tintColor,
    inactiveTintColor: Colors.tabIconDefault
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='list'
    />
  ),
};


export default createBottomTabNavigator({
  DiscoverStack,
  ListsStack,
});
