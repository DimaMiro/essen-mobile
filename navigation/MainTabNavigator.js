import React from 'react';
// import { View, Text, Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import DiscoverScreen from '../screens/DiscoverScreen';
import RecipeScreen from '../screens/RecipeScreen';
import ListsScreen from '../screens/ListsScreen';
import SingleListScreen from '../screens/SingleListScreen';

import CustomHeaderBar from "../components/CustomHeaderBar";
import Colors from '../constants/Colors';
// import { defaultProps } from 'recompose';

const DiscoverStack = createStackNavigator({
    Discover: {
      screen: DiscoverScreen,
      navigationOptions: {
        header: () => <CustomHeaderBar isRoot={true} title="Discover" subtitle="Your daily inspirations of recipe"/>
      }
    },
    Recipe: {
      screen: RecipeScreen,
      navigationOptions: {
        header: () => <CustomHeaderBar isRoot={false} title="Recipe" subtitle="Your daily inspirations of recipe"/>
      }
    },
    SingleList: {
      screen: SingleListScreen,
      navigationOptions: {
        header: () => <CustomHeaderBar isRoot={false} title="List" subtitle="Your daily inspirations of recipe"/>
      }
    },
  },
  {
    initialRouteName: 'Discover',
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
    Lists: {
      screen: ListsScreen,
      navigationOptions: {
        header: () => <CustomHeaderBar isRoot={true} title="Shopping Lists" subtitle="Your daily inspirations of recipe"/>
      }
    },
    SingleList: {
      screen: SingleListScreen,
      navigationOptions: {
        header: () => <CustomHeaderBar isRoot={false} title="List" subtitle="Your daily inspirations of recipe"/>
      }
    },
  },
  {
    initialRouteName: 'Lists',
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
