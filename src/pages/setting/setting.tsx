import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'react-native-elements'
import { NavigatorUtils, TopNavigationBar } from '../../utils'
import { ISettingsProps } from '../../types/settings'

const Settings: React.FC<ISettingsProps> = (props) => {
  return (
    <SafeAreaView>
      <TopNavigationBar title='个人中心'/>
      <View>
        <Text>设置</Text>
        <Button onPress={() => NavigatorUtils.navigator(props.navigation, 'login')} type='clear' title="login" />
      </View>
    </SafeAreaView>
  )
}

export default Settings
