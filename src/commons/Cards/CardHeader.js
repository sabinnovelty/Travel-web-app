import React from 'react'
import PropTypes from 'prop-types'

import {CardHeader} from './styled'

const Header = ({children, css}) => {
  return <CardHeader css={css}>
    {children}
  </CardHeader>
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
  css     : PropTypes.string,
}

Header.defaultProps = {
  css: '',
}

Header.displayName = 'Card.Header'

export default Header
