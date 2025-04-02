import { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import { CSSProperties } from 'react'

interface FlexProps {
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  direction?: CSSProperties['flexDirection']
  css?: SerializedStyles
}

const Flex = styled.div<FlexProps>(({ align, justify, direction, css }) => ({
  display: 'flex',
  alignItems: align,
  justifyContent: justify,
  flexDirection: direction,
  css,
}))

export default Flex
