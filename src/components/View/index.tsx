import React from 'react'
import { View as RNView, ViewProps } from 'react-native'

const View: React.FC<ViewProps> = props => {
  return <RNView {...props} />
}

export default View
