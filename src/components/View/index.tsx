import React from 'react'
import { View as RNView } from 'react-native'

import {
  space,
  color,
  layout,
  grid,
  flexbox,
  border,
  position,
  shadow
} from 'styled-system'
import styled from '@emotion/native'

const View = (props: any) => {
  const BaseView = styled(RNView)`
    ${space}
    ${color}
    ${layout}
    ${grid}
    ${flexbox}
    ${border}
    ${position}
    ${shadow}
  `
  return <BaseView {...props} />
}

export default View
