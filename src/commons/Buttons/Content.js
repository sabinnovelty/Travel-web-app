import React from 'react'
import PropTypes from 'prop-types'

import {ContentButton} from './styled'

const Content = ({children, type, ...props}) => {
  return (
    <ContentButton {...props} type={type}>
      {children}
    </ContentButton>
  )
}

Content.propTypes = {
  children : PropTypes.node.isRequired,
  color    : PropTypes.string,
  primary  : PropTypes.bool,
  secondary: PropTypes.bool,
  type     : PropTypes.oneOf(['submit', 'button']),
}

Content.defaultProps = {
  primary: true,
  type   : 'button',
}

Content.displayName = 'Button.Content'

export default Content
