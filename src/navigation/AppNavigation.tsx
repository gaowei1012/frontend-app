import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../pages/home/Home'

const Stack = createNativeStackNavigator()

const BaseNavigationContainer = () => {
  return <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }} initialRouteName="home">
       <Stack.Screen name='home' component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
}

export { BaseNavigationContainer }
