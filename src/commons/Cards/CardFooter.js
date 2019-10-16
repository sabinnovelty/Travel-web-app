import React from 'react'
import PropTypes from 'prop-types'

import {CardFooter} from './styled'

const Footer = ({children, css}) => {
  return <CardFooter css={css}>{children}</CardFooter>
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
  css     : PropTypes.string,
}

Footer.defaultProps = {
  css: '',
}

Footer.displayName = 'Card.Footer'

export default Footer
