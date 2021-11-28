import 'react-native-gesture-handler'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'

import { Home } from '../pages/home'
import { Settings } from '../pages/setting'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

// 子路由跳转方法
// https://reactnavigation.org/docs/tab-based-navigation

export default function DynamicTabNavigator() {
  return (
    <NavigationContainer>
      {/* Stack */}
      {/* <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='settings' component={Settings} />
      </Stack.Navigator> */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            console.log('color: ', color);
            if (route.name === 'Home') {
              //return <IconFont name="iconshouye" size={size} color={color} />;
              return <Text>home</Text>
            } else if (route.name === 'Settings') {
              //return <IconFont name="iconshezhi1" size={size} color={color} />;
              return <Text>setting</Text>
            }
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}>
        <Tab.Screen name="Home" component={Home} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}