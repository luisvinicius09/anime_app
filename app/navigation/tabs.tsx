import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, icons } from '../constants';
import { Main } from '../screens';
import Profile from '../screens/Profile';
import Undefined from '../screens/Undefined';
import Reports from '../screens/Reports';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: '8%',
        },
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.blue : COLORS.black;

          switch (route.name) {
            case 'Main':
              return (
                <Image
                  source={icons.home}
                  resizeMode="contain"
                  style={{ tintColor: tintColor, width: 25, height: 25 }}
                />
              );
            case 'Reports':
              return (
                <Image
                  source={icons.reports}
                  resizeMode="contain"
                  style={{ tintColor: tintColor, width: 25, height: 25 }}
                />
              );
            case 'Undefined':
              return (
                <Image
                  source={icons.creditCard}
                  resizeMode="contain"
                  style={{ tintColor: tintColor, width: 25, height: 25 }}
                />
              );
            case 'Profile':
              return (
                <Image
                  source={icons.user}
                  resizeMode="contain"
                  style={{ tintColor: tintColor, width: 25, height: 25 }}
                />
              );
          }
        },
      })}
    >
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Reports" component={Reports} />
      <Tab.Screen name="Undefined" component={Undefined} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Tabs;
