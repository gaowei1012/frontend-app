import React from 'react'
import { View, Text } from 'react-native'
import { TopNavigationBar } from '../../utils'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-elements'
import { IHomeProps } from '../../types/home'

const Home: React.FC<IHomeProps> = (props) => {

  return (
    <SafeAreaView>
      <TopNavigationBar title='首页' />
      <View>
        <Text>首页</Text>
      </View>
      {/* 打开 Drawer */}
      <Button title='openDrawer' onPress={() => {
        console.log('props', props)
        props.navigation.openDrawer()
      }}/>
    </SafeAreaView>
  )
}

export default Home
