import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Modal from '../../commons/Modal'
import Button from '../../commons/Buttons/NormalButton'

import theme from '../../constants/theme'

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
  `,
  StyledButton = styled(Button)`
    margin: 0 0 0 20px;
  `,
  Text = styled.div`
    font-size: 20px;
    font-weight: 500;
    color: ${theme.color.primary};
  `
const ModalBox = ({ open, onClose, headerText, children, success, reject, wrapperStyle }) => {
  return (
    <Modal open={open} onClose={onClose} wrapperStyle={wrapperStyle}>
      <Modal.Header>
        <Text>{headerText}</Text>
      </Modal.Header>
      <Modal.Content>{children}</Modal.Content>
      <Modal.Footer>
        <ButtonWrapper>
          {success && (
            <StyledButton
              onClick={success.onClick}
              disabled={success.disabled}
            >
              {success.text}
            </StyledButton>
          )}
          {reject && (
            <StyledButton plain onClick={reject.onClick}>
              {reject.text}
            </StyledButton>
          )}
        </ButtonWrapper>
      </Modal.Footer>
    </Modal>
  )
}

ModalBox.propTypes = {
  children    : PropTypes.node.isRequired,
  headerText  : PropTypes.string.isRequired,
  onClose     : PropTypes.func.isRequired,
  open        : PropTypes.bool,
  reject      : PropTypes.object.isRequired,
  success     : PropTypes.object.isRequired,
  wrapperStyle: PropTypes.object
}

export default ModalBox
