import React from 'react'
import PropTypes from 'prop-types'

import {FooterWrapper} from './styled'

const Footer = ({children, footerCss, ...props}) => {
  return (
    <FooterWrapper footerCss={footerCss} {...props}>
      {children}
    </FooterWrapper>
  )
}

Footer.propTypes = {
  border   : PropTypes.bool,
  children : PropTypes.node.isRequired,
  footerCss: PropTypes.string,
}

Footer.defaultProps = {
  footerCss: '',
  border   : true,
}

export default Footer
