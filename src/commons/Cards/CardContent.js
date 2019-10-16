import React from 'react'
import PropTypes from 'prop-types'

import {CardContent} from './styled'

const Content = ({children, css}) => {
  return <CardContent css={css}>{children}</CardContent>
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
  css     : PropTypes.string,
}

Content.defaultProps = {
  css: '',
}

Content.displayName = 'Card.Content'

export default Content
