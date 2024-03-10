import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import HeadlinesScreen from './screens/HeadlinesScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import Headlines from 'react-native-vector-icons/Ionicons';
import Bookmark from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#EE6D33FF',
        tabBarInactiveTintColor: 'grey',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              size={28}
              color={focused ? '#EE6D33FF' : 'black'}
              name="home"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Headlines"
        component={HeadlinesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Headlines
              size={28}
              color={focused ? '#EE6D33FF' : 'black'}
              name="newspaper"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={HeadlinesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Headlines
              size={28}
              color={focused ? '#EE6D33FF' : 'black'}
              name="bookmark"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
