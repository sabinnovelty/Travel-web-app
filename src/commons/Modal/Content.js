import React from 'react'
import PropTypes from 'prop-types'

import {ContentWrapper} from './styled'

const Content = ({children, contentCss}) => {
  return <ContentWrapper contentCss={contentCss}>{children}</ContentWrapper>
}

Content.propTypes = {
  children  : PropTypes.node.isRequired,
  contentCss: PropTypes.string,
}

Content.defaultProps = {
  contentCss: '',
}

export default Content
