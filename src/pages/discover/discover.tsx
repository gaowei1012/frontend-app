import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { IDiscoverProps } from '../../types/discover'
import { TopNavigationBar } from '../../utils'

const Discover: React.FC<IDiscoverProps> = () => {
  return (
    <SafeAreaView>
      <TopNavigationBar title='发现'/>
      <View>
        <Text>发现</Text>
      </View>
    </SafeAreaView>
  )
}

export default Discover
