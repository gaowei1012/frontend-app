import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Settings } from '../../pages/setting'
import { Login } from '../../pages/users/login'
import { Regsiter } from '../../pages/users/register'

const Stack = createNativeStackNavigator()

const ProfileScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='setting' component={Settings} />
      <Stack.Screen name='login' component={Login} />
      <Stack.Screen name='register' component={Regsiter} />
    </Stack.Navigator>
  )
}

export { ProfileScreen }