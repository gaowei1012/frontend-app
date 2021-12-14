import React from 'react'
import { View, Text } from 'react-native'
import { TopNavigationBar } from '../../utils'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IHomeProps } from '../../types/home'

const Home: React.FC<IHomeProps> = (props) => {

  return (
    <SafeAreaView>
      <TopNavigationBar title='首页' />
      <View>
        <Text>首页</Text>
      </View>
    </SafeAreaView>
  )
}

export default Home
