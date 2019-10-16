import React from 'react'
import PropTypes from 'prop-types'

import Content from './Content'
import Icon from './Icon'
import Loading from './Loading'
import {Wrapper} from './styled'

const Button = ({children, css}) => {
  return <Wrapper css={css}>{children}</Wrapper>
}

Button.Content = Content
Button.Icon = Icon
Button.Loading = Loading

Button.propTypes = {
  children: PropTypes.node.isRequired,
  css     : PropTypes.string,
}

Button.displayName = 'Button'

export default Button
