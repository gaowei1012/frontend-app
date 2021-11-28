import 'react-native-gesture-handler'
import { View, Text, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icons from 'react-native-vector-icons/Ionicons'
import * as React from 'react'


function HomeScren() {
  return (
    <SafeAreaView>
      <View>
        <Text>home</Text>
      </View>
    </SafeAreaView>
  )
}


function SettingScren() {
  return (
    <SafeAreaView>
      <View>
        <Text>setting</Text>
      </View>
    </SafeAreaView>
  )
}

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='home' component={HomeScren} />
      <Tab.Screen name='setting' component={SettingScren} />
    </Tab.Navigator>
  )
}

/**
 * <Stack.Navigator>
        <Stack.Screen name='home' options={{ title: 'Overview' }} component={HomeScren} />
      </Stack.Navigator>
 */

export default function DynamicTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarHideOnKeyboard: false }}
      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color, size }) => {
      //     if (route.name == 'home') {
      //       <Icons name={
      //         focused
      //           ? 'ios-information-circle'
      //           : 'ios-information-circle-outline'
      //       }
      //         size={size}
      //         color={color}
      //       />
      //     } else if (route.name == 'setting') {
      //       return (
      //         <Icons
      //           name={focused ? 'ios-list-box' : 'ios-list'}
      //           size={size}
      //           color={color}
      //         />
      //       )
      //     }
      //   },
      //   tabBarInactiveTintColor: 'gray',
      //   tabBarActiveTintColor: 'tomato'
      // })}
      >
        <Tab.Screen name='home' component={HomeScren} />
        <Tab.Screen name='setting' component={SettingScren} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}