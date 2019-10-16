import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Div = styled.div`
  display: flex;
  margin: 0 10px 15px;
  > :not(:first-child) {
    margin-left: 15px;
  }
  ${({css}) => css}
`

const Row = ({children, css, ...props}) => {
  return (
    <Div {...props} css={css}>
      {children}
    </Div>
  )
}

Row.propTypes = {
  children: PropTypes.node,
  css     : PropTypes.string,
}

export default Row
