import * as React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { RootToast } from '../../utils'


const Detail = () => {
  return (
    <SafeAreaView>
      <Text>detail</Text>
      <Button title='show toast' onPress={() => {
        RootToast.showToast('show toast')
      }} />
    </SafeAreaView>
  )
}

export default Detail
