import React from 'react'
import PropTypes from 'prop-types'

import {HeaderWrapper} from './styled'

const Header = ({children, headerCss, ...props}) => {
  return (
    <HeaderWrapper headerCss={headerCss} {...props}>
      {children}
    </HeaderWrapper>
  )
}

Header.propTypes = {
  border   : PropTypes.bool,
  children : PropTypes.node.isRequired,
  headerCss: PropTypes.string,
}

Header.defaultProps = {
  headerCss: '',
  border   : true,
}
export default Header
