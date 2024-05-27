// routes.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { WelcomeScreen } from './WelcomeScreen';
import { Home } from './home';
import { HomeV } from './homeV';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopWidth: 1,
          borderTopColor: '#000',
          paddingBottom: 3,
          width: 322,
          flexDirection: "row",
          alignSelf: "center",
          borderRadius: 100,
          paddingHorizontal: 5,
          marginBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('./assets/youtube1.png') : require('./assets/youtube2.png')}
              style={{ width: 32, height: 32 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HomeV"
        component={HomeV}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('./assets/vimeo1.png') : require('./assets/vimeo2.png')}
              style={{ width: 30, height: 30 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
