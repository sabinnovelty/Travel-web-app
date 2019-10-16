import React from 'react'
import PropTypes from 'prop-types'
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons'

import Icon from '../../commons/Icons'
import Header from './CardHeader'
import Content from './CardContent'
import Footer from './CardFooter'
import {Wrapper, CloseIcon} from './styled'

const Card = ({children, css, className, isCloseable, handleClose, uniqueId, ...props}) => {
  return (
    <Wrapper css={css} className={className} {...props}>
      {isCloseable && (
        <CloseIcon
          onClick={() =>
            isCloseable && uniqueId && handleClose && handleClose(uniqueId)
          }
        >
          <Icon icon={faTimesCircle} />
        </CloseIcon>
      )}
      {children}
    </Wrapper>
  )
}

Card.displayName = 'Card'

Card.Header = Header
Card.Content = Content
Card.Footer = Footer

Card.propTypes = {
  children   : PropTypes.node.isRequired,
  className  : PropTypes.string,
  css        : PropTypes.string,
  handleClose: props => {
    if (props.isCloseable) {
      return new Error('Please provide a handleClose function')
    }
  },
  isCloseable: PropTypes.bool,
  // eslint-disable-next-line react/require-default-props
  uniqueId   : props => {
    if (props.handleClose && props.isCloseable) {
      return new Error('props uniqueId is required')
    }
  },
}

Card.defaultProps = {
  css        : '',
  handleClose: () => {},
  className  : 'card-container',
  isCloseable: false,
}

export default Card
