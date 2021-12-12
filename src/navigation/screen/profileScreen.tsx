import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Settings from '../../pages/setting/setting'
import { Login } from '../../pages/users/login'
import { Regsiter } from '../../pages/users/register'

const Stack = createNativeStackNavigator()

const ProfileScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='profile' component={Settings} />
    </Stack.Navigator>
  )
}

export { ProfileScreen }