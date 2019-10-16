import React from 'react'
import PropTypes from 'prop-types'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'

import {LoadingButton, LoadingIcon, AnimatedIcon} from './styled'

const LoadableButton = ({children, ...props}) => {
  return (
    <LoadingButton {...props}>
      <LoadingIcon>
        <AnimatedIcon icon={faSpinner} />
      </LoadingIcon>
      {children}
    </LoadingButton>
  )
}

LoadableButton.displayName = 'Button.Loading'

LoadableButton.propTypes = {
  children : PropTypes.node.isRequired,
  color    : PropTypes.string,
  primary  : PropTypes.bool,
  secondary: PropTypes.bool,
}

LoadableButton.defaultProps = {
  primary: true,
}

export default LoadableButton
