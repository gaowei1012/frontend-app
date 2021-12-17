import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, DiscoverScreen, ProfileScreen } from './screen'
import DrawerScreen from './DrawerScreen'
import TabBarItem from './TabBarItem'


const Tab = createBottomTabNavigator()


const RootNavigatorBottom = () => {
  return <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'home') {
          return <TabBarItem focused={focused} normalIcon={require('../assets/tab/home.png')} selectIcon={require('../assets/tab/ac_home.png')} />
        } else if (route.name === 'discover') {
          return <TabBarItem focused={focused} normalIcon={require('../assets/tab/discovery.png')} selectIcon={require('../assets/tab/ac_discovery.png')} />
        } else if (route.name === 'profile') {
          return <TabBarItem focused={focused} normalIcon={require('../assets/tab/dynamic.png')} selectIcon={require('../assets/tab/ac_dynamic.png')} />
        }
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
    })}>
    <Tab.Screen name="home" component={DrawerScreen} options={{ tabBarBadge: 3, tabBarLabel: '首页' }} />
    <Tab.Screen name='discover' component={DiscoverScreen} options={{ tabBarLabel: '发现' }} />
    <Tab.Screen name="profile" component={ProfileScreen} options={{ tabBarLabel: '设置' }} />
  </Tab.Navigator>
}

export { RootNavigatorBottom }