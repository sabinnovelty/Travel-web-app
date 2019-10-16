import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import theme from '../../constants/theme'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { Backdrop, ModalBox, Wrapper, CloseIcon } from './styled'

const el = document.createElement('div')
const modal = document.getElementById('modal')

const Modal = ({ open, onClose, children, position, wrapperStyle, ...props }) => {
  const closeModal = e => {
    e.stopPropagation()
    return onClose && onClose()
  }

  useEffect(() => {
    const onKeyUp = e => {
      if (e.which === 27 && open) {
        e.stopPropagation()
        return onClose && onClose()
      }
    }
    document.addEventListener('keyup', onKeyUp, false)
    modal.appendChild(el)
    return () => {
      document.removeEventListener('keyup', onKeyUp, false)
      modal.removeChild(el)
    }
  }, [open, onClose])

  if (!open) {
    return null
  }
  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={e => closeModal(e)}>
        <ModalBox onClick={e => e.stopPropagation()} style={wrapperStyle}>
          <Wrapper position={position} {...props}>
            {children}
            <CloseIcon icon={faTimes} onClick={closeModal} size="lg" color={theme.color.primary} />
          </Wrapper>
        </ModalBox>
      </Backdrop>
    </>,
    el,
  )
}

Modal.propTypes = {
  children    : PropTypes.node.isRequired,
  onClose     : PropTypes.func.isRequired,
  open        : PropTypes.bool.isRequired,
  position    : PropTypes.oneOf(['top', 'center', 'bottom']),
  wrapperStyle: PropTypes.object
}

Modal.defaultProps = {
  position: 'center',
}

Modal.Header = Header
Modal.Content = Content
Modal.Footer = Footer

export default Modal
