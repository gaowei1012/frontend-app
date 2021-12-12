import { StyleSheet } from 'react-native'
import { height, width } from '../utils'
import baseStyle from './baseStyle'

const commomStyles = StyleSheet.create({ 
  flex: {
    flex: 1,
  },
  flexRowOrCentent: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center' 
  },
  flexColumnCentent: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center' 
  },
  defaultSytle: {
    width: width,
    height: height
  },
  defaultBackgroundColor: {
    backgroundColor: baseStyle.defaultColor
  },
  defaultFontStyle: {
    fontSize: baseStyle.dfontSize,
    color: baseStyle.dfontColor,
  }
})

export { commomStyles }