import React, { useState } from 'react'
import { View , Alert } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { styles } from  '../styles/drawer'
import { HomeScreen } from './screen'
import { DrawerProps } from '../types/drawerProps'
import { Button } from 'react-native-elements'

const Drawer = createDrawerNavigator()

const DrawerScreen: React.FC<any> = (props) => {
  const [drawer, setDrawer] = useState<any>(false)
  return <Drawer.Navigator 
    initialRouteName='home'
    defaultStatus={drawer?'open':'closed'}
    screenOptions={{
      headerShown: false
    }}
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
     <Drawer.Screen name="home" component={HomeScreen} />
  </Drawer.Navigator>
}

export default DrawerScreen

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}